import React, { useState, useEffect, useRef } from 'react';

const CategoryNav = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navPosition = navRef.current.getBoundingClientRect().top;
        setIsSticky(navPosition <= 80);
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
      className={`bg-[#F7F1E5]/95 backdrop-blur border-b border-[#D8C9AD]/50 transition-shadow ${
        isSticky ? 'sticky top-[64px] md:top-[80px] z-40 shadow-sm' : ''
      }`}
      aria-label="Menu categories"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
          {/* All Categories Button */}
          <button
            onClick={() => scrollToCategory('all')}
            className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none ${
              activeCategory === 'all'
                ? 'bg-[#526044] text-white shadow-md'
                : 'bg-[#FFFDF8] text-[#526044] border border-[#D8C9AD] hover:bg-[#D8C9AD]/30'
            }`}
          >
            All
          </button>
          
          {/* Individual Category Buttons */}
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToCategory(category.id)}
              className={`flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none ${
                activeCategory === category.id
                  ? 'bg-[#526044] text-white shadow-md'
                  : 'bg-[#FFFDF8] text-[#526044] border border-[#D8C9AD] hover:bg-[#D8C9AD]/30'
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