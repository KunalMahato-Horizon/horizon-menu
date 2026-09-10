import React from 'react';

const DietaryPill = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const dotColor = isVeg ? 'bg-emerald-600' : isEgg ? 'bg-amber-500' : 'bg-[#9E5A38]';
  const label = isVeg ? 'Veg' : isEgg ? 'Egg' : 'Non-Veg';

  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#FAF9F5] border border-[#E3DFD5] text-[10px] font-sans font-bold text-[#57534D]">
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

  const isSpecial = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group rounded-2xl p-4 sm:p-5 bg-white border border-[#E8E5DF] hover:border-[#1A1918]/30 transition-all duration-200 flex items-start justify-between gap-4 shadow-xs">
      <div className="flex-1 min-w-0 flex flex-col justify-between h-full space-y-2">
        <div>
          {/* Header Row: Dietary & Highlight */}
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <DietaryPill type={type} />
            {isSpecial && (
              <span className="px-2 py-0.5 rounded-md bg-[#9E5A38]/10 text-[#9E5A38] text-[10px] font-sans font-bold uppercase tracking-wider">
                Signature
              </span>
            )}
            {spicy && (
              <span className="text-[10px] font-sans text-rose-700 font-bold">
                Spicy 🌶
              </span>
            )}
          </div>

          {/* Dish Title & Price (Mobile-friendly Stack) */}
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1918] group-hover:text-[#9E5A38] transition-colors leading-snug">
              {name}
            </h3>
            <span className="text-sm sm:text-base font-serif font-black text-[#1A1918] shrink-0">
              ₹{Number(price).toLocaleString('en-IN')}
            </span>
          </div>

          {/* Description */}
          {description && (
            <p className="text-xs sm:text-sm text-[#57534D] font-sans leading-relaxed line-clamp-2 mt-1">
              {description}
            </p>
          )}
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex items-center gap-1 flex-wrap pt-1">
            {tags
              .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
              .map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-sans text-[#736E65] bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#E8E5DF]"
                >
                  #{tag}
                </span>
              ))}
          </div>
        )}
      </div>

      {/* Thumbnail Image */}
      {image && (
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-[#E8E5DF] bg-[#FAF9F5]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
    </article>
  );
};

export default MenuItem;