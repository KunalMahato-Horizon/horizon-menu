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
    <article className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-gray-300">
      <div className="flex items-stretch">
        {/* Left side - Item details */}
        <div className="flex-1 p-4 md:p-5 min-w-0">
          {/* Item name and indicators */}
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <h3 className="text-base font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
              {name}
            </h3>
            
            {/* Veg/Non-veg indicator */}
            {type && (
              <span 
                className={`inline-flex items-center justify-center w-4 h-4 border-2 rounded-sm flex-shrink-0 ${
                  type === 'veg' ? 'border-green-600' : 'border-red-600'
                }`}
                title={type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
              >
                <span 
                  className={`w-2 h-2 rounded-full ${
                    type === 'veg' ? 'bg-green-600' : 'bg-red-600'
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
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {description}
            </p>
          )}

          {/* Tags - Modern style */}
          {tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center px-2.5 py-1 text-[11px] font-semibold bg-gray-900 text-white rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right side - Price and Image */}
        <div className="flex flex-col justify-between items-end p-4 md:p-5 border-l border-gray-100 flex-shrink-0">
          {/* Price */}
          <span className="text-lg md:text-xl font-bold text-gray-900 tabular-nums">
            ₹{price}
          </span>

          {/* Optional Image */}
          {image && (
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-gray-100 mt-2">
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