import React, { useMemo } from 'react';

const ChefsSelection = ({ categories = [] }) => {
  // Extract all featured & signature dishes across categories
  const featuredItems = useMemo(() => {
    const targetTags = ['Popular', 'Bestseller', 'Must Try', 'Chef Special', "Chef's Selection"];
    const items = [];

    categories.forEach((category) => {
      (category.items || []).forEach((item) => {
        const matchingTag = item.tags?.find((tag) => targetTags.includes(tag));
        if (matchingTag) {
          items.push({
            ...item,
            featuredBadge: matchingTag,
            categoryName: category.name,
            categoryIcon: category.icon,
          });
        }
      });
    });

    return items;
  }, [categories]);

  if (featuredItems.length === 0) return null;

  return (
    <section
      id="specials"
      className="scroll-mt-24 py-16 sm:py-20 bg-stone-100/75 border-y border-stone-200/80"
      aria-labelledby="chefs-selection-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-10 sm:w-14 h-px bg-gradient-to-r from-transparent to-amber-500/70" />
            <span className="text-amber-600 text-xs select-none">✦</span>
            <span className="w-10 sm:w-14 h-px bg-gradient-to-l from-transparent to-amber-500/70" />
          </div>

          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-900/80 mb-2 block">
            Signature Recipes
          </span>

          <h2
            id="chefs-selection-heading"
            className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight"
          >
            Chef's Selection
          </h2>

          <p className="text-xs sm:text-sm text-stone-500 font-normal leading-relaxed mt-2.5 max-w-md mx-auto">
            Handcrafted signature creations celebrated for their distinct flavors and culinary balance.
          </p>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {featuredItems.map((item, idx) => (
            <article
              key={item.id || idx}
              className="group relative flex flex-col sm:flex-row bg-white rounded-3xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-stone-900/5 hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Media Section */}
              <div className="relative w-full sm:w-2/5 aspect-[16/10] sm:aspect-auto overflow-hidden bg-stone-100 flex-shrink-0">
                {item.image ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent sm:hidden" />
                  </>
                ) : (
                  <div className="w-full h-full min-h-[140px] flex flex-col items-center justify-center bg-gradient-to-br from-stone-50 to-stone-100 text-stone-300">
                    <span className="text-4xl sm:text-5xl mb-1 select-none" aria-hidden="true">
                      {item.categoryIcon || '🍽️'}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                      {item.categoryName}
                    </span>
                  </div>
                )}

                {/* Floating Tag Pill on Mobile */}
                <div className="absolute top-3 left-3 sm:hidden">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-bold bg-stone-950/85 backdrop-blur-md text-amber-300 shadow-sm border border-white/10">
                    <span>✦</span>
                    <span>{item.featuredBadge || "Chef's Special"}</span>
                  </span>
                </div>
              </div>

              {/* Dish Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Dietary Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                      {item.categoryName}
                    </span>

                    {item.isVeg !== undefined && (
                      <span
                        className={`inline-flex items-center justify-center w-3.5 h-3.5 rounded-xs border ${
                          item.isVeg ? 'border-emerald-600' : 'border-rose-600'
                        }`}
                        title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                          }`}
                        />
                      </span>
                    )}
                  </div>

                  {/* Title & Price */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-serif font-bold text-stone-900 group-hover:text-amber-900 transition-colors leading-snug line-clamp-1">
                      {item.name}
                    </h3>
                    <span className="text-lg font-serif font-bold text-stone-900 whitespace-nowrap">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs sm:text-sm text-stone-500 font-normal leading-relaxed line-clamp-2 mb-4">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Bottom Signature Badge (Desktop & Tablet) */}
                <div className="hidden sm:flex items-center gap-1.5 pt-2 border-t border-stone-100">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-950 border border-amber-200/60">
                    <span className="text-amber-600">✦</span>
                    <span>{item.featuredBadge || "Chef's Special"}</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ChefsSelection;