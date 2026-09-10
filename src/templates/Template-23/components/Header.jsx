import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = 'VAULT // OBSIDIAN', logo = null } = business || {};
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 pt-3 pointer-events-none">
      <div className="max-w-6xl mx-auto rounded-2xl bg-[#090A0F]/85 backdrop-blur-xl border border-white/[0.08] flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 shadow-2xl pointer-events-auto">
        {/* Brand Monogram */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#DFB76C] to-[#99732B] p-[1px] shadow-lg shadow-[#DFB76C]/10 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#090A0F] rounded-[11px] flex items-center justify-center font-mono font-black text-xs text-[#DFB76C]">
              {logo || 'V'}
            </div>
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-sm font-mono font-black tracking-widest text-white block leading-none truncate uppercase">
              {name}
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#DFB76C] uppercase font-bold mt-1 block truncate">
              TASTING ROOM • TABLE ACTIVE
            </span>
          </div>
        </button>

        {/* Live Service & Table Clock */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-white/50">
            <span>DISPATCH:</span>
            <span className="text-white font-bold">{timeString || 'LIVE'}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFB76C]/10 border border-[#DFB76C]/25 text-[10px] sm:text-[11px] font-mono font-bold text-[#DFB76C] shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DFB76C] animate-pulse" />
            <span className="hidden xs:inline">CELLAR & HEARTH ON</span>
            <span className="xs:hidden">LIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;