import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const {
    name = "Menu",
    tagline = "Fresh & Artisanal",
    logo = null,
    isOpen = true,
    orderingType = "Order at Counter",
  } = business || {};

  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for sticky elevation and compact padding
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-[0_4px_20px_-4px_rgba(16,185,129,0.08)] py-3 sm:py-3.5'
          : 'bg-white border-b border-neutral-100 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Brand Identity & Subtitle */}
          <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
            {logo ? (
              <div className="flex-shrink-0">
                {typeof logo === 'string' && logo.length <= 4 ? (
                  <div
                    className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center text-2xl sm:text-3xl bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-2xl shadow-2xs select-none"
                    aria-hidden="true"
                  >
                    {logo}
                  </div>
                ) : (
                  <img
                    src={logo}
                    alt={`${name} logo`}
                    className="w-11 h-11 sm:w-12 sm:h-12 object-cover rounded-2xl border border-emerald-100 bg-emerald-50/50 shadow-2xs"
                  />
                )}
              </div>
            ) : (
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-base shadow-xs shadow-emerald-600/20 flex-shrink-0 select-none">
                {name.slice(0, 2).toUpperCase()}
              </div>
            )}

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl md:text-2xl font-black text-neutral-900 tracking-tight truncate">
                  {name}
                </h1>
                {isOpen && (
                  <span className="inline-flex sm:hidden items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open
                  </span>
                )}
              </div>

              {tagline && (
                <p className="text-xs sm:text-sm text-emerald-600 font-semibold truncate tracking-tight">
                  {tagline}
                </p>
              )}
            </div>
          </div>

          {/* Right: In-Store Dining Cues & Live Kitchen Status */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 flex-shrink-0">
            {/* Desktop Kitchen Live Indicator */}
            <div className="hidden sm:flex flex-col items-end text-right">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Kitchen Live
                </span>
              </div>
              <span className="text-xs font-semibold text-neutral-500">
                {orderingType}
              </span>
            </div>

            {/* Dine-In Mode Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 text-white text-xs font-bold shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Dine-In Menu</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;