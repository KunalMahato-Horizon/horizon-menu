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

  return (
    <article className="group relative py-6 px-2 hover:bg-stone-50/50 rounded-lg transition-all duration-300">
      <div className="flex items-start justify-between gap-6">
        {/* Left side - Item details */}
        <div className="flex-1 min-w-0">
          {/* Item name and indicators */}
          <div className="flex items-center gap-3 flex-wrap mb-2">
            <h3 className="text-lg font-serif font-semibold text-stone-900 group-hover:text-stone-700 transition-colors">
              {name}
            </h3>
            
            {/* Veg/Non-veg indicator - Premium style */}
            {type && (
              <span 
                className={`inline-flex items-center justify-center w-4 h-4 border rounded-sm flex-shrink-0 ${
                  type === 'veg' ? 'border-green-700' : 'border-red-700'
                }`}
                title={type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
              >
                <span 
                  className={`w-2 h-2 rounded-full ${
                    type === 'veg' ? 'bg-green-700' : 'bg-red-700'
                  }`}
                />
              </span>
            )}

            {/* Spicy indicator */}
            {spicy && (
              <span className="text-sm" title="Spicy" aria-label="Spicy">
                🌶
              </span>
            )}
          </div>

          {/* Description */}
          {description && (
            <p className="text-sm text-stone-500 leading-relaxed mb-3">
              {description}
            </p>
          )}

          {/* Tags - Premium style */}
          {tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center px-3 py-1 text-[11px] font-medium tracking-wide uppercase bg-stone-100 text-stone-700 rounded-full border border-stone-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right side - Price and Image */}
        <div className="flex flex-col items-end gap-3 flex-shrink-0">
          {/* Price - Elegant style */}
          <span className="text-lg font-serif font-semibold text-stone-900 tabular-nums">
            ₹{price}
          </span>

          {/* Optional Image */}
          {image && (
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-stone-200 shadow-sm">
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default MenuItem;