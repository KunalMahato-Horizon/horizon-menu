import React, { useState, useEffect, useRef } from 'react';

const CategoryNav = ({ categories = [], activeCategory, onSelectCategory }) => {
  const navContainerRef = useRef(null);
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      // Focus detection window in the upper third of viewport below the sticky nav
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const catId = entry.target.id.replace('category-', '');
          onSelectCategory(catId, false);

          // Auto-scroll the active pill to center
          const activePill = document.getElementById(`pill-${catId}`);
          if (activePill && navContainerRef.current) {
            activePill.scrollIntoView({
              behavior: 'smooth',
              inline: 'center',
              block: 'nearest',
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    categories.forEach((cat) => {
      const el = document.getElementById(`category-${cat.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories, onSelectCategory]);

  const handlePillClick = (id) => {
    isClickScrolling.current = true;
    onSelectCategory(id, true);

    const target = id === 'all' ? document.getElementById('menu-root') : document.getElementById(`category-${id}`);
    if (target) {
      const yOffset = -130;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    // Scroll clicked pill to center immediately
    const pill = document.getElementById(`pill-${id}`);
    if (pill && navContainerRef.current) {
      pill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#F6EEDF]/95 backdrop-blur-md border-b-2 border-[#3E2211]/20 py-2.5 shadow-sm transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div
          ref={navContainerRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1"
        >
          <button
            id="pill-all"
            onClick={() => handlePillClick('all')}
            className={`flex-shrink-0 px-4 py-1.5 text-xs font-sans font-bold uppercase tracking-wider rounded-full transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-[#3E2211] text-[#F2B828] shadow-md ring-2 ring-[#F2B828]/40 scale-102'
                : 'bg-[#EFE3CF] text-[#231F20] hover:bg-[#3E2211]/10'
            }`}
          >
            All Items
          </button>

          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`pill-${cat.id}`}
                onClick={() => handlePillClick(cat.id)}
                className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-sans font-bold uppercase tracking-wider rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#3E2211] text-[#F2B828] shadow-md ring-2 ring-[#F2B828]/40 scale-102'
                    : 'bg-[#EFE3CF] text-[#231F20] hover:bg-[#3E2211]/10'
                }`}
              >
                <span>{cat.icon}</span>
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