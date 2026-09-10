import React, { useState, useEffect, useRef, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

const TemplateFourteen = ({ menuData }) => {
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
    <div className="min-h-screen bg-[#F8F5EE] text-[#0E261C] font-serif antialiased selection:bg-[#C5A059] selection:text-[#0E261C]">
      <Header business={business} />
      <Hero business={business} />

      {/* Sticky Art Deco Nav */}
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* Search & Dietary Filters */}
      <section id="menu-root" className="max-w-5xl mx-auto px-4 sm:px-6 pt-2 pb-4">
        <div className="p-2 rounded-lg bg-[#EFE9DB] border border-[#D8CEBA] flex flex-col sm:flex-row items-center gap-3">
          {/* Search Box */}
          <div className="relative w-full flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#787263]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher un plat, vin, ingrédient..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#FAF7F0] rounded-sm text-xs sm:text-sm text-[#0E261C] placeholder-[#787263] border border-[#D8CEBA] focus:border-[#C5A059] focus:outline-none transition-all font-serif"
            />
          </div>

          {/* Quick Dietary Filters */}
          <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-sm text-xs font-serif font-bold uppercase transition-all ${
                dietaryFilter === 'all'
                  ? 'bg-[#0E261C] text-[#C5A059] shadow-xs'
                  : 'text-[#4A473D] hover:bg-[#FAF7F0]'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-serif font-bold uppercase transition-all ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-900 text-[#FAF7F0] shadow-xs'
                  : 'text-[#4A473D] hover:bg-[#FAF7F0]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Végé
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-serif font-bold uppercase transition-all ${
                dietaryFilter === 'non-veg'
                  ? 'bg-rose-900 text-[#FAF7F0] shadow-xs'
                  : 'text-[#4A473D] hover:bg-[#FAF7F0]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              Non-Végé
            </button>
          </div>
        </div>
      </section>

      {/* Category Courses */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-12">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <MenuSection key={category.id} category={category} index={index} />
          ))
        ) : (
          <div className="py-16 text-center text-[#787263] font-serif italic text-sm">
            Aucun plat ne correspond à votre sélection actuelle.
          </div>
        )}
      </main>

      <Footer business={business} />
    </div>
  );
};

export default TemplateFourteen;