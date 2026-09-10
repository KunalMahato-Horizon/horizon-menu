import React, { useState, useEffect } from 'react';

const Featured = ({ categories }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Get items with special tags
  const featuredItems = [];
  
  categories.forEach(category => {
    category.items.forEach(item => {
      if (item.tags && (item.tags.includes('Popular') || item.tags.includes('Bestseller') || item.tags.includes('Must Try'))) {
        featuredItems.push({
          ...item,
          categoryName: category.name,
          categoryIcon: category.icon,
        });
      }
    });
  });

  // If no featured items, don't render
  if (featuredItems.length === 0) return null;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-slate-900/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-medium"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-purple-500/50"></div>
            <span className="text-purple-400 text-lg md:text-xl animate-twinkle">✦</span>
            <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-purple-500/50"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Popular Items
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-400 mt-2">
            Most loved by our customers
          </p>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {featuredItems.map((item, idx) => (
            <div 
              key={idx}
              className={`group relative bg-slate-900/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-600/20 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              onMouseEnter={() => setHoveredItem(idx)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="flex">
                {/* Image or Placeholder */}
                <div className="w-1/3 relative overflow-hidden">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full min-h-[180px] md:min-h-[200px] flex items-center justify-center text-5xl md:text-6xl bg-gradient-to-br from-purple-600/20 to-slate-800 relative">
                      <span className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                        {item.categoryIcon || '🍽️'}
                      </span>
                    </div>
                  )}
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Popular Badge */}
                  <div className="absolute top-2 md:top-3 left-2 md:left-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 md:py-1.5 rounded-full shadow-lg shadow-purple-600/30 flex items-center gap-1">
                    <span className="animate-pulse">🔥</span>
                    <span>Popular</span>
                  </div>

                  {/* Category icon badge */}
                  {item.categoryIcon && (
                    <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 w-6 h-6 md:w-8 md:h-8 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-xs md:text-sm">
                      {item.categoryIcon}
                    </div>
                  )}
                </div>

                {/* Item Details */}
                <div className="flex-1 p-4 md:p-6">
                  <div className="flex items-start justify-between gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-1 truncate">
                        {item.name}
                      </h3>
                      <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider flex items-center gap-1">
                        <span>{item.categoryIcon}</span>
                        <span className="truncate">{item.categoryName}</span>
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <span className="text-lg md:text-xl lg:text-2xl font-bold text-purple-400 whitespace-nowrap">
                        ₹{item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="block text-xs text-slate-600 line-through">
                          ₹{item.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {item.description && (
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed line-clamp-2 md:line-clamp-3">
                      {item.description}
                    </p>
                  )}

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 md:mt-3">
                      {item.tags.slice(0, 3).map((tag, tagIdx) => (
                        <span 
                          key={tagIdx}
                          className={`text-[8px] md:text-[10px] px-2 py-0.5 md:px-2.5 md:py-1 rounded-full font-medium transition-colors ${
                            tag === 'Popular' || tag === 'Bestseller' || tag === 'Must Try'
                              ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Rating if available */}
                  {item.rating && (
                    <div className="flex items-center gap-1 mt-2 md:mt-3">
                      <span className="text-yellow-400 text-xs md:text-sm">★</span>
                      <span className="text-xs md:text-sm font-semibold text-white">{item.rating}</span>
                      <span className="text-[10px] md:text-xs text-slate-500">/ 5.0</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Add to global CSS */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.15); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-medium { animation: pulse-medium 3s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Featured;