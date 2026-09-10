import React from 'react';
import { CardCornerRangoli } from './DiwaliVisuals';

const MenuItem = ({ item }) => {
  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = item || {};

  const cleanType = (type || '').toLowerCase();
  const isVeg = cleanType === 'veg' || cleanType === 'vegetarian';
  const isSpecial = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative rounded-2xl p-5 bg-[#1F1726] border border-[#D4A373]/25 hover:border-[#D4A373]/70 transition-all duration-300 flex flex-col justify-between shadow-md font-serif overflow-hidden">
      {/* Corner Rangoli Motif */}
      <div className="absolute top-0 left-0 pointer-events-none">
        <CardCornerRangoli className="w-7 h-7" />
      </div>

      <div>
        {/* Top Metadata */}
        <div className="flex items-start justify-between gap-3 mb-2 font-sans">
          <div className="flex items-center gap-1.5 flex-wrap">
            {type && (
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase border ${
                  isVeg
                    ? 'border-emerald-600/40 text-emerald-300 bg-emerald-950/40'
                    : 'border-rose-600/40 text-rose-300 bg-rose-950/40'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isVeg ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                <span>{isVeg ? 'Shuddha Veg' : 'Non-Veg'}</span>
              </span>
            )}

            {isSpecial && (
              <span className="px-2 py-0.5 rounded-md bg-[#D4A373]/15 text-[#D4A373] text-[9px] font-bold uppercase border border-[#D4A373]/30">
                ★ Specialty
              </span>
            )}

            {spicy && (
              <span className="text-[9px] text-[#E07A5F] bg-[#E07A5F]/10 border border-[#E07A5F]/30 px-1.5 py-0.5 rounded font-bold">
                Spiced 🌶
              </span>
            )}
          </div>

          <span className="text-base sm:text-lg font-bold text-[#F4EBD9] shrink-0 font-serif">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-[#F4EBD9] group-hover:text-[#D4A373] transition-colors leading-snug mb-1.5">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3 font-light">
            {description}
          </p>
        )}
      </div>

      {/* Footer Details */}
      <div className="flex items-end justify-between gap-2 pt-2 mt-auto border-t border-white/5 font-sans">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span
                key={idx}
                className="text-[9px] text-zinc-400 bg-black/30 px-2 py-0.5 rounded border border-white/5"
              >
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-[#D4A373]/30 bg-black/40 shadow-xs">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default MenuItem;