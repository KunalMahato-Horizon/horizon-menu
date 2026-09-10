import React, { useState, useEffect, useRef } from 'react';

const CategoryNav = ({ categories = [] }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const activeBtnRef = useRef(null);
  const isManualScroll = useRef(false);

  // Auto-scroll the active tab into the center of the mobile screen
  useEffect(() => {
    if (activeBtnRef.current) {
      activeBtnRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeCategory]);

  // Scroll Spy (IntersectionObserver) + Sticky detection
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navPosition = navRef.current.getBoundingClientRect().top;
        setIsSticky(navPosition <= 65);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Observe each category section
    const sectionIds = categories.map((cat) => `category-${cat.id}`);
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;

        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const catId = visibleSection.target.id.replace('category-', '');
          setActiveCategory(catId);
        } else if (window.scrollY < 350) {
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
      const firstSection = document.getElementById('menu') || document.querySelector('main');
      if (firstSection) {
        const yOffset = -90;
        const y = firstSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(`category-${categoryId}`);
      if (element) {
        const yOffset = -90;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }

    // Unlock auto scroll-spy after smooth scroll animation settles
    setTimeout(() => {
      isManualScroll.current = false;
    }, 700);
  };

  const navItems = [{ id: 'all', name: 'All Dishes', icon: '✦' }, ...categories];

  return (
    <nav
      ref={navRef}
      aria-label="Menu categories navigation"
      className={`sticky top-14 sm:top-16 z-30 w-full transition-all duration-300 ${
        isSticky
          ? 'bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-[0_4px_20px_-4px_rgba(16,185,129,0.08)] py-2 sm:py-2.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-neutral-150 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          role="tablist"
          className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1"
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
                className={`flex-shrink-0 inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 select-none active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 ring-1 ring-emerald-600'
                    : 'bg-neutral-100/80 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/70 border border-neutral-200/50'
                }`}
              >
                {category.icon && (
                  <span
                    className={`text-sm leading-none transition-transform ${
                      isActive ? 'scale-110' : 'opacity-75'
                    }`}
                    aria-hidden="true"
                  >
                    {category.icon}
                  </span>
                )}
                
                <span>{category.name}</span>

                {/* Item Count Badge */}
                {category.items?.length > 0 && (
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-neutral-200/80 text-neutral-500'
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