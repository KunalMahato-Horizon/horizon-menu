import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

const TemplateNine = ({ menuData }) => {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Header business={menuData.business} />
      <Hero business={menuData.business} />
      <CategoryNav categories={menuData.categories} />
      
      <main id="menu" className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        {menuData.categories.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}
      </main>

      <Footer business={menuData.business} />
    </div>
  );
};

export default TemplateNine;