import React from 'react';

const Footer = ({ business }) => {
  const {
    name = "Menu",
    instagram = "",
    phone = "",
  } = business || {};

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          {/* Business Name */}
          <p className="text-xl font-bold text-gray-900 tracking-tight mb-4">
            {name}
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-4">
            {instagram && (
              <a
                href={`https://instagram.com/${instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Instagram
              </a>
            )}
            
            {phone && (
              <a
                href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                WhatsApp
              </a>
            )}
          </div>

          {/* Horizon Credit */}
          <p className="text-xs text-gray-400">
            Made with <span className="font-semibold text-gray-600">Horizon Menu</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;