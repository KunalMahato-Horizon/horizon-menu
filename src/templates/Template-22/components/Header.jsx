import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = 'ATELIER // MONOLITH', logo = null } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-3 transition-all duration-200">
      <div
        className={`max-w-5xl mx-auto rounded-xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 transition-all duration-200 border ${
          isScrolled
            ? 'bg-[#0F0F11]/95 backdrop-blur-xl border-white/20 text-white shadow-xl'
            : 'bg-white/95 backdrop-blur-md border-black/10 text-[#0F0F11] shadow-sm'
        }`}
      >
        {/* Monolithic Brand Lockup */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 text-left focus:outline-none group"
        >
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-black text-xs transition-colors shrink-0 ${
              isScrolled ? 'bg-[#0047FF] text-white' : 'bg-[#0F0F11] text-white'
            }`}
          >
            {logo || 'M'}
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-sm font-mono font-black tracking-widest uppercase block leading-none truncate">
              {name}
            </span>
            <span
              className={`text-[9px] font-mono tracking-wider uppercase font-medium mt-1 block truncate ${
                isScrolled ? 'text-white/50' : 'text-black/40'
              }`}
            >
              EDITION 22 • DINE-IN LEDGER
            </span>
          </div>
        </button>

        {/* Live Service Pill */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase transition-colors shrink-0 ${
            isScrolled
              ? 'bg-white/10 text-white border border-white/20'
              : 'bg-[#0F0F11]/5 text-[#0F0F11] border border-black/10'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0047FF] animate-ping" />
          <span className="hidden xs:inline">Table Service Live</span>
          <span className="xs:hidden">Live</span>
        </div>
      </div>
    </header>
  );
};

export default Header;