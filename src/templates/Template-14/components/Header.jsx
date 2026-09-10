import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = 'Brasserie Saint-Germain', logo = null } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-3 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto rounded-xl transition-all duration-300 flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 border ${
          isScrolled
            ? 'bg-[#F8F5EE]/95 backdrop-blur-md border-[#D8CEBA] shadow-sm'
            : 'bg-[#F8F5EE]/80 backdrop-blur-xs border-[#E5DEC9]'
        }`}
      >
        {/* Brand Crest */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0E261C] border border-[#C5A059]/60 text-[#C5A059] flex items-center justify-center font-serif font-black text-sm sm:text-base shadow-xs group-hover:border-[#C5A059] transition-colors shrink-0">
            {logo || name.charAt(0)}
          </div>
          <div className="min-w-0">
            <span className="text-sm sm:text-base font-serif font-bold text-[#0E261C] tracking-wide block leading-none truncate">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#C5A059] uppercase font-bold mt-0.5 block truncate">
              Service en Salle • Carte du Jour
            </span>
          </div>
        </button>

        {/* Live Service Indicator */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-md bg-[#0E261C]/5 border border-[#0E261C]/15 text-[10px] sm:text-[11px] font-serif font-bold text-[#0E261C] shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
          <span className="hidden xs:inline">Service Actif</span>
          <span className="xs:hidden">Dine-In</span>
        </div>
      </div>
    </header>
  );
};

export default Header;