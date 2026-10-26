import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Check, Sparkles, HelpCircle } from 'lucide-react';

const EcommerceTool = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-flex items-center space-x-1.5 py-1 px-3 rounded-full bg-green-100 text-green-800 font-semibold text-xs mb-3">
          <ShoppingCart size={14} />
          <span>E-Commerce Optimized AI</span>
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">
          E-Commerce Product Background Remover
        </h1>
        <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
          Create 100% compliant, pure white or transparent product cutouts for Amazon, eBay, Shopify, Etsy, and Google Shopping. Batch process up to 5 product photos at once for free.
        </p>
      </div>

      {/* Main Upload Box on this page links to Home or uploads */}
      <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100 mb-16 text-center">
        <h2 className="text-2xl font-bold text-brand-dark mb-2">Process Your Product Photos</h2>
        <p className="text-sm text-brand-muted mb-8 max-w-xl mx-auto">
          Drop your product photos below. Our AI isolates items—shoes, jewelry, apparel, electronics, and cosmetics—and strips away the background with sub-pixel precision.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-8 py-4 bg-brand-purple text-white text-base font-bold rounded-xl hover:bg-brand-magenta transition-all shadow-lg hover:shadow-xl"
        >
          <Sparkles size={20} className="mr-2" />
          <span>Open Batch Background Remover</span>
        </Link>
      </div>

      {/* Marketplace Standards Grid */}
      <div className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark text-center mb-8">
          Compliant with All Major Marketplace Image Standards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-xl text-brand-dark mb-2">Amazon Main Images</h3>
            <ul className="text-sm text-brand-muted space-y-2">
              <li className="flex items-start"><Check size={16} className="text-green-500 mr-2 shrink-0 mt-0.5" /> Pure white background (RGB 255, 255, 255)</li>
              <li className="flex items-start"><Check size={16} className="text-green-500 mr-2 shrink-0 mt-0.5" /> Product fills 85% or more of image area</li>
              <li className="flex items-start"><Check size={16} className="text-green-500 mr-2 shrink-0 mt-0.5" /> Zero distracting accessories or props</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-xl text-brand-dark mb-2">Shopify &amp; WooCommerce</h3>
            <ul className="text-sm text-brand-muted space-y-2">
              <li className="flex items-start"><Check size={16} className="text-green-500 mr-2 shrink-0 mt-0.5" /> Transparent PNGs for flexible theme colors</li>
              <li className="flex items-start"><Check size={16} className="text-green-500 mr-2 shrink-0 mt-0.5" /> Consistent aspect ratios across collections</li>
              <li className="flex items-start"><Check size={16} className="text-green-500 mr-2 shrink-0 mt-0.5" /> Lightweight files optimized for fast mobile load</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-xl text-brand-dark mb-2">Google Shopping &amp; Ads</h3>
            <ul className="text-sm text-brand-muted space-y-2">
              <li className="flex items-start"><Check size={16} className="text-green-500 mr-2 shrink-0 mt-0.5" /> No promotional text or promotional watermarks</li>
              <li className="flex items-start"><Check size={16} className="text-green-500 mr-2 shrink-0 mt-0.5" /> Clean solid background for feed approval</li>
              <li className="flex items-start"><Check size={16} className="text-green-500 mr-2 shrink-0 mt-0.5" /> High-resolution output prevents ad disapprovals</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Editorial Content Section */}
      <div className="bg-white p-8 sm:p-12 rounded-2xl border border-gray-100 shadow-sm prose prose-brand max-w-none mb-16">
        <h2 className="text-2xl font-bold text-brand-dark mb-4">
          Why Background Removal Increases E-Commerce Sales Conversion Rates
        </h2>
        <p className="text-brand-muted">
          In online shopping, consumers cannot touch, smell, or hold your merchandise. Their entire purchase decision hinges on visual trust. Multiple retail psychology studies demonstrate that removing cluttered backdrops produces significant commercial advantages:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose my-6">
          <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-100">
            <h4 className="font-bold text-brand-purple text-lg mb-1">Up to 30% Higher Conversions</h4>
            <p className="text-xs text-brand-dark leading-relaxed">
              When shoppers are not distracted by room backgrounds, shadows, or odd lighting, they inspect product details faster, leading to higher cart completions.
            </p>
          </div>
          <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-100">
            <h4 className="font-bold text-brand-purple text-lg mb-1">Lower Product Return Rates</h4>
            <p className="text-xs text-brand-dark leading-relaxed">
              Accurate color isolation and high-fidelity cutout contours give customers an authentic representation of dimensions, finishes, and textures.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-brand-dark mt-6 mb-3">
          Step-by-Step E-Commerce Workflow
        </h3>
        <ol className="text-brand-muted space-y-2">
          <li><strong>Shoot with good lighting:</strong> Take your product photo with clean diffuse light against any light-colored wall or poster board.</li>
          <li><strong>Upload in batch:</strong> Select up to 5 photos simultaneously in Image Back Remover.</li>
          <li><strong>Instant AI cutout:</strong> Our deep learning algorithms isolate the product silhouette and discard the background.</li>
          <li><strong>Batch ZIP download:</strong> Download all processed PNGs in a single archive with one click.</li>
        </ol>
      </div>

      {/* FAQ on Ecommerce */}
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200/80 mb-12">
        <h3 className="text-xl font-bold text-brand-dark mb-6 flex items-center">
          <HelpCircle size={20} className="text-brand-purple mr-2" /> E-Commerce Background FAQs
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-brand-dark text-sm mb-1">Does Amazon allow transparent PNG images?</h4>
            <p className="text-xs text-brand-muted">
              Amazon's main listing image must have a pure white background (hex #FFFFFF). However, secondary listing images, brand storefronts, and A+ content modules fully support transparent PNGs.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-brand-dark text-sm mb-1">What image formats are supported?</h4>
            <p className="text-xs text-brand-muted">
              You can upload JPG, JPEG, PNG, and WebP images up to 10MB per file.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-brand-dark text-sm mb-1">Will my product images be stored or made public?</h4>
            <p className="text-xs text-brand-muted">
              No. We strictly adhere to privacy standards. All uploads are processed over HTTPS and discarded immediately after processing. We never store, resell, or train AI on your commercial merchandise photos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceTool;
