import React from 'react';
import SubCategoryCard from './SubCategoryCard';

const MenuSection = ({ category, onAddItem }) => {
  const { id = "", name = "", icon = "", description = "", subcategories = [] } = category;
  if (!subcategories.length) return null;

  return (
    <section id={`category-${id}`} className="mb-12 scroll-mt-28" aria-labelledby={`head-${id}`}>
      <div className="flex items-center gap-3 border-b-2 border-[#3E2211] pb-2.5 mb-5">
        <span className="text-2xl">{icon}</span>
        <div>
          <h2
            id={`head-${id}`}
            className="text-xl sm:text-2xl font-serif font-black italic text-[#231F20] tracking-tight"
          >
            {name}
          </h2>
          {description && (
            <p className="text-xs font-sans text-[#8C7262] font-medium mt-0.5">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
        {subcategories.map((sub, idx) => (
          <SubCategoryCard key={idx} subcategory={sub} onAddItem={onAddItem} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;