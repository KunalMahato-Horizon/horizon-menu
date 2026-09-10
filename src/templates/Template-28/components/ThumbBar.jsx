import React from 'react';

const ThumbBar = ({ dietaryFilter, setDietaryFilter, onJumpToCategory, categories = [] }) => {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 px-4 pointer-events-none">
      <div className="max-w-md mx-auto rounded-2xl bg-[#0E1015]/90 backdrop-blur-2xl border border-white/15 p-2 shadow-2xl flex items-center justify-between pointer-events-auto">
        {/* Dietary Filters Switcher */}
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5 font-mono text-[10px]">
          {['all', 'veg', 'non-veg'].map((filter) => (
            <button
              key={filter}
              onClick={() => setDietaryFilter(filter)}
              className={`px-2.5 py-1 rounded-lg uppercase font-bold transition-colors ${
                dietaryFilter === filter
                  ? 'bg-[#FF5E00] text-white'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {filter === 'non-veg' ? 'meat' : filter}
            </button>
          ))}
        </div>

        {/* Jump Menu Trigger */}
        <select
          onChange={(e) => onJumpToCategory(e.target.value)}
          className="bg-white/10 border border-white/15 rounded-xl px-2.5 py-1.5 text-white font-mono text-[10px] font-bold focus:outline-none uppercase"
          defaultValue=""
        >
          <option value="" disabled className="bg-[#141721]">
            Jump to Course ▾
          </option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id} className="bg-[#141721]">
              {cat.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ThumbBar;