import React from 'react';

const MenuItem = ({ item }) => {
  const {
    name = "",
    description = "",
    price = 0,
    type = null,
    spicy = false,
    tags = [],
  } = item;

  return (
    <article className="group py-6 px-4 border-b border-black/10 hover:bg-white transition-colors">
      <div className="flex items-start justify-between gap-4">
        {/* Left side - Item details */}
        <div className="flex-1 min-w-0">
          {/* Item name and indicators */}
          <div className="flex items-center gap-3 flex-wrap mb-2">
            <h3 className="text-lg md:text-xl font-black text-black uppercase tracking-tight group-hover:text-[#FF4D00] transition-colors">
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
            <p className="text-sm text-black/50 leading-relaxed">
              {description}
            </p>
          )}

          {/* Tags - Bold style */}
          {tags.length > 0 && (
            <div className="flex gap-2 flex-wrap mt-2">
              {tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-black text-white rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right side - Price */}
        <span className="text-lg md:text-xl font-black text-black tabular-nums whitespace-nowrap group-hover:text-[#FF4D00] transition-colors">
          ₹{price}
        </span>
      </div>
    </article>
  );
};

export default MenuItem;