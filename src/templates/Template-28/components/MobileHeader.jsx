import React from 'react';

const MobileHeader = ({ business, onOpenSearch }) => {
  const { name = 'NOVA // POCKET', logo = null, location = 'Table 04' } = business || {};

  return (
    <header className="sticky top-0 z-40 bg-[#0E1015]/95 backdrop-blur-xl border-b border-white/10 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Brand Stamp */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#FF5E00] to-[#FFAA00] text-black flex items-center justify-center font-mono font-black text-xs shadow-md shadow-[#FF5E00]/20">
            {logo || '●'}
          </div>
          <div>
            <span className="text-xs font-mono font-black text-white uppercase tracking-wider block leading-none">
              {name}
            </span>
            <span className="text-[9px] font-mono text-[#FF5E00] font-bold uppercase mt-0.5 block">
              {location} • LIVE ORDERING
            </span>
          </div>
        </div>

        {/* Search Trigger & Status */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSearch}
            aria-label="Search dishes"
            className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/10 text-white/80 flex items-center justify-center text-xs active:scale-90 transition-transform"
          >
            🔍
          </button>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>KITCHEN ON</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;