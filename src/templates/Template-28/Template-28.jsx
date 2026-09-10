import React, { useState, useMemo } from 'react';
import MobileHeader from './components/MobileHeader';
import StoryHighlights from './components/StoryHighlights';
import CategoryCarousel from './components/CategoryCarousel';
import DishBottomSheet from './components/DishBottomSheet';
import ThumbBar from './components/ThumbBar';

const TemplateTwentyEight = ({ menuData }) => {
  const business = menuData || {};
  const categories = business.categories || [];

  const [activeDish, setActiveDish] = useState(null);
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Derive chef highlighted specials for the Story Reel
  const specialStories = useMemo(() => {
    const allItems = categories.flatMap((c) => c.items || []);
    return allItems
      .filter((item) => (item.tags || []).some((t) => ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)))
      .slice(0, 8);
  }, [categories]);

  // Filter categories and their items
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

  const handleJumpToCategory = (catId) => {
    const el = document.getElementById(`section-${catId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0C10] text-white font-sans antialiased pb-24 selection:bg-[#FF5E00] selection:text-white">
      {/* Native App Top Header */}
      <MobileHeader
        business={business}
        onOpenSearch={() => setIsSearching(!isSearching)}
      />

      {/* Expandable Live Search Bar */}
      {isSearching && (
        <div className="px-4 py-2 bg-[#141721] border-b border-white/10 animate-fadeIn">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search plates, spices, sides..."
            className="w-full bg-[#0A0C10] border border-white/15 rounded-xl px-3 py-2 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-[#FF5E00]"
            autoFocus
          />
        </div>
      )}

      {/* Instagram-Style Story Reel */}
      <StoryHighlights
        items={specialStories}
        onSelectDish={(dish) => setActiveDish(dish)}
      />

      {/* Horizontal Snap Decks per Category */}
      <main className="max-w-md mx-auto">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <div key={cat.id} id={`section-${cat.id}`}>
              <CategoryCarousel
                category={cat}
                onSelectDish={(dish) => setActiveDish(dish)}
              />
            </div>
          ))
        ) : (
          <div className="py-20 text-center text-white/40 font-mono text-xs uppercase px-4">
            No plates found matching your filter.
          </div>
        )}
      </main>

      {/* Native Slide-Up Action Sheet */}
      <DishBottomSheet
        dish={activeDish}
        onClose={() => setActiveDish(null)}
      />

      {/* Ergonomic Floating Thumb Bar */}
      <ThumbBar
        dietaryFilter={dietaryFilter}
        setDietaryFilter={setDietaryFilter}
        onJumpToCategory={handleJumpToCategory}
        categories={categories}
      />
    </div>
  );
};

export default TemplateTwentyEight;