import React from 'react';

const DietaryBadge = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const dotColor = isVeg ? 'bg-emerald-600' : isEgg ? 'bg-amber-500' : 'bg-[#B91C1C]';
  const label = isVeg ? 'Tundra Green' : isEgg ? 'Farm Egg' : 'Fjord Catch';

  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#F1F5F9] border border-[#CBD5E1] text-[9px] font-mono font-bold text-[#0B192C]">
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      <span>{label}</span>
    </span>
  );
};

const MenuItem = ({ item, courseCode = '01' }) => {
  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = item || {};

  const isBestseller = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative rounded-2xl p-4 sm:p-5 bg-white border border-[#CBD5E1] hover:border-[#0284C7] hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Header Tags & Ice Price */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[9px] font-mono font-bold text-[#0284C7] bg-[#F0F4F8] px-2 py-0.5 rounded border border-[#E2E8F0]">
              ITEM // {courseCode}
            </span>
            <DietaryBadge type={type} />
            {isBestseller && (
              <span className="px-2 py-0.5 rounded-md bg-[#B91C1C]/10 text-[#B91C1C] text-[9px] font-mono font-bold uppercase">
                ★ Fjord Pick
              </span>
            )}
            {spicy && (
              <span className="text-[9px] font-mono text-[#B91C1C] bg-[#B91C1C]/10 px-1.5 py-0.5 rounded font-bold">
                Spiced Mustard 🌶
              </span>
            )}
          </div>

          <span className="text-base sm:text-lg font-mono font-black text-[#0B192C] shrink-0">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-serif font-black text-[#0B192C] group-hover:text-[#0284C7] transition-colors leading-snug mb-1.5">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3 font-sans">
            {description}
          </p>
        )}
      </div>

      {/* Footer Tags & Image */}
      <div className="flex items-end justify-between gap-2 pt-2 mt-auto border-t border-[#F1F5F9]">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span key={idx} className="text-[10px] font-mono text-[#64748B] bg-[#F8FAFC] px-1.5 py-0.5 rounded border border-[#E2E8F0]">
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-[#CBD5E1] bg-[#F1F5F9]">
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