import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import FeaturedDish from './components/FeaturedDish';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

const TemplateEight = ({ menuData }) => {
  return (
    <div className="min-h-screen bg-[#F7F1E5]">
      <Header business={menuData.business} />
      <Hero business={menuData.business} />
      <CategoryNav categories={menuData.categories} />
      
      <main id="menu" className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        {/* Featured Dish Section */}
        <FeaturedDish categories={menuData.categories} />
        
        {/* Menu Sections */}
        {menuData.categories.map((category, index) => (
          <MenuSection key={category.id} category={category} index={index} />
        ))}
      </main>

      <Footer business={menuData.business} />
    </div>
  );
};

export default TemplateEight;