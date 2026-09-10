import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = 'Groove & Needle', logo = null } = business || {};
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
            ? 'bg-[#FAF5EC]/95 backdrop-blur-md border-[#E3DAC9] shadow-sm'
            : 'bg-[#FAF5EC]/80 backdrop-blur-xs border-[#ECE3D4]'
        }`}
      >
        {/* Brand LP Lockup */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          {/* Animated Vinyl Disc */}
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#19181A] border-2 border-[#19181A] flex items-center justify-center text-[#FAF5EC] shrink-0 group-hover:rotate-45 transition-transform duration-500 shadow-xs">
            <div className="w-3.5 h-3.5 rounded-full bg-[#D9822B] border border-[#FAF5EC] flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#19181A]" />
            </div>
          </div>
          <div className="min-w-0">
            <span className="text-sm sm:text-base font-serif font-black text-[#19181A] tracking-tight block leading-none truncate">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#D9822B] uppercase font-bold mt-0.5 block truncate">
              Side A • 33⅓ RPM • Table Session
            </span>
          </div>
        </button>

        {/* Live Audio & Kitchen Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#19181A]/5 border border-[#19181A]/10 text-[10px] sm:text-[11px] font-mono font-bold text-[#19181A] shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9822B] animate-ping" />
          <span className="hidden xs:inline">Turntable Spinning • Table Live</span>
          <span className="xs:hidden">Live</span>
        </div>
      </div>
    </header>
  );
};

export default Header;