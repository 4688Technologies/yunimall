import { ShoppingBag, Instagram, Mail, ChevronUp, Linkedin } from 'lucide-react';
import PrivacyPolicy from './PrivacyPolicy';
import React, { useState, useEffect } from 'react';
import ComingSoonModal from './ComingSoonModal';

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    if (!showPrivacy) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowPrivacy(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showPrivacy]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Founders', id: 'founders' },
    { name: 'News', id: 'news' },
    { name: 'Impact', id: 'impact' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <button
                type="button"
                className="flex items-center mb-6 focus:outline-none"
                aria-label="Refresh homepage"
                onClick={() => window.location.reload()}
              >
                <img 
                  src={`${import.meta.env.BASE_URL}yunimall-logo.jpg`} 
                  alt="Yunimall Limited" 
                  className="h-12 w-auto"
                />
                <span className="ml-3 text-xl font-bold text-white">Yunimall Limited</span>
              </button>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Built by students, for students. Connecting student businesses with fellow students across African campuses.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/yu_nimall" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/yunimall-limited/" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors duration-200" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:info@yuni-mall.com" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-blue-100 hover:text-yellow-400 hover:underline transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}

              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <span className="text-blue-100">Student Marketplace</span>
                </li>
                <li>
                  <span className="text-blue-100">Business Registration</span>
                </li>
                <li>
                  <span className="text-blue-100">Sales Automation</span>
                </li>
                <li>
                  <span className="text-blue-100">Logistics (Coming Soon)</span>
                </li>
                <li>
                  <span className="text-blue-100">Entrepreneurship Training</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <span className="text-blue-100">RC: 7095154</span>
                </li>
                <li>
                  <span className="text-blue-100">Km 52, Lekki-Epe Expressway, Ibeju-Lekki, Lagos</span>
                </li>
                {/* <li>
                  <span className="text-blue-100">yuni-mall.com</span>
                </li> */}
                <li>
                  <a href="mailto:info@yuni-mall.com" className="text-blue-100 hover:text-yellow-400 hover:underline transition-colors duration-200">info@yuni-mall.com</a>
                </li>
                <li>
                  <span className="text-blue-100">Founded: 2021</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-blue-100 text-sm">
                <p>&copy; 2025 Yunimall Limited. All rights reserved.</p>
                <p className="text-blue-100 text-xs mt-1">
                  Designed and developed by <a href="https://4688technologies.github.io/4688technologies/" className="underline hover:text-yellow-400" target="_blank" rel="noopener noreferrer">4688 Technologies</a>.
                </p>
              </div>
              <div className="flex space-x-6 text-sm">
                <button
                  onClick={() => setShowPrivacy(true)}
                  className="text-blue-100 hover:text-yellow-400 hover:underline transition-colors duration-200"
                >
                  Privacy Policy
                </button>
                <a href="#" className="text-blue-100 hover:text-yellow-400 hover:underline transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-blue-100 hover:text-yellow-400 hover:underline transition-colors duration-200"
              >
                <ChevronUp className="w-4 h-4" />
                <span className="text-sm">Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
      {showPrivacy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute top-4 right-4 text-blue-900 hover:text-yellow-500 text-2xl font-bold"
              aria-label="Close Privacy Policy"
            >
              &times;
            </button>
            <PrivacyPolicy />
          </div>
        </div>
      )}

    </>
  );
};

export default Footer;