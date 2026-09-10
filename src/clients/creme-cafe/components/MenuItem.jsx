import React, { useState } from 'react';

const MenuItem = ({ item }) => {
  const {
    name = "",
    description = "",
    price = 0,
    type = "veg",
    featured = false,
  } = item;

  const isMultiSize = typeof price === 'object' && price !== null;
  const sizeKeys = isMultiSize ? Object.keys(price) : [];
  const [selectedSize, setSelectedSize] = useState(sizeKeys[0] || null);

  const displayPrice = isMultiSize ? price[selectedSize] : price;

  return (
    <article className="group relative flex flex-col justify-between p-5 rounded-2xl bg-gradient-to-br from-[#3E2211] via-[#351B0C] to-[#261206] text-white border border-[#5A3319] hover:border-[#F2B828]/60 hover:shadow-[0_12px_30px_-8px_rgba(242,184,40,0.18)] transition-all duration-300 overflow-hidden">
      {/* Featured Gold Corner Ribbon */}
      {featured && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-r from-[#F7D066] to-[#D99A1A] text-[#2B160A] text-[9px] font-black tracking-widest uppercase py-1 px-4 shadow-md rounded-bl-xl flex items-center gap-1 font-sans">
            <span>★</span>
            <span>CHEF'S PICK</span>
          </div>
        </div>
      )}

      <div>
        {/* Dietary Tag & Category Indicator */}
        <div className="flex items-center gap-2 mb-2.5">
          {type && (
            <span
              className={`inline-flex items-center justify-center w-3.5 h-3.5 border rounded-xs p-0.5 bg-black/20 ${
                type === 'veg' ? 'border-emerald-400' : 'border-rose-400'
              }`}
              title={type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  type === 'veg' ? 'bg-emerald-400' : 'bg-rose-400'
                }`}
              />
            </span>
          )}
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#F2B828]/70">
            Artisanal
          </span>
        </div>

        {/* Item Name */}
        <h4 className="text-base sm:text-lg font-serif font-bold text-stone-100 group-hover:text-[#F2B828] transition-colors pr-16 leading-snug">
          {name}
        </h4>

        {/* Description */}
        {description && (
          <p className="text-xs text-stone-300/70 font-sans leading-relaxed mt-2 line-clamp-2">
            {description}
          </p>
        )}
      </div>

      {/* Pricing & Interactive Size Switcher */}
      <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between gap-3">
        {isMultiSize ? (
          <div className="flex items-center bg-black/40 p-0.5 rounded-full border border-white/10">
            {sizeKeys.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all duration-200 uppercase font-sans ${
                  selectedSize === size
                    ? 'bg-[#F2B828] text-[#2B160A] shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        ) : (
          <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
            Standard Pour
          </span>
        )}

        {/* Price Pill */}
        <div className="inline-flex items-baseline gap-1 bg-[#F2B828] text-[#2B160A] px-3.5 py-1 rounded-full shadow-sm font-sans">
          <span className="text-[11px] font-bold">₹</span>
          <span className="text-sm sm:text-base font-black tracking-tight tabular-nums">
            {displayPrice}
          </span>
        </div>
      </div>
    </article>
  );
};

export default MenuItem;