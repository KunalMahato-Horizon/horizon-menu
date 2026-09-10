import React, { useState, useEffect } from 'react';
import cafeNovaMenu from '../data/cafe-nova';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickInfo from './components/QuickInfo';
import CategoryNav from './components/CategoryNav';
import Featured from './components/Featured';
import MenuSection from './components/MenuSection';
import RestaurantInfo from './components/RestaurantInfo';
import Footer from './components/Footer';

const CafeNovaTemplate6 = () => {
  const { business = {}, categories = [] } = cafeNovaMenu || {};
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll depth for floating back-to-top trigger
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-purple-600 selection:text-white flex flex-col relative">
      {/* Sticky Cyber-Glass Top Header */}
      <Header business={business} />

      {/* Atmospheric Brand Hero Banner */}
      <Hero business={business} />

      {/* Slim Floating Tabletop Quick Strip */}
      <QuickInfo business={business} />

      {/* Sticky Category Navigator (Directional Hide/Show) */}
      <CategoryNav categories={categories} />

      {/* Signature & Popular Dishes Tasting Deck */}
      <Featured categories={categories} />

      {/* Main Culinary Courses Feed */}
      <main
        id="menu"
        className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16"
      >
        {categories && categories.length > 0 ? (
          <div className="space-y-12 sm:space-y-16">
            {categories.map((category, idx) => (
              <MenuSection
                key={category.id || idx}
                category={{
                  ...category,
                  sectionNumber: String(idx + 1).padStart(2, '0'),
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-3xl bg-slate-900/60 border border-purple-500/20 backdrop-blur-xl">
            <span className="text-4xl block mb-2" aria-hidden="true">🍽️</span>
            <h3 className="text-base font-bold text-white mb-1">
              Menu Updating
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto">
              Our kitchen team is updating tonight's culinary selection. Please ask your server for current specials.
            </p>
          </div>
        )}
      </main>

      {/* Tabletop Guest Amenities & Wi-Fi */}
      <RestaurantInfo business={business} />

      {/* Signoff & Social Footer */}
      <Footer business={business} />

      {/* Floating Neon Return-to-Top FAB */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top of menu"
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-slate-900/90 text-purple-300 backdrop-blur-xl border border-purple-500/30 shadow-[0_0_25px_rgba(147,51,234,0.35)] hover:shadow-[0_0_35px_rgba(147,51,234,0.6)] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 cursor-pointer ${
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default CafeNovaTemplate6;