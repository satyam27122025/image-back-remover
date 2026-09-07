import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-brand-purple hover:opacity-80 transition-opacity">
          <Image size={32} className="text-brand-magenta" />
          <span className="text-xl font-bold font-sans">Image Back Remover</span>
        </Link>
        <nav className="hidden md:flex space-x-6 text-brand-dark font-medium">
          <Link to="/" className="hover:text-brand-magenta transition-colors">Home</Link>
          <Link to="/how-it-works" className="hover:text-brand-magenta transition-colors">How It Works</Link>
          <Link to="/faq" className="hover:text-brand-magenta transition-colors">FAQ</Link>
          <Link to="/about" className="hover:text-brand-magenta transition-colors">About</Link>
          <Link to="/contact" className="hover:text-brand-magenta transition-colors">Contact</Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
