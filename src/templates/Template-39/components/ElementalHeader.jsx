import React, { useState, useEffect } from 'react';

const ElementalHeader = ({ business, onOpenSearch }) => {
  const { name = 'ELEMENTAL // LAB', logo = null, location = 'Bench 04' } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 lg:px-8 pt-3 transition-all duration-300 font-mono">
      <div
        className={`max-w-7xl mx-auto rounded-2xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 border transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080A0F]/95 backdrop-blur-xl border-cyan-500/30 shadow-2xl shadow-cyan-950/40 text-white'
            : 'bg-[#0E121B]/85 backdrop-blur-md border-white/10 text-white'
        }`}
      >
        {/* Atomic Brand Lockup */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-cyan-500/10 border border-cyan-400/50 text-cyan-300 flex items-center justify-center font-black text-xs shrink-0 group-hover:bg-cyan-400 group-hover:text-black transition-all shadow-[0_0_12px_rgba(6,182,212,0.3)]">
            {logo || '⚗️'}
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-sm font-black tracking-widest uppercase block leading-none truncate text-white">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-bold text-cyan-400 mt-1 block truncate">
              {location} • PERIODIC TABLE V39
            </span>
          </div>
        </button>

        {/* Telemetry Indicator */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[10px] text-zinc-400">
            <span>pH SCALE:</span>
            <span className="text-cyan-300 font-bold">7.2 (EQUILIBRIUM)</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[10px] sm:text-xs font-bold text-cyan-300 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="hidden xs:inline">REACTIONS ACTIVE</span>
            <span className="xs:hidden">LIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ElementalHeader;