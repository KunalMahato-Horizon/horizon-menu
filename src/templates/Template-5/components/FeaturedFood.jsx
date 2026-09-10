import React, { useState, useEffect } from 'react';

const FeaturedFood = ({ categories }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  // Find the first item with "Popular" or "Must Try" tag
  let featuredItem = null;
  let featuredCategory = null;
  
  for (const category of categories) {
    const item = category.items.find(item => 
      item.tags && (item.tags.includes('Popular') || item.tags.includes('Must Try') || item.tags.includes('Bestseller'))
    );
    if (item) {
      featuredItem = item;
      featuredCategory = category;
      break;
    }
  }

  // If no featured item found, use the first available item
  if (!featuredItem) {
    for (const category of categories) {
      if (category.items.length > 0) {
        featuredItem = category.items[0];
        featuredCategory = category;
        break;
      }
    }
  }

  // If still no item, don't render
  if (!featuredItem) return null;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  // Calculate savings if original price exists
  const savingsPercentage = featuredItem.originalPrice && featuredItem.price
    ? Math.round(((featuredItem.originalPrice - featuredItem.price) / featuredItem.originalPrice) * 100)
    : null;

  return (
    <section 
      className="relative overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Large Image Container */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background image with parallax */}
        {featuredItem.image ? (
          <div 
            className="absolute inset-0 transition-transform duration-700 ease-out"
            style={{
              transform: isHovered 
                ? `scale(1.1) translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)` 
                : 'scale(1)',
            }}
          >
            <img 
              src={featuredItem.image} 
              alt={featuredItem.name}
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
            />
            {/* Loading shimmer */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-100 animate-pulse"></div>
            )}
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 flex items-center justify-center relative overflow-hidden">
            {/* Decorative background circles */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/20 rounded-full blur-2xl animate-pulse-slow"></div>
            
            <span className="relative text-7xl md:text-8xl lg:text-9xl animate-float drop-shadow-lg">
              {featuredCategory.icon || '🍽️'}
            </span>
          </div>
        )}
        
        {/* Multiple gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_black/30_100%)]"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[size:32px_32px]"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Badge with animation */}
            <div className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm font-semibold mb-3 md:mb-4 shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 hover:shadow-emerald-600/40 transition-all duration-300 group/badge">
              <span className="animate-pulse">🔥</span>
              <span>Featured</span>
              {featuredCategory && (
                <>
                  <span className="opacity-50">•</span>
                  <span className="hidden sm:inline">{featuredCategory.name}</span>
                  <span className="sm:hidden">{featuredCategory.icon}</span>
                </>
              )}
            </div>

            {/* Item Name with gradient */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-emerald-200 bg-clip-text text-transparent">
                {featuredItem.name}
              </span>
            </h2>

            {/* Description */}
            {featuredItem.description && (
              <p className="text-base md:text-lg lg:text-xl text-white/80 mb-3 md:mb-4 max-w-xl leading-relaxed line-clamp-2 md:line-clamp-3">
                {featuredItem.description}
              </p>
            )}

            {/* Price and tags */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <div className="relative group/price">
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-400">
                  ₹{featuredItem.price}
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400/30 rounded-full transition-all duration-300 group-hover/price:bg-emerald-400/60"></span>
                
                {/* Original price with strikethrough */}
                {featuredItem.originalPrice && (
                  <span className="ml-2 text-base md:text-lg text-white/40 line-through">
                    ₹{featuredItem.originalPrice}
                  </span>
                )}
              </div>
              
              {/* Savings badge */}
              {savingsPercentage && (
                <span className="bg-emerald-500/20 text-emerald-400 text-xs md:text-sm font-bold px-2.5 md:px-3 py-1 rounded-full border border-emerald-500/30">
                  Save {savingsPercentage}%
                </span>
              )}
              
              {/* Tags */}
              {featuredItem.tags && featuredItem.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {featuredItem.tags.slice(0, 3).map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-xs md:text-sm text-white/70 bg-white/10 backdrop-blur-sm px-2.5 md:px-3 py-1 rounded-full border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Rating if available */}
            {featuredItem.rating && (
              <div className="flex items-center gap-2 mt-3 md:mt-4">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <span 
                      key={idx}
                      className={`text-sm md:text-base ${
                        idx < Math.floor(featuredItem.rating) 
                          ? 'text-yellow-400' 
                          : 'text-white/20'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-white/70 font-medium">
                  {featuredItem.rating} / 5.0
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 animate-bounce hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll"></div>
          </div>
        </div>

        {/* Top decorative line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
      </div>

      {/* Add to global CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        @keyframes scroll {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(12px); opacity: 1; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-scroll { animation: scroll 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default FeaturedFood;