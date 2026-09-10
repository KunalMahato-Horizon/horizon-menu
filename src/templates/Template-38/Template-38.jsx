import React, { useState, useRef, useEffect, useMemo } from 'react';
import ReelHeader from './components/ReelHeader';
import ReelSlide from './components/ReelSlide';
import IndexSheetModal from './components/IndexSheetModal';

const TemplateThirtyEight = ({ menuData }) => {
  const business = menuData || {};
  const categories = business.categories || [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isIndexOpen, setIsIndexOpen] = useState(false);
  const containerRef = useRef(null);

  // Flatten dishes with category metadata
  const flattenedDishes = useMemo(() => {
    return categories.flatMap((cat) =>
      (cat.items || []).map((item) => ({
        ...item,
        categoryName: cat.name,
        categoryId: cat.id,
      }))
    );
  }, [categories]);

  // Track active slide on scroll
  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, clientHeight } = containerRef.current;
    const newIndex = Math.round(scrollTop / clientHeight);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < flattenedDishes.length) {
      setActiveIndex(newIndex);
    }
  };

  // Jump to specific slide
  const handleJumpToIndex = (index) => {
    if (!containerRef.current) return;
    const targetY = index * containerRef.current.clientHeight;
    containerRef.current.scrollTo({ top: targetY, behavior: 'smooth' });
    setActiveIndex(index);
  };

  // Keyboard arrow listener for desktop accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        handleJumpToIndex(Math.min(flattenedDishes.length - 1, activeIndex + 1));
      } else if (e.key === 'ArrowUp') {
        handleJumpToIndex(Math.max(0, activeIndex - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, flattenedDishes.length]);

  return (
    <div className="relative w-full h-[100dvh] bg-black text-white font-sans overflow-hidden flex justify-center selection:bg-[#CCFF00] selection:text-black">
      {/* DESKTOP STAGE WRAPPER: Centers mobile reel feed and displays navigation cues */}
      <div className="relative w-full max-w-md h-full shadow-2xl border-x border-white/10 flex flex-col">
        {/* Floating Top HUD */}
        <ReelHeader
          business={business}
          activeIndex={activeIndex}
          totalDishes={flattenedDishes.length}
          onOpenIndex={() => setIsIndexOpen(true)}
        />

        {/* 100dvh Vertical Snap Stream */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="w-full h-full overflow-y-scroll snap-y snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {flattenedDishes.length > 0 ? (
            flattenedDishes.map((dish, idx) => (
              <ReelSlide
                key={dish.id || idx}
                item={dish}
                index={idx}
                categoryName={dish.categoryName}
                isActive={idx === activeIndex}
              />
            ))
          ) : (
            <div className="w-full h-full flex items-center justify-center font-mono text-xs text-white/50 uppercase">
              No dishes found in this menu docket.
            </div>
          )}
        </div>

        {/* Desktop Arrow Controls Helper */}
        <div className="hidden lg:flex absolute -right-20 top-1/2 -translate-y-1/2 flex-col gap-2 z-40">
          <button
            onClick={() => handleJumpToIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-black hover:text-black flex items-center justify-center disabled:opacity-20 transition-all font-mono font-bold"
            title="Previous Plate (Up Arrow)"
          >
            ↑
          </button>
          <button
            onClick={() => handleJumpToIndex(Math.min(flattenedDishes.length - 1, activeIndex + 1))}
            disabled={activeIndex >= flattenedDishes.length - 1}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-black hover:text-black flex items-center justify-center disabled:opacity-20 transition-all font-mono font-bold"
            title="Next Plate (Down Arrow)"
          >
            ↓
          </button>
        </div>
      </div>

      {/* Global Directory Jump Modal */}
      <IndexSheetModal
        isOpen={isIndexOpen}
        onClose={() => setIsIndexOpen(false)}
        categories={categories}
        onSelectDishIndex={handleJumpToIndex}
      />
    </div>
  );
};

export default TemplateThirtyEight;