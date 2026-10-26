import React from 'react';
import { Link } from 'react-router-dom';
import { FileCode, CheckCircle2, Clock, Award } from 'lucide-react';

const Article6 = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <nav className="flex items-center space-x-2 text-sm text-brand-muted mb-6">
        <Link to="/" className="hover:text-brand-purple">Home</Link>
        <span>/</span>
        <Link to="/blog" className="hover:text-brand-purple">Blog</Link>
        <span>/</span>
        <span className="text-brand-dark font-medium truncate">PNG vs WebP vs JPG</span>
      </nav>

      <article className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100 prose prose-brand max-w-none">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4 leading-tight">
          PNG vs WebP vs JPG: Which Format Should You Use for Transparent Images?
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
            <span>7 min read</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center space-x-1 text-green-600">
            <Award size={15} />
            <span>Technical Deep Dive</span>
          </div>
        </div>

        <p className="lead text-lg text-brand-muted mb-8">
          When downloading an image after removing its background, selecting the right file format is crucial for image sharpness, website loading speed, and compatibility. Here is an in-depth breakdown of PNG, WebP, and JPG formats to help you choose the ideal format for your specific workflow.
        </p>

        <div className="not-prose my-8 p-6 bg-blue-50/70 rounded-xl border border-blue-200/60">
          <h3 className="text-base font-bold text-brand-dark mb-2 flex items-center">
            <FileCode size={18} className="text-brand-purple mr-2" /> Quick Format Decision Matrix
          </h3>
          <ul className="text-sm text-brand-dark space-y-1.5 list-disc pl-5">
            <li><strong>Use PNG (PNG-24):</strong> When maximum visual quality, lossless fidelity, or printing on physical merchandise is required. Universally supported by every desktop app.</li>
            <li><strong>Use WebP:</strong> When deploying images on an e-commerce website, blog, or mobile app where page speed (Core Web Vitals) directly impacts SEO and conversion rates.</li>
            <li><strong>Avoid JPG for Cutouts:</strong> JPG does NOT support alpha transparency under any circumstances. Saving a transparent cutout as JPG replaces transparent pixels with solid white or black.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          What Is an Alpha Channel and Why Does It Matter?
        </h2>
        <p className="text-brand-muted">
          Standard digital photographs contain three color channels: Red, Green, and Blue (RGB), which combine to generate millions of colors. 
        </p>
        <p className="text-brand-muted">
          To achieve transparency, an image format must support a fourth channel known as the <strong>Alpha channel</strong> (RGBA). The alpha channel stores opacity information for every individual pixel on a scale from 0 (completely invisible/transparent) to 255 (completely opaque). Formats lacking an alpha channel simply cannot represent transparency.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          1. Portable Network Graphics (PNG)
        </h2>
        <p className="text-brand-muted">
          Created in 1996 as an open replacement for GIF, PNG is the gold standard for graphic design transparency.
        </p>
        <ul className="text-brand-muted space-y-2">
          <li><strong>Pros:</strong> Lossless compression means no image degradation or compression artifacts. Perfect 8-bit alpha channel transparency allows smooth anti-aliased transitions (such as semi-transparent hair or smoke). Compatible with 100% of image viewers, word processors, and design suites.</li>
          <li><strong>Cons:</strong> Larger file sizes compared to modern web formats, which can slow down web page loading if unoptimized.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          2. WebP (Google Next-Gen Format)
        </h2>
        <p className="text-brand-muted">
          Developed by Google, WebP was created specifically for the modern web to provide smaller, richer images that make the web faster.
        </p>
        <ul className="text-brand-muted space-y-2">
          <li><strong>Pros:</strong> WebP supports both lossy and lossless compression with an alpha transparency channel. A transparent WebP file is typically <strong>25% to 35% smaller</strong> than an equivalent PNG file with virtually indistinguishable visual quality. Supported by all modern web browsers (Chrome, Safari, Firefox, Edge).</li>
          <li><strong>Cons:</strong> Some legacy desktop publishing software, older printers, or legacy Windows apps cannot open or preview WebP files natively without specialized plugins.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          3. Joint Photographic Experts Group (JPG / JPEG)
        </h2>
        <p className="text-brand-muted">
          JPG is the most widely recognized image format in the world, engineered for realistic photographs with smooth color gradations.
        </p>
        <ul className="text-brand-muted space-y-2">
          <li><strong>Critical limitation:</strong> The JPEG specification has <strong>zero support for transparency</strong>. If you run a background removal tool and force-save the result as a JPEG, the image encoder replaces all transparent pixels with a solid matte color (usually white or black).</li>
          <li><strong>When to use JPG:</strong> Only use JPG when the cutout subject has already been placed onto an intentional new background scene and you want the smallest possible file size for non-transparent photo sharing.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Side-by-Side Format Comparison
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-brand-dark font-semibold">
                <th className="p-3 border border-gray-200">Feature</th>
                <th className="p-3 border border-gray-200">PNG (PNG-24)</th>
                <th className="p-3 border border-gray-200">WebP</th>
                <th className="p-3 border border-gray-200">JPG</th>
              </tr>
            </thead>
            <tbody className="text-brand-muted divide-y divide-gray-200">
              <tr>
                <td className="p-3 border border-gray-200 font-medium text-brand-dark">Transparency Support</td>
                <td className="p-3 border border-gray-200 text-green-600 font-semibold">Yes (Full 8-bit Alpha)</td>
                <td className="p-3 border border-gray-200 text-green-600 font-semibold">Yes (Full 8-bit Alpha)</td>
                <td className="p-3 border border-gray-200 text-red-600 font-semibold">No (0% Alpha)</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-medium text-brand-dark">Compression Method</td>
                <td className="p-3 border border-gray-200">Lossless (DEFLATE)</td>
                <td className="p-3 border border-gray-200">Lossless or Lossy</td>
                <td className="p-3 border border-gray-200">Lossy (DCT)</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-medium text-brand-dark">Relative File Size</td>
                <td className="p-3 border border-gray-200">Standard (100%)</td>
                <td className="p-3 border border-gray-200 text-green-600 font-medium">Very Small (65-75%)</td>
                <td className="p-3 border border-gray-200">Smallest (No Alpha)</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-medium text-brand-dark">Browser Compatibility</td>
                <td className="p-3 border border-gray-200">100% Universal</td>
                <td className="p-3 border border-gray-200">97%+ Modern Browsers</td>
                <td className="p-3 border border-gray-200">100% Universal</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-medium text-brand-dark">Best Usage Scenario</td>
                <td className="p-3 border border-gray-200">Print, logos, signatures, editing</td>
                <td className="p-3 border border-gray-200">Online stores, web banners, SEO</td>
                <td className="p-3 border border-gray-200">Full scenery photos only</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Why Image Back Remover Outputs Pure PNG Files
        </h2>
        <p className="text-brand-muted">
          To ensure maximum versatility and zero quality loss for our users, <strong>Image Back Remover</strong> exports cutouts as high-quality transparent PNG files. This guarantees that your downloaded assets can be inserted into any application—from Adobe Photoshop and Illustrator to Canva, Microsoft PowerPoint, Figma, or your custom website builder—without compatibility errors.
        </p>

        <div className="not-prose mt-10 p-8 bg-brand-purple/5 rounded-2xl border border-brand-purple/10 text-center">
          <h3 className="text-2xl font-bold text-brand-dark mb-2">Download Pure Transparent PNGs Now</h3>
          <p className="text-brand-muted max-w-xl mx-auto mb-6 text-sm">
            Upload your JPG or PNG image and receive clean, lossless transparent cutouts ready for any project.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-brand-purple text-white font-semibold rounded-xl hover:bg-brand-magenta transition-all shadow-md"
          >
            Start Removing Backgrounds Free
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Article6;
