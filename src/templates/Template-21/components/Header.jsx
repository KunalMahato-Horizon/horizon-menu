import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = "L'Herbier Kitchen", logo = null } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-3 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto rounded-xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#F6F3EB]/95 backdrop-blur-md border-[#DBD4C0] shadow-sm'
            : 'bg-[#F6F3EB]/85 backdrop-blur-xs border-[#E5DFCC]'
        }`}
      >
        {/* Naturalist Seal */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#1E2721] text-[#C4923C] flex items-center justify-center font-serif text-base border border-[#C4923C]/40 group-hover:border-[#C4923C] transition-colors shrink-0 shadow-xs">
            {logo || '🌿'}
          </div>
          <div className="min-w-0">
            <span className="text-sm sm:text-base font-serif font-bold text-[#1E2721] tracking-tight block leading-none truncate">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#964F33] uppercase font-bold mt-0.5 block truncate">
              Botanical Folio • Dine-In Specimen
            </span>
          </div>
        </button>

        {/* Live Hearth/Foraging Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1E2721]/5 border border-[#1E2721]/15 text-[10px] sm:text-[11px] font-mono font-bold text-[#1E2721] shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3F5E46] animate-pulse" />
          <span className="hidden xs:inline">Table Service Active</span>
          <span className="xs:hidden">Dine-In</span>
        </div>
      </div>
    </header>
  );
};

export default Header;