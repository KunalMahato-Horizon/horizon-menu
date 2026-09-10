import React from 'react';

const DietaryDisc = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const dotColor = isVeg ? 'bg-[#3D5A50]' : isEgg ? 'bg-[#D9822B]' : 'bg-[#9E2A2B]';
  const label = isVeg ? 'Plant' : isEgg ? 'Egg' : 'Meat/Catch';

  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#EDE5D6] text-[10px] font-mono font-bold text-[#19181A]">
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      <span>{label}</span>
    </span>
  );
};

const MenuItem = ({ item, trackNumber = '01' }) => {
  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = item || {};

  const isHit = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative rounded-2xl p-4 sm:p-5 bg-white border border-[#E3DAC9] hover:border-[#D9822B] hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Track Number & Price */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-mono font-black text-[#D9822B] px-1.5 py-0.5 rounded bg-[#FAF5EC] border border-[#E3DAC9]">
              TRK {trackNumber}
            </span>
            <DietaryDisc type={type} />
            {isHit && (
              <span className="px-2 py-0.5 rounded-md bg-[#D9822B]/10 text-[#D9822B] text-[10px] font-mono font-bold uppercase">
                ★ Heavy Rotation
              </span>
            )}
            {spicy && (
              <span className="text-[10px] font-mono text-[#9E2A2B] bg-[#9E2A2B]/10 px-1.5 py-0.5 rounded font-bold">
                Heat Mod 🌶
              </span>
            )}
          </div>

          <span className="text-base sm:text-lg font-mono font-black text-[#19181A] shrink-0">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Track Name */}
        <h3 className="text-base sm:text-lg font-serif font-black text-[#19181A] group-hover:text-[#D9822B] transition-colors leading-snug mb-1.5">
          {name}
        </h3>

        {/* Liner Notes */}
        {description && (
          <p className="text-xs sm:text-sm text-[#5A5751] leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3 font-sans">
            {description}
          </p>
        )}
      </div>

      {/* Footer Tags & Album Thumbnail */}
      <div className="flex items-end justify-between gap-2 pt-2 mt-auto border-t border-[#F2EAE0]">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span key={idx} className="text-[10px] font-mono text-[#757169] bg-[#FAF5EC] px-2 py-0.5 rounded">
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-[#E3DAC9] bg-[#EDE5D6]">
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