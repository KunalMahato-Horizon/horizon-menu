import React from 'react';

const DietaryBadge = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const bgColor = isVeg ? 'bg-[#A7F3D0]' : isEgg ? 'bg-[#FED7AA]' : 'bg-[#FECDD3]';
  const label = isVeg ? 'VEG' : isEgg ? 'EGG' : 'NON-VEG';

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border-2 border-[#18181B] text-[10px] font-mono font-black ${bgColor}`}>
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

  const isBestseller = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative rounded-2xl p-4 sm:p-5 bg-white border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#18181B] transition-all duration-150 flex flex-col justify-between">
      <div>
        {/* Badges & Boxed Price */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <DietaryBadge type={type} />
            {isBestseller && (
              <span className="px-2 py-0.5 rounded-md bg-[#FFE500] border-2 border-[#18181B] text-[10px] font-mono font-black uppercase">
                ★ TOP PICK
              </span>
            )}
            {spicy && (
              <span className="px-1.5 py-0.5 rounded-md bg-[#FF5733] border-2 border-[#18181B] text-white text-[10px] font-mono font-black">
                SPICY 🌶
              </span>
            )}
          </div>

          <div className="px-2.5 py-1 rounded-lg bg-[#FFE500] border-2 border-[#18181B] text-sm sm:text-base font-mono font-black text-[#18181B] shadow-[2px_2px_0px_0px_#18181B] shrink-0">
            ₹{Number(price).toLocaleString('en-IN')}
          </div>
        </div>

        {/* Dish Title */}
        <h3 className="text-base sm:text-lg font-black text-[#18181B] uppercase tracking-tight leading-snug mb-1.5">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3 font-medium">
            {description}
          </p>
        )}
      </div>

      {/* Footer Tags & Image */}
      <div className="flex items-end justify-between gap-2 pt-2 mt-auto border-t-2 border-[#18181B]/10">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span key={idx} className="text-[10px] font-mono font-bold text-[#18181B] bg-[#E4E4E7] px-2 py-0.5 rounded border border-[#18181B]/30">
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 border-[#18181B] bg-[#FFE500]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default MenuItem;