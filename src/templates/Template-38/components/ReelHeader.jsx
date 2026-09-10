import React from 'react';

const ReelHeader = ({ business, activeIndex, totalDishes, onOpenIndex }) => {
  const { name = 'NOVA // REEL', logo = null, location = 'Table 04' } = business || {};

  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-4 py-3 flex items-center justify-between font-mono pointer-events-none">
      {/* Brand Badge */}
      <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full pointer-events-auto">
        <div className="w-5 h-5 rounded-full bg-[#CCFF00] text-black flex items-center justify-center font-black text-[10px]">
          {logo || '▶'}
        </div>
        <span className="text-xs font-black tracking-wider uppercase text-white">
          {name}
        </span>
        <span className="text-[10px] text-white/40 hidden sm:inline">•</span>
        <span className="text-[10px] text-[#CCFF00] uppercase font-bold hidden sm:inline">
          {location}
        </span>
      </div>

      {/* Progress Counter & Index Trigger */}
      <div className="flex items-center gap-2 pointer-events-auto">
        <div className="bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-xs text-white">
          <span className="text-[#CCFF00] font-black">{String(activeIndex + 1).padStart(2, '0')}</span>
          <span className="text-white/40"> / {String(totalDishes).padStart(2, '0')}</span>
        </div>

        <button
          onClick={onOpenIndex}
          className="bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/15 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors active:scale-95"
        >
          <span>☰</span>
          <span className="hidden sm:inline">All Dishes</span>
        </button>
      </div>
    </header>
  );
};

export default ReelHeader;