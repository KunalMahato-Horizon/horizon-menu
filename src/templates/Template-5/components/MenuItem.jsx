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
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Image Section */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-emerald-50 to-emerald-100">
            🍽️
          </div>
        )}

        {/* Tags overlay */}
        {tags.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-2">
            {tags.map((tag, idx) => (
              <span 
                key={idx}
                className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Spicy overlay */}
        {spicy && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            🌶 Spicy
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
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
            </div>
          </div>
          
          {/* Price */}
          <span className="text-xl font-bold text-emerald-600 tabular-nums whitespace-nowrap">
            ₹{price}
          </span>
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </article>
  );
};

export default MenuItem;