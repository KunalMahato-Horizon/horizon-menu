import React, { useState, useEffect, useRef, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

const TemplateTwentySix = ({ menuData }) => {
  const business = menuData || {};
  const categories = business.categories || [];

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const isClickScrolling = useRef(false);

  // Scroll spy detection
  useEffect(() => {
    const allIds = ['all', ...categories.map((c) => c.id)];
    const elements = allIds
      .map((id) => (id === 'all' ? document.getElementById('menu-root') : document.getElementById(`category-${id}`)))
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
          const id = top.target.id === 'menu-root' ? 'all' : top.target.id.replace('category-', '');
          setActiveCategory(id);
        }
      },
      { rootMargin: '-100px 0px -55% 0px', threshold: [0, 0.2, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [categories]);

  const handleSelectCategory = (id) => {
    setActiveCategory(id);
    isClickScrolling.current = true;

    const targetId = id === 'all' ? 'menu-root' : `category-${id}`;
    const el = document.getElementById(targetId);

    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 110;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 700);
    } else {
      isClickScrolling.current = false;
    }
  };

  const filteredCategories = useMemo(() => {
    return categories
      .map((cat) => {
        const matchingItems = (cat.items || []).filter((item) => {
          const matchesQuery =
            (item.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.description || '').toLowerCase().includes(searchQuery.toLowerCase());

          const matchesDiet =
            dietaryFilter === 'all' ||
            (dietaryFilter === 'veg' && item.type === 'veg') ||
            (dietaryFilter === 'non-veg' && item.type === 'non-veg');

          return matchesQuery && matchesDiet;
        });

        return { ...cat, items: matchingItems };
      })
      .filter((cat) => cat.items.length > 0);
  }, [categories, searchQuery, dietaryFilter]);

  return (
    <div className="min-h-screen bg-[#0A192F] text-white font-mono antialiased selection:bg-[#00F0FF] selection:text-[#0A192F]">
      <Header business={business} />
      <Hero business={business} />

      {/* Sticky Schematic Layer Nav */}
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* Search & Engineering Query Bar */}
      <section id="menu-root" className="max-w-6xl mx-auto px-3 sm:px-6 pt-2 pb-4 font-mono">
        <div className="p-2 rounded-xl bg-[#071324] border border-[#00F0FF]/30 flex flex-col sm:flex-row items-center gap-3">
          {/* Query Field */}
          <div className="relative w-full flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48CAE4]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Filter by schematic spec, raw materials, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-1.5 bg-[#0A192F] rounded-md text-xs sm:text-sm text-white placeholder-[#8DA9C4]/50 border border-[#00F0FF]/20 focus:border-[#00F0FF] focus:outline-none transition-all font-mono"
            />
          </div>

          {/* Quick Dietary Switches */}
          <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1 rounded text-xs font-bold uppercase transition-all border ${
                dietaryFilter === 'all'
                  ? 'bg-[#00F0FF] text-[#0A192F] border-[#00F0FF]'
                  : 'bg-transparent text-[#48CAE4] border-transparent hover:bg-white/[0.04]'
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-bold uppercase transition-all border ${
                dietaryFilter === 'veg'
                  ? 'bg-[#4ADE80] text-[#0A192F] border-[#4ADE80]'
                  : 'bg-transparent text-[#48CAE4] border-transparent hover:bg-white/[0.04]'
              }`}
            >
              VEG
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-bold uppercase transition-all border ${
                dietaryFilter === 'non-veg'
                  ? 'bg-[#F87171] text-[#0A192F] border-[#F87171]'
                  : 'bg-transparent text-[#48CAE4] border-transparent hover:bg-white/[0.04]'
              }`}
            >
              CATCH
            </button>
          </div>
        </div>
      </section>

      {/* Main Drawing Layers */}
      <main className="max-w-6xl mx-auto px-3 sm:px-6 pt-4 pb-12">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <MenuSection key={category.id} category={category} index={index} />
          ))
        ) : (
          <div className="py-16 text-center text-[#8DA9C4] font-mono text-xs uppercase">
            // NO SPECIFICATIONS FOUND MATCHING ACTIVE SEARCH //
          </div>
        )}
      </main>

      <Footer business={business} />
    </div>
  );
};

export default TemplateTwentySix;