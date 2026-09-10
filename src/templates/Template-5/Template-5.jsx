import React, { useState, useEffect } from 'react';
import cafeNovaMenu from '../data/cafe-nova';
import Header from './components/Header';
import FeaturedFood from './components/FeaturedFood';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import RestaurantInfo from './components/RestaurantInfo';
import Footer from './components/Footer';

const CafeNovaTemplate5 = () => {
  const { business = {}, categories = [] } = cafeNovaMenu || {};
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll depth for the floating return button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-emerald-600 selection:text-white flex flex-col">
      {/* Sticky Top Header with Live Service Status */}
      <Header business={business} />

      {/* Hero Spotlight Dish Banner with Parallax */}
      <FeaturedFood categories={categories} />

      {/* Sticky Category Quick Navigation with Live Scroll Spy */}
      <CategoryNav categories={categories} />

      {/* Main Dining Menu Feed */}
      <main
        id="menu"
        className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
      >
        {categories && categories.length > 0 ? (
          <div className="space-y-12 sm:space-y-16">
            {categories.map((category) => (
              <MenuSection key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-3xl bg-neutral-50 border border-neutral-200/80">
            <span className="text-4xl block mb-2" aria-hidden="true">🍽️</span>
            <h3 className="text-base font-bold text-neutral-900 mb-1">
              Menu Updating
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-sm mx-auto">
              Our kitchen team is updating today's selection. Please check with your server for current specials.
            </p>
          </div>
        )}
      </main>

      {/* Tabletop Dining Conveniences (Wi-Fi, Kitchen Timings, Service Details) */}
      <RestaurantInfo business={business} />

      {/* Brand Signoff & Social Engagement Footer */}
      <Footer business={business} />

      {/* Floating Return-to-Top FAB */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top of menu"
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-neutral-950 text-emerald-400 shadow-xl shadow-neutral-950/20 border border-neutral-800 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
          showScrollTop
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

export default CafeNovaTemplate5;