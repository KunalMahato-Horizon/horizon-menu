import React, { useState, useEffect, useRef, useCallback } from 'react';

const CategoryNav = ({ categories = [] }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const navRef = useRef(null);
  const activeBtnRef = useRef(null);
  const isManualScroll = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const originalPositionRef = useRef(null);

  // Auto-center the active pill horizontally on mobile and tablet screens
  useEffect(() => {
    if (activeBtnRef.current) {
      activeBtnRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeCategory]);

  // Capture original position of nav
  useEffect(() => {
    if (navRef.current && originalPositionRef.current === null) {
      originalPositionRef.current = navRef.current.offsetTop;
    }
  }, []);

  // Handle scroll behavior - sticky, hide/show
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const navElement = navRef.current;
    
    if (!navElement) return;

    // Check if nav should be sticky (when scrolled past its original position)
    const originalPosition = originalPositionRef.current || 0;
    const shouldBeSticky = currentScrollY > originalPosition;
    setIsSticky(shouldBeSticky);

    // Determine scroll direction
    const isScrollingDownNow = currentScrollY > lastScrollY;
    setIsScrollingDown(isScrollingDownNow);

    // Hide on scroll down, show on scroll up (only when sticky)
    if (shouldBeSticky) {
      if (isScrollingDownNow && currentScrollY > 200) {
        // Scrolling down - hide nav
        setIsVisible(false);
      } else {
        // Scrolling up - show nav
        setIsVisible(true);
      }
    } else {
      // At original position - always visible
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);

    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Set timeout to show nav after scroll stops
    scrollTimeoutRef.current = setTimeout(() => {
      if (shouldBeSticky && !isScrollingDownNow) {
        setIsVisible(true);
      }
    }, 150);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  // Scroll Spy (IntersectionObserver) + Sticky elevation tracking
  useEffect(() => {
    const sectionIds = categories.map((cat) => `category-${cat.id}`);
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;

        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const catId = visibleSection.target.id.replace('category-', '');
          setActiveCategory(catId);
        } else if (window.scrollY < 380) {
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

    // Release scroll-spy lock after smooth scroll animation completes
    setTimeout(() => {
      isManualScroll.current = false;
    }, 700);
  };

  const navItems = [{ id: 'all', name: 'All Dishes', icon: '✦' }, ...categories];

  return (
    <>
      {/* Placeholder to maintain layout when nav is sticky */}
      {isSticky && (
        <div 
          style={{ 
            height: navRef.current?.offsetHeight || 'auto',
            transition: 'height 0.3s ease'
          }} 
        />
      )}

      <nav
        id="category-nav"
        ref={navRef}
        aria-label="Menu categories navigation"
        className={`w-full transition-all duration-300 ${
          isSticky
            ? `fixed top-14 sm:top-16 left-0 right-0 z-30 transform ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
              } bg-slate-950/95 backdrop-blur-xl border-y border-purple-500/30 shadow-[0_10px_30px_-5px_rgba(147,51,234,0.25)] py-2 sm:py-2.5`
            : 'relative bg-slate-950/80 backdrop-blur-md border-y border-purple-500/15 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className={`flex-shrink-0 inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 select-none active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.45)] border border-purple-400/40 ring-1 ring-purple-400/30'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800/90 border border-purple-500/20'
                  }`}
                >
                  {category.icon && (
                    <span
                      className={`text-sm leading-none transition-transform ${
                        isActive ? 'text-purple-200 scale-110' : 'text-purple-400/70'
                      }`}
                      aria-hidden="true"
                    >
                      {category.icon}
                    </span>
                  )}

                  <span>{category.name}</span>

                  {/* Dish Count Badge */}
                  {category.items?.length > 0 && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold transition-colors ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-800 text-purple-300/80 border border-purple-500/20'
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

        {/* Progress indicator when sticky */}
        {isSticky && isVisible && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-900/50">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 rounded-r-full"
              style={{ 
                width: `${(navItems.findIndex(item => item.id === activeCategory) + 1) / navItems.length * 100}%` 
              }}
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default CategoryNav;