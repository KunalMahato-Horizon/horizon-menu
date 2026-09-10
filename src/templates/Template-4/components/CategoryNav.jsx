import React, { useState, useEffect, useRef } from 'react';

const CategoryNav = ({ categories = [] }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const activeBtnRef = useRef(null);
  const isManualScroll = useRef(false);

  // Auto-scroll the active pill to center on mobile/tablet viewports
  useEffect(() => {
    if (activeBtnRef.current) {
      activeBtnRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeCategory]);

  // Track scroll position for sticky elevation & Intersection Observer for Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const topPos = navRef.current.getBoundingClientRect().top;
        setIsSticky(topPos <= 65);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Scroll spy: observe section visibility
    const sectionIds = categories.map((c) => `category-${c.id}`);
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;

        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const catId = visibleSection.target.id.replace('category-', '');
          setActiveCategory(catId);
        } else if (window.scrollY < 400) {
          setActiveCategory('all');
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [categories]);

  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId);
    isManualScroll.current = true;

    if (categoryId === 'all') {
      const menuEl = document.getElementById('menu') || document.querySelector('main');
      if (menuEl) {
        const yOffset = -90;
        const y = menuEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(`category-${categoryId}`);
      if (element) {
        const yOffset = -90;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }

    // Reset manual scroll lock after animation completes
    setTimeout(() => {
      isManualScroll.current = false;
    }, 700);
  };

  const navItems = [{ id: 'all', name: 'All Dishes', icon: '✦' }, ...categories];

  return (
    <nav
      ref={navRef}
      aria-label="Menu category navigation"
      className={`sticky top-14 sm:top-16 z-30 w-full transition-all duration-300 ${
        isSticky
          ? 'bg-white/95 backdrop-blur-md border-y border-stone-200/90 shadow-[0_6px_20px_-4px_rgba(28,25,23,0.06)] py-2 sm:py-2.5'
          : 'bg-stone-50/80 backdrop-blur-sm border-y border-stone-200/60 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div
          role="tablist"
          className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1"
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
                className={`flex-shrink-0 inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 select-none active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-sm ring-1 ring-stone-900'
                    : 'bg-white/70 text-stone-600 hover:text-stone-950 hover:bg-stone-200/60 border border-stone-200/70'
                }`}
              >
                {category.icon && (
                  <span
                    className={`text-xs leading-none ${
                      isActive ? 'text-amber-400' : 'text-stone-400'
                    }`}
                    aria-hidden="true"
                  >
                    {category.icon}
                  </span>
                )}
                <span>{category.name}</span>

                {category.items?.length > 0 && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {category.items.length}
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