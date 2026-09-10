import React, { useState, useEffect } from 'react';

const ArcanaHeader = ({ business, onConsultOracle }) => {
  const { name = 'THE ARCANA CARTE', logo = null, location = 'Table III' } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 lg:px-8 pt-3 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#080911]/95 backdrop-blur-xl border-[#E5C06E]/30 shadow-2xl shadow-black/90'
            : 'bg-[#0D0F1D]/80 backdrop-blur-md border-[#E5C06E]/15'
        }`}
      >
        {/* Brand Astrolabe Monogram */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#C59B3F] via-[#E5C06E] to-[#FFF1C2] text-[#080911] flex items-center justify-center font-serif font-black text-sm shadow-md shadow-[#E5C06E]/20 group-hover:rotate-45 transition-transform duration-500 shrink-0">
            {logo || '✦'}
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-sm font-serif font-bold text-[#E5C06E] tracking-widest uppercase block leading-none truncate">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#E0E7FF]/60 uppercase font-semibold mt-1 block truncate">
              {location} • HOUSE OF FLAME
            </span>
          </div>
        </button>

        {/* Oracle Draw & Table Service Badge */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onConsultOracle}
            className="px-3 py-1.5 rounded-xl bg-[#E5C06E]/15 hover:bg-[#E5C06E]/25 border border-[#E5C06E]/40 text-[#E5C06E] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 active:scale-95"
          >
            <span>🔮</span>
            <span className="hidden xs:inline">Consult Oracle</span>
            <span className="xs:hidden">Oracle</span>
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] sm:text-[11px] font-mono text-[#E0E7FF] shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5C06E] animate-pulse" />
            <span className="hidden sm:inline">HEARTH AWAKE</span>
            <span className="sm:hidden">LIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ArcanaHeader;