import React from 'react';

const DietaryIcon = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const borderColor = isVeg
    ? 'border-emerald-700'
    : isEgg
    ? 'border-amber-600'
    : 'border-rose-700';

  const dotColor = isVeg
    ? 'bg-emerald-700'
    : isEgg
    ? 'bg-amber-600'
    : 'bg-rose-700';

  return (
    <span
      className={`inline-flex items-center justify-center w-3.5 h-3.5 border-[1.5px] ${borderColor} rounded-[3px] p-[1.5px] shrink-0`}
      title={isVeg ? 'Vegetarian' : isEgg ? 'Contains Egg' : 'Non-Vegetarian'}
      aria-label={isVeg ? 'Vegetarian' : isEgg ? 'Contains Egg' : 'Non-Vegetarian'}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
    </span>
  );
};

const MenuItem = ({ item }) => {
  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null, // 'veg' | 'non-veg' | 'egg'
    spicy = false,
    tags = [],
  } = item || {};

  const isPopular = tags.some((tag) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special"].includes(tag)
  );
  const secondaryTags = tags.filter(
    (tag) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special"].includes(tag)
  );

  return (
    <article className="group relative p-4 sm:p-5 rounded-2xl border border-transparent hover:border-[#E5E0D5] hover:bg-white/70 hover:shadow-xs transition-all duration-200">
      <div className="flex items-start justify-between gap-4 sm:gap-6">
        {/* Left Side: Content */}
        <div className="flex-1 min-w-0">
          {/* Badge & Dietary Metadata */}
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <DietaryIcon type={type} />

            {isPopular && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#B88746]/10 text-[#B88746] text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1 h-1 rounded-full bg-[#B88746]" />
                Must Try
              </span>
            )}

            {spicy && (
              <span
                className="inline-flex items-center gap-1 text-[11px] text-amber-700 font-medium bg-amber-50 px-1.5 py-0.5 rounded"
                title="Spicy dish"
              >
                <svg className="w-3 h-3 fill-current text-rose-600" viewBox="0 0 24 24">
                  <path d="M12 2c-.6 0-1 .4-1 1 0 2.2-1.8 4-4 4-.6 0-1 .4-1 1 0 5 4 9 9 9s9-4 9-9c0-.6-.4-1-1-1-2.2 0-4-1.8-4-4 0-.6-.4-1-1-1s-1 .4-1 1c0 1.1-.9 2-2 2s-2-.9-2-2c0-.6-.4-1-1-1z" />
                </svg>
                <span className="text-[10px] font-semibold uppercase">Spicy</span>
              </span>
            )}
          </div>

          {/* Title & Price Header */}
          <div className="flex items-baseline justify-between gap-2 mb-1.5">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#2C2A24] group-hover:text-[#B88746] transition-colors leading-snug">
              {name}
            </h3>
          </div>

          {/* Description */}
          {description && (
            <p className="text-xs sm:text-sm text-[#6C675B] leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3">
              {description}
            </p>
          )}

          {/* Secondary Tags & Mobile Price */}
          <div className="flex items-center justify-between gap-2 flex-wrap pt-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              {secondaryTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-2 py-0.5 text-[10px] font-medium text-[#8A8578] bg-[#EFECE6] rounded-md tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Price (Visible in bottom row on all viewports) */}
            <span className="text-sm sm:text-base font-serif font-bold text-[#2C2A24] tabular-nums tracking-tight">
              ₹{Number(price).toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Right Side: Optional Dish Thumbnail */}
        {image && (
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl overflow-hidden bg-[#EFECE6] border border-[#E5E0D5]/80 shadow-xs">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:opacity-0 transition-opacity" />
          </div>
        )}
      </div>
    </article>
  );
};

export default MenuItem;