import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = 'Fjord & Frost', logo = null } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-3 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto rounded-2xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#F0F4F8]/95 backdrop-blur-md border-[#CBD5E1] shadow-md shadow-slate-900/5'
            : 'bg-[#F0F4F8]/80 backdrop-blur-xs border-[#E2E8F0]'
        }`}
      >
        {/* Nordic Brand Seal */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0B192C] text-[#38BDF8] flex items-center justify-center font-mono font-bold text-sm sm:text-base group-hover:scale-105 transition-transform shrink-0 border border-[#38BDF8]/30 shadow-xs">
            {logo || 'ᚠ'}
          </div>
          <div className="min-w-0">
            <span className="text-sm sm:text-base font-serif font-black text-[#0B192C] tracking-wide block leading-none truncate">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#0284C7] uppercase font-semibold mt-0.5 block truncate">
              64°08'N • Glacial Table Service
            </span>
          </div>
        </button>

        {/* Live Hearth Beacon */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B192C]/5 border border-[#0B192C]/15 text-[10px] sm:text-[11px] font-mono font-bold text-[#0B192C] shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
          <span className="hidden xs:inline">Birch Hearth Live</span>
          <span className="xs:hidden">Live</span>
        </div>
      </div>
    </header>
  );
};

export default Header;