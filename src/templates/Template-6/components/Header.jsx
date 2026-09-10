import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const {
    name = "Menu",
    logo = null,
    tagline = "",
  } = business || {};

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-slate-950/50' 
          : 'bg-gradient-to-b from-slate-950/80 to-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between gap-3">
          {/* Logo and Name */}
          <div 
            className="flex items-center gap-3 md:gap-4 min-w-0 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {logo && (
              <div className="flex-shrink-0 relative">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-purple-500/30 rounded-xl blur-lg transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                {typeof logo === 'string' && logo.length <= 4 ? (
                  <div 
                    className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-xl md:text-2xl bg-purple-600/20 border border-purple-500/30 rounded-xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-purple-500/50"
                    aria-hidden="true"
                  >
                    {logo}
                  </div>
                ) : (
                  <img 
                    src={logo} 
                    alt={`${name} logo`}
                    className="relative w-10 h-10 md:w-12 md:h-12 object-contain rounded-xl bg-white/5 border border-purple-500/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  />
                )}
              </div>
            )}
            
            <div className="min-w-0">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-white tracking-tight truncate">
                {name}
              </h1>
              {tagline && (
                <p className={`text-xs text-purple-400 truncate transition-all duration-300 ${
                  isScrolled ? 'opacity-0 max-h-0' : 'opacity-100 max-h-5'
                }`}>
                  {tagline}
                </p>
              )}
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            {/* Menu Button */}
            <button
              onClick={scrollToMenu}
              className="group relative inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 bg-purple-600 text-white text-sm font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 hover:scale-105 active:scale-95"
            >
              {/* Button glow */}
              <span className="absolute inset-0 rounded-xl bg-purple-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
              
              <svg className="w-4 h-4 relative transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="relative">Menu</span>
            </button>

            {/* Optional: Call button for mobile */}
            {business.phone && (
              <a
                href={`tel:${business.phone}`}
                className="hidden sm:inline-flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105"
                aria-label="Call"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom border gradient when scrolled */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      )}
    </header>
  );
};

export default Header;