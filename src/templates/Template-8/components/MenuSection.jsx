import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index }) => {
  const {
    id = "",
    name = "",
    description = "",
    icon = null,
    items = [],
  } = category;

  if (items.length === 0) return null;

  // Find first item with image for featured display
  const itemWithImage = items.find(item => item.image);

  return (
    <section 
      id={`category-${id}`} 
      className="mb-14 scroll-mt-32"
      aria-labelledby={`section-title-${id}`}
    >
      {/* Category Header - Centered warm style */}
      <div className="text-center mb-8">
        {/* Decorative top line */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-16 h-px bg-[#D8C9AD]"></span>
          <span className="text-[#B85C38] text-sm">{icon || '🫒'}</span>
          <span className="w-16 h-px bg-[#D8C9AD]"></span>
        </div>

        {/* Category Name - Serif */}
        <h2 
          id={`section-title-${id}`}
          className="text-2xl md:text-3xl font-serif font-bold text-[#30382A] tracking-wide"
        >
          {name}
        </h2>

        {/* Description */}
        {description && (
          <p className="text-sm text-[#817A6B] mt-2 italic">
            {description}
          </p>
        )}
      </div>

      {/* Items List - Divided */}
      <div className="max-w-2xl mx-auto divide-y divide-[#D8C9AD]/40">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>

      {/* Optional featured image between sections */}
      {itemWithImage && index % 2 === 1 && (
        <div className="max-w-2xl mx-auto mt-8">
          <div className="rounded-t-[1.5rem] rounded-b-[2.5rem] overflow-hidden border-4 border-[#FFFDF8] shadow-md">
            <img 
              src={itemWithImage.image} 
              alt={itemWithImage.name}
              className="w-full h-48 md:h-64 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default MenuSection;