import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CONSENT_KEY = 'ibr_cookie_consent';

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Show the banner after a short delay so it doesn't block initial render
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setIsVisible(false);
    // When declined, we could disable non-essential cookies here
    // For now, we still need essential cookies
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-[9999] transition-all duration-500 ease-out"
      style={{ animation: 'slideUp 0.5s ease-out' }}
    >
      <div className="bg-brand-dark/95 backdrop-blur-md border-t border-brand-purple/20 shadow-2xl">
        <div className="container mx-auto px-4 py-5 max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-start gap-3 flex-grow">
              <Cookie size={24} className="text-brand-yellow mt-0.5 flex-shrink-0" />
              <div className="text-sm text-gray-300">
                <p className="font-medium text-white mb-1">We value your privacy</p>
                <p>
                  We use cookies and similar technologies to enhance your browsing experience, 
                  serve personalized advertisements through Google AdSense, and analyze website 
                  traffic via Google Analytics. Third-party vendors, including Google, use cookies 
                  to serve ads based on your prior visits. By clicking "Accept All", you consent to 
                  the use of all cookies. Learn more in our{' '}
                  <Link to="/cookie-policy" className="text-brand-yellow hover:underline">
                    Cookie Policy
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy-policy" className="text-brand-yellow hover:underline">
                    Privacy Policy
                  </Link>.{' '}
                  See{' '}
                  <a 
                    href="https://www.google.com/policies/privacy/partners/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-yellow hover:underline"
                  >
                    how Google uses data
                  </a>{' '}
                  on our site.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 md:flex-none px-5 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-5 py-2 text-sm font-medium text-white bg-brand-purple rounded-lg hover:bg-brand-magenta transition-colors shadow-lg"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default CookieConsentBanner;
