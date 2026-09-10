import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = 'CHROMA // LAB', logo = null } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#060709]/95 backdrop-blur-xl border-white/20 shadow-2xl shadow-black/80'
            : 'bg-[#0E1015]/80 backdrop-blur-md border-white/10'
        }`}
      >
        {/* Brand Chrome Seal */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl p-[1px] bg-gradient-to-tr from-[#00F5D4] via-[#7B2CBF] to-[#F72585] shrink-0 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#060709] rounded-[11px] flex items-center justify-center font-mono font-black text-xs text-white">
              {logo || '◈'}
            </div>
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-sm font-mono font-black tracking-widest uppercase block leading-none truncate bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#00F5D4] uppercase font-bold mt-1 block truncate">
              EXHIBIT 29 • TABLE PLATED
            </span>
          </div>
        </button>

        {/* Live Terminal & Table Status */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-zinc-400">
            <span>TERMINAL:</span>
            <span className="text-white font-bold">QR-ONLINE</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#00F5D4]/15 to-[#F72585]/15 border border-white/20 text-[10px] sm:text-[11px] font-mono font-bold text-white shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-ping" />
            <span className="hidden xs:inline">HEARTH ACTIVE</span>
            <span className="xs:hidden">LIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;