import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const {
    name = "L'Oasis",
    tagline = "Fine Dining & Lounge",
    logo = null,
    isOpen = true,
  } = business || {};

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-800/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.3)] py-3 sm:py-3.5'
          : 'bg-gradient-to-b from-stone-950/80 via-stone-950/30 to-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
            {logo ? (
              <div className="flex-shrink-0">
                {typeof logo === 'string' && logo.length <= 4 ? (
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-lg sm:text-xl font-serif font-black transition-all ${
                      isScrolled
                        ? 'bg-stone-100 text-stone-950 shadow-md ring-1 ring-white/20'
                        : 'bg-white/15 text-white border border-white/30 backdrop-blur-md'
                    }`}
                    aria-hidden="true"
                  >
                    {logo}
                  </div>
                ) : (
                  <img
                    src={logo}
                    alt={`${name} logo`}
                    className="w-10 h-10 sm:w-11 sm:h-11 object-cover rounded-full ring-1 ring-white/20 bg-stone-900"
                  />
                )}
              </div>
            ) : (
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center font-serif font-black text-base shadow-sm flex-shrink-0">
                {name.slice(0, 2).toUpperCase()}
              </div>
            )}

            {/* Business Name & Tagline */}
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg md:text-xl font-serif font-bold tracking-wider text-white truncate">
                  {name}
                </span>
                {isOpen !== undefined && (
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 border border-emerald-400/30 text-emerald-300">
                    <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                    Open
                  </span>
                )}
              </div>
              {tagline && (
                <p className="hidden md:block text-[11px] text-stone-400 font-light tracking-widest uppercase truncate">
                  {tagline}
                </p>
              )}
            </div>
          </div>

          {/* Clean Navigation Links Only */}
          <nav className="flex items-center gap-5 sm:gap-7 md:gap-9 text-xs sm:text-sm font-medium tracking-wider uppercase">
            <button
              type="button"
              onClick={() => scrollToSection('menu')}
              className="text-stone-300 hover:text-amber-400 transition-colors py-1 relative group"
            >
              <span>Menu</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('specials')}
              className="text-stone-300 hover:text-amber-400 transition-colors py-1 relative group"
            >
              <span>Specials</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('amenities')}
              className="text-stone-300 hover:text-amber-400 transition-colors py-1 relative group"
            >
              <span>Info</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </button>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;