import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Image, Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/ecommerce-product-photos', label: 'E-commerce' },
    { to: '/transparent-signature-maker', label: 'Signature Maker' },
    { to: '/faq', label: 'FAQ' },
    { to: '/blog', label: 'Blog' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link 
          to="/" 
          onClick={closeMenu}
          className="flex items-center space-x-2 text-brand-purple hover:opacity-85 transition-opacity"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-magenta flex items-center justify-center text-white shadow-sm">
            <Image size={22} className="text-white" />
          </div>
          <div>
            <span className="text-xl font-bold font-sans text-brand-dark tracking-tight block leading-tight">
              Image Back Remover
            </span>
            <span className="text-[10px] uppercase font-semibold text-brand-purple tracking-wider block">
              100% Free AI Tool
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 text-brand-dark font-medium text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors py-1 ${
                isActive(link.to)
                  ? 'text-brand-purple font-semibold border-b-2 border-brand-purple'
                  : 'hover:text-brand-magenta text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            className="px-4 py-2 bg-brand-purple text-white font-semibold rounded-lg hover:bg-brand-magenta transition-all shadow-sm flex items-center space-x-1 text-xs"
          >
            <Sparkles size={14} className="mr-1" />
            <span>Remove Background</span>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:text-brand-purple hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-purple"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl px-4 py-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.to)
                    ? 'bg-brand-purple/10 text-brand-purple font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-brand-purple'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/"
                onClick={closeMenu}
                className="w-full py-3 bg-brand-purple text-white font-semibold rounded-lg hover:bg-brand-magenta transition-all shadow-sm flex items-center justify-center space-x-2 text-sm"
              >
                <Sparkles size={16} />
                <span>Upload Image Now</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
