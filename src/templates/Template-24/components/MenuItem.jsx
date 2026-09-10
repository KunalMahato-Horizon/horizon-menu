import React from 'react';

const DietarySeal = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const dotColor = isVeg ? 'bg-emerald-400' : isEgg ? 'bg-[#E9C46A]' : 'bg-[#FF4D5E]';
  const label = isVeg ? '精進料理 Veg' : isEgg ? '卵 Egg' : '肉 / 魚 Catch';

  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-[9px] font-mono font-bold text-white/80">
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      <span>{label}</span>
    </span>
  );
};

const MenuItem = ({ item, orderCode = '01' }) => {
  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = item || {};

  const isSpecialty = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative rounded-2xl p-4 sm:p-5 bg-[#18161A] border border-white/10 hover:border-[#E63946]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Header Tags & Slat Price */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-1.5 py-0.5 rounded bg-black/40 text-[9px] font-mono text-[#E9C46A] border border-white/10">
              #{orderCode}
            </span>
            <DietarySeal type={type} />
            {isSpecialty && (
              <span className="px-2 py-0.5 rounded bg-[#E63946]/20 border border-[#E63946]/40 text-[#FF6B6B] text-[9px] font-mono font-bold uppercase">
                名物 Specialty
              </span>
            )}
            {spicy && (
              <span className="text-[10px] font-mono text-[#FF6B6B] bg-[#E63946]/10 px-1.5 py-0.5 rounded border border-[#E63946]/20 font-bold">
                辛 Spicy 🌶
              </span>
            )}
          </div>

          <span className="text-base sm:text-lg font-mono font-black text-[#E9C46A] shrink-0">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-serif font-black text-white group-hover:text-[#FF6B6B] transition-colors leading-snug mb-1.5">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans line-clamp-2 sm:line-clamp-3 mb-3">
            {description}
          </p>
        )}
      </div>

      {/* Skewer Footer & Thumbnail */}
      <div className="flex items-end justify-between gap-2 pt-2 mt-auto border-t border-white/5">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span key={idx} className="text-[10px] font-mono text-white/40 bg-white/[0.03] px-1.5 py-0.5 rounded">
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-[#121113]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default MenuItem;