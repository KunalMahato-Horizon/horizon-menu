import React from 'react';

const TrendingShowcase = ({ items = [], onAddItem }) => {
  if (!items.length) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-[#F2B828] text-[#2C1A11] flex items-center justify-center font-bold text-sm shadow-sm">
            🔥
          </span>
          <div>
            <h2 className="text-lg sm:text-xl font-serif font-black text-[#231F20] tracking-tight uppercase">
              Trending Now
            </h2>
            <p className="text-[11px] font-sans font-bold text-[#8C7262] uppercase tracking-wider">
              Most Ordered Along The Highway
            </p>
          </div>
        </div>
        <span className="text-[10px] font-mono font-bold text-[#8C7262] uppercase bg-[#EFE3CF] px-2.5 py-1 rounded-full">
          Swipe →
        </span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {items.map((item) => {
          const isMulti = item.price.M !== undefined;
          return (
            <div
              key={item.id}
              className="flex-shrink-0 w-64 sm:w-72 bg-[#3E2211] rounded-2xl overflow-hidden border-2 border-[#52301B] hover:border-[#F2B828] transition-all duration-200 shadow-md flex flex-col justify-between group"
            >
              <div className="relative h-36 w-full overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2211] via-transparent to-black/30" />

                <span className="absolute top-2.5 left-2.5 bg-[#F2B828] text-[#2C1A11] text-[9px] font-sans font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-md">
                  {item.badge}
                </span>

                <span className="absolute bottom-2 left-3 text-[10px] font-mono text-[#F2B828] uppercase font-bold tracking-wider">
                  {item.category}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-serif font-bold text-white group-hover:text-[#F2B828] transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-[11px] font-sans text-stone-300/75 mt-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#8C7262] uppercase tracking-wider">
                    {isMulti ? "Add (M / L)" : "Quick Add"}
                  </span>

                  {isMulti ? (
                    <div className="inline-flex items-center gap-1.5 font-sans font-black text-xs">
                      <button
                        onClick={() => onAddItem({ name: `${item.name} (M)`, price: item.price.M })}
                        className="bg-[#F2B828] text-[#2C1A11] px-2.5 py-1 rounded-md hover:bg-[#ffc842] active:scale-95 transition-all"
                      >
                        M: ₹{item.price.M}
                      </button>
                      <button
                        onClick={() => onAddItem({ name: `${item.name} (L)`, price: item.price.L })}
                        className="bg-[#F2B828] text-[#2C1A11] px-2.5 py-1 rounded-md hover:bg-[#ffc842] active:scale-95 transition-all"
                      >
                        L: ₹{item.price.L}
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => onAddItem({ name: item.name, price: item.price.single })}
                      className="bg-[#F2B828] text-[#2C1A11] font-sans font-black text-xs px-3 py-1 rounded-full hover:bg-[#ffc842] active:scale-95 transition-all"
                    >
                      + ₹{item.price.single}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrendingShowcase;