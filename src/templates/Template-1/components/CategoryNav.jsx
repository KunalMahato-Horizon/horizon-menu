import React, { useState, useEffect, useRef, useCallback } from 'react';

const CategoryNav = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSticky, setIsSticky] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const navRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

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
      setShowLeftArrow(container.scrollLeft > 0);
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
      const yOffset = -80; // Adjust offset for sticky nav
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
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Check arrows after scroll animation
      scrollTimeoutRef.current = setTimeout(checkScrollArrows, 300);
    }
  };

  // Handle scroll spy - automatically update active category based on scroll position
  useEffect(() => {
    if (!isSticky) return;

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 120; // Offset for sticky nav

      // Find the last category that's above the scroll position
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
      className={`bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-100 transition-all duration-300 ${
        isSticky 
          ? 'sticky top-0 z-40 shadow-lg shadow-gray-100/50' 
          : 'relative'
      }`}
      aria-label="Menu categories"
    >
      <div className="max-w-3xl mx-auto px-4 relative">
        {/* Left scroll arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scrollCategories('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-100 hover:bg-gray-50 transition-colors"
            aria-label="Scroll categories left"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Scrollable category list */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto py-3 scrollbar-hide scroll-smooth px-8"
          role="tablist"
          aria-label="Menu categories"
        >
          {/* All Categories Button */}
          <button
            onClick={() => scrollToCategory('all')}
            onMouseEnter={() => setHoveredCategory('all')}
            onMouseLeave={() => setHoveredCategory(null)}
            role="tab"
            aria-selected={activeCategory === 'all'}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-md scale-105'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-105 active:scale-95 border border-gray-200'
            }`}
          >
            All Items
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
              className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-md scale-105'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-105 active:scale-95 border border-gray-200'
              }`}
            >
              {category.icon && (
                <span 
                  className={`transition-transform duration-300 ${
                    hoveredCategory === category.id ? 'rotate-12 scale-110' : ''
                  }`}
                  aria-hidden="true"
                >
                  {category.icon}
                </span>
              )}
              <span>{category.name}</span>
              
              {/* Item count badge (optional) */}
              {category.count && (
                <span className={`text-xs rounded-full px-2 py-0.5 ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Right scroll arrow */}
        {showRightArrow && (
          <button
            onClick={() => scrollCategories('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-100 hover:bg-gray-50 transition-colors"
            aria-label="Scroll categories right"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Progress indicator */}
      {isSticky && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100">
          <div 
            className="h-full bg-gradient-to-r from-orange-400 to-amber-500 transition-all duration-300"
            style={{ 
              width: `${(categories.findIndex(c => c.id === activeCategory) + 1) / (categories.length + 1) * 100}%` 
            }}
          />
        </div>
      )}
    </nav>
  );
};

export default CategoryNav;