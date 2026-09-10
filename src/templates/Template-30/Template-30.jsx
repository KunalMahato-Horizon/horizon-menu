import React, { useState, useMemo } from 'react';
import StepperNav from './components/StepperNav';
import CourseColumn from './components/CourseColumn';
import DirectoryDrawer from './components/DirectoryDrawer';
import CompactFooter from './components/CompactFooter';

const TemplateThirty = ({ menuData }) => {
  const business = menuData || {};
  const rawCategories = business.categories || [];

  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);

  // Filter items in each category
  const categories = useMemo(() => {
    return rawCategories
      .map((cat) => {
        const items = (cat.items || []).filter((item) => {
          if (dietaryFilter === 'all') return true;
          if (dietaryFilter === 'veg') return item.type === 'veg';
          if (dietaryFilter === 'non-veg') return item.type === 'non-veg';
          return true;
        });
        return { ...cat, items };
      })
      .filter((cat) => cat.items.length > 0);
  }, [rawCategories, dietaryFilter]);

  const activeCategory = categories[activeCourseIndex] || categories[0] || null;

  return (
    <div className="min-h-screen bg-[#0A0C10] text-white font-sans antialiased selection:bg-[#FF5722] selection:text-black">
      {/* 1. Integrated Header with Segmented Stepper */}
      <StepperNav
        business={business}
        categories={categories}
        activeCourseIndex={activeCourseIndex}
        onSelectCourse={(idx) => setActiveCourseIndex(idx)}
        onOpenDirectory={() => setIsDirectoryOpen(true)}
        dietaryFilter={dietaryFilter}
        setDietaryFilter={setDietaryFilter}
      />

      {/* 2. Responsive Multi-Screen Course Canvas */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* MOBILE VIEW: Single Focused Course Stepper */}
        <div className="block md:hidden">
          {activeCategory ? (
            <CourseColumn
              category={activeCategory}
              courseIndex={activeCourseIndex}
              totalCourses={categories.length}
            />
          ) : (
            <div className="p-12 text-center text-white/40 font-mono text-xs">
              No dishes match this dietary filter.
            </div>
          )}
        </div>

        {/* TABLET / DESKTOP VIEW: Panoramic Horizontal Banquet Gallery */}
        <div className="hidden md:flex gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-6">
          {categories.map((cat, idx) => (
            <div
              key={cat.id || idx}
              className="min-w-[420px] max-w-[500px] shrink-0"
            >
              <CourseColumn
                category={cat}
                courseIndex={idx}
                totalCourses={categories.length}
              />
            </div>
          ))}
        </div>
      </main>

      {/* 3. Mobile Floating Navigation Pill (Next / Prev Course Step) */}
      <aside
        aria-label="Course Navigation Controls"
        className="fixed bottom-5 left-0 right-0 z-40 px-4 md:hidden pointer-events-none"
      >
        <div className="max-w-xs mx-auto rounded-2xl bg-[#14161F]/95 backdrop-blur-xl border border-white/15 p-2 shadow-2xl flex items-center justify-between pointer-events-auto font-mono text-xs">
          <button
            onClick={() => setActiveCourseIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeCourseIndex === 0}
            className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white font-bold"
          >
            ← Prev
          </button>

          <span className="text-[10px] text-[#FF5722] font-black">
            {activeCourseIndex + 1} / {categories.length}
          </span>

          <button
            onClick={() => setActiveCourseIndex((prev) => Math.min(categories.length - 1, prev + 1))}
            disabled={activeCourseIndex >= categories.length - 1}
            className="px-3 py-1.5 rounded-xl bg-[#FF5722] text-black font-black disabled:opacity-30 disabled:pointer-events-none shadow-md shadow-[#FF5722]/20"
          >
            Next Course →
          </button>
        </div>
      </aside>

      {/* 4. Slide-In Full Directory Drawer */}
      <DirectoryDrawer
        isOpen={isDirectoryOpen}
        onClose={() => setIsDirectoryOpen(false)}
        categories={categories}
        onSelectCourseAndClose={(idx) => {
          setActiveCourseIndex(idx);
          setIsDirectoryOpen(false);
        }}
      />

      <CompactFooter business={business} />
    </div>
  );
};

export default TemplateThirty;