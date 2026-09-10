import React from 'react';

const PressArticleItem = ({ item, articleNumber = 1 }) => {
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
  const isFeatureStory = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article
      className={`relative p-4 sm:p-5 bg-white border-2 border-black flex flex-col justify-between font-serif transition-all duration-200 ${
        isFeatureStory
          ? 'border-dashed border-2 shadow-[4px_4px_0px_0px_#121212]'
          : 'shadow-[3px_3px_0px_0px_#121212] hover:shadow-[5px_5px_0px_0px_#121212]'
      }`}
    >
      {/* Perforated Coupon Ribbon for Bestsellers */}
      {isFeatureStory && (
        <div className="absolute -top-3 left-4 px-2 py-0.5 bg-black text-[#F5EFEB] text-[8px] font-mono font-black uppercase tracking-widest border border-black select-none">
          ✂ CLIPPABLE SIGNATURE DISPATCH
        </div>
      )}

      <div>
        {/* Dateline & Subscription Rate Header */}
        <div className="flex items-start justify-between gap-3 mb-2 font-mono text-[9px]">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-black px-1.5 py-0.2 bg-[#F5EFEB] border border-black uppercase text-black">
              DISPATCH #{String(articleNumber).padStart(2, '0')}
            </span>

            {type && (
              <span
                className={`px-1.5 py-0.2 border border-black font-black uppercase ${
                  isVeg ? 'bg-[#E6F4EA] text-[#137333]' : 'bg-[#FCE8E6] text-[#C5221F]'
                }`}
              >
                {isVeg ? 'FLORA DIET' : 'FAUNA HARVEST'}
              </span>
            )}

            {spicy && <span title="Spicy Pepper">🌶️ HEATED</span>}
          </div>

          {/* Stamped Price */}
          <div className="px-2 py-0.5 bg-black text-white font-black text-xs sm:text-sm shrink-0">
            ₹{Number(price).toLocaleString('en-IN')}
          </div>
        </div>

        {/* Lead Headline */}
        <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-black leading-tight mb-2">
          {name}
        </h3>

        {/* Dateline Byline */}
        <div className="text-[10px] font-mono text-black/50 mb-2 uppercase tracking-wide">
          DATELINE: FLAME HEARTH — BY OUR KITCHEN CORRESPONDENT
        </div>

        {/* Editorial Story Prose */}
        {description && (
          <p className="text-xs sm:text-sm text-black/80 font-sans leading-relaxed line-clamp-3 mb-3">
            {description}
          </p>
        )}
      </div>

      {/* Footer Tags & Woodcut Thumbnail */}
      <div className="flex items-end justify-between gap-3 pt-2.5 mt-auto border-t border-black/15 font-mono">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span
                key={idx}
                className="text-[9px] px-1.5 py-0.2 bg-[#F5EFEB] text-black/70 border border-black/20"
              >
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded border border-black bg-[#F5EFEB] p-0.5 shrink-0 shadow-xs">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover filter contrast-110"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default PressArticleItem;