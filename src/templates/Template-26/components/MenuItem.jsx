import React from 'react';

const DietaryBadge = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const label = isVeg ? 'VEG.SPEC' : isEgg ? 'EGG.SPEC' : 'CATCH/MEAT';
  const color = isVeg ? 'text-[#4ADE80] border-[#4ADE80]/40' : isEgg ? 'text-[#FBBF24] border-[#FBBF24]/40' : 'text-[#F87171] border-[#F87171]/40';

  return (
    <span className={`inline-block px-1.5 py-0.2 rounded border text-[9px] font-mono font-bold uppercase tracking-wider ${color}`}>
      {label}
    </span>
  );
};

const MenuItem = ({ item, schematicId = '01' }) => {
  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = item || {};

  const isApproved = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative rounded-xl p-4 sm:p-5 bg-[#071324] border border-[#00F0FF]/25 hover:border-[#00F0FF] transition-all duration-200 flex flex-col justify-between font-mono shadow-md">
      {/* Drafting Crosshairs in corners */}
      <span className="absolute top-1.5 left-2 text-[8px] text-[#00F0FF]/30 select-none">+</span>
      <span className="absolute top-1.5 right-2 text-[8px] text-[#00F0FF]/30 select-none">+</span>

      <div>
        {/* Specification Header */}
        <div className="flex items-start justify-between gap-3 mb-2.5 pt-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-1.5 py-0.5 rounded bg-[#0A192F] border border-[#00F0FF]/30 text-[#00F0FF] text-[9px] font-bold">
              ID // {schematicId}
            </span>
            <DietaryBadge type={type} />
            {isApproved && (
              <span className="px-1.5 py-0.5 rounded bg-[#FFB703]/10 border border-[#FFB703]/40 text-[#FFB703] text-[9px] font-bold">
                APPROVED SPEC
              </span>
            )}
            {spicy && (
              <span className="text-[9px] text-[#FF6B6B] border border-[#FF6B6B]/40 px-1 rounded">
                CALORIC HEAT 🌶
              </span>
            )}
          </div>

          <div className="px-2 py-0.5 rounded bg-[#0A192F] border border-[#00F0FF]/50 text-sm sm:text-base font-black text-[#00F0FF] shrink-0">
            ₹{Number(price).toLocaleString('en-IN')}
          </div>
        </div>

        {/* Component Title */}
        <h3 className="text-sm sm:text-base font-black text-white group-hover:text-[#00F0FF] transition-colors leading-snug mb-1.5 uppercase">
          {name}
        </h3>

        {/* Blueprint Description */}
        {description && (
          <p className="text-xs text-[#8DA9C4] leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3 font-sans">
            {description}
          </p>
        )}
      </div>

      {/* Blueprint Footer: Sub-Components & Wireframe Thumbnail */}
      <div className="flex items-end justify-between gap-2 pt-2 mt-auto border-t border-[#00F0FF]/15">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span key={idx} className="text-[9px] text-[#48CAE4]/70 bg-[#0A192F] px-1.5 py-0.2 rounded border border-[#00F0FF]/20">
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0 border border-[#00F0FF]/40 bg-[#0A192F] relative group-hover:border-[#00F0FF]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover filter contrast-110 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default MenuItem;