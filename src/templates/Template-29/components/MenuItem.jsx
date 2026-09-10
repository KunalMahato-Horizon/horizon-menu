import React from 'react';

const DietaryBadge = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const colorStyle = isVeg
    ? 'text-[#00F5D4] bg-[#00F5D4]/10 border-[#00F5D4]/30'
    : isEgg
    ? 'text-[#FFE600] bg-[#FFE600]/10 border-[#FFE600]/30'
    : 'text-[#F72585] bg-[#F72585]/10 border-[#F72585]/30';

  const label = isVeg ? 'VEG' : isEgg ? 'EGG' : 'MEAT';

  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[9px] font-mono font-bold tracking-wider ${colorStyle}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      <span>{label}</span>
    </span>
  );
};

const MenuItem = ({ item, sculptureCode = '01' }) => {
  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = item || {};

  const isHighlighted = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative rounded-3xl p-5 bg-[#0E1015] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-[#00F5D4]/5 active:scale-[0.99]">
      <div>
        {/* Top Badging & Holographic Price */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[9px] font-mono font-bold text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/10">
              SPEC // {sculptureCode}
            </span>
            <DietaryBadge type={type} />
            {isHighlighted && (
              <span className="px-2 py-0.5 rounded-md bg-white text-black text-[9px] font-mono font-black uppercase">
                ★ CURATOR'S PICK
              </span>
            )}
            {spicy && (
              <span className="px-1.5 py-0.5 rounded-md bg-[#F72585]/10 border border-[#F72585]/30 text-[#F72585] text-[9px] font-mono font-bold">
                HOT 🌶
              </span>
            )}
          </div>

          <div className="px-2.5 py-1 rounded-xl bg-white/[0.06] border border-white/15 text-sm sm:text-base font-mono font-black text-white shrink-0 group-hover:border-[#00F5D4] transition-colors">
            ₹{Number(price).toLocaleString('en-IN')}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-mono font-black text-white group-hover:text-[#00F5D4] transition-colors leading-snug mb-2 uppercase">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans font-light line-clamp-2 sm:line-clamp-3 mb-4">
            {description}
          </p>
        )}
      </div>

      {/* Image & Tags Strip */}
      <div className="flex items-end justify-between gap-3 pt-3 mt-auto border-t border-white/5">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span key={idx} className="text-[9px] font-mono text-zinc-500 bg-white/[0.02] px-1.5 py-0.5 rounded border border-white/5">
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 border border-white/10 bg-black group-hover:border-white/30 transition-colors">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default MenuItem;