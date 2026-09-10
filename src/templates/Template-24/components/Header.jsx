import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = 'Torii Midnight Yatai', logo = null } = business || {};
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
            ? 'bg-[#121113]/95 backdrop-blur-md border-white/15 shadow-xl shadow-black/80'
            : 'bg-[#18161A]/80 backdrop-blur-xs border-white/10'
        }`}
      >
        {/* Brand Hanko Stamp Lockup */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          {/* Red Hanko Stamp Box */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#E63946] border-2 border-[#FF6B6B] text-white flex items-center justify-center font-serif font-black text-sm sm:text-base shadow-sm group-hover:scale-105 transition-transform shrink-0">
            {logo || '鳥'}
          </div>
          <div className="min-w-0">
            <span className="text-sm sm:text-base font-serif font-black text-white tracking-wider block leading-none truncate">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#E9C46A] uppercase font-bold mt-0.5 block truncate">
              Table Order • 居酒屋お品書き
            </span>
          </div>
        </button>

        {/* Live Izakaya Hearth Status */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E63946]/15 border border-[#E63946]/30 text-[10px] sm:text-[11px] font-mono font-bold text-[#FF6B6B] shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#E63946] animate-ping" />
          <span className="hidden xs:inline">Binchotan Grill Hot</span>
          <span className="xs:hidden">Live</span>
        </div>
      </div>
    </header>
  );
};

export default Header;