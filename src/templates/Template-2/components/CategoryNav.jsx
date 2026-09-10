import React, { useState, useEffect, useRef, useCallback } from 'react';

const CategoryNav = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSticky, setIsSticky] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const navRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Handle sticky behavior with smooth transition
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navPosition = navRef.current.getBoundingClientRect().top;
        setIsSticky(navPosition <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check for scroll arrows visibility
  const checkScrollArrows = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 10);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  }, []);

  useEffect(() => {
    checkScrollArrows();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollArrows, { passive: true });
      window.addEventListener('resize', checkScrollArrows);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollArrows);
        window.removeEventListener('resize', checkScrollArrows);
      }
    };
  }, [checkScrollArrows]);

  // Scroll to category with active state tracking
  const scrollToCategory = useCallback((categoryId) => {
    setActiveCategory(categoryId);
    
    if (categoryId === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  // Scroll the category list
  const scrollCategories = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 200;
      const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      setTimeout(checkScrollArrows, 300);
    }
  };

  // Handle touch swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart !== null) {
      const touchEnd = e.changedTouches[0].clientX;
      const swipeDistance = touchStart - touchEnd;
      
      if (Math.abs(swipeDistance) > 50) {
        scrollCategories(swipeDistance > 0 ? 'right' : 'left');
      }
    }
    setTouchStart(null);
  };

  // Scroll spy - automatically update active category
  useEffect(() => {
    if (!isSticky) return;

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 120;
      let currentCategory = 'all';
      
      categories.forEach((category) => {
        const element = document.getElementById(`category-${category.id}`);
        if (element && element.offsetTop <= scrollPosition) {
          currentCategory = category.id;
        }
      });

      setActiveCategory(currentCategory);
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [isSticky, categories]);

  return (
    <nav 
      ref={navRef}
      className={`bg-[#FFF8F0]/95 backdrop-blur border-b border-amber-200/50 transition-all duration-300 ${
        isSticky 
          ? 'sticky top-0 z-40 shadow-lg shadow-amber-900/10' 
          : 'relative'
      }`}
      aria-label="Menu categories"
    >
      <div className="max-w-3xl mx-auto px-4 relative">
        {/* Left scroll arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scrollCategories('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur rounded-full shadow-md border border-amber-200 hover:bg-amber-50 transition-all hover:scale-110"
            aria-label="Scroll categories left"
          >
            <svg className="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Scrollable category list */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto py-4 px-8 scrollbar-hide scroll-smooth"
          role="tablist"
          aria-label="Menu categories"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* All Categories Button */}
          <button
            onClick={() => scrollToCategory('all')}
            onMouseEnter={() => setHoveredCategory('all')}
            onMouseLeave={() => setHoveredCategory(null)}
            role="tab"
            aria-selected={activeCategory === 'all'}
            className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 relative group ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-amber-700 to-amber-800 text-white shadow-lg shadow-amber-900/20 scale-105'
                : 'bg-amber-100/80 text-amber-900 hover:bg-amber-200/80 hover:scale-105 active:scale-95 border border-amber-200/50'
            }`}
          >
            <span className="relative z-10">All Items</span>
            {/* Shine effect on active */}
            {activeCategory === 'all' && (
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shine"></span>
              </span>
            )}
          </button>
          
          {/* Individual Category Buttons */}
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToCategory(category.id)}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              role="tab"
              aria-selected={activeCategory === category.id}
              className={`flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 relative group ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-amber-700 to-amber-800 text-white shadow-lg shadow-amber-900/20 scale-105'
                  : 'bg-amber-100/80 text-amber-900 hover:bg-amber-200/80 hover:scale-105 active:scale-95 border border-amber-200/50'
              }`}
            >
              {category.icon && (
                <span 
                  className={`transition-transform duration-300 ${
                    hoveredCategory === category.id ? 'rotate-12 scale-125' : ''
                  }`}
                  aria-hidden="true"
                >
                  {category.icon}
                </span>
              )}
              <span className="relative z-10">{category.name}</span>
              
              {/* Item count badge */}
              {category.count && (
                <span className={`text-xs rounded-full px-2 py-0.5 transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-amber-200/50 text-amber-800'
                }`}>
                  {category.count}
                </span>
              )}
              
              {/* Shine effect on active */}
              {activeCategory === category.id && (
                <span className="absolute inset-0 rounded-full overflow-hidden">
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shine"></span>
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Right scroll arrow */}
        {showRightArrow && (
          <button
            onClick={() => scrollCategories('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur rounded-full shadow-md border border-amber-200 hover:bg-amber-50 transition-all hover:scale-110"
            aria-label="Scroll categories right"
          >
            <svg className="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Progress indicator */}
      {isSticky && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-100/50">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 transition-all duration-300 rounded-r-full"
            style={{ 
              width: `${(categories.findIndex(c => c.id === activeCategory) + 1) / (categories.length + 1) * 100}%` 
            }}
          />
        </div>
      )}

      {/* Add this to your global CSS */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
};

export default CategoryNav;