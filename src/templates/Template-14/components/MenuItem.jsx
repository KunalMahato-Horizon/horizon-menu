import React from 'react';

const DietaryStamp = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const dotColor = isVeg ? 'bg-emerald-700' : isEgg ? 'bg-amber-600' : 'bg-rose-700';
  const label = isVeg ? 'Végétal' : isEgg ? 'Œuf' : 'Viande/Pêche';

  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-[#EFE9DB] border border-[#D8CEBA] text-[10px] font-serif font-semibold text-[#0E261C]">
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

  const isMaison = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative rounded-lg p-4 sm:p-5 bg-[#FAF7F0] border border-[#D8CEBA] hover:border-[#C5A059] transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Header Badges & Price */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <DietaryStamp type={type} />
            {isMaison && (
              <span className="px-2 py-0.5 rounded-xs bg-[#0E261C] text-[#C5A059] text-[9px] font-mono font-bold uppercase tracking-wider">
                Maison
              </span>
            )}
            {spicy && (
              <span className="text-[10px] font-serif text-rose-800 bg-rose-50 px-1.5 py-0.5 rounded-xs border border-rose-200">
                Pimenté
              </span>
            )}
          </div>

          <span className="text-base sm:text-lg font-serif font-bold text-[#0E261C] shrink-0">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-serif font-bold text-[#0E261C] group-hover:text-[#C5A059] transition-colors leading-snug mb-1.5">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs text-[#5C584C] font-serif italic leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3">
            {description}
          </p>
        )}
      </div>

      {/* Footer Tags & Image */}
      <div className="flex items-end justify-between gap-2 pt-2 mt-auto border-t border-[#E5DEC9]">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span key={idx} className="text-[10px] font-mono text-[#787263] bg-[#EFE9DB] px-1.5 py-0.5 rounded-xs">
                {tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden shrink-0 border border-[#D8CEBA] bg-[#EFE9DB]">
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