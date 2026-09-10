import React from 'react';
import cafeNovaMenu from '../data/cafe-nova';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';

const CafeNova = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header business={cafeNovaMenu.business} />
      <CategoryNav categories={cafeNovaMenu.categories} />
      
      <main className="max-w-3xl mx-auto px-4 py-8 md:py-10">
        {cafeNovaMenu.categories.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}
      </main>
    </div>
  );
};

export default CafeNova;