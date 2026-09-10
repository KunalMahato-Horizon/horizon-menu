import React, { useState } from 'react';

const DietaryBadge = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const colorClass = isVeg
    ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
    : isEgg
    ? 'text-amber-700 bg-amber-50 border-amber-200'
    : 'text-rose-700 bg-rose-50 border-rose-200';

  const label = isVeg ? 'VEG' : isEgg ? 'EGG' : 'NON-VEG';

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[9px] font-mono font-black tracking-wider ${colorClass}`}>
      <span>●</span>
      <span>{label}</span>
    </span>
  );
};

const MenuItem = ({ item, ledgerNumber = '01' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = item || {};

  const isBestseller = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className={`group border-b border-black/10 transition-all duration-200 cursor-pointer ${
        isExpanded ? 'bg-white shadow-md rounded-2xl my-2 border' : 'hover:bg-white/80'
      }`}
    >
      {/* 1. Main Collapsed Line-Item Row */}
      <div className="p-4 sm:p-5 flex items-center justify-between gap-4">
        
        {/* Left: Index & Dish Meta */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
          <span className="text-xs font-mono font-bold text-black/30 shrink-0">
            {ledgerNumber}
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-sm sm:text-base font-mono font-black text-[#0F0F11] group-hover:text-[#0047FF] transition-colors uppercase truncate">
                {name}
              </span>
              <DietaryBadge type={type} />
              {isBestseller && (
                <span className="px-1.5 py-0.5 rounded bg-black text-white text-[8px] font-mono font-black uppercase">
                  TOP
                </span>
              )}
              {spicy && (
                <span className="text-[10px]" title="Spicy">🌶️</span>
              )}
            </div>

            {/* Quick Teaser Description */}
            {!isExpanded && description && (
              <p className="text-xs font-mono text-black/50 truncate max-w-lg">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Right: Dot-Leader & Price */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-sm sm:text-base font-mono font-black text-[#0F0F11]">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>

          {/* Expansion Chevron Indicator */}
          <div
            className={`w-7 h-7 rounded-lg border border-black/10 flex items-center justify-center font-mono text-xs transition-transform duration-200 ${
              isExpanded ? 'rotate-180 bg-[#0047FF] text-white border-[#0047FF]' : 'bg-[#F7F7F8] text-black/50'
            }`}
          >
            ↓
          </div>
        </div>
      </div>

      {/* 2. Expanded Architectural Tray */}
      {isExpanded && (
        <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-black/5 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
            
            {/* Left: Widescreen Dish Imagery */}
            <div className="md:col-span-6">
              {image ? (
                <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden bg-black/5 border border-black/10">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-40 rounded-xl bg-black/5 border border-dashed border-black/20 flex flex-col items-center justify-center text-black/40 font-mono text-xs">
                  <span>[NO DISH PHOTOGRAPH LOGGED]</span>
                </div>
              )}
            </div>

            {/* Right: Complete Specifications & Tasting Notes */}
            <div className="md:col-span-6 space-y-3 font-mono text-xs">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-black/40 font-bold block mb-1">
                  DETAILED SPECIFICATION
                </span>
                <p className="text-black/80 leading-relaxed text-xs sm:text-sm">
                  {description}
                </p>
              </div>

              {tags.length > 0 && (
                <div className="pt-2 border-t border-black/5">
                  <span className="text-[9px] uppercase tracking-widest text-black/40 font-bold block mb-1.5">
                    PROFILE TAGS
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-black/5 text-black/70 text-[10px]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2 flex items-center justify-between text-[10px] text-black/40">
                <span>PLATED FRESH TO ORDER</span>
                <span className="text-[#0047FF] font-bold">[TAP AGAIN TO CLOSE]</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;