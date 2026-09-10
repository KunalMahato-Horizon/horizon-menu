import React from 'react';

const DietaryBadge = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const dotColor = isVeg ? 'bg-emerald-400' : isEgg ? 'bg-amber-400' : 'bg-rose-500';
  const label = isVeg ? 'Veg' : isEgg ? 'Egg' : 'Non-Veg';

  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-[10px] font-mono text-white/80">
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor} shadow-sm`} />
      <span>{label}</span>
    </span>
  );
};

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

  const isHighlighted = tags.some((t) => ['Popular', 'Bestseller', 'Must Try', "Chef's Special"].includes(t));

  return (
    <article className="group relative rounded-2xl p-4 sm:p-5 bg-[#12141C]/60 hover:bg-[#161924] border border-white/[0.07] hover:border-[#E2B855]/40 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-4 mb-2.5">
          {/* Header Metadata */}
          <div className="flex items-center gap-2 flex-wrap">
            <DietaryBadge type={type} />
            {isHighlighted && (
              <span className="px-2 py-0.5 rounded-md bg-[#E2B855]/15 border border-[#E2B855]/30 text-[#E2B855] text-[10px] font-mono uppercase tracking-wider font-semibold">
                Signature
              </span>
            )}
            {spicy && (
              <span className="px-2 py-0.5 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-mono">
                🌶 Spicy
              </span>
            )}
          </div>

          {/* Price Tag */}
          <span className="text-base sm:text-lg font-mono font-bold text-[#E2B855] shrink-0">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#E2B855] transition-colors leading-snug mb-2">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-white/50 leading-relaxed line-clamp-2 sm:line-clamp-3 mb-4 font-light">
            {description}
          </p>
        )}
      </div>

      {/* Image Thumbnail & Secondary Tags */}
      <div className="flex items-end justify-between gap-3 pt-2 mt-auto border-t border-white/[0.05]">
        <div className="flex items-center gap-1.5 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special"].includes(t))
            .map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono text-white/40 bg-white/[0.03] px-2 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-[#0E1017]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default MenuItem;