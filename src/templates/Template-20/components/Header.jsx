import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = 'Caffè Pasticceria', logo = null } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-3 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto rounded-full flex items-center justify-between h-14 sm:h-16 px-5 sm:px-7 transition-all duration-300 border-2 border-[#3D141E] ${
          isScrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-[3px_3px_0px_#3D141E]'
            : 'bg-[#FDFBF7]/90 backdrop-blur-xs shadow-[2px_2px_0px_#3D141E]'
        }`}
      >
        {/* Brand Marquee */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F5CAD2] border-2 border-[#3D141E] text-[#3D141E] flex items-center justify-center font-serif font-black text-sm sm:text-base group-hover:rotate-12 transition-transform shrink-0 shadow-[1px_1px_0px_#3D141E]">
            {logo || '🧁'}
          </div>
          <div className="min-w-0">
            <span className="text-sm sm:text-base font-serif font-black text-[#3D141E] tracking-tight block leading-none truncate">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#3D141E]/70 uppercase font-bold mt-0.5 block truncate">
              Table Carte • Salle No. 20
            </span>
          </div>
        </button>

        {/* Retro Service Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CFE7DA] border-2 border-[#3D141E] text-[10px] sm:text-[11px] font-mono font-bold uppercase text-[#3D141E] shrink-0 shadow-[1px_1px_0px_#3D141E]">
          <span className="w-2 h-2 rounded-full bg-[#3D141E] animate-bounce" />
          <span className="hidden xs:inline">Service En Salle</span>
          <span className="xs:hidden">Live</span>
        </div>
      </div>
    </header>
  );
};

export default Header;