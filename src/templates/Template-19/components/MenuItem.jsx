import React from 'react';

const DietaryPill = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const colorClass = isVeg
    ? 'text-[#4ADE80] border-[#4ADE80]/30 bg-[#4ADE80]/10'
    : isEgg
    ? 'text-[#FBBF24] border-[#FBBF24]/30 bg-[#FBBF24]/10'
    : 'text-[#F87171] border-[#F87171]/30 bg-[#F87171]/10';

  const label = isVeg ? 'VEG' : isEgg ? 'EGG' : 'NON-VEG';

  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[9px] font-mono font-bold tracking-wider ${colorClass}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      <span>{label}</span>
    </span>
  );
};

const MenuItem = ({ item, isSpotlight = false }) => {
  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = item || {};

  const isHeroTag = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article
      className={`group relative rounded-3xl p-5 bg-[#121620] border border-white/10 hover:border-[#D4FF00]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg ${
        isSpotlight ? 'md:col-span-2 bg-gradient-to-br from-[#161C28] to-[#121620] border-white/20' : ''
      }`}
    >
      <div>
        {/* Card Header & Price */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <DietaryPill type={type} />
            {isHeroTag && (
              <span className="px-2 py-0.5 rounded-md bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-[#D4FF00] text-[9px] font-mono font-bold uppercase">
                ★ FEATURED
              </span>
            )}
            {spicy && (
              <span className="px-2 py-0.5 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[9px] font-mono font-bold">
                SPICE: ELEVATED
              </span>
            )}
          </div>

          {/* Pill Price */}
          <div className="px-3 py-1 rounded-xl bg-white/[0.06] border border-white/15 text-sm sm:text-base font-mono font-black text-white shrink-0 group-hover:bg-[#D4FF00] group-hover:text-[#0A0C10] transition-colors">
            ₹{Number(price).toLocaleString('en-IN')}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-mono font-black text-white group-hover:text-[#D4FF00] transition-colors leading-snug mb-2 uppercase">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-mono line-clamp-2 sm:line-clamp-3 mb-4">
            {description}
          </p>
        )}
      </div>

      {/* Footer Meta & Micro Thumbnail */}
      <div className="flex items-end justify-between gap-2 pt-3 mt-auto border-t border-white/5">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span key={idx} className="text-[9px] font-mono text-white/40 bg-white/[0.03] px-2 py-0.5 rounded border border-white/5">
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 border border-white/10 bg-[#0A0C10]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default MenuItem;