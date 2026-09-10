import React from 'react';

const FeaturedDish = ({ categories }) => {
  // Find the first item with special tags
  let featuredItem = null;
  let featuredCategory = null;
  
  for (const category of categories) {
    const item = category.items.find(item => 
      item.tags && (item.tags.includes('Popular') || item.tags.includes('Must Try') || item.tags.includes('Bestseller'))
    );
    if (item) {
      featuredItem = item;
      featuredCategory = category;
      break;
    }
  }

  // If no featured item found, use first available
  if (!featuredItem) {
    for (const category of categories) {
      if (category.items.length > 0) {
        featuredItem = category.items[0];
        featuredCategory = category;
        break;
      }
    }
  }

  if (!featuredItem) return null;

  return (
    <section className="py-14 bg-[#FFFDF8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="w-12 h-px bg-[#D8C9AD]"></span>
            <span className="text-[#B85C38] text-sm tracking-widest uppercase font-sans font-semibold">
              From Our Kitchen
            </span>
            <span className="w-12 h-px bg-[#D8C9AD]"></span>
          </div>
        </div>

        {/* Featured Item Display */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Side - Organic Shape */}
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-t-[2rem] rounded-b-[3rem] overflow-hidden border-4 border-[#F7F1E5] shadow-lg">
              {featuredItem.image ? (
                <img 
                  src={featuredItem.image} 
                  alt={featuredItem.name}
                  className="w-full h-64 md:h-80 object-cover"
                />
              ) : (
                <div className="w-full h-64 md:h-80 bg-gradient-to-br from-[#D8C9AD] to-[#F7F1E5] flex items-center justify-center">
                  <span className="text-7xl md:text-8xl">
                    {featuredCategory.icon || '🍽️'}
                  </span>
                </div>
              )}
            </div>
            
            {/* Decorative accents */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-[#B85C38]/15 rounded-full blur-xl"></div>
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-[#526044]/15 rounded-full blur-lg"></div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Chef's Pick Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#B85C38]"></span>
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#B85C38]">
                Chef's Special
              </span>
            </div>

            {/* Item Name - Serif */}
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#30382A] mb-3">
              {featuredItem.name}
            </h3>

            {/* Description */}
            {featuredItem.description && (
              <p className="text-sm md:text-base text-[#817A6B] leading-relaxed mb-4">
                {featuredItem.description}
              </p>
            )}

            {/* Category */}
            <p className="text-xs text-[#526044] font-sans uppercase tracking-wider mb-4">
              {featuredCategory.name}
            </p>

            {/* Price */}
            <p className="text-2xl font-sans font-bold text-[#30382A] mb-6">
              ₹{featuredItem.price}
            </p>

            {/* Decorative Button */}
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#526044] text-white text-sm font-sans font-semibold rounded-full hover:bg-[#30382A] transition-colors">
              <span>View Item</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDish;