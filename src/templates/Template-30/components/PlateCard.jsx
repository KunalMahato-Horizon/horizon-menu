import React, { useState } from 'react';

const PlateCard = ({ item, index = 0 }) => {
  const [showNotes, setShowNotes] = useState(false);
  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = item || {};

  const isVeg = type?.toLowerCase() === 'veg';
  const isSpecial = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group rounded-2xl bg-[#14161F] border border-white/10 hover:border-[#FF5722]/50 p-4 sm:p-5 transition-all duration-200 flex flex-col justify-between font-mono shadow-lg shadow-black/40">
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`w-2 h-2 rounded-full ${isVeg ? 'bg-emerald-400' : 'bg-[#FF5722]'}`} />
            <span className="text-[9px] text-white/50 uppercase tracking-wider font-bold">
              PLATE 0{index + 1}
            </span>
            {isSpecial && (
              <span className="px-1.5 py-0.2 rounded bg-[#FF5722]/20 text-[#FF5722] text-[8px] font-black uppercase">
                Reserve
              </span>
            )}
            {spicy && <span className="text-[10px]">🌶️</span>}
          </div>

          <span className="text-sm sm:text-base font-black text-white">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-serif font-black text-white group-hover:text-[#FF5722] transition-colors leading-tight mb-2">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs text-white/60 font-sans leading-relaxed line-clamp-2 mb-3">
            {description}
          </p>
        )}

        {/* Expandable Tasting Notes */}
        {showNotes && (
          <div className="my-2 p-2.5 rounded-xl bg-black/40 border border-white/10 text-[10px] text-white/70 space-y-1 animate-fadeIn">
            <span className="text-[#FF5722] font-bold block uppercase tracking-widest">
              Prep & Pairing Note:
            </span>
            <p className="font-sans text-white/80">
              Cooked sequentially upon course advance. Ask table captain for craft beverage pairings.
            </p>
          </div>
        )}
      </div>

      {/* Image Thumbnail & Specs Action */}
      <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/5 mt-auto">
        <button
          onClick={() => setShowNotes(!showNotes)}
          className="text-[9px] font-bold uppercase text-[#FF5722] hover:underline"
        >
          {showNotes ? 'Hide Notes ▴' : 'Chef Notes ▾'}
        </button>

        {image && (
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-black/50 border border-white/10 shrink-0">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default PlateCard;