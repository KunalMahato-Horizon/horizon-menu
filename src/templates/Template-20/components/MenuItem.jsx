import React from 'react';

const DietaryStamp = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const bgColor = isVeg ? 'bg-[#CFE7DA]' : isEgg ? 'bg-[#FFF3C4]' : 'bg-[#FCDAD7]';
  const label = isVeg ? 'Végétal' : isEgg ? 'Œuf' : 'Viande';

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#3D141E] text-[10px] font-mono font-bold text-[#3D141E] ${bgColor}`}>
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

  const isFavori = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative rounded-2xl p-4 sm:p-5 bg-white border-2 border-[#3D141E] shadow-[3px_3px_0px_#3D141E] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_#3D141E] transition-all duration-150 flex flex-col justify-between">
      <div>
        {/* Header Tags & Pill Price */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <DietaryStamp type={type} />
            {isFavori && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#F5CAD2] border border-[#3D141E] text-[#3D141E] text-[10px] font-mono font-bold uppercase">
                ★ Maison
              </span>
            )}
            {spicy && (
              <span className="px-2 py-0.5 rounded-full bg-[#FCDAD7] border border-[#3D141E] text-[#3D141E] text-[10px] font-mono font-bold">
                Piquant 🌶
              </span>
            )}
          </div>

          <div className="px-3 py-1 rounded-full bg-[#CFE7DA] border border-[#3D141E] text-sm sm:text-base font-serif font-black text-[#3D141E] shrink-0">
            ₹{Number(price).toLocaleString('en-IN')}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-serif font-black text-[#3D141E] group-hover:text-[#802B41] transition-colors leading-snug mb-1.5">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-[#3D141E]/70 leading-relaxed font-sans line-clamp-2 sm:line-clamp-3 mb-3">
            {description}
          </p>
        )}
      </div>

      {/* Footer Tags & Image */}
      <div className="flex items-end justify-between gap-2 pt-2 mt-auto border-t-2 border-dashed border-[#3D141E]/15">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span key={idx} className="text-[10px] font-mono font-bold text-[#3D141E]/60 bg-[#FDFBF7] px-2 py-0.5 rounded-full border border-[#3D141E]/20">
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 border-[#3D141E] bg-[#F5CAD2]">
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