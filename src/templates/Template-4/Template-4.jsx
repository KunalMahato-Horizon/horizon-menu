import React, { useState, useEffect } from 'react';
import cafeNovaMenu from '../data/cafe-nova';
import Header from './components/Header';
import Hero from './components/Hero';
import RestaurantInfo from './components/RestaurantInfo';
import MenuIntro from './components/MenuIntro';
import CategoryNav from './components/CategoryNav';
import ChefsSelection from './components/ChefsSelection';
import MenuSection from './components/MenuSection';
import ChefStory from './components/ChefStory';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const CafeNovaTemplate4 = () => {
  const {
    business = {},
    categories = [],
    story = null,
    gallery = [],
  } = cafeNovaMenu || {};

  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll distance for back-to-top trigger
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
    <div className="min-h-screen bg-stone-50 text-stone-900 antialiased selection:bg-stone-900 selection:text-white flex flex-col">
      {/* Sticky Editorial Navbar */}
      <Header business={business} />

      {/* Hero Showcase */}
      <Hero business={business} />

      {/* Floating In-Store Amenity Bar (Wi-Fi, Prep Time, Service Notes) */}
      <RestaurantInfo business={business} />

      {/* Menu Introduction & Dietary Legend Key */}
      <MenuIntro business={business} />

      {/* Sticky Category Quick Navigation */}
      <CategoryNav categories={categories} />

      {/* Full-Bleed Chef's Selection Showcase */}
      <ChefsSelection categories={categories} />

      {/* Main Menu Feed */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-12 sm:space-y-16">
          {categories && categories.length > 0 ? (
            categories.map((category) => (
              <MenuSection key={category.id} category={category} />
            ))
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200/80 p-8 shadow-xs">
              <span className="text-4xl block mb-2 select-none" aria-hidden="true">🍽️</span>
              <p className="text-stone-500 font-medium text-sm">
                Menu items are currently being updated.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Chef & Kitchen Story */}
      <ChefStory story={story} />

      {/* Interactive Atmosphere Bento Gallery */}
      <Gallery images={gallery} />

      {/* Editorial Footer */}
      <Footer business={business} />

      {/* Floating Back-To-Top Trigger */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-stone-950 text-amber-300 shadow-xl shadow-stone-950/20 border border-stone-800 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 ${
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

export default CafeNovaTemplate4;