import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const {
    name = "Menu",
    logo = null,
    tagline = "",
    rating = null,
    businessType = "",
    location = "",
    coverImage = null,
  } = business || {};

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative bg-white">
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-white'
      }`}>
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {logo && (
                <span className="text-xl" aria-hidden="true">
                  {logo}
                </span>
              )}
              <span className="text-sm font-bold tracking-wider text-gray-900 uppercase">
                {name}
              </span>
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-4">
              <a 
                href="#menu" 
                className="text-xs font-semibold text-gray-600 hover:text-gray-900 uppercase tracking-wider"
              >
                Menu
              </a>
              <a 
                href="#info" 
                className="text-xs font-semibold text-gray-600 hover:text-gray-900 uppercase tracking-wider"
              >
                Info
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-4 pt-20 pb-8">
        <div className="text-center">
          {/* Business Name - Large editorial style */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-3">
            {name}
          </h1>

          {/* Tagline */}
          {tagline && (
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              {tagline}
            </p>
          )}

          {/* Info Row */}
          {(rating || businessType || location) && (
            <div className="flex items-center justify-center gap-3 text-sm text-gray-500 mb-6">
              {rating && (
                <span className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  {rating}
                </span>
              )}
              {rating && businessType && <span>•</span>}
              {businessType && <span>{businessType}</span>}
              {location && (
                <>
                  <span>•</span>
                  <span>📍 {location}</span>
                </>
              )}
            </div>
          )}

          {/* Large Cover Image */}
          {coverImage && (
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
              <img 
                src={coverImage} 
                alt={name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;