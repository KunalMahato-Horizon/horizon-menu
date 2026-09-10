import React from 'react';

const DietaryPill = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const dotColor = isVeg ? 'bg-[#1F2B20]' : isEgg ? 'bg-[#E8A948]' : 'bg-[#D96B43]';
  const label = isVeg ? 'Plant' : isEgg ? 'Egg' : 'Hearth Catch';

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EFE8DC] text-[10px] font-mono font-bold text-[#1F2B20]">
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
    <article className="group relative rounded-2xl p-4 sm:p-5 bg-white border border-[#E5DDD0] hover:border-[#D96B43] hover:shadow-sm transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Badges & Price */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <DietaryPill type={type} />
            {isSpecial && (
              <span className="px-2 py-0.5 rounded-full bg-[#D96B43]/10 text-[#D96B43] text-[10px] font-mono font-bold uppercase">
                ✦ Specialty
              </span>
            )}
            {spicy && (
              <span className="text-[10px] font-mono text-[#D96B43] bg-[#D96B43]/10 px-2 py-0.5 rounded-full font-bold">
                Smoked Chili 🌶
              </span>
            )}
          </div>

          <span className="text-base sm:text-lg font-serif font-bold text-[#1F2B20] shrink-0">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-serif font-bold text-[#1F2B20] group-hover:text-[#D96B43] transition-colors leading-snug mb-1.5">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-[#4E564E] leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3">
            {description}
          </p>
        )}
      </div>

      {/* Footer Tags & Image */}
      <div className="flex items-end justify-between gap-2 pt-2 mt-auto border-t border-[#F2ECE1]">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span key={idx} className="text-[10px] font-mono text-[#788078] bg-[#F4EFE6] px-2 py-0.5 rounded-full">
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-[#E5DDD0] bg-[#EFE8DC]">
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