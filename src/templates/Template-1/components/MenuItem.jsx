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
    <article 
      className="group relative bg-white rounded-xl p-5 transition-all duration-300 hover:shadow-xl hover:border-horizon-200 border border-gray-100 cursor-pointer"
      aria-label={`${name} - ₹${price}`}
    >
      <div className="flex justify-between items-start gap-4">
        {/* Left side - Item details */}
        <div className="flex-1 min-w-0">
          {/* Item name and indicators */}
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <h3 className="text-base font-semibold text-gray-900 group-hover:text-horizon-600 transition-colors">
              {name}
            </h3>
            
            {/* Veg/Non-veg indicator */}
            {type && (
              <span 
                className={`inline-flex items-center justify-center w-4 h-4 border-2 rounded-sm flex-shrink-0 ${
                  type === 'veg' ? 'border-green-500' : 'border-red-500'
                }`}
                title={type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
              >
                <span 
                  className={`w-2 h-2 rounded-full ${
                    type === 'veg' ? 'bg-green-500' : 'bg-red-500'
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
            <p className="text-sm text-gray-500 leading-relaxed mb-3">
              {description}
            </p>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center px-2.5 py-1 text-[11px] font-medium bg-horizon-50 text-horizon-600 rounded-full border border-horizon-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right side - Price and Image */}
        <div className="flex flex-col items-end gap-3 flex-shrink-0">
          {/* Price */}
          <span className="text-base font-bold text-gray-900 tabular-nums">
            ₹{price}
          </span>

          {/* Optional Image */}
          {image && (
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-md">
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