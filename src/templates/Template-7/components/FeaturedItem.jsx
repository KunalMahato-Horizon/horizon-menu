import React from 'react';

const FeaturedItem = ({ categories = [] }) => {
  if (!Array.isArray(categories) || categories.length === 0) return null;

  // Find the first item with special tags
  let featuredItem = null;
  let featuredCategory = null;

  for (const category of categories) {
    if (!category?.items) continue;
    const item = category.items.find(
      (it) =>
        it?.tags &&
        (it.tags.includes('Popular') ||
          it.tags.includes('Must Try') ||
          it.tags.includes('Bestseller') ||
          it.tags.includes('Signature'))
    );
    if (item) {
      featuredItem = item;
      featuredCategory = category;
      break;
    }
  }

  // Fallback to first available item with an image or just first item
  if (!featuredItem) {
    for (const category of categories) {
      if (category?.items && category.items.length > 0) {
        const itemWithImg = category.items.find((it) => it.image);
        featuredItem = itemWithImg || category.items[0];
        featuredCategory = category;
        break;
      }
    }
  }

  if (!featuredItem) return null;

  const formattedPrice =
    typeof featuredItem.price === 'number'
      ? `₹${featuredItem.price}`
      : featuredItem.price?.startsWith('₹')
      ? featuredItem.price
      : `₹${featuredItem.price}`;

  return (
    <section className="px-6 py-14 md:py-20 border-b border-[#E8E4DD] bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto">
        {/* Asymmetrical Editorial Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Architectural Photo Box */}
          <div className="md:col-span-7 relative group overflow-hidden bg-[#EAE6DF] aspect-[4/3] md:aspect-[5/4]">
            {featuredItem.image ? (
              <img
                src={featuredItem.image}
                alt={featuredItem.name}
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-[#8A857D] p-8 text-center border border-[#D8D4CC]">
                <span className="text-4xl mb-2">{featuredCategory?.icon || '☕'}</span>
                <span className="font-mono text-xs uppercase tracking-widest">
                  Featured Plate
                </span>
              </div>
            )}

            {/* Editorial Corner Badge */}
            <div className="absolute top-0 left-0 bg-[#1A1816] text-[#FDFBF7] px-3 py-1 text-[9px] font-mono uppercase tracking-[0.25em]">
              Selected
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="md:col-span-5 space-y-4 md:pl-2">
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.3em] text-[#8A857D] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A1816]" />
              Today&apos;s Feature
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-normal text-[#1A1816] tracking-tight leading-tight">
              {featuredItem.name}
            </h2>

            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xl md:text-2xl font-medium text-[#1A1816]">
                {formattedPrice}
              </span>
              {featuredCategory?.name && (
                <span className="font-mono text-[10px] text-[#8A857D] uppercase tracking-widest">
                  / {featuredCategory.name}
                </span>
              )}
            </div>

            {featuredItem.description && (
              <p className="text-xs md:text-sm font-sans text-[#6E6A63] leading-relaxed">
                {featuredItem.description}
              </p>
            )}

            {/* Micro Tags */}
            {featuredItem.tags && featuredItem.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {featuredItem.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8A857D] bg-[#F5F2EC] px-2 py-0.5 border border-[#E8E4DD]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Editorial Anchor Link to Menu */}
            <div className="pt-4">
              <a
                href="#menu"
                className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1A1816] border-b border-[#1A1816] pb-1 hover:text-[#7A756D] hover:border-[#7A756D] transition-colors"
              >
                <span>View Full Selection</span>
                <svg
                  className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;