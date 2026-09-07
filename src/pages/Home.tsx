import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { DownloadCloud, Trash2 } from 'lucide-react';
import UploadZone from '../components/UploadZone';
import ImageCard, { type ImageItem, type ProcessingStatus } from '../components/ImageCard';

const Home = () => {
  const [images, setImages] = useState<ImageItem[]>([]);

  const handleFilesSelected = (files: File[]) => {
    const newImages: ImageItem[] = files.map(file => ({
      id: Math.random().toString(36).substring(7),
      file,
      originalUrl: URL.createObjectURL(file),
      status: 'Waiting'
    }));

    setImages(prev => [...prev, ...newImages]);
    
    // Auto-start processing for new images
    newImages.forEach(img => processImage(img.id, img.file));
  };

  const processImage = async (id: string, file: File) => {
    updateImageStatus(id, 'Uploading');
    
    try {
      const formData = new FormData();
      formData.append('image', file);

      updateImageStatus(id, 'Processing');
      
      const response = await fetch('/api/remove-background', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(await response.text() || 'Failed to process image');
      }

      const blob = await response.blob();
      const processedUrl = URL.createObjectURL(blob);

      setImages(prev => prev.map(img => 
        img.id === id ? { ...img, status: 'Completed', processedUrl } : img
      ));
    } catch (error: any) {
      setImages(prev => prev.map(img => 
        img.id === id ? { ...img, status: 'Failed', error: error.message } : img
      ));
    }
  };

  const updateImageStatus = (id: string, status: ProcessingStatus) => {
    setImages(prev => prev.map(img => img.id === id ? { ...img, status } : img));
  };

  const removeImage = (id: string) => {
    setImages(prev => {
      const img = prev.find(i => i.id === id);
      if (img?.originalUrl) URL.revokeObjectURL(img.originalUrl);
      if (img?.processedUrl) URL.revokeObjectURL(img.processedUrl);
      return prev.filter(i => i.id !== id);
    });
  };

  const clearAll = () => {
    images.forEach(img => {
      URL.revokeObjectURL(img.originalUrl);
      if (img.processedUrl) URL.revokeObjectURL(img.processedUrl);
    });
    setImages([]);
  };

  const downloadImage = (url: string, filename: string) => {
    saveAs(url, filename);
  };

  const downloadAllZip = async () => {
    const completedImages = images.filter(img => img.status === 'Completed' && img.processedUrl);
    if (completedImages.length === 0) return;

    const zip = new JSZip();
    
    const fetchPromises = completedImages.map(async (img) => {
      const response = await fetch(img.processedUrl!);
      const blob = await response.blob();
      zip.file(`nobg-${img.file.name}`, blob);
    });

    await Promise.all(fetchPromises);
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, 'image-back-remover-results.zip');
  };

  const completedCount = images.filter(img => img.status === 'Completed').length;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block py-1 px-3 rounded-full bg-brand-yellow/20 text-brand-purple font-semibold text-sm mb-4">
          AI-Powered Image Background Remover
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
          Remove Image Backgrounds <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-magenta">In One Click</span>
        </h1>
        <p className="text-lg text-brand-muted">
          Remove backgrounds from your images quickly and easily with AI. Upload your image, let our AI process it, and download a clean transparent PNG.
        </p>
      </div>

      {/* Upload Zone */}
      <UploadZone onFilesSelected={handleFilesSelected} maxFiles={5} maxSizeMB={10} />

      {/* Processing Workspace */}
      {images.length > 0 && (
        <div className="max-w-3xl mx-auto mt-12 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
            <h3 className="text-lg font-bold">Processing Workspace</h3>
            <span className="text-sm text-brand-muted font-medium">
              {completedCount} / {images.length} completed
            </span>
          </div>

          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {images.map(img => (
              <ImageCard 
                key={img.id} 
                item={img} 
                onRemove={removeImage} 
                onRetry={(id) => {
                  const img = images.find(i => i.id === id);
                  if (img) processImage(id, img.file);
                }}
                onDownload={downloadImage}
              />
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <button 
              onClick={clearAll}
              className="text-gray-500 hover:text-red-500 transition-colors flex items-center font-medium text-sm px-4 py-2"
            >
              <Trash2 size={16} className="mr-2" /> Clear All
            </button>
            
            <button 
              onClick={downloadAllZip}
              disabled={completedCount === 0}
              className={`px-6 py-2 rounded-lg flex items-center font-medium transition-all ${
                completedCount > 0 
                  ? 'bg-brand-dark text-white hover:bg-brand-dark/90 shadow-md' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <DownloadCloud size={18} className="mr-2" /> Download All as ZIP
            </button>
          </div>
        </div>
      )}

      {/* SEO Content Placeholder */}
      <div className="max-w-4xl mx-auto mt-24 prose prose-brand">
        <h2 className="text-3xl font-bold text-center mb-8">What Is an Image Background Remover?</h2>
        <p className="text-center text-brand-muted mb-12">
          Image Back Remover uses advanced AI algorithms to automatically detect the main subject of your image and remove the background, leaving you with a clean, transparent PNG perfect for e-commerce, presentations, and graphic design.
        </p>
      </div>
    </div>
  );
};

export default Home;
