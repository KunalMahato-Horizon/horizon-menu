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
    <article className="group relative py-6 px-4 rounded-xl transition-all duration-300 hover:bg-slate-900/50 border border-transparent hover:border-purple-500/20">
      <div className="flex items-start justify-between gap-6">
        {/* Left side - Item details */}
        <div className="flex-1 min-w-0">
          {/* Item name and indicators */}
          <div className="flex items-center gap-3 flex-wrap mb-2">
            <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
              {name}
            </h3>
            
            {/* Veg/Non-veg indicator - Dark style */}
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
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              {description}
            </p>
          )}

          {/* Tags - Dark style */}
          {tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center px-3 py-1 text-[11px] font-medium bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right side - Price and Image */}
        <div className="flex flex-col items-end gap-3 flex-shrink-0">
          {/* Price - Glowing style */}
          <span className="text-xl font-bold text-purple-400 tabular-nums">
            ₹{price}
          </span>

          {/* Optional Image */}
          {image && (
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-purple-500/30 shadow-lg shadow-purple-600/10">
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