import React, { useState, useEffect, useRef } from 'react';

const CategoryNav = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navPosition = navRef.current.getBoundingClientRect().top;
        setIsSticky(navPosition <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId);
    
    if (categoryId === 'all') {
      const element = document.getElementById('menu');
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      return;
    }
    
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav 
      ref={navRef}
      className={`bg-black border-b border-white/10 transition-shadow ${
        isSticky ? 'sticky top-0 z-40 shadow-lg shadow-black/50' : ''
      }`}
      aria-label="Menu categories"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-1 overflow-x-auto py-4 scrollbar-hide">
          {/* All Categories Button */}
          <button
            onClick={() => scrollToCategory('all')}
            className={`flex-shrink-0 px-5 py-2.5 text-sm font-black uppercase tracking-wider transition-all duration-200 focus:outline-none ${
              activeCategory === 'all'
                ? 'bg-[#FF4D00] text-white'
                : 'text-white/50 hover:text-white'
            }`}
          >
            All
          </button>
          
          {/* Individual Category Buttons */}
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToCategory(category.id)}
              className={`flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-black uppercase tracking-wider transition-all duration-200 focus:outline-none ${
                activeCategory === category.id
                  ? 'bg-[#FF4D00] text-white'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {category.icon && <span aria-hidden="true">{category.icon}</span>}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;