import React from 'react';

const Footer = ({ business }) => {
  const {
    name = "Menu",
    instagram = "",
    phone = "",
  } = business || {};

  return (
    <footer className="bg-slate-950 border-t border-purple-500/20">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center">
          {/* Business Name */}
          <p className="text-xl font-bold text-white mb-4">
            {name}
          </p>

          {/* Social Links - Dark style */}
          <div className="flex items-center justify-center gap-4 mb-6">
            {instagram && (
              <a
                href={`https://instagram.com/${instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-600/20 border border-purple-500/30 rounded-xl flex items-center justify-center hover:bg-purple-600/30 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 112 8.5a4 4 0 0114-2.87M6 19c1.5 1.5 3.5 2 5 2s3.5-.5 5-2M12 3v18" />
                </svg>
              </a>
            )}
            
            {phone && (
              <a
                href={`tel:${phone}`}
                className="w-10 h-10 bg-purple-600/20 border border-purple-500/30 rounded-xl flex items-center justify-center hover:bg-purple-600/30 transition-colors"
                aria-label="Call"
              >
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            )}
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-purple-500/30"></div>
            <span className="text-purple-400/50 text-xs">✦</span>
            <div className="w-12 h-px bg-purple-500/30"></div>
          </div>

          {/* Horizon Credit */}
          <p className="text-xs text-slate-500">
            Digital Menu by <span className="font-semibold text-purple-400">Horizon</span>
          </p>
          <p className="text-xs text-slate-600 mt-1">
            Scan • Browse • Enjoy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;