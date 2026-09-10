import React, { useState, useEffect } from 'react';

const GuildHUDHeader = ({ business }) => {
  const { name = "ALCHEMIST'S CODEX", logo = null, location = 'Tavern Table 04' } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 transition-all duration-300 font-mono">
      <div
        className={`max-w-7xl mx-auto rounded-2xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 border-2 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0D13]/95 backdrop-blur-xl border-[#F59E0B]/40 shadow-2xl shadow-black/90'
            : 'bg-[#121622]/90 backdrop-blur-md border-[#F59E0B]/20'
        }`}
      >
        {/* Guild Crest */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#F59E0B] via-[#D97706] to-[#78350F] text-[#0B0D13] flex items-center justify-center font-black text-sm shadow-md shadow-[#F59E0B]/20 group-hover:scale-105 transition-transform shrink-0 border border-[#FDE68A]/40">
            {logo || '⚔️'}
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-sm font-black tracking-widest uppercase block leading-none truncate text-[#FDE68A]">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-bold text-[#F59E0B] mt-1 block truncate">
              {location} • GUILD LEVEL 35
            </span>
          </div>
        </button>

        {/* RPG Party Telemetry HUD */}
        <div className="flex items-center gap-2 sm:gap-4 text-xs">
          {/* Health & Mana Bars (Hidden on tiny screens) */}
          <div className="hidden md:flex items-center gap-3 bg-black/40 px-3 py-1.5 rounded-xl border border-white/10 text-[10px]">
            <div className="flex items-center gap-1.5">
              <span className="text-rose-400 font-bold">HP</span>
              <div className="w-16 h-2 rounded-full bg-rose-950 overflow-hidden border border-rose-800/50">
                <div className="w-full h-full bg-gradient-to-r from-rose-600 to-rose-400 animate-pulse" />
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sky-400 font-bold">MP</span>
              <div className="w-16 h-2 rounded-full bg-sky-950 overflow-hidden border border-sky-800/50">
                <div className="w-full h-full bg-gradient-to-r from-sky-600 to-sky-400" />
              </div>
            </div>
          </div>

          {/* Active Tavern Ember Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-[#F59E0B]/15 border border-[#F59E0B]/30 text-[10px] sm:text-xs font-bold text-[#FDE68A] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
            <span className="hidden xs:inline">HEARTH LIT • TABLE ACTIVE</span>
            <span className="xs:hidden">TAVERN ON</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GuildHUDHeader;