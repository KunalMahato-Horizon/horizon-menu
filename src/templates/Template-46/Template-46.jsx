import React, { useState, useEffect, useRef, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StickyControlDock from './components/StickyControlDock';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

const TemplateFortySix = ({ menuData }) => {
  const business = menuData || {};
  const categories = business.categories || [];

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [chestnutsRoasted, setChestnutsRoasted] = useState(25);
  const isClickScrolling = useRef(false);

  // Scroll spy detection relative to top-0 sticky search dock
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

  // Downward scroll handler calibrated for the top-0 sticky dock
  const handleSelectCategory = (id) => {
    setActiveCategory(id);
    isClickScrolling.current = true;

    const targetId = id === 'all' ? 'menu-start' : `category-${id}`;
    const el = document.getElementById(targetId);

    if (el) {
      const stickyDockOffset = window.innerWidth < 640 ? 145 : 130;
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

  // Search & Dietary filter matching
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
    <div className="relative min-h-screen bg-[#071710] text-[#FFFBEB] font-serif antialiased selection:bg-[#D4AF37] selection:text-[#071710] overflow-x-clip">
      {/* Background Drifting Snowflakes Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 bg-[radial-gradient(#FFFDF8_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10">
        {/* 1. Normal Flow Header */}
        <Header
          business={business}
          chestnutsRoasted={chestnutsRoasted}
          onRoastChestnut={() => setChestnutsRoasted((prev) => prev + 1)}
        />

        {/* 2. Hero */}
        <Hero
          business={business}
          onScrollToMenu={() => handleSelectCategory('all')}
        />

        {/* 3. Sticky Search, Dietary & Category Dock (Pinned at top-0) */}
        <StickyControlDock
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          dietaryFilter={dietaryFilter}
          onDietaryChange={setDietaryFilter}
          totalResults={totalResults}
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Anchor point for "All Courses" */}
        <div id="menu-start" className="scroll-mt-36" />

        {/* 4. Menu Sections with Snow Roofs */}
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
              No holiday dishes matching your current selection.
            </div>
          )}
        </main>

        {/* 5. Footer */}
        <Footer business={business} />
      </div>
    </div>
  );
};

export default TemplateFortySix;