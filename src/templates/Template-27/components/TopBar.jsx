import React from 'react';

const TopBar = ({ business, searchQuery, setSearchQuery, dietaryFilter, setDietaryFilter }) => {
  const { name = 'STUDIO RAW', logo = null, businessType = 'Atelier Dining' } = business || {};

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#1A1A1A]/10 px-4 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Brand Lockup */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#1A1A1A] text-[#FAF8F5] flex items-center justify-center font-mono font-black text-xs">
              {logo || '●'}
            </div>
            <div>
              <span className="text-xs sm:text-sm font-black tracking-tight text-[#1A1A1A] uppercase block leading-none">
                {name}
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#FF3B00] uppercase font-bold mt-0.5 block">
                {businessType} • DUAL-STAGE
              </span>
            </div>
          </div>

          <div className="inline-flex sm:hidden items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-mono font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>TABLE ACTIVE</span>
          </div>
        </div>

        {/* Integrated Search & Quick Toggle */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter plates..."
              className="w-full pl-8 pr-3 py-1.5 bg-white border border-[#1A1A1A]/15 rounded-lg text-xs font-mono text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#1A1A1A]"
            />
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-[#1A1A1A]/40 font-mono">⌕</span>
          </div>

          <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-[#1A1A1A]/15 font-mono text-[10px]">
            {['all', 'veg', 'non-veg'].map((filter) => (
              <button
                key={filter}
                onClick={() => setDietaryFilter(filter)}
                className={`px-2 py-0.5 rounded uppercase font-bold transition-colors ${
                  dietaryFilter === filter
                    ? 'bg-[#1A1A1A] text-white'
                    : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]'
                }`}
              >
                {filter === 'non-veg' ? 'meat' : filter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;