import React, { useState, useEffect, useRef, useCallback } from 'react';

const FeaturedItems = ({ categories }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const autoPlayTimeoutRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // Get all items that have "Popular" or "Bestseller" tags
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

  if (featuredItems.length === 0) return null;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-play carousel with progress bar
  useEffect(() => {
    if (!isAutoPlaying || featuredItems.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredItems.length);
      setProgress(0);
    }, 4000);

    // Progress bar animation
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 2.5; // 100 / 40 (4 seconds at 25ms intervals)
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressIntervalRef.current);
    };
  }, [isAutoPlaying, featuredItems.length]);

  // Handle manual navigation
  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setProgress(0);
    setIsAutoPlaying(false);
    
    clearTimeout(autoPlayTimeoutRef.current);
    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
      setIsTransitioning(false);
    }, 5000);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((activeIndex + 1) % featuredItems.length);
  }, [activeIndex, featuredItems.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((activeIndex - 1 + featuredItems.length) % featuredItems.length);
  }, [activeIndex, featuredItems.length, goToSlide]);

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
    
    clearTimeout(autoPlayTimeoutRef.current);
    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <section className="mb-12 md:mb-16 relative">
      {/* Section Header */}
      <div className="text-center mb-6 md:mb-10">
        <div className="inline-flex items-center gap-3 mb-2">
          <span className="text-2xl md:text-3xl animate-pulse">⭐</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Chef's Specials
          </h2>
          <span className="text-2xl md:text-3xl animate-pulse">⭐</span>
        </div>
        <p className="text-sm md:text-base text-gray-500">
          Our most loved dishes
        </p>
      </div>

      {/* Main Spotlight Carousel */}
      <div 
        className={`relative max-w-4xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Main Display */}
        <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden border border-gray-100 group">
          <div className="grid md:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-48 md:h-auto md:min-h-[420px] bg-gray-100 overflow-hidden">
              {/* Image with key for animation */}
              <div key={activeIndex} className="absolute inset-0 animate-fade-in">
                {featuredItems[activeIndex].image ? (
                  <img 
                    src={featuredItems[activeIndex].image} 
                    alt={featuredItems[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl md:text-7xl bg-gradient-to-br from-gray-50 to-gray-100">
                    {featuredItems[activeIndex].categoryIcon || '🍽️'}
                  </div>
                )}
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20 pointer-events-none"></div>
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm text-gray-900 text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <span>{featuredItems[activeIndex].categoryIcon}</span>
                <span>{featuredItems[activeIndex].categoryName}</span>
              </div>
              
              {/* Popular Badge */}
              <div className="absolute bottom-3 left-3 md:top-4 md:right-4 md:bottom-auto md:left-auto bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                <span className="text-xs md:text-sm">🔥</span>
                <span>Popular</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5 md:p-8 lg:p-10 flex flex-col justify-center relative">
              {/* Progress bar */}
              {isAutoPlaying && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-100">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}

              <div className="mb-2 md:mb-3 flex items-center justify-between">
                <span className="text-xs md:text-sm text-gray-500 font-medium">
                  #{activeIndex + 1} of {featuredItems.length}
                </span>
                
                {/* Rating if available */}
                {featuredItems[activeIndex].rating && (
                  <span className="flex items-center gap-1 text-xs md:text-sm">
                    <span className="text-yellow-400">★</span>
                    <span className="font-semibold text-gray-700">
                      {featuredItems[activeIndex].rating}
                    </span>
                  </span>
                )}
              </div>
              
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                {featuredItems[activeIndex].name}
              </h3>
              
              {featuredItems[activeIndex].description && (
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                  {featuredItems[activeIndex].description}
                </p>
              )}
              
              {/* Tags */}
              {featuredItems[activeIndex].tags && featuredItems[activeIndex].tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                  {featuredItems[activeIndex].tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className={`text-[10px] md:text-xs px-2.5 py-1 rounded-full font-medium ${
                        tag === 'Popular' || tag === 'Bestseller' || tag === 'Must Try'
                          ? 'bg-orange-50 text-orange-600 border border-orange-200'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  ₹{featuredItems[activeIndex].price}
                </span>
                
                <div className="flex items-center gap-2">
                  {/* Navigation buttons */}
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-all hover:scale-110 active:scale-95"
                    aria-label="Previous item"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all hover:scale-110 active:scale-95 shadow-lg"
                    aria-label="Next item"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots with progress indication */}
        <div className="flex items-center justify-center gap-2 mt-4 md:mt-6">
          {featuredItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`relative h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex 
                  ? 'w-8 bg-gray-900' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to item ${idx + 1}`}
            >
              {idx === activeIndex && isAutoPlaying && (
                <span 
                  className="absolute inset-y-0 left-0 bg-orange-500 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Thumbnail Strip with enhanced styling */}
      <div className="max-w-4xl mx-auto mt-4 md:mt-8 px-4">
        <div className="flex gap-2 md:gap-4 overflow-x-auto scrollbar-hide justify-start md:justify-center pb-2">
          {featuredItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`relative flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 group ${
                idx === activeIndex 
                  ? 'ring-2 ring-gray-900 ring-offset-2 shadow-xl scale-105' 
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xl md:text-2xl bg-gray-100">
                  {item.categoryIcon || '🍽️'}
                </div>
              )}
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              
              {/* Active indicator */}
              {idx === activeIndex && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-white rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Add to global CSS */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FeaturedItems;