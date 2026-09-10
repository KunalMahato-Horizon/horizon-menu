import React, { useState, useEffect } from 'react';

const DarkroomHeader = ({ business, isSafelight, onToggleSafelight }) => {
  const { name = 'NOIR 35MM', logo = null, location = 'Darkroom 04' } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 transition-all duration-300 font-mono">
      <div
        className={`max-w-7xl mx-auto rounded-xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 transition-all duration-300 border ${
          isSafelight
            ? 'bg-[#120406]/95 border-[#FF2A3A]/40 text-[#FF2A3A] shadow-xl shadow-[#FF2A3A]/10'
            : isScrolled
            ? 'bg-[#0A0B0E]/95 backdrop-blur-xl border-white/15 text-white shadow-2xl'
            : 'bg-[#12141A]/90 backdrop-blur-md border-white/10 text-white'
        }`}
      >
        {/* Film Logo & Roll Identifier */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center font-black text-xs shrink-0 transition-transform group-hover:scale-105 ${
              isSafelight
                ? 'bg-[#FF2A3A] text-black shadow-md shadow-[#FF2A3A]/30'
                : 'bg-[#FFC72C] text-black shadow-md shadow-[#FFC72C]/20'
            }`}
          >
            {logo || '35'}
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-sm font-black tracking-widest uppercase block leading-none truncate">
              {name}
            </span>
            <span
              className={`text-[9px] sm:text-[10px] tracking-wider uppercase font-bold mt-1 block truncate ${
                isSafelight ? 'text-[#FF2A3A]/80' : 'text-[#FFC72C]'
              }`}
            >
              {location} • EXPOSURE PROOF SHEET
            </span>
          </div>
        </button>

        {/* Safelight Lamp Toggle & Terminal Live Badge */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onToggleSafelight}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg border text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 active:scale-95 ${
              isSafelight
                ? 'bg-[#FF2A3A] text-black border-[#FF2A3A] shadow-sm shadow-[#FF2A3A]/40'
                : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
            }`}
            title="Toggle Red Darkroom Safelight"
          >
            <span>{isSafelight ? '🔴' : '⚪'}</span>
            <span className="hidden sm:inline">
              {isSafelight ? 'Safelight ON' : 'Daylight Mode'}
            </span>
          </button>

          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold shrink-0 border ${
              isSafelight
                ? 'bg-[#FF2A3A]/10 border-[#FF2A3A]/30 text-[#FF2A3A]'
                : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                isSafelight ? 'bg-[#FF2A3A]' : 'bg-emerald-400'
              }`}
            />
            <span className="hidden xs:inline">HEARTH // LIVE</span>
            <span className="xs:hidden">LIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DarkroomHeader;