import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-14 pb-10 mt-16 border-t border-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-purple to-brand-magenta flex items-center justify-center text-white">
              <Sparkles size={16} />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Image Back Remover</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Professional AI-powered image background removal. 100% free online tool with instant processing, transparent PNG downloads, and zero permanent server storage.
          </p>
          <div className="flex items-center space-x-2 text-xs text-green-400 font-medium">
            <ShieldCheck size={16} />
            <span>Encrypted & Privacy Protected</span>
          </div>
        </div>

        {/* Tools & Use Cases */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-yellow">Solutions & Tools</h4>
          <ul className="space-y-2.5 text-sm text-gray-300">
            <li>
              <Link to="/ecommerce-product-photos" className="hover:text-white transition-colors">
                E-commerce Product Photos
              </Link>
            </li>
            <li>
              <Link to="/transparent-signature-maker" className="hover:text-white transition-colors">
                Transparent Signature Maker
              </Link>
            </li>
            <li>
              <Link to="/portrait-headshot-remover" className="hover:text-white transition-colors">
                Headshot & Portrait Backgrounds
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="hover:text-white transition-colors">
                How It Works & Tech Guide
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white transition-colors">
                Frequently Asked Questions
              </Link>
            </li>
          </ul>
        </div>

        {/* Editorial & Guides */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-yellow">Guides & Articles</h4>
          <ul className="space-y-2.5 text-sm text-gray-300">
            <li>
              <Link to="/blog/ecommerce-backgrounds" className="hover:text-white transition-colors">
                Amazon & Shopify White Backgrounds
              </Link>
            </li>
            <li>
              <Link to="/blog/ai-image-editing" className="hover:text-white transition-colors">
                How Neural Networks Isolate Subjects
              </Link>
            </li>
            <li>
              <Link to="/blog/transparent-signature-guide" className="hover:text-white transition-colors">
                Digital Signature Transparency Guide
              </Link>
            </li>
            <li>
              <Link to="/blog/product-photography-lighting" className="hover:text-white transition-colors">
                Product Photography Lighting 101
              </Link>
            </li>
            <li>
              <Link to="/blog/png-vs-webp-vs-jpg" className="hover:text-white transition-colors">
                PNG vs WebP vs JPG Comparison
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-brand-purple font-semibold hover:underline">
                View All Articles &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Company */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-yellow">Company & Legal</h4>
          <ul className="space-y-2.5 text-sm text-gray-300">
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About Us & Editorial Mission
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact & Support
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy (GDPR / CCPA)
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/cookie-policy" className="hover:text-white transition-colors">
                Cookie Policy & Ad Settings
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="hover:text-white transition-colors">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
        <div>
          &copy; {new Date().getFullYear()} Image Back Remover. All rights reserved. Free online AI photo cutout tool.
        </div>
        <div className="flex items-center space-x-1">
          <span>Built for designers, sellers, and creators worldwide.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
