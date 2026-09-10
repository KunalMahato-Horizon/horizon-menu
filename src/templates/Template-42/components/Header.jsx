import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = 'Maison & Co.', logo = null, location = 'Table 04' } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#FAF9F5]/95 backdrop-blur-md border-[#E3DFD5] shadow-xs'
            : 'bg-[#FAF9F5]/80 backdrop-blur-xs border-transparent'
        }`}
      >
        {/* Brand Lockup */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1A1918] text-[#FAF9F5] flex items-center justify-center font-serif font-black text-sm shrink-0 group-hover:bg-[#9E5A38] transition-colors">
            {logo || 'M'}
          </div>
          <div className="min-w-0">
            <span className="text-sm sm:text-base font-serif font-black tracking-tight text-[#1A1918] block leading-none truncate">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-sans tracking-widest text-[#9E5A38] uppercase font-bold mt-1 block truncate">
              {location} • Dine-In Service
            </span>
          </div>
        </button>

        {/* Live Service Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1918]/5 border border-[#1A1918]/10 text-[10px] sm:text-[11px] font-sans font-bold text-[#1A1918] shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
          <span className="hidden xs:inline">Table Service Active</span>
          <span className="xs:hidden">Live</span>
        </div>
      </div>
    </header>
  );
};

export default Header;