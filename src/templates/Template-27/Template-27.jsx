import React, { useState, useMemo } from 'react';
import TopBar from './components/TopBar';
import StageViewer from './components/StageViewer';
import DishRow from './components/DishRow';
import StationFooter from './components/StationFooter';

const TemplateTwentySeven = ({ menuData }) => {
  const business = menuData || {};
  const categories = business.categories || [];

  // Default active dish to the first dish found
  const firstDish = categories[0]?.items?.[0] || null;
  const [selectedDish, setSelectedDish] = useState(firstDish);
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');

  // Filter logic
  const filteredCategories = useMemo(() => {
    return categories
      .map((cat) => {
        const items = (cat.items || []).filter((item) => {
          const matchesQuery =
            (item.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.description || '').toLowerCase().includes(searchQuery.toLowerCase());

          const matchesDiet =
            dietaryFilter === 'all' ||
            (dietaryFilter === 'veg' && item.type === 'veg') ||
            (dietaryFilter === 'non-veg' && item.type === 'non-veg');

          return matchesQuery && matchesDiet;
        });
        return { ...cat, items };
      })
      .filter((cat) => cat.items.length > 0);
  }, [categories, searchQuery, dietaryFilter]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans antialiased selection:bg-[#FF3B00] selection:text-white">
      {/* 1. Slimline Top Utilities */}
      <TopBar
        business={business}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        dietaryFilter={dietaryFilter}
        setDietaryFilter={setDietaryFilter}
      />

      {/* 2. Split-Pane Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT PANE: Pinned Live Inspection Stage */}
          <div className="lg:col-span-5 lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)]">
            <StageViewer dish={selectedDish || firstDish} business={business} />
          </div>

          {/* RIGHT PANE: Clean Catalog Stream */}
          <div className="lg:col-span-7 space-y-8">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, catIdx) => (
                <section key={category.id || catIdx} className="space-y-3">
                  <div className="flex items-baseline justify-between border-b border-[#1A1A1A]/20 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#1A1A1A] text-white">
                        0{catIdx + 1}
                      </span>
                      <h3 className="text-lg font-serif font-black tracking-tight uppercase">
                        {category.name}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-[#1A1A1A]/40 uppercase">
                      {category.items.length} {category.items.length === 1 ? 'Plate' : 'Plates'}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {category.items.map((item) => (
                      <DishRow
                        key={item.id || item.name}
                        item={item}
                        isSelected={selectedDish?.name === item.name}
                        onSelect={() => setSelectedDish(item)}
                      />
                    ))}
                  </div>
                </section>
              ))
            ) : (
              <div className="p-12 text-center font-mono text-xs text-[#1A1A1A]/40 border border-dashed border-[#1A1A1A]/20 rounded-2xl">
                NO PLATES MATCHING CURRENT FILTER CRITERIA
              </div>
            )}

            <StationFooter business={business} />
          </div>

        </div>
      </main>
    </div>
  );
};

export default TemplateTwentySeven;