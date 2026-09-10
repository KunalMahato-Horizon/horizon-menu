import React, { useState, useEffect, useRef, useMemo } from 'react';
import DossierHeader from './components/DossierHeader';
import ClassifiedHero from './components/ClassifiedHero';
import FolderTabsNav from './components/FolderTabsNav';
import CaseFileSection from './components/CaseFileSection';
import DossierFooter from './components/DossierFooter';

const TemplateThirtyFour = ({ menuData }) => {
  const business = menuData || {};
  const categories = business.categories || [];

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [isAllDeclassified, setIsAllDeclassified] = useState(false);
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
    <div className="min-h-screen bg-[#ECE3CE] text-[#1A1A1A] font-mono antialiased selection:bg-[#B91C1C] selection:text-white">
      {/* 1. Header */}
      <DossierHeader
        business={business}
        isAllDeclassified={isAllDeclassified}
        onToggleDeclassifyAll={() => setIsAllDeclassified(!isAllDeclassified)}
      />

      {/* 2. Classified Hero Cover */}
      <ClassifiedHero business={business} />

      {/* 3. Manila Folder Tabs Navigation */}
      <FolderTabsNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 4. Live Search & Clearance Filtering Bar */}
      <section id="menu-root" className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 pt-2 pb-4">
        <div className="p-2 rounded-xl bg-[#F5EFE1] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] flex flex-col sm:flex-row items-center gap-3">
          {/* Query Console */}
          <div className="relative w-full flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A1A]/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search case files, code words, assets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white rounded border border-[#1A1A1A] text-xs sm:text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#B91C1C] transition-all font-mono"
            />
          </div>

          {/* Quick Dietary Filters */}
          <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded border border-[#1A1A1A] text-xs font-black uppercase transition-all ${
                dietaryFilter === 'all'
                  ? 'bg-[#1A1A1A] text-white shadow-[1px_1px_0px_0px_#000]'
                  : 'bg-white text-[#1A1A1A] hover:bg-[#E8DFC7]'
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded border border-[#1A1A1A] text-xs font-black uppercase transition-all ${
                dietaryFilter === 'veg'
                  ? 'bg-[#166534] text-white shadow-[1px_1px_0px_0px_#000]'
                  : 'bg-white text-[#1A1A1A] hover:bg-[#E8DFC7]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              VEG
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded border border-[#1A1A1A] text-xs font-black uppercase transition-all ${
                dietaryFilter === 'non-veg'
                  ? 'bg-[#B91C1C] text-white shadow-[1px_1px_0px_0px_#000]'
                  : 'bg-white text-[#1A1A1A] hover:bg-[#E8DFC7]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              MEAT
            </button>
          </div>
        </div>
      </section>

      {/* 5. Main Case File Sections */}
      <main className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 pb-16">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <CaseFileSection
              key={category.id}
              category={category}
              index={index}
              isGlobalDeclassified={isAllDeclassified}
            />
          ))
        ) : (
          <div className="py-20 text-center font-mono text-xs uppercase text-[#1A1A1A]/40">
            // NO CASE FILES RETRIEVED FOR ACTIVE QUERY //
          </div>
        )}
      </main>

      {/* 6. Footer */}
      <DossierFooter business={business} />
    </div>
  );
};

export default TemplateThirtyFour;