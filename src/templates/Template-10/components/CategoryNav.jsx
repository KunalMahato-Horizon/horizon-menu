import React, { useState, useEffect, useRef } from 'react';

const CategoryNav = ({ categories = [] }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navContainerRef = useRef(null);
  const buttonRefs = useRef({});
  const isClickScrolling = useRef(false);

  // Fallback categories if none are provided
  const items = categories.length > 0 ? categories : [
    { id: 'appetizers', name: 'Starters', icon: '🥗' },
    { id: 'mains', name: 'Mains', icon: '🥩' },
    { id: 'bakery', name: 'Bakery', icon: '🥖' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'drinks', name: 'Drinks', icon: '🍷' },
  ];

  // 1. IntersectionObserver: Detects the active section on scroll without jitter
  useEffect(() => {
    const allIds = ['all', ...items.map((cat) => cat.id)];
    const sectionElements = allIds
      .map((id) => (id === 'all' ? document.getElementById('menu') : document.getElementById(`category-${id}`)))
      .filter(Boolean);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Pick the section closest to the top of the viewport
          const topEntry = visibleEntries.reduce((prev, curr) =>
            Math.abs(curr.boundingClientRect.top) < Math.abs(prev.boundingClientRect.top) ? curr : prev
          );

          const matchedId = topEntry.target.id === 'menu'
            ? 'all'
            : topEntry.target.id.replace('category-', '');

          setActiveCategory(matchedId);
        }
      },
      {
        rootMargin: '-100px 0px -60% 0px',
        threshold: [0, 0.2, 0.5],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  // 2. Auto-scroll the active filter button into view in the nav bar
  useEffect(() => {
    const targetBtn = buttonRefs.current[activeCategory];
    if (targetBtn && navContainerRef.current) {
      targetBtn.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeCategory]);

  // 3. Smooth page scrolling on tab click
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    isClickScrolling.current = true;

    const targetId = categoryId === 'all' ? 'menu' : `category-${categoryId}`;
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 110;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Release lock once scroll animation finishes
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 700);
    } else {
      isClickScrolling.current = false;
    }
  };

  return (
    <nav
      className="sticky top-[64px] md:top-[72px] z-40 bg-[#F8F6F1]/95 backdrop-blur-md border-b border-[#E5E0D5] py-2.5 transition-all shadow-xs"
      aria-label="Menu category filters"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Filter List */}
        <div
          ref={navContainerRef}
          className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1 px-1"
        >
          {/* "All" Category Pill */}
          <button
            ref={(el) => (buttonRefs.current['all'] = el)}
            onClick={() => handleCategoryClick('all')}
            className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88746] select-none ${
              activeCategory === 'all'
                ? 'bg-[#2C2A24] text-[#F8F6F1] shadow-md ring-2 ring-[#B88746]/30 scale-[1.03]'
                : 'bg-[#EFECE6]/70 text-[#6C675B] hover:text-[#2C2A24] hover:bg-[#E5E0D5]'
            }`}
          >
            <span>All Items</span>
          </button>

          {/* Dynamic Categories */}
          {items.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                ref={(el) => (buttonRefs.current[cat.id] = el)}
                onClick={() => handleCategoryClick(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88746] select-none ${
                  isActive
                    ? 'bg-[#2C2A24] text-[#F8F6F1] shadow-md ring-2 ring-[#B88746]/30 scale-[1.03]'
                    : 'bg-[#EFECE6]/70 text-[#6C675B] hover:text-[#2C2A24] hover:bg-[#E5E0D5]'
                }`}
              >
                {cat.icon && (
                  <span className="text-sm" aria-hidden="true">
                    {cat.icon}
                  </span>
                )}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;