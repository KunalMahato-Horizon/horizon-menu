import React from 'react';

const DietaryStamp = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const label = isVeg ? 'VEGETAL' : isEgg ? 'EGG' : 'MEAT/CATCH';

  return (
    <span className="inline-block border border-[#1A1A1A] px-1.5 py-0.2 text-[9px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A] bg-white">
      [{label}]
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

  const isHeadline = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative p-4 bg-white border border-[#1A1A1A] hover:bg-[#FAF8F5] transition-colors flex flex-col justify-between">
      <div>
        {/* Article Meta Bar */}
        <div className="flex items-start justify-between gap-3 mb-2 border-b border-dashed border-[#1A1A1A]/30 pb-1.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <DietaryStamp type={type} />
            {isHeadline && (
              <span className="border border-[#991B1B] text-[#991B1B] px-1.5 py-0.2 text-[9px] font-mono font-black uppercase">
                EDITORIAL SCOOP
              </span>
            )}
            {spicy && (
              <span className="text-[9px] font-mono text-[#991B1B] font-bold">
                [SPICE NOTICE]
              </span>
            )}
          </div>

          <span className="text-base font-serif font-black text-[#1A1A1A] shrink-0 border border-[#1A1A1A] px-2 py-0.5 bg-[#F5F2EB]">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Dish Title */}
        <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] group-hover:text-[#991B1B] transition-colors leading-snug mb-1.5">
          {name}
        </h3>

        {/* Description / Dispatch Paragraph */}
        {description && (
          <p className="text-xs sm:text-sm text-[#444444] font-serif leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3">
            {description}
          </p>
        )}
      </div>

      {/* Footer Tags & Woodcut-style Image */}
      <div className="flex items-end justify-between gap-2 pt-2 mt-auto border-t border-[#1A1A1A]/20">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span key={idx} className="text-[10px] font-mono text-[#666666]">
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 border border-[#1A1A1A] p-0.5 bg-white shrink-0">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover filter grayscale contrast-125"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default MenuItem;