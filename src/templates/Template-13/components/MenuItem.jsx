import React from 'react';

const DietaryPill = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const dotColor = isVeg ? 'bg-emerald-600' : isEgg ? 'bg-amber-500' : 'bg-[#D95338]';
  const label = isVeg ? 'Plant-Based' : isEgg ? 'Egg' : 'Catch/Meat';

  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#0E3A73]/5 text-[10px] font-mono font-bold text-[#0E3A73]">
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
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

  const isChefPick = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative rounded-2xl p-4 sm:p-5 bg-white border border-[#E4DCD0] hover:border-[#0E3A73] hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Card Header & Price */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <DietaryPill type={type} />
            {isChefPick && (
              <span className="px-2 py-0.5 rounded-md bg-[#D95338]/10 text-[#D95338] text-[10px] font-mono font-black uppercase">
                Riviera Pick
              </span>
            )}
            {spicy && (
              <span className="text-[10px] font-mono font-bold text-[#D95338] bg-[#D95338]/10 px-1.5 py-0.5 rounded">
                🌶 Chili Heat
              </span>
            )}
          </div>

          <span className="text-base sm:text-lg font-mono font-black text-[#0E3A73] shrink-0">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-serif font-black text-[#0E3A73] group-hover:text-[#D95338] transition-colors leading-snug mb-1.5">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3">
            {description}
          </p>
        )}
      </div>

      {/* Tags & Thumbnail */}
      <div className="flex items-end justify-between gap-2 pt-2 mt-auto border-t border-[#F2ECE1]">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span key={idx} className="text-[10px] font-mono text-[#64748B] bg-[#F4EFE6] px-1.5 py-0.5 rounded">
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-[#E4DCD0] bg-[#F2ECE1]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default MenuItem;