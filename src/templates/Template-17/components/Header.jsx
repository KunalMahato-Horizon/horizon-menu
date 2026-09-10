import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = 'Paloma Solarium', logo = null } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-3 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto rounded-full flex items-center justify-between h-14 sm:h-16 px-5 sm:px-7 transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#F9F6F0]/95 backdrop-blur-md border-[#E5DDD0] shadow-sm'
            : 'bg-[#F9F6F0]/80 backdrop-blur-xs border-[#EFE8DC]'
        }`}
      >
        {/* Brand Identity */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1F2B20] text-[#E8A948] flex items-center justify-center font-serif font-black text-sm sm:text-base group-hover:scale-105 transition-transform shrink-0 shadow-xs">
            {logo || '✺'}
          </div>
          <div className="min-w-0">
            <span className="text-sm sm:text-base font-serif font-bold text-[#1F2B20] tracking-tight block leading-none truncate">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#D96B43] uppercase font-bold mt-0.5 block truncate">
              Desert Hearth • Table Menu
            </span>
          </div>
        </button>

        {/* Live Service Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2B20]/5 border border-[#1F2B20]/15 text-[10px] sm:text-[11px] font-mono font-bold text-[#1F2B20] shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#D96B43] animate-pulse" />
          <span className="hidden xs:inline">Hearth Active</span>
          <span className="xs:hidden">Live</span>
        </div>
      </div>
    </header>
  );
};

export default Header;