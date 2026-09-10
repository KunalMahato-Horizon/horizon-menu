import React from 'react';

const CategoryCarousel = ({ category, onSelectDish }) => {
  const { name = '', items = [] } = category || {};
  if (!items || items.length === 0) return null;

  return (
    <section className="py-5 border-b border-white/[0.06]">
      {/* Category Section Header */}
      <div className="px-4 mb-3 flex items-baseline justify-between">
        <h2 className="text-base font-mono font-black text-white uppercase tracking-tight">
          {name}
        </h2>
        <span className="text-[10px] font-mono text-white/40">
          {items.length} {items.length === 1 ? 'Plate' : 'Plates'}
        </span>
      </div>

      {/* Horizontal Snap Deck */}
      <div className="flex items-stretch gap-3 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 pb-2">
        {items.map((item) => {
          const isVeg = item.type?.toLowerCase() === 'veg';
          return (
            <div
              key={item.id || item.name}
              onClick={() => onSelectDish(item)}
              className="snap-start shrink-0 w-[200px] rounded-2xl bg-[#141721] border border-white/10 p-3 flex flex-col justify-between active:scale-98 transition-transform cursor-pointer shadow-lg shadow-black/40"
            >
              {/* Card Thumbnail */}
              <div className="relative w-full h-28 rounded-xl overflow-hidden bg-black/40 border border-white/5 mb-2.5">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl">
                    🍽️
                  </div>
                )}
                {/* Type Badge */}
                <span
                  className={`absolute top-2 left-2 px-1.5 py-0.5 rounded text-[8px] font-mono font-black uppercase ${
                    isVeg ? 'bg-emerald-500 text-black' : 'bg-[#FF5E00] text-white'
                  }`}
                >
                  {isVeg ? 'VEG' : 'MEAT'}
                </span>
              </div>

              {/* Text Info */}
              <div className="mb-2">
                <h3 className="text-xs font-mono font-bold text-white leading-tight line-clamp-1 mb-1">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-[10px] text-white/50 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-auto">
                <span className="text-xs font-mono font-black text-[#FF5E00]">
                  ₹{Number(item.price).toLocaleString('en-IN')}
                </span>
                <span className="text-[9px] font-mono text-white/40 underline">
                  Specs →
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryCarousel;