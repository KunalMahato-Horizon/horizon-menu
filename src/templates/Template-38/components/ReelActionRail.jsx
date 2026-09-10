import React, { useState } from 'react';

const ReelActionRail = ({ item, onOpenSpecs }) => {
  const [isSaved, setIsSaved] = useState(false);
  const { type = null, spicy = false } = item || {};
  const isVeg = type?.toLowerCase() === 'veg';

  return (
    <aside
      aria-label="Dish Quick Actions"
      className="absolute right-3 sm:right-6 bottom-28 sm:bottom-32 z-20 flex flex-col items-center gap-3 font-mono"
    >
      {/* 1. Bookmark / Favorite */}
      <button
        onClick={() => setIsSaved(!isSaved)}
        className={`w-11 h-11 rounded-full border flex flex-col items-center justify-center transition-all active:scale-90 ${
          isSaved
            ? 'bg-[#FF0055] border-[#FF0055] text-white shadow-lg shadow-[#FF0055]/30'
            : 'bg-black/60 border-white/20 text-white backdrop-blur-md'
        }`}
        title="Bookmark Dish"
      >
        <span className="text-base leading-none">{isSaved ? '♥' : '♡'}</span>
        <span className="text-[8px] font-bold mt-0.5">{isSaved ? 'SAVED' : 'SAVE'}</span>
      </button>

      {/* 2. Specs / Ingredients Drawer Trigger */}
      <button
        onClick={onOpenSpecs}
        className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 hover:border-[#CCFF00] text-white flex flex-col items-center justify-center transition-all active:scale-90"
        title="Recipe Breakdown"
      >
        <span className="text-base leading-none">📋</span>
        <span className="text-[8px] font-bold mt-0.5 text-white/80">SPECS</span>
      </button>

      {/* 3. Dietary Indicator */}
      {type && (
        <div
          className={`w-11 h-11 rounded-full border backdrop-blur-md flex flex-col items-center justify-center ${
            isVeg
              ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-400'
              : 'bg-rose-950/80 border-rose-500/40 text-rose-400'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-current mb-0.5" />
          <span className="text-[8px] font-black">{isVeg ? 'VEG' : 'MEAT'}</span>
        </div>
      )}

      {/* 4. Heat Modifier Indicator */}
      {spicy && (
        <div className="w-11 h-11 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex flex-col items-center justify-center text-amber-400">
          <span className="text-base leading-none">🌶️</span>
          <span className="text-[8px] font-black">HOT</span>
        </div>
      )}
    </aside>
  );
};

export default ReelActionRail;