import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Award, AlertTriangle } from 'lucide-react';

const Article8 = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <nav className="flex items-center space-x-2 text-sm text-brand-muted mb-6">
        <Link to="/" className="hover:text-brand-purple">Home</Link>
        <span>/</span>
        <Link to="/blog" className="hover:text-brand-purple">Blog</Link>
        <span>/</span>
        <span className="text-brand-dark font-medium truncate">Print-on-Demand Guide</span>
      </nav>

      <article className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100 prose prose-brand max-w-none">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4 leading-tight">
          Complete Guide to Background Removal for Print-on-Demand (Etsy, Redbubble, Shopify)
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500 pb-6 mb-8 border-b border-gray-100 not-prose">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold">
              AR
            </div>
            <span>By <strong>Alex Rivera</strong> (Digital Imaging Specialist)</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center space-x-1">
            <Clock size={15} />
            <span>8 min read</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center space-x-1 text-green-600">
            <Award size={15} />
            <span>E-Commerce Seller Blueprint</span>
          </div>
        </div>

        <p className="lead text-lg text-brand-muted mb-8">
          In the Print-on-Demand (POD) industry, a single semi-transparent or stray white pixel can ruin an entire production run of black t-shirts, hoodies, or mugs. Here is how POD merchants on Printify, Printful, Etsy, and Amazon Merch on Demand eliminate background halos and prepare print-ready transparent artwork.
        </p>

        <div className="not-prose my-8 p-6 bg-red-50/70 rounded-xl border border-red-200/60">
          <h3 className="text-base font-bold text-red-900 mb-2 flex items-center">
            <AlertTriangle size={18} className="text-red-600 mr-2" /> Why Direct-to-Garment (DTG) Printing Hates Stray White Pixels
          </h3>
          <p className="text-sm text-red-800 leading-relaxed">
            DTG printers print an opaque white underbase layer beneath all artwork colors when printing on dark garments. If your design has an off-white background with a 1% opacity level, human eyes might not see it on screen, but the printer driver interprets it as solid ink, printing a dull rectangular haze around your graphic. Pure alpha transparency is non-negotiable.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Key Requirements for Print-on-Demand Artwork
        </h2>
        <p className="text-brand-muted">
          Major print fulfillment providers enforce strict file guidelines to ensure crisp, vibrant merchandise:
        </p>
        <ul className="text-brand-muted space-y-2">
          <li><strong>Resolution:</strong> 300 DPI (Dots Per Inch) at physical print dimensions (e.g., 4500x5400 pixels for standard t-shirt prints).</li>
          <li><strong>Color Space:</strong> sRGB IEC61966-2.1 or CMYK depending on your print provider's specific color profile documentation.</li>
          <li><strong>Alpha Channel:</strong> 100% clean transparency outside design boundaries with zero semi-opaque stray pixels.</li>
          <li><strong>Format:</strong> High-resolution 24-bit PNG with RGB color and alpha channel.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          How to Use Image Back Remover for Merchandise Graphics
        </h2>
        <p className="text-brand-muted">
          Whether you are vectorizing a scanned watercolor drawing, isolating an AI-generated character illustration, or creating typography stickers, follow this quality-controlled workflow:
        </p>

        <ol className="text-brand-muted space-y-3">
          <li>
            <strong>Generate or Scan Your Artwork:</strong> Ensure the artwork has maximum contrast against its original paper or digital canvas.
          </li>
          <li>
            <strong>Upload to Image Back Remover:</strong> Drop your artwork file into our batch processor. Our AI model recognizes foreground subjects and completely purges all surrounding background pixels down to 0% alpha.
          </li>
          <li>
            <strong>Verify on Checkerboard &amp; Dark Backgrounds:</strong> Preview the output on our checkerboard viewer to inspect delicate borders, text loops, and inner negative spaces.
          </li>
          <li>
            <strong>Export as PNG:</strong> Download the transparent PNG and import it into your POD mockup generator on Printful, Printify, or Gelato.
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Best Practices for Stickers, Mugs, and Apparel
        </h2>
        <div className="not-prose my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h4 className="font-bold text-brand-dark text-base mb-1">Vinyl Die-Cut Stickers</h4>
            <p className="text-xs text-brand-muted">
              After removing the background, add a 2-4mm solid white stroke (bleed line) around your subject to create the classic die-cut sticker look customers love on Etsy.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h4 className="font-bold text-brand-dark text-base mb-1">Ceramic Mugs</h4>
            <p className="text-xs text-brand-muted">
              A transparent PNG prevents visible rectangular boundary seams from wrapping around the cylinder of white or colored mugs during sublimation heat pressing.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h4 className="font-bold text-brand-dark text-base mb-1">Hoodies &amp; T-Shirts</h4>
            <p className="text-xs text-brand-muted">
              Transparent backgrounds allow the garment fabric color to show through naturally, improving breathability and reducing the heavy plastic feel of large prints.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Why Sellers Choose Image Back Remover
        </h2>
        <p className="text-brand-muted">
          Busy e-commerce entrepreneurs cannot afford to spend 20 minutes manually cutting out each graphic in Photoshop. <strong>Image Back Remover</strong> delivers studio-level edge isolation in under 5 seconds per image, allowing you to scale your product catalog 10x faster.
        </p>

        <div className="not-prose mt-10 p-8 bg-brand-purple/5 rounded-2xl border border-brand-purple/10 text-center">
          <h3 className="text-2xl font-bold text-brand-dark mb-2">Prepare Your Print-on-Demand Art</h3>
          <p className="text-brand-muted max-w-xl mx-auto mb-6 text-sm">
            Batch process up to 5 designs at once. 100% free with instant high-resolution PNG export.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-brand-purple text-white font-semibold rounded-xl hover:bg-brand-magenta transition-all shadow-md"
          >
            Upload Artwork Free
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Article8;
