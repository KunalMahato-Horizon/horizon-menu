import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = 'Riviera Sol', logo = null } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-3 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto rounded-2xl transition-all duration-300 flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 ${
          isScrolled
            ? 'bg-[#FBF9F4]/95 backdrop-blur-md border border-[#E4DCD0] shadow-sm'
            : 'bg-[#FBF9F4]/80 backdrop-blur-xs border border-transparent'
        }`}
      >
        {/* Brand Lockup */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0E3A73] text-[#FBF9F4] flex items-center justify-center font-serif font-black text-sm sm:text-base shadow-sm group-hover:bg-[#D95338] transition-colors shrink-0">
            {logo || name.charAt(0)}
          </div>
          <div className="min-w-0">
            <span className="text-sm sm:text-base font-serif font-black text-[#0E3A73] tracking-tight block leading-none truncate">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-wider sm:tracking-widest text-[#D95338] uppercase font-bold mt-0.5 block truncate">
              Coastal Table Carte • Est. 2024
            </span>
          </div>
        </button>

        {/* Live Service Pill */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#EBF2FA] border border-[#D0E0F2] text-[10px] sm:text-[11px] font-mono font-bold text-[#0E3A73] shrink-0">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D95338] animate-ping" />
          <span className="hidden xs:inline">Table Service Active</span>
          <span className="xs:hidden">Live</span>
        </div>
      </div>
    </header>
  );
};

export default Header;