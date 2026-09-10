import React, { useState, useEffect } from 'react';

const MangaHeader = ({ business }) => {
  const { name = 'SHONEN KITCHEN', logo = null, location = 'Table 04' } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 transition-all duration-200 font-sans">
      <div
        className={`max-w-7xl mx-auto rounded-xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 border-3 border-black transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[4px_4px_0px_0px_#000]'
            : 'bg-white shadow-[3px_3px_0px_0px_#000]'
        }`}
      >
        {/* Brand Stamp */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none group"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-black text-white flex items-center justify-center font-black text-xs sm:text-sm tracking-tighter rotate-[-3deg] group-hover:rotate-0 transition-transform shrink-0 border-2 border-black">
            {logo || '巻'}
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-sm font-black tracking-tight text-black uppercase block leading-none truncate">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-black/60 uppercase font-black mt-1 block truncate">
              {location} • VOL. 36 SPECIAL ISSUE
            </span>
          </div>
        </button>

        {/* Action Onomatopoeia & Status */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden sm:inline-block text-[11px] font-black tracking-widest text-black bg-yellow-300 px-2.5 py-0.5 border-2 border-black rotate-[-2deg] shadow-[2px_2px_0px_0px_#000]">
            ドドド...
          </span>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black text-white text-[10px] sm:text-[11px] font-mono font-black uppercase shrink-0 border-2 border-black">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="hidden xs:inline">HEARTH // ACTIVE</span>
            <span className="xs:hidden">LIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MangaHeader;