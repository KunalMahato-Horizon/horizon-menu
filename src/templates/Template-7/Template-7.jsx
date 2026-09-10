import React from 'react';
import cafeNovaMenu from '../data/cafe-nova';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import FeaturedItem from './components/FeaturedItem';
import MenuSection from './components/MenuSection';
import SpecialSection from './components/SpecialSection';
import About from './components/About';
import BusinessInfo from './components/BusinessInfo';
import Footer from './components/Footer';

const CafeNovaTemplate7 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header business={cafeNovaMenu.business} />
      <CategoryNav categories={cafeNovaMenu.categories} />
      <FeaturedItem categories={cafeNovaMenu.categories} />
      
      <main id="menu" className="max-w-3xl mx-auto px-4 py-8 md:py-10">
        {cafeNovaMenu.categories.map((category, index) => (
          <MenuSection key={category.id} category={category} index={index} />
        ))}
      </main>

      {/* Special Section */}
      <SpecialSection categories={cafeNovaMenu.categories} />

      {/* About Section */}
      <About business={cafeNovaMenu.business} story={cafeNovaMenu.story} />

      {/* Business Info */}
      <BusinessInfo business={cafeNovaMenu.business} />

      {/* Footer */}
      <Footer business={cafeNovaMenu.business} />
    </div>
  );
};

export default CafeNovaTemplate7;