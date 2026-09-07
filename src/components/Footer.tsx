import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-12 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-magenta">Image Back Remover</span>
          </h3>
          <p className="text-gray-400 text-sm">
            Free AI-powered image background remover. Fast, secure, and easy to use.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-brand-yellow">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-brand-yellow">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Image Back Remover. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
