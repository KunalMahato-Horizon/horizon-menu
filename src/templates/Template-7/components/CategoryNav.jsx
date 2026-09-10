import React, { useState, useEffect, useRef } from 'react';

const CategoryNav = ({ categories = [] }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const isClickingRef = useRef(false);

  // 1. Sticky state + ScrollSpy detection
  useEffect(() => {
    const handleScroll = () => {
      // Sticky positioning
      if (navRef.current) {
        const navPosition = navRef.current.getBoundingClientRect().top;
        setIsSticky(navPosition <= 60);
      }

      // Auto-detect active section
      if (isClickingRef.current || !categories || categories.length === 0) return;

      const scrollPosition = window.scrollY + 160;
      const menuEl = document.getElementById('menu');

      if (menuEl && window.scrollY < menuEl.offsetTop - 100) {
        setActiveCategory('all');
        return;
      }

      let currentId = 'all';
      for (const category of categories) {
        const element = document.getElementById(`category-${category.id}`);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentId = category.id;
            break;
          }
        }
      }
      setActiveCategory(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [categories]);

  // 2. Auto-scroll active button into view in the horizontal nav
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const activeButton = scrollContainerRef.current.querySelector(
      `[data-category-id="${activeCategory}"]`
    );
    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeCategory]);

  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId);
    isClickingRef.current = true;
    setTimeout(() => {
      isClickingRef.current = false;
    }, 800);

    if (categoryId === 'all') {
      const element = document.getElementById('menu');
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      return;
    }

    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`bg-white border-b border-gray-200 transition-shadow ${
        isSticky ? 'sticky top-[57px] z-40 shadow-sm' : ''
      }`}
      aria-label="Menu categories"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div
          ref={scrollContainerRef}
          className="flex gap-1 overflow-x-auto py-3 scrollbar-hide scroll-smooth"
        >
          {/* All Categories Button */}
          <button
            data-category-id="all"
            onClick={() => scrollToCategory('all')}
            className={`flex-shrink-0 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none ${
              activeCategory === 'all'
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent'
            }`}
          >
            All
          </button>

          {/* Individual Category Buttons */}
          {categories.map((category) => (
            <button
              key={category.id}
              data-category-id={category.id}
              onClick={() => scrollToCategory(category.id)}
              className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none ${
                activeCategory === category.id
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent'
              }`}
            >
              {category.icon && <span aria-hidden="true">{category.icon}</span>}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;