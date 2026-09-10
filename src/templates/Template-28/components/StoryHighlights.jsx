import React from 'react';

const StoryHighlights = ({ items = [], onSelectDish }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="py-4 border-b border-white/[0.06] bg-[#0A0C10]">
      <div className="px-4 mb-2 flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-bold">
          Chef's Specials & Pairings
        </span>
        <span className="text-[10px] font-mono text-[#FF5E00] font-bold">
          TAP TO VIEW
        </span>
      </div>

      <div className="flex items-center gap-3.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 py-1">
        {items.map((item, idx) => (
          <button
            key={item.id || idx}
            onClick={() => onSelectDish(item)}
            className="flex flex-col items-center gap-1.5 shrink-0 focus:outline-none group active:scale-95 transition-transform"
          >
            {/* Gradient Ring Story Circle */}
            <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#FF5E00] via-[#FF8800] to-yellow-400">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#181A20] border-2 border-[#0E1015]">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-lg">
                    ✨
                  </div>
                )}
              </div>
            </div>
            <span className="text-[10px] font-mono font-medium text-white/80 max-w-[68px] truncate text-center">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoryHighlights;