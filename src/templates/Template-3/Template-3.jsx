import React, { useState, useEffect } from 'react';
import cafeNovaMenu from '../data/cafe-nova';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import FeaturedItems from './components/FeaturedItems';
import MenuSection from './components/MenuSection';
import Offers from './components/Offers';
import RestaurantInfo from './components/RestaurantInfo';
import Footer from './components/Footer';

const CafeNovaTemplate3 = () => {
  const { business = {}, categories = [], offers = [] } = cafeNovaMenu || {};
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll distance to toggle floating back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-50/60 text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white flex flex-col">
      {/* Sticky Brand Navigation Bar */}
      <Header business={business} />

      {/* Hero Showcase Section */}
      <Hero business={business} />

      {/* Sticky Category Quick Navigation */}
      <CategoryNav categories={categories} />

      {/* Main Menu Content Feed */}
      <main
        id="main-menu"
        className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 space-y-12 sm:space-y-16"
      >
        {/* Spotlight / Featured Specials Carousel */}
        <FeaturedItems categories={categories} />

        {/* Menu Sections Grouped by Category */}
        <div className="space-y-12 sm:space-y-16">
          {categories && categories.length > 0 ? (
            categories.map((category) => (
              <MenuSection key={category.id} category={category} />
            ))
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200/80 p-8 shadow-xs">
              <span className="text-4xl block mb-2 select-none" aria-hidden="true">🍽️</span>
              <p className="text-neutral-500 font-medium text-sm">
                Menu items are currently being updated.
              </p>
            </div>
          )}
        </div>

        {/* In-Store Daily Combos & Offers */}
        <Offers offers={offers} />

        {/* In-Store Guest Amenities (Wi-Fi, Notes & Reviews) */}
        <RestaurantInfo business={business} />
      </main>

      {/* In-Store Brand Footer */}
      <Footer business={business} />

      {/* Floating Return-To-Top Trigger */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-neutral-950 text-white shadow-xl shadow-neutral-950/20 border border-neutral-800 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 ${
          showBackToTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default CafeNovaTemplate3;