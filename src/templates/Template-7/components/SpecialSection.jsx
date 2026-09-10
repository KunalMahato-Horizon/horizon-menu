import React from 'react';

const SpecialSection = ({ categories }) => {
  // Find items with special tags for the special section
  const specialItems = [];
  
  categories.forEach(category => {
    category.items.forEach(item => {
      if (item.tags && (item.tags.includes('Spicy') || item.tags.includes('Must Try') || item.tags.includes('Bestseller'))) {
        specialItems.push({
          ...item,
          categoryName: category.name,
          categoryIcon: category.icon,
        });
      }
    });
  });

  // If no special items, don't render
  if (specialItems.length === 0) return null;

  // Use the first special item
  const specialItem = specialItems[0];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
              Our Specials
            </span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
        </div>

        {/* Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="h-72 md:h-96 rounded-2xl overflow-hidden">
              {specialItem.image ? (
                <img 
                  src={specialItem.image} 
                  alt={specialItem.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-7xl md:text-8xl">
                    {specialItem.categoryIcon || '🍽️'}
                  </span>
                </div>
              )}
            </div>
            
            {/* Decorative offset border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-gray-300 rounded-2xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="md:pl-8">
            {/* Chef's Pick Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-gray-900"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-900">
                Chef's Pick
              </span>
            </div>

            {/* Item Name */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              {specialItem.name}
            </h3>

            {/* Category */}
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
              {specialItem.categoryName}
            </p>

            {/* Description */}
            {specialItem.description && (
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                {specialItem.description}
              </p>
            )}

            {/* Price */}
            <p className="text-2xl font-bold text-gray-900 mb-6">
              ₹{specialItem.price}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialSection;