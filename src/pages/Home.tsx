import React, { useState } from 'react';
import JSZip from 'jszip';
import fileSaver from 'file-saver';
const saveAs = (fileSaver as any).saveAs || fileSaver;
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

      {/* SEO & Publisher Content Section */}
      <div className="max-w-4xl mx-auto mt-24 prose prose-brand prose-lg">
        {/* Core Value Statement */}
        <div className="text-center mb-12 not-prose">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-purple bg-brand-purple/10 px-3 py-1 rounded-full">
            Free Online Image Utility &amp; Publisher Guide
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mt-3 mb-4">
            How Our AI Background Remover Works
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-base">
            Isolating a subject from its background used to require expensive desktop software, professional graphic design skills, and tedious manual pen-tool tracing. Today, our free neural-network powered tool automates the entire process in under 5 seconds.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-12">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-purple flex items-center justify-center font-bold mb-4">
              01
            </div>
            <h3 className="font-bold text-lg text-brand-dark mb-2">Automated Subject Detection</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Our vision transformers analyze semantic contours, distinguishing foreground people, products, vehicles, and pets from complex background scenes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-pink-100 text-brand-magenta flex items-center justify-center font-bold mb-4">
              02
            </div>
            <h3 className="font-bold text-lg text-brand-dark mb-2">Sub-Pixel Hair Matting</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Fine edge details like loose hair strands, pet fur, and transparent glass are preserved with gentle alpha transitions, preventing harsh blocky cutouts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-4">
              03
            </div>
            <h3 className="font-bold text-lg text-brand-dark mb-2">High-Res PNG Export</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Export lossless 24-bit transparent PNG files or batch download multiple results in a clean ZIP file ready for e-commerce or graphic design.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-brand-dark mt-12 mb-4">
          AI Background Removal vs. Manual Photoshop Editing
        </h3>
        <p className="text-brand-muted">
          Compare the efficiency of our free automated AI tool against conventional manual photo editing methods:
        </p>

        {/* Comparison Table */}
        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-brand-dark font-semibold">
                <th className="p-3 border border-gray-200">Feature</th>
                <th className="p-3 border border-gray-200 text-brand-purple font-bold">Image Back Remover (AI)</th>
                <th className="p-3 border border-gray-200">Manual Photoshop Pen Tool</th>
                <th className="p-3 border border-gray-200">Magic Wand / Quick Selection</th>
              </tr>
            </thead>
            <tbody className="text-brand-muted divide-y divide-gray-200">
              <tr>
                <td className="p-3 border border-gray-200 font-medium text-brand-dark">Time per Image</td>
                <td className="p-3 border border-gray-200 text-green-600 font-bold">3 - 5 seconds</td>
                <td className="p-3 border border-gray-200">10 - 25 minutes</td>
                <td className="p-3 border border-gray-200">2 - 5 minutes</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-medium text-brand-dark">Skill Level Required</td>
                <td className="p-3 border border-gray-200 text-green-600 font-bold">None (Drag &amp; drop)</td>
                <td className="p-3 border border-gray-200">Advanced designer</td>
                <td className="p-3 border border-gray-200">Intermediate</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-medium text-brand-dark">Hair &amp; Fur Precision</td>
                <td className="p-3 border border-gray-200 text-green-600 font-bold">High (Alpha Matting)</td>
                <td className="p-3 border border-gray-200">High (Requires Refine Edge)</td>
                <td className="p-3 border border-gray-200 text-red-500">Poor (Jagged / Clipped)</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-medium text-brand-dark">Batch Processing</td>
                <td className="p-3 border border-gray-200 text-green-600 font-bold">Yes (Up to 5 images)</td>
                <td className="p-3 border border-gray-200">No (One by one)</td>
                <td className="p-3 border border-gray-200">No</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-medium text-brand-dark">Cost</td>
                <td className="p-3 border border-gray-200 text-green-600 font-bold">100% Free Online</td>
                <td className="p-3 border border-gray-200">$20 - $55 / month subscription</td>
                <td className="p-3 border border-gray-200">Paid software required</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Dedicated Use-Cases Section */}
        <h3 className="text-2xl font-bold text-brand-dark mt-12 mb-4">
          Popular Use Cases for Transparent Backgrounds
        </h3>
        <p className="text-brand-muted">
          Our free transparent cutout maker serves a diverse community of online professionals:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-brand-dark text-lg mb-2">E-Commerce Product Listings</h4>
            <p className="text-xs text-brand-muted mb-4 leading-relaxed">
              Standardize your catalog on Amazon, Shopify, Etsy, and eBay. Remove distracting showroom floors, shadows, and packaging to boost sales conversion rates.
            </p>
            <a href="/ecommerce-product-photos" className="text-xs font-bold text-brand-purple hover:underline">
              Explore E-Commerce Solutions &rarr;
            </a>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-brand-dark text-lg mb-2">Transparent Signatures for PDFs</h4>
            <p className="text-xs text-brand-muted mb-4 leading-relaxed">
              Convert handwritten paper signatures into clean PNG stamps without gray scanner boxes for legally binding contracts, Word documents, and digital invoices.
            </p>
            <a href="/transparent-signature-maker" className="text-xs font-bold text-brand-purple hover:underline">
              Explore Signature Maker &rarr;
            </a>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-brand-dark text-lg mb-2">Corporate Headshots &amp; LinkedIn</h4>
            <p className="text-xs text-brand-muted mb-4 leading-relaxed">
              Erase messy home or office backgrounds from casual smartphone portraits and place yourself on clean executive studio gradients.
            </p>
            <a href="/portrait-headshot-remover" className="text-xs font-bold text-brand-purple hover:underline">
              Explore Portrait Eraser &rarr;
            </a>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-brand-dark text-lg mb-2">Content Creators &amp; YouTube</h4>
            <p className="text-xs text-brand-muted mb-4 leading-relaxed">
              Extract portraits and props to craft high-CTR YouTube thumbnails, Instagram graphics, TikTok overlays, and custom sticker packs.
            </p>
            <a href="/blog/top-5-uses" className="text-xs font-bold text-brand-purple hover:underline">
              Explore Creator Guides &rarr;
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h4 className="text-xl font-semibold text-brand-dark mb-3">Supported Formats &amp; Limits</h4>
            <ul className="list-disc pl-5 text-brand-muted space-y-2 text-sm">
              <li>Upload JPG, JPEG, PNG, or WebP images</li>
              <li>Maximum file size: 10MB per image</li>
              <li>Upload up to 5 images simultaneously in batch mode</li>
              <li>Instantly download transparent PNG files or bulk ZIP</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-brand-dark mb-3">Privacy &amp; Security Standards</h4>
            <ul className="list-disc pl-5 text-brand-muted space-y-2 text-sm">
              <li>All transfers are secured with TLS 256-bit encryption</li>
              <li>Uploaded images are automatically purged after processing</li>
              <li>Zero permanent server storage or model training on user files</li>
              <li>Read our comprehensive <a href="/privacy-policy" className="text-brand-purple hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Embedded FAQ Section */}
        <h3 className="text-2xl font-semibold text-brand-dark mt-16 mb-6 text-center">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4 not-prose">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-brand-dark text-sm mb-1">Is Image Back Remover really free?</h4>
            <p className="text-xs text-brand-muted leading-relaxed">
              Yes, our online background remover is 100% free with no hidden paywalls, subscriptions, or credit card requirements. We support our infrastructure through non-intrusive advertisements.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-brand-dark text-sm mb-1">What happens to my uploaded images?</h4>
            <p className="text-xs text-brand-muted leading-relaxed">
              Your images are processed securely via encrypted HTTPS channels and are automatically deleted from server memory immediately after processing. We never store or resell user images.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-brand-dark text-sm mb-1">How can I download all processed images at once?</h4>
            <p className="text-xs text-brand-muted leading-relaxed">
              Once your uploaded images finish processing, simply click the "Download All as ZIP" button in the Processing Workspace to download every transparent PNG in a single archive.
            </p>
          </div>
        </div>

        {/* Navigation Portal */}
        <div className="mt-16 p-8 bg-brand-purple/5 rounded-2xl border border-brand-purple/10 text-center not-prose">
          <h3 className="text-xl font-bold text-brand-dark mb-2">Explore Our Guides and Documentation</h3>
          <p className="text-brand-muted text-sm mb-6 max-w-lg mx-auto">
            Learn more about machine learning segmentation, photography tips, and commercial e-commerce standards in our resource center.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold">
            <a href="/how-it-works" className="px-4 py-2.5 bg-white rounded-lg shadow-sm hover:shadow text-brand-purple transition-all border border-gray-100">How It Works</a>
            <a href="/blog" className="px-4 py-2.5 bg-white rounded-lg shadow-sm hover:shadow text-brand-purple transition-all border border-gray-100">Read the Blog</a>
            <a href="/faq" className="px-4 py-2.5 bg-white rounded-lg shadow-sm hover:shadow text-brand-purple transition-all border border-gray-100">Full FAQ</a>
            <a href="/about" className="px-4 py-2.5 bg-white rounded-lg shadow-sm hover:shadow text-brand-purple transition-all border border-gray-100">About Our Team</a>
            <a href="/contact" className="px-4 py-2.5 bg-white rounded-lg shadow-sm hover:shadow text-brand-purple transition-all border border-gray-100">Contact Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
