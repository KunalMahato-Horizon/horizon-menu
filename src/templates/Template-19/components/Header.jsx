import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = 'BENTO // KITCHEN', logo = null } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 transition-all duration-200">
      <div
        className={`max-w-6xl mx-auto rounded-2xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 border transition-all duration-200 ${
          isScrolled
            ? 'bg-[#0A0C10]/95 backdrop-blur-xl border-white/15 shadow-2xl shadow-black/80'
            : 'bg-[#10141D]/80 backdrop-blur-md border-white/10'
        }`}
      >
        {/* Hardware Status Lockup */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#D4FF00] text-[#0A0C10] flex items-center justify-center font-mono font-black text-sm sm:text-base shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(212,255,0,0.3)]">
            {logo || '■'}
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-sm font-mono font-black text-white tracking-wider block leading-none truncate uppercase">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#D4FF00] uppercase font-semibold mt-1 block truncate">
              SYS.V19 // DINE-IN SLATE
            </span>
          </div>
        </button>

        {/* Live Hardware Telemetry Badge */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[10px] font-mono text-white/70">
            <span className="text-white/30">TABLE:</span>
            <span className="text-[#D4FF00] font-bold">QR-ACTIVE</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-[10px] sm:text-[11px] font-mono font-bold text-[#D4FF00] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-ping" />
            <span>KITCHEN LIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;