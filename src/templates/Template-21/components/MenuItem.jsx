import React from 'react';

const BotanicalDietaryTag = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const dotColor = isVeg ? 'bg-[#3F5E46]' : isEgg ? 'bg-[#C4923C]' : 'bg-[#964F33]';
  const label = isVeg ? 'Flora / Vegan' : isEgg ? 'Farm Egg' : 'Hearth / Catch';

  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-[#EDE6D6] border border-[#DBD4C0] text-[9px] font-mono font-bold text-[#1E2721]">
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      <span>{label}</span>
    </span>
  );
};

const MenuItem = ({ item, specimenCode = 'A-01' }) => {
  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = item || {};

  const isSpecimenSpecial = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative rounded-xl p-4 sm:p-5 bg-white border border-[#DBD4C0] hover:border-[#1E2721] hover:shadow-sm transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Specimen Index & Price Header */}
        <div className="flex items-start justify-between gap-3 mb-2 pb-1.5 border-b border-dashed border-[#DBD4C0]">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[9px] font-mono font-bold text-[#964F33] bg-[#F6F3EB] px-1.5 py-0.5 border border-[#DBD4C0] rounded-xs">
              SPEC // {specimenCode}
            </span>
            <BotanicalDietaryTag type={type} />
            {isSpecimenSpecial && (
              <span className="px-2 py-0.5 rounded-xs bg-[#1E2721] text-[#C4923C] text-[9px] font-mono font-bold uppercase">
                ✦ Wild Harvest
              </span>
            )}
            {spicy && (
              <span className="text-[9px] font-mono text-[#964F33] bg-[#964F33]/10 px-1.5 py-0.5 rounded-xs font-bold">
                Pepper Infusion 🌶
              </span>
            )}
          </div>

          <span className="text-base sm:text-lg font-serif font-black text-[#1E2721] shrink-0">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Botanical Dish Name */}
        <h3 className="text-base sm:text-lg font-serif font-bold text-[#1E2721] group-hover:text-[#964F33] transition-colors leading-snug mb-1">
          {name}
        </h3>

        {/* Field Notes Description */}
        {description && (
          <p className="text-xs sm:text-sm text-[#4F5751] font-serif italic leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3">
            {description}
          </p>
        )}
      </div>

      {/* Footer Specimen Slide & Botanical Tags */}
      <div className="flex items-end justify-between gap-2 pt-2 mt-auto border-t border-[#F2ECE0]">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span key={idx} className="text-[10px] font-mono text-[#6A726A] bg-[#F6F3EB] px-1.5 py-0.5 rounded-xs border border-[#DBD4C0]/60">
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0 border border-[#DBD4C0] bg-[#EDE6D6]">
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