import React from 'react';

const MenuItem = ({ item }) => {
  const {
    name = "",
    description = "",
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = item;

  // Format price if passed as raw number or string
  const formattedPrice = typeof price === 'number' ? `₹${price}` : price.startsWith('₹') ? price : `₹${price}`;

  return (
    <article className="group py-4 px-1 transition-all duration-300 hover:bg-[#F5F2EC]/60">
      <div className="flex items-start justify-between gap-3">
        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
          {/* Header Row: Name, Indicators & Leader Line */}
          <div className="flex items-baseline gap-2">
            <div className="flex items-center gap-2 min-w-0">
              {/* Veg / Non-Veg Precision Indicator */}
              {type && (
                <span 
                  className={`inline-flex items-center justify-center w-3 h-3 border p-[1.5px] shrink-0 ${
                    type === 'veg' 
                      ? 'border-[#2D7A4F]' 
                      : 'border-[#A33D29]'
                  }`}
                  title={type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                >
                  <span 
                    className={`w-full h-full rounded-full ${
                      type === 'veg' ? 'bg-[#2D7A4F]' : 'bg-[#A33D29]'
                    }`}
                  />
                </span>
              )}

              {/* Item Title */}
              <h3 className="font-serif text-base md:text-lg text-[#1A1816] tracking-tight group-hover:text-[#524E48] transition-colors truncate">
                {name}
              </h3>

              {/* Spicy Indicator */}
              {spicy && (
                <span 
                  className="font-mono text-[10px] uppercase tracking-wider text-[#A33D29] bg-[#A33D29]/10 px-1 py-0.5 rounded-none shrink-0"
                  title="Spicy"
                >
                  Hot
                </span>
              )}
            </div>

            {/* Dotted Leader Line */}
            <div className="flex-1 border-b border-dotted border-[#D8D4CC] mb-1.5 min-w-[24px]" />

            {/* Price aligned to the baseline */}
            <span className="font-mono text-sm md:text-base font-medium text-[#1A1816] tabular-nums whitespace-nowrap shrink-0">
              {formattedPrice}
            </span>
          </div>

          {/* Description */}
          {description && (
            <p className="mt-1 text-xs md:text-[13px] font-sans text-[#7A756D] leading-relaxed max-w-[92%]">
              {description}
            </p>
          )}

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap mt-2">
              {tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8A857D] border-b border-[#E8E4DD] pb-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Mobile Image (Clean landscape ratio) */}
          {image && (
            <div className="mt-3 aspect-[16/9] w-full overflow-hidden bg-[#EAE6DF] md:hidden">
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                loading="lazy"
              />
            </div>
          )}
        </div>

        {/* Desktop Thumbnail (Square Editorial inset) */}
        {image && (
          <div className="hidden md:block w-20 h-20 shrink-0 overflow-hidden bg-[#EAE6DF] ml-4">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default MenuItem;