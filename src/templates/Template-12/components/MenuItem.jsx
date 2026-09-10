import React from 'react';

const DietaryBadge = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const dotColor = isVeg ? 'bg-[#4A5844]' : isEgg ? 'bg-[#C47B5A]' : 'bg-[#9E3E3E]';
  const label = isVeg ? 'Plant-Based' : isEgg ? 'Egg' : 'Catch/Meat';

  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#5C5950] bg-[#E8E4DC] px-2 py-0.5 rounded">
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

  const isSpecial = tags.some((t) => ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t));

  return (
    <article className="group relative rounded-xl p-4 bg-[#F8F7F4] hover:bg-white border border-[#E2DDD3] hover:border-[#4A5844]/40 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Top Meta Line */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <DietaryBadge type={type} />
            {isSpecial && (
              <span className="px-2 py-0.5 rounded bg-[#4A5844]/10 text-[#4A5844] text-[10px] font-mono font-bold uppercase">
                Specialty
              </span>
            )}
            {spicy && (
              <span className="text-[10px] font-mono text-[#9E3E3E] bg-[#9E3E3E]/10 px-1.5 py-0.5 rounded">
                🌶 Spiced
              </span>
            )}
          </div>
          <span className="text-base font-serif font-bold text-[#1F211D] shrink-0">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Dish Title */}
        <h3 className="text-base font-serif font-bold text-[#1F211D] group-hover:text-[#4A5844] transition-colors leading-snug mb-1.5">
          {name}
        </h3>

        {/* Ingredients / Description */}
        {description && (
          <p className="text-xs text-[#5C5950] leading-relaxed line-clamp-2 mb-3">
            {description}
          </p>
        )}
      </div>

      {/* Footer Image & Tag Row */}
      <div className="flex items-end justify-between gap-2 pt-2 mt-auto border-t border-[#E8E4DC]">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span key={idx} className="text-[10px] font-mono text-[#78746B] bg-[#E8E4DC] px-1.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-[#E8E4DC] border border-[#DDD7CC]">
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