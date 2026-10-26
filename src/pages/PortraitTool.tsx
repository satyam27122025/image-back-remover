import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Sparkles } from 'lucide-react';

const PortraitTool = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-flex items-center space-x-1.5 py-1 px-3 rounded-full bg-magenta-100 text-brand-magenta font-semibold text-xs mb-3">
          <UserCheck size={14} />
          <span>Portrait & Hair Matting AI</span>
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">
          AI Portrait &amp; Headshot Background Remover
        </h1>
        <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
          Create studio-grade LinkedIn headshots, resume portraits, and team directories for free. Our AI preserves wispy hair, curls, and fine clothing textures without harsh cutout edges.
        </p>
      </div>

      {/* Main Action Box */}
      <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100 mb-16 text-center">
        <h2 className="text-2xl font-bold text-brand-dark mb-2">Transform Your Casual Selfies into Executive Headshots</h2>
        <p className="text-sm text-brand-muted mb-8 max-w-xl mx-auto">
          Upload any portrait taken against a home wall or outdoor scenery. In seconds, get a clean transparent PNG ready to place on solid corporate colors or studio gradients.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-8 py-4 bg-brand-purple text-white text-base font-bold rounded-xl hover:bg-brand-magenta transition-all shadow-lg hover:shadow-xl"
        >
          <Sparkles size={20} className="mr-2" />
          <span>Upload Portrait Photo</span>
        </Link>
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark text-center mb-8">
          Engineered for Human Faces and Natural Contours
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-xl text-brand-dark mb-2">Organic Hair Matting</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              Standard filters chop off hair edges or leave discolored halos. Our semantic matting algorithm recognizes hair strands, bangs, curls, and beards, delivering a soft, natural transition.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-xl text-brand-dark mb-2">Crisp Clothing Separation</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              Whether you are wearing a formal suit, wool sweater, or casual t-shirt, the AI model detects fabric silhouettes with pixel-level precision.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-xl text-brand-dark mb-2">Ready for Any Background</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              Download a transparent PNG and easily composite yourself into professional office spaces, neutral corporate navy backgrounds, or vibrant creator thumbnails.
            </p>
          </div>
        </div>
      </div>

      {/* Tutorial section */}
      <div className="bg-white p-8 sm:p-12 rounded-2xl border border-gray-100 shadow-sm prose prose-brand max-w-none mb-16">
        <h2 className="text-2xl font-bold text-brand-dark mb-4">
          How to Get the Best Cutout Quality from Smartphone Portraits
        </h2>
        <p className="text-brand-muted">
          Follow these quick photography tips to ensure your AI portrait cutout looks indistinguishable from a $300 professional studio photo:
        </p>
        <ol className="text-brand-muted space-y-2">
          <li><strong>Face a window:</strong> Indirect daylight is soft, flattering, and naturally illuminates facial contours without casting harsh nose or neck shadows.</li>
          <li><strong>Step 3 feet away from walls:</strong> Standing a few feet in front of your background prevents your shoulders from blending into wall shadows.</li>
          <li><strong>Use the telephoto camera:</strong> If using an iPhone or Android flagship, switch to 2x or 3x portrait mode to preserve natural facial geometry.</li>
          <li><strong>Export transparent PNG:</strong> Download your result from Image Back Remover and drop it into Canva or Photoshop to add a subtle gradient or corporate background.</li>
        </ol>
      </div>

      {/* Guide Link */}
      <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100 text-center mb-12">
        <h3 className="font-bold text-brand-dark mb-2 text-lg">Looking for Full Headshot Lighting Tips?</h3>
        <p className="text-xs text-brand-muted mb-4 max-w-md mx-auto">
          Read our comprehensive guide to smartphone headshot photography and studio backgrounds.
        </p>
        <Link
          to="/blog/professional-headshots-guide"
          className="text-sm font-bold text-brand-purple hover:underline"
        >
          Read the Professional Headshot Blueprint &rarr;
        </Link>
      </div>
    </div>
  );
};

export default PortraitTool;
