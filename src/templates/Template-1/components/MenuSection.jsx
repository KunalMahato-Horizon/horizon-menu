import React, { useState } from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category }) => {
  const {
    id = "",
    name = "",
    description = "",
    icon = null,
    items = [],
  } = category;

  const [isExpanded, setIsExpanded] = useState(true);

  if (items.length === 0) return null;

  return (
    <section 
      id={`category-${id}`} 
      className="mb-12 scroll-mt-24"
      aria-labelledby={`section-title-${id}`}
    >
      {/* Category Header - Clickable */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left group mb-4 focus:outline-none"
        aria-expanded={isExpanded}
        aria-controls={`category-content-${id}`}
      >
        <div className="flex items-center gap-4 mb-3">
          {icon && (
            <span 
              className="text-2xl w-12 h-12 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl flex items-center justify-center border border-orange-100 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300"
              aria-hidden="true"
            >
              {icon}
            </span>
          )}
          
          <div className="flex-1">
            <h2 
              id={`section-title-${id}`}
              className="text-xl md:text-2xl font-bold text-gray-900"
            >
              {name}
            </h2>
            {description && (
              <p className="text-sm text-gray-500 mt-0.5">
                {description}
              </p>
            )}
          </div>

          {/* Expand/Collapse indicator */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 font-medium">
              {items.length} items
            </span>
            <svg 
              className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        
        {/* Decorative line */}
        <div className="h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent group-hover:from-orange-200 transition-colors duration-300"></div>
      </button>

      {/* Items List with smooth expand/collapse */}
      <div 
        id={`category-content-${id}`}
        className={`space-y-3 transition-all duration-300 ${
          isExpanded ? 'opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;