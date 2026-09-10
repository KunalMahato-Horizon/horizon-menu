import React, { useState, useEffect } from 'react';
import cafeNovaMenu from '../data/cafe-nova';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

const CafeNovaTemplate2 = () => {
  const { business = {}, categories = [] } = cafeNovaMenu || {};
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll distance for back-to-top floating trigger
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-800 antialiased selection:bg-amber-200 selection:text-amber-950 flex flex-col">
      {/* Brand Header */}
      <Header business={business} />

      {/* Sticky Category Navigation */}
      <CategoryNav categories={categories} />

      {/* Main Menu Feed */}
      <main 
        id="main-content" 
        className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16"
      >
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))
        ) : (
          <div className="text-center py-20">
            <div className="w-12 h-12 rounded-2xl bg-amber-900/[0.04] border border-amber-900/10 flex items-center justify-center text-xl mx-auto mb-3 text-stone-400">
              ☕
            </div>
            <p className="text-stone-500 font-medium text-sm">
              Menu is currently being updated.
            </p>
          </div>
        )}
      </main>

      {/* Brand Footer */}
      <Footer business={business} />

      {/* Floating Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-amber-950 text-amber-50 shadow-xl shadow-amber-950/20 border border-amber-900/20 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-900 focus-visible:ring-offset-2 ${
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

export default CafeNovaTemplate2;