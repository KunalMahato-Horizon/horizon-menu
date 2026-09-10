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

  if (!items || items.length === 0) return null;

  // Items with images available for editorial highlights
  const itemsWithImages = items.filter(item => Boolean(item.image));
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <section 
      id={`category-${id}`} 
      className="mb-20 scroll-mt-28"
      aria-labelledby={`section-title-${id}`}
    >
      {/* Editorial Category Header */}
      <header className="mb-8">
        <div className="flex items-baseline justify-between border-b border-[#1A1816] pb-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.25em] text-[#8A857D] uppercase">
              [{formattedIndex}]
            </span>
            {icon && (
              <span className="text-base text-[#1A1816]" aria-hidden="true">
                {icon}
              </span>
            )}
            <h2 
              id={`section-title-${id}`}
              className="text-2xl md:text-3xl font-serif font-normal text-[#1A1816] tracking-tight uppercase"
            >
              {name}
            </h2>
          </div>

          <span className="font-mono text-[11px] text-[#8A857D] tracking-widest uppercase">
            {items.length} {items.length === 1 ? 'Item' : 'Items'}
          </span>
        </div>

        {description && (
          <p className="mt-2.5 text-xs md:text-sm font-serif italic text-[#6E6A63] max-w-xl leading-relaxed">
            {description}
          </p>
        )}
      </header>

      {/* Menu Items List */}
      <div className="divide-y divide-[#EAE6DF]/70">
        {items.map((item) => (
          <MenuItem key={item.id || item.name} item={item} />
        ))}
      </div>

      {/* Asymmetrical Editorial Break (Varies rhythm by section index) */}
      {itemsWithImages.length > 0 && (
        <div className="mt-12">
          {/* Pattern A (Odd Sections): Full-Width Landscape Editorial Callout */}
          {index % 2 === 1 && (
            <div className="relative overflow-hidden bg-[#F5F2EC] border border-[#E8E4DD] p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 aspect-[16/10] overflow-hidden">
                  <img 
                    src={itemsWithImages[0].image} 
                    alt={itemsWithImages[0].name}
                    className="w-full h-full object-cover grayscale-[10%] hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="md:col-span-5 space-y-2">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#8A857D] uppercase block">
                    Featured Plate
                  </span>
                  <h3 className="font-serif text-xl text-[#1A1816] leading-snug">
                    {itemsWithImages[0].name}
                  </h3>
                  {itemsWithImages[0].description && (
                    <p className="text-xs text-[#6E6A63] line-clamp-2 leading-relaxed">
                      {itemsWithImages[0].description}
                    </p>
                  )}
                  {itemsWithImages[0].price && (
                    <p className="font-mono text-sm font-medium text-[#1A1816] pt-1">
                      {itemsWithImages[0].price}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Pattern B (Every 4th Section): Editorial Diptych */}
          {index % 4 === 0 && itemsWithImages.length >= 2 && (
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {itemsWithImages.slice(0, 2).map((item, imgIdx) => (
                <div key={imgIdx} className="group relative aspect-[4/3] overflow-hidden bg-[#EAE6DF]">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3 pt-6 text-[#FDFBF7]">
                    <p className="font-serif text-xs md:text-sm tracking-wide truncate">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default MenuSection;