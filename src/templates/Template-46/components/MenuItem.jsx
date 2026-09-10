import React from 'react';
import { SnowCap, WaxSeal } from './ChristmasArt';

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
    <article className="group relative rounded-3xl pt-2 pb-5 px-5 bg-gradient-to-b from-[#103023] via-[#0C241B] to-[#081B13] border-2 border-[#D4AF37]/30 hover:border-[#D4AF37]/80 transition-all duration-300 flex flex-col justify-between shadow-xl font-serif">
      {/* Individual Snow Drift Cap sitting on Card Top */}
      <div className="absolute -top-3 left-4 right-4 pointer-events-none z-10">
        <SnowCap className="w-full h-3.5 text-white filter drop-shadow-xs" />
      </div>

      <div>
        {/* Card Header Badges & Stamped Brass Price */}
        <div className="flex items-start justify-between gap-3 mb-2 font-sans pt-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            {type && (
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-black uppercase border ${
                  isVeg
                    ? 'border-emerald-500/50 text-emerald-300 bg-emerald-950/40'
                    : 'border-rose-500/50 text-rose-300 bg-rose-950/40'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isVeg ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                <span>{isVeg ? 'Vegetarian' : 'Winter Roast'}</span>
              </span>
            )}

            {isSpecial && (
              <span className="px-2 py-0.5 rounded-md bg-[#991B1B] text-white text-[9px] font-black uppercase tracking-wide border border-rose-400/40 shadow-xs">
                ★ Holiday Special
              </span>
            )}

            {spicy && (
              <span className="text-[9px] text-amber-300 bg-amber-950/60 border border-amber-500/40 px-1.5 py-0.5 rounded font-bold">
                Spiced Warmth 🌶
              </span>
            )}
          </div>

          <span className="text-base sm:text-lg font-black text-[#FDE68A] shrink-0 font-serif">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Dish Title */}
        <h3 className="text-base sm:text-lg font-black text-[#FFFBEB] group-hover:text-[#FDE68A] transition-colors leading-snug mb-1.5">
          {name}
        </h3>

        {/* Narrative Description */}
        {description && (
          <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3 font-light">
            {description}
          </p>
        )}
      </div>

      {/* Footer Tags & Food Photo */}
      <div className="flex items-end justify-between gap-2 pt-2.5 mt-auto border-t border-white/10 font-sans">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span
                key={idx}
                className="text-[9px] text-zinc-300 bg-black/40 px-2 py-0.5 rounded border border-white/5"
              >
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-[#D4AF37]/45 bg-black shadow-md">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-95"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default MenuItem;