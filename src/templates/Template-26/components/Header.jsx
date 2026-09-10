import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = 'BLUEPRINT // LAB', logo = null } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 transition-all duration-200">
      <div
        className={`max-w-6xl mx-auto rounded-xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 border transition-all duration-200 font-mono ${
          isScrolled
            ? 'bg-[#071324]/95 backdrop-blur-md border-[#00F0FF]/30 shadow-lg shadow-[#00F0FF]/5 text-white'
            : 'bg-[#0A192F]/90 backdrop-blur-xs border-[#00F0FF]/20 text-white'
        }`}
      >
        {/* Schematic Brand Block */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-[#00F0FF]/10 border border-[#00F0FF]/50 text-[#00F0FF] flex items-center justify-center font-mono font-black text-xs group-hover:bg-[#00F0FF] group-hover:text-[#0A192F] transition-colors shrink-0">
            {logo || '⌖'}
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-sm font-black tracking-widest uppercase block leading-none truncate text-[#F0F4F8]">
              {name}
            </span>
            <span className="text-[9px] tracking-widest text-[#48CAE4] uppercase font-bold mt-1 block truncate">
              DWG. NO. 26 // REV. C • TABLE SPEC
            </span>
          </div>
        </button>

        {/* Blueprint Status Stamp */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#00F0FF]/5 border border-[#00F0FF]/20 text-[10px] text-[#48CAE4]">
            <span>STATION:</span>
            <span className="text-white font-bold">QR-ONLINE</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00F0FF]/15 border border-[#00F0FF]/40 text-[10px] sm:text-[11px] font-bold text-[#00F0FF] shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping" />
            <span className="hidden xs:inline">HEARTH // ACTIVE</span>
            <span className="xs:hidden">LIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;