import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Check, ShieldCheck, FileCheck, Sparkles, HelpCircle } from 'lucide-react';

const SignatureTool = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-flex items-center space-x-1.5 py-1 px-3 rounded-full bg-purple-100 text-brand-purple font-semibold text-xs mb-3">
          <PenTool size={14} />
          <span>Specialized AI Stroke Detection</span>
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">
          Free Transparent Signature Maker Online
        </h1>
        <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
          Convert your handwritten paper signature into a flawless transparent PNG cutout for PDF documents, contracts, Word, and Google Docs in seconds.
        </p>
      </div>

      {/* Action Card */}
      <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100 mb-16 text-center">
        <h2 className="text-2xl font-bold text-brand-dark mb-2">Create Your Transparent Signature</h2>
        <p className="text-sm text-brand-muted mb-8 max-w-xl mx-auto">
          Sign any sheet of white paper, snap a photo with your mobile phone, and upload it here. Our AI strips away paper textures and shadows, giving you pure ink lines.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-8 py-4 bg-brand-purple text-white text-base font-bold rounded-xl hover:bg-brand-magenta transition-all shadow-lg hover:shadow-xl"
        >
          <Sparkles size={20} className="mr-2" />
          <span>Upload Signature Photo</span>
        </Link>
      </div>

      {/* 3 Step Tutorial */}
      <div className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark text-center mb-8">
          How to Make a Transparent Signature in 3 Easy Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center font-black text-xl mx-auto mb-4">
              1
            </div>
            <h3 className="font-bold text-lg text-brand-dark mb-2">Sign on Clean Paper</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Use a black or dark blue pen on blank white paper. Avoid lined paper or notebook margins for cleanest separation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center font-black text-xl mx-auto mb-4">
              2
            </div>
            <h3 className="font-bold text-lg text-brand-dark mb-2">Snap a Photo &amp; Upload</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Take a well-lit photo from directly above without casting hand shadows. Upload it directly to our free AI tool.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center font-black text-xl mx-auto mb-4">
              3
            </div>
            <h3 className="font-bold text-lg text-brand-dark mb-2">Download Transparent PNG</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Get an instant transparent PNG file. Drag and drop it into Adobe Acrobat, Microsoft Word, or Google Docs signature lines.
            </p>
          </div>
        </div>
      </div>

      {/* Security Statement */}
      <div className="bg-white p-8 sm:p-12 rounded-2xl border border-gray-100 shadow-sm prose prose-brand max-w-none mb-16">
        <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center">
          <ShieldCheck size={28} className="text-green-600 mr-2" /> Signature Privacy and Data Security
        </h2>
        <p className="text-brand-muted">
          Your signature is personal and legal identity data. Unlike generic converters that harvest uploaded documents, <strong>Image Back Remover</strong> has zero permanent retention policies:
        </p>
        <ul className="text-brand-muted space-y-2">
          <li><strong>Zero Permanent Storage:</strong> Images are processed in volatile server memory and purged automatically.</li>
          <li><strong>End-to-End Encryption:</strong> All uploads and downloads occur exclusively over secure TLS/HTTPS 256-bit encryption.</li>
          <li><strong>No Model Training:</strong> We never use user signature uploads to train public machine learning datasets.</li>
          <li><strong>No Account Required:</strong> You do not need to register, verify an email, or provide personal details.</li>
        </ul>
      </div>

      {/* Guide Link */}
      <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100 text-center mb-12">
        <h3 className="font-bold text-brand-dark mb-2 text-lg">Need Detailed Instructions for Word or Adobe Reader?</h3>
        <p className="text-xs text-brand-muted mb-4 max-w-md mx-auto">
          Read our in-depth tutorial with application-specific screenshots and sizing tips.
        </p>
        <Link
          to="/blog/transparent-signature-guide"
          className="text-sm font-bold text-brand-purple hover:underline"
        >
          Read the Full Digital Signature Guide &rarr;
        </Link>
      </div>
    </div>
  );
};

export default SignatureTool;
