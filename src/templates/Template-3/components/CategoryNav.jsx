import React, { useState, useEffect, useRef } from 'react';

const CategoryNav = ({ categories = [] }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const activeBtnRef = useRef(null);

  // Auto-scroll the active tab into the center of the viewport on mobile
  useEffect(() => {
    if (activeBtnRef.current) {
      activeBtnRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeCategory]);

  // Track scroll position for dynamic blur and border elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId);

    if (categoryId === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      const yOffset = -75; // Offset to account for sticky bar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [{ id: 'all', name: 'All' }, ...categories];

  return (
    <nav
      aria-label="Menu categories"
      className={`sticky top-0 z-30 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]'
          : 'bg-white border-b border-neutral-200/70'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div
          role="tablist"
          className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-2.5 sm:py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {navItems.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                ref={isActive ? activeBtnRef : null}
                onClick={() => scrollToCategory(category.id)}
                role="tab"
                aria-selected={isActive}
                className={`flex-shrink-0 inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 select-none active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-neutral-100/70 text-neutral-600 hover:bg-neutral-200/70 hover:text-neutral-900'
                }`}
              >
                {category.icon && (
                  <span className="text-sm sm:text-base leading-none" aria-hidden="true">
                    {category.icon}
                  </span>
                )}
                <span>{category.name}</span>

                {category.count !== undefined && (
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-md font-medium transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-neutral-200/80 text-neutral-600'
                    }`}
                  >
                    {category.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;