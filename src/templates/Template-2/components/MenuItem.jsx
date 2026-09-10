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
    <article className="group bg-white rounded-2xl p-5 border border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-amber-300">
      <div className="flex justify-between items-start gap-4">
        {/* Left side - Item details */}
        <div className="flex-1 min-w-0">
          {/* Item name and indicators */}
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <h3 className="text-base font-bold text-amber-900 group-hover:text-amber-700 transition-colors">
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
            <p className="text-sm text-amber-700/80 leading-relaxed mb-3">
              {description}
            </p>
          )}

          {/* Tags - Warm style */}
          {tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center px-3 py-1 text-[11px] font-semibold bg-amber-50 text-amber-800 rounded-full border border-amber-200"
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
          <span className="text-lg font-bold text-amber-900 tabular-nums">
            ₹{price}
          </span>

          {/* Optional Image */}
          {image && (
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-md border-2 border-amber-200">
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