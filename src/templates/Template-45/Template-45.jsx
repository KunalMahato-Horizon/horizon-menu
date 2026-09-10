import React, { useState, useEffect, useRef, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import { RangoliBackdrop } from './components/DiwaliVisuals';

const TemplateFortyFive = ({ menuData }) => {
  const business = menuData || {};
  const categories = business.categories || [];

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [activeDiyas, setActiveDiyas] = useState(108);
  const isClickScrolling = useRef(false);

  // Scroll spy detection (relative to top-0 sticky search dock)
  useEffect(() => {
    const allIds = ['all', ...categories.map((c) => c.id)];
    const elements = allIds
      .map((id) => (id === 'all' ? document.getElementById('menu-start') : document.getElementById(`category-${id}`)))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((prev, curr) =>
            Math.abs(curr.boundingClientRect.top) < Math.abs(prev.boundingClientRect.top) ? curr : prev
          );
          const id = top.target.id === 'menu-start' ? 'all' : top.target.id.replace('category-', '');
          setActiveCategory(id);
        }
      },
      { rootMargin: '-130px 0px -50% 0px', threshold: [0, 0.2] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [categories]);

  // Scroll handler offset strictly for the top-0 sticky search dock (~135px)
  const handleSelectCategory = (id) => {
    setActiveCategory(id);
    isClickScrolling.current = true;

    const targetId = id === 'all' ? 'menu-start' : `category-${id}`;
    const el = document.getElementById(targetId);

    if (el) {
      const stickyDockOffset = window.innerWidth < 640 ? 145 : 125;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - stickyDockOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });

      setTimeout(() => {
        isClickScrolling.current = false;
      }, 700);
    } else {
      isClickScrolling.current = false;
    }
  };

  // Dietary and search filter matching
  const filteredCategories = useMemo(() => {
    return categories
      .map((cat) => {
        const matchingItems = (cat.items || []).filter((item) => {
          const nameMatch = (item.name || '').toLowerCase().includes(searchQuery.toLowerCase());
          const descMatch = (item.description || '').toLowerCase().includes(searchQuery.toLowerCase());
          const tagMatch = (item.tags || []).some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
          const matchesQuery = !searchQuery || nameMatch || descMatch || tagMatch;

          const rawType = (item.type || '').toLowerCase().trim();
          const isVegItem = rawType === 'veg' || rawType === 'vegetarian';
          const isNonVegItem = rawType === 'non-veg' || rawType === 'nonveg' || rawType === 'meat' || rawType === 'egg';

          let matchesDiet = true;
          if (dietaryFilter === 'veg') {
            matchesDiet = isVegItem;
          } else if (dietaryFilter === 'non-veg') {
            matchesDiet = isNonVegItem;
          }

          return matchesQuery && matchesDiet;
        });

        return { ...cat, items: matchingItems };
      })
      .filter((cat) => cat.items.length > 0);
  }, [categories, searchQuery, dietaryFilter]);

  const totalResults = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + (cat.items || []).length, 0);
  }, [filteredCategories]);

  return (
    <div className="relative min-h-screen bg-[#130F17] text-[#F4EBD9] font-serif antialiased selection:bg-[#D4A373] selection:text-[#18111D] overflow-x-clip">
      {/* Background Floating Rangoli Watermarks */}
      <div className="fixed -top-12 -right-16 pointer-events-none opacity-20 z-0">
        <RangoliBackdrop className="w-80 sm:w-[450px] h-80 sm:h-[450px]" />
      </div>
      <div className="fixed bottom-10 -left-20 pointer-events-none opacity-15 z-0">
        <RangoliBackdrop className="w-80 sm:w-[480px] h-80 sm:h-[480px]" />
      </div>

      <div className="relative z-10">
        {/* 1. Normal Flow Header (Scrolls away with page) */}
        <Header
          business={business}
          activeDiyas={activeDiyas}
          onLightDiya={() => setActiveDiyas((prev) => prev + 1)}
        />

        {/* 2. Hero */}
        <Hero
          business={business}
          onScrollToMenu={() => handleSelectCategory('all')}
        />

        {/* 3. Sticky Search & Navigation Dock (Pins to top-0) */}
        <div className="sticky top-0 z-40 bg-[#130F17]/95 backdrop-blur-md pt-2 pb-2.5 border-b border-[#D4A373]/25 shadow-xl shadow-black/60 space-y-1.5">
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            dietaryFilter={dietaryFilter}
            onDietaryChange={setDietaryFilter}
            totalResults={totalResults}
          />
          <CategoryNav
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
          />
        </div>

        {/* Anchor point for "All Offerings" */}
        <div id="menu-start" className="scroll-mt-36" />

        {/* 4. Menu Sections */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <MenuSection
                key={category.id}
                category={category}
                index={index}
              />
            ))
          ) : (
            <div className="py-20 text-center font-serif text-sm italic text-zinc-400">
              No dishes found matching your current selection.
            </div>
          )}
        </main>

        {/* 5. Footer */}
        <Footer business={business} />
      </div>
    </div>
  );
};

export default TemplateFortyFive;