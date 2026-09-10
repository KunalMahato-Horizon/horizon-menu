import React from 'react';

const ReceiptLineItem = ({ item, itemIndex = 1 }) => {
  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = item || {};

  const isVeg = type?.toLowerCase() === 'veg';
  const isSignature = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group py-3 border-b border-dashed border-black/25 font-mono text-[#18181B] hover:bg-black/[0.02] transition-colors px-2 sm:px-4">
      {/* 1. Item Header Line: QTY + Name + Price */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <div className="flex items-baseline gap-2 min-w-0 flex-1">
          <span className="text-xs font-black text-black/50 shrink-0">
            1x
          </span>
          <h3 className="text-xs sm:text-sm font-black uppercase tracking-tight truncate text-black group-hover:underline">
            {name}
          </h3>
          {isSignature && (
            <span className="text-[9px] bg-black text-white px-1 rounded font-black shrink-0">
              *HOT*
            </span>
          )}
        </div>

        {/* Tab-Aligned Monospace Price */}
        <span className="text-xs sm:text-sm font-black tracking-tight shrink-0">
          ₹{Number(price).toLocaleString('en-IN')}.00
        </span>
      </div>

      {/* 2. Composition Note & Dietary Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 pl-6">
        {description ? (
          <p className="text-[11px] text-black/70 font-sans leading-relaxed line-clamp-2 max-w-sm">
            {description}
          </p>
        ) : (
          <span className="text-[10px] text-black/40 italic">
            Chef prepared daily batch.
          </span>
        )}

        {/* Dietary Tag */}
        <div className="flex items-center gap-1 text-[9px] shrink-0 font-bold uppercase">
          {type && (
            <span className={`px-1 py-0.2 rounded border ${
              isVeg
                ? 'border-emerald-700 text-emerald-800 bg-emerald-50'
                : 'border-rose-700 text-rose-800 bg-rose-50'
            }`}>
              {isVeg ? '[VEG]' : '[NON-VEG]'}
            </span>
          )}
          {spicy && <span title="Spicy Modifier">🌶️</span>}
        </div>
      </div>

      {/* 3. Thumbnail & Recipe Tags Strip */}
      <div className="flex items-center justify-between gap-2 pt-2 pl-6 mt-1 text-[9px] text-black/50">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span key={idx}>#{tag}</span>
            ))}
        </div>

        {image && (
          <div className="w-9 h-9 rounded overflow-hidden border border-black/30 bg-black/5 shrink-0">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover filter contrast-125"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default ReceiptLineItem;