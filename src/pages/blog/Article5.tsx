import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, CheckCircle2, Clock, Award } from 'lucide-react';

const Article5 = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <nav className="flex items-center space-x-2 text-sm text-brand-muted mb-6">
        <Link to="/" className="hover:text-brand-purple">Home</Link>
        <span>/</span>
        <Link to="/blog" className="hover:text-brand-purple">Blog</Link>
        <span>/</span>
        <span className="text-brand-dark font-medium truncate">Product Photography Lighting</span>
      </nav>

      <article className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100 prose prose-brand max-w-none">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4 leading-tight">
          Product Photography Lighting 101: How to Avoid Harsh Shadows & Edge Bleed
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500 pb-6 mb-8 border-b border-gray-100 not-prose">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-brand-magenta/10 text-brand-magenta flex items-center justify-center font-bold">
              MK
            </div>
            <span>By <strong>Maya Kapoor</strong> (Commercial Product Photographer)</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center space-x-1">
            <Clock size={15} />
            <span>8 min read</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center space-x-1 text-green-600">
            <Award size={15} />
            <span>Practical Studio Tested</span>
          </div>
        </div>

        <p className="lead text-lg text-brand-muted mb-8">
          The secret to getting flawless, automated background removal with AI doesn’t start in software—it starts with lighting. In this studio guide, discover how simple lighting tweaks prevent jagged cutouts, color halos, and edge bleeding when preparing product shots for e-commerce.
        </p>

        <div className="not-prose my-8 p-6 bg-yellow-50/70 rounded-xl border border-yellow-200/60">
          <h3 className="text-base font-bold text-brand-dark mb-2 flex items-center">
            <Lightbulb size={18} className="text-brand-yellow mr-2" /> Essential Lighting Rules for AI Cutouts
          </h3>
          <ul className="text-sm text-brand-dark space-y-1.5 list-disc pl-5">
            <li><strong>Separate foreground from background:</strong> Place the product at least 2 to 3 feet in front of the backdrop to prevent cast shadows.</li>
            <li><strong>Diffuse your key light:</strong> Softboxes or sheer white curtains eliminate hard spectral highlights on product edges.</li>
            <li><strong>Avoid green or bright colored backdrop bleed:</strong> Neutral white or light gray backdrops prevent color spilling onto glossy surfaces.</li>
            <li><strong>Illuminate both sides evenly:</strong> Unbalanced shadows cause AI models to interpret dark object sides as part of the background.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Understanding Why AI Background Removers Struggle with Bad Lighting
        </h2>
        <p className="text-brand-muted">
          Modern AI background removers use deep convolutional neural networks and vision transformers (such as IS-Net, U-Net, or MODNet) trained to identify object boundaries via local contrast gradients, edge transitions, and semantic recognition.
        </p>
        <p className="text-brand-muted">
          When an object has dark, unlit shadows falling on one side, the pixel luminosity of the product edge matches the shadow on the floor or wall. As a result, the AI model cannot mathematically differentiate between where the product ends and where the shadow begins, leading to accidental cuts or fuzzy halos.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          The Two Common Lighting Mistakes
        </h2>

        <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-2">1. Direct On-Camera Flash</h3>
        <p className="text-brand-muted">
          Firing your smartphone flash directly at an item creates two major problems: harsh circular reflections on plastic, glass, or polished metal, and a deep, crisp black shadow directly behind the object. Always disable the on-camera flash and use continuous off-camera lighting instead.
        </p>

        <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-2">2. Color Temperature Mismatch (Color Spill)</h3>
        <p className="text-brand-muted">
          Many sellers attempt to use a bright green cloth (chroma key) assuming green screen methods work best. However, light reflecting off a green wall bounces back onto the edges of your product, creating a green color cast (known as "chroma spill"). When the AI removes the green background, a faint green fringe remains on the object's contours. For automated cutouts, a clean white, off-white, or neutral light-gray backdrop is vastly superior.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          A Budget-Friendly 3-Point Lighting Setup for Small Businesses
        </h2>
        <p className="text-brand-muted">
          You don't need a $2,000 studio strobe kit to shoot clean product images. You can assemble an effective lighting environment for under $40 using everyday household items:
        </p>

        <div className="not-prose my-6 space-y-4">
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h4 className="font-bold text-brand-dark text-base mb-1">Key Light (45-degree angle):</h4>
            <p className="text-sm text-brand-muted">
              Place your primary light source at roughly 45 degrees to the left or right of the camera. If using daylight, position your shooting table adjacent to a window with indirect morning or afternoon sun.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h4 className="font-bold text-brand-dark text-base mb-1">Fill Light or White Foam Board (Opposite side):</h4>
            <p className="text-sm text-brand-muted">
              On the side opposite the key light, prop up a $3 sheet of white foam core board. The board bounces light back onto the shadowed side of the product, filling in dark crevices and preserving edge sharpness.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h4 className="font-bold text-brand-dark text-base mb-1">Backdrop Elevation:</h4>
            <p className="text-sm text-brand-muted">
              Use a seamless white poster board curved in an "infinity cove" sweep. Elevate small items (like jewelry or cosmetics) on a small transparent acrylic riser 2 inches above the sweep to eliminate contact shadows completely.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Lighting Comparison: Effect on Cutout Quality
        </h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-brand-dark font-semibold">
                <th className="p-3 border border-gray-200">Lighting Setup</th>
                <th className="p-3 border border-gray-200">Edge Definition</th>
                <th className="p-3 border border-gray-200">AI Processing Ease</th>
                <th className="p-3 border border-gray-200">Best For</th>
              </tr>
            </thead>
            <tbody className="text-brand-muted divide-y divide-gray-200">
              <tr>
                <td className="p-3 border border-gray-200 font-medium text-brand-dark">Diffused Window + Bounce Board</td>
                <td className="p-3 border border-gray-200 text-green-600 font-medium">Crisp, natural</td>
                <td className="p-3 border border-gray-200 text-green-600 font-medium">99% accurate</td>
                <td className="p-3 border border-gray-200">Crafts, cosmetics, clothing</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-medium text-brand-dark">Dual Softbox LED Kit</td>
                <td className="p-3 border border-gray-200 text-green-600 font-medium">Flawless, uniform</td>
                <td className="p-3 border border-gray-200 text-green-600 font-medium">100% accurate</td>
                <td className="p-3 border border-gray-200">High-volume catalog photography</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-medium text-brand-dark">Direct Ceiling Bulb</td>
                <td className="p-3 border border-gray-200 text-amber-600 font-medium">Heavy shadows below</td>
                <td className="p-3 border border-gray-200 text-amber-600 font-medium">May clip lower edge</td>
                <td className="p-3 border border-gray-200">Requires manual touchup</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-medium text-brand-dark">Direct Flash / Dark Room</td>
                <td className="p-3 border border-gray-200 text-red-600 font-medium">Blown highlights, hard rim</td>
                <td className="p-3 border border-gray-200 text-red-600 font-medium">High failure rate</td>
                <td className="p-3 border border-gray-200">Not recommended</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Testing Your Images with Image Back Remover
        </h2>
        <p className="text-brand-muted">
          Once you have taken a test shot with diffused lighting, upload it to our free background remover. Notice how effortlessly the AI traces fine details—such as fabric texture, bottle caps, and handles—without jagged cutouts or missed sections.
        </p>

        <div className="not-prose mt-10 p-8 bg-brand-purple/5 rounded-2xl border border-brand-purple/10 text-center">
          <h3 className="text-2xl font-bold text-brand-dark mb-2">Test Your Product Shots for Free</h3>
          <p className="text-brand-muted max-w-xl mx-auto mb-6 text-sm">
            Batch process up to 5 photos simultaneously. Get transparent PNGs ready for Amazon, Shopify, or your custom catalog in seconds.
          </p>
          <Link
            to="/ecommerce-product-photos"
            className="inline-block px-8 py-3 bg-brand-purple text-white font-semibold rounded-xl hover:bg-brand-magenta transition-all shadow-md"
          >
            Go to E-commerce Background Remover
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Article5;
