import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { DownloadCloud, Trash2 } from 'lucide-react';
import UploadZone from '../components/UploadZone';
import ImageCard, { type ImageItem, type ProcessingStatus } from '../components/ImageCard';
import { trackEvent } from '../utils/analytics';

const Home = () => {
  const [images, setImages] = useState<ImageItem[]>([]);

  const handleFilesSelected = (files: File[]) => {
    trackEvent('upload_started', { file_count: files.length });
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
    trackEvent('image_uploaded');
    updateImageStatus(id, 'Uploading');
    
    try {
      const formData = new FormData();
      formData.append('image', file);

      updateImageStatus(id, 'Processing');
      trackEvent('background_removal_started');
      
      const response = await fetch('https://image-back-remover-api.myliferollercoaster2712.workers.dev/api/remove-background', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(await response.text() || 'Failed to process image');
      }

      const blob = await response.blob();
      const processedUrl = URL.createObjectURL(blob);

      trackEvent('background_removal_success');

      setImages(prev => prev.map(img => 
        img.id === id ? { ...img, status: 'Completed', processedUrl } : img
      ));
    } catch (error: any) {
      trackEvent('background_removal_failed', { error_message: error.message });
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
    trackEvent('image_download');
    saveAs(url, filename);
  };

  const downloadAllZip = async () => {
    const completedImages = images.filter(img => img.status === 'Completed' && img.processedUrl);
    if (completedImages.length === 0) return;

    trackEvent('zip_download', { file_count: completedImages.length });

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
          100% Free AI Tool
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
          Free Background Remover Online
        </h1>
        <p className="text-lg text-brand-muted">
          Remove backgrounds from images online for free. Upload up to 5 images, automatically remove the background, preview transparent results, and download PNG files or ZIP.
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

      {/* SEO Content Section */}
      <div className="max-w-4xl mx-auto mt-24 prose prose-brand prose-lg">
        <h2 className="text-3xl font-bold text-brand-dark text-center mb-8">What Is a Background Remover?</h2>
        <p className="text-brand-muted">
          A background remover is an essential tool for creating professional, clean visuals. Whether you're a designer, marketer, or a casual user, our <strong>free background remover online</strong> uses cutting-edge AI to isolate the main subject of your photo and erase everything else. It converts standard JPEGs and PNGs into a <strong>transparent background maker</strong> format instantly, ensuring you get a perfect transparent PNG ready for any project.
        </p>

        <h3 className="text-2xl font-semibold text-brand-dark mt-8 mb-4">How to Remove a Background</h3>
        <p className="text-brand-muted">
          Learning how to remove an image background shouldn't require complex software. Our AI background remover does the heavy lifting for you. Simply drag and drop your photos into the upload zone above. Within seconds, the AI analyzes the pixels, detects the foreground, and outputs a transparent image. You can process up to 5 images simultaneously, making it an excellent batch photo background remover. Need more details? Check out our <a href="/how-it-works" className="text-brand-purple hover:underline">How It Works</a> guide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h4 className="text-xl font-semibold text-brand-dark mb-3">Supported Formats & Limits</h4>
            <ul className="list-disc pl-5 text-brand-muted space-y-2">
              <li>Upload JPG, JPEG, PNG, or WebP images</li>
              <li>Maximum file size: 10MB per image</li>
              <li>Upload up to 5 images at a time</li>
              <li>Instantly download transparent PNG files</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-brand-dark mb-3">Privacy & Security</h4>
            <ul className="list-disc pl-5 text-brand-muted space-y-2">
              <li>Images are processed over a secure HTTPS connection</li>
              <li>We do not permanently store your uploads</li>
              <li>No account or registration required</li>
              <li>Learn more in our <a href="/privacy-policy" className="text-brand-purple hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 bg-brand-purple/5 rounded-2xl border border-brand-purple/10">
          <h3 className="text-xl font-bold text-brand-dark mb-4 text-center">Who Is This Tool For?</h3>
          <p className="text-brand-muted text-center mb-6">
            Our tool is universally designed for e-commerce sellers isolating products, content creators making YouTube thumbnails, real estate agents editing property photos, and everyday users making memes or stickers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <a href="/faq" className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow text-brand-purple transition-all">Read the FAQ</a>
            <a href="/about" className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow text-brand-purple transition-all">About Us</a>
            <a href="/contact" className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow text-brand-purple transition-all">Contact Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
