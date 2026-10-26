import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, CheckCircle2, Clock, Award, Camera } from 'lucide-react';

const Article7 = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <nav className="flex items-center space-x-2 text-sm text-brand-muted mb-6">
        <Link to="/" className="hover:text-brand-purple">Home</Link>
        <span>/</span>
        <Link to="/blog" className="hover:text-brand-purple">Blog</Link>
        <span>/</span>
        <span className="text-brand-dark font-medium truncate">Professional Headshots Guide</span>
      </nav>

      <article className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100 prose prose-brand max-w-none">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4 leading-tight">
          How to Create Studio-Quality Headshots at Home Using AI Background Removal
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
            <span>7 min read</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center space-x-1 text-green-600">
            <Award size={15} />
            <span>Career & Branding Advice</span>
          </div>
        </div>

        <p className="lead text-lg text-brand-muted mb-8">
          A professional headshot is your digital handshake on LinkedIn, resume portfolios, company directories, and conference profiles. However, professional studio photography sessions frequently cost between $200 and $500. Learn how to capture a polished, executive portrait at home using your smartphone and free AI background removal.
        </p>

        <div className="not-prose my-8 p-6 bg-purple-50/70 rounded-xl border border-purple-200/60">
          <h3 className="text-base font-bold text-brand-dark mb-2 flex items-center">
            <Camera size={18} className="text-brand-purple mr-2" /> Top Tips for Smartphone Headshots
          </h3>
          <ul className="text-sm text-brand-dark space-y-1.5 list-disc pl-5">
            <li><strong>Use 2x or 3x telephoto zoom:</strong> Shooting with standard 1x wide lens distorts facial proportions. Telephoto mode provides natural facial geometry.</li>
            <li><strong>Keep camera at eye level:</strong> Avoid looking up or down into the phone camera to convey confidence and warmth.</li>
            <li><strong>Wear contrasting colors:</strong> Do not wear clothes that match your home wall color to ensure razor-sharp AI edge segmentation.</li>
            <li><strong>Smooth hair strands:</strong> Lightly pat down loose flyaways before shooting, though our AI model is specially trained to preserve natural hair contours.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Why Backgrounds Make or Break Professional Headshots
        </h2>
        <p className="text-brand-muted">
          Recruiters and corporate clients make subconscious evaluations within the first 100 milliseconds of viewing a profile photo. A background containing office clutter, distracting blinds, bedroom furniture, or busy restaurant crowds conveys inattention to detail.
        </p>
        <p className="text-brand-muted">
          Conversely, a clean, neutral background—such as a subtle studio gray, deep executive navy, or warm soft gradient—draws 100% of the viewer's focus to your expression, eyes, and professional demeanor.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          Step-by-Step Guide to Taking Your Headshot at Home
        </h2>

        <div className="space-y-6 not-prose my-6">
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 flex gap-4">
            <span className="w-8 h-8 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold shrink-0">1</span>
            <div>
              <h4 className="font-bold text-brand-dark text-base mb-1">Set Up Your Natural Lighting</h4>
              <p className="text-sm text-brand-muted">
                Face a window with indirect natural daylight. The window should be in front of you or at a 30-degree angle. Never stand with your back to a window, as this causes backlighting silhouettes.
              </p>
            </div>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 flex gap-4">
            <span className="w-8 h-8 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold shrink-0">2</span>
            <div>
              <h4 className="font-bold text-brand-dark text-base mb-1">Position the Camera at Chest Level</h4>
              <p className="text-sm text-brand-muted">
                Prop your smartphone on a bookshelf or tripod at eye level, approximately 4 to 6 feet away. Use your camera's 2x zoom mode and set a 5-second self-timer so you can relax into a natural posture.
              </p>
            </div>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 flex gap-4">
            <span className="w-8 h-8 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold shrink-0">3</span>
            <div>
              <h4 className="font-bold text-brand-dark text-base mb-1">Upload to Image Back Remover</h4>
              <p className="text-sm text-brand-muted">
                Upload your favorite shot to our tool. Our neural network detects person contours, separates individual hair strands with pixel precision, and strips away the bedroom or living room background in seconds.
              </p>
            </div>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 flex gap-4">
            <span className="w-8 h-8 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold shrink-0">4</span>
            <div>
              <h4 className="font-bold text-brand-dark text-base mb-1">Add a Corporate Studio Background</h4>
              <p className="text-sm text-brand-muted">
                Open your transparent portrait in Canva or any free photo editor. Place a subtle neutral gray, muted office blur, or corporate brand color behind your cutout. Export your polished headshot ready for LinkedIn.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">
          How Our AI Handles Difficult Hair Edges
        </h2>
        <p className="text-brand-muted">
          The primary failure point of traditional background removal tools is hair matting. Older algorithmic filters create a "helmet hair" look with jagged, clipped edges or leave halo fringes of the background wall.
        </p>
        <p className="text-brand-muted">
          <strong>Image Back Remover</strong> uses advanced semantic matting algorithms that generate a soft alpha gradient around wispy hair, curls, and fine beard strands. This preserves a realistic, organic silhouette that blends effortlessly into any new backdrop.
        </p>

        <div className="not-prose mt-10 p-8 bg-brand-purple/5 rounded-2xl border border-brand-purple/10 text-center">
          <h3 className="text-2xl font-bold text-brand-dark mb-2">Upgrade Your Professional Headshot Today</h3>
          <p className="text-brand-muted max-w-xl mx-auto mb-6 text-sm">
            Fast, secure, and completely free. No subscription or watermark.
          </p>
          <Link
            to="/portrait-headshot-remover"
            className="inline-block px-8 py-3 bg-brand-purple text-white font-semibold rounded-xl hover:bg-brand-magenta transition-all shadow-md"
          >
            Create Headshot Cutout
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Article7;
