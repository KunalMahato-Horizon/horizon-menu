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
    <article className="group py-5 px-3 -mx-3 rounded-lg transition-colors hover:bg-[#FFFDF8]/50">
      <div className="flex items-start justify-between gap-4">
        {/* Left side - Item details */}
        <div className="flex-1 min-w-0">
          {/* Item name and indicators */}
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <h3 className="text-base font-serif font-bold text-[#30382A] group-hover:text-[#B85C38] transition-colors">
              {name}
            </h3>
            
            {/* Veg/Non-veg indicator */}
            {type && (
              <span 
                className={`inline-flex items-center justify-center w-3.5 h-3.5 border-2 rounded-sm flex-shrink-0 ${
                  type === 'veg' ? 'border-green-700' : 'border-red-700'
                }`}
                title={type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
              >
                <span 
                  className={`w-1.5 h-1.5 rounded-full ${
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
            <p className="text-sm text-[#817A6B] leading-relaxed">
              {description}
            </p>
          )}

          {/* Tags - Warm style */}
          {tags.length > 0 && (
            <div className="flex gap-2 flex-wrap mt-2">
              {tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center px-3 py-1 text-[11px] font-medium bg-[#B85C38]/10 text-[#B85C38] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right side - Price */}
        <span className="text-base font-sans font-semibold text-[#30382A] tabular-nums whitespace-nowrap">
          ₹{price}
        </span>
      </div>
    </article>
  );
};

export default MenuItem;