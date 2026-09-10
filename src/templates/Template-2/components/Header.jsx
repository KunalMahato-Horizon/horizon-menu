import React from 'react';

const Header = ({ business }) => {
  const {
    name = "The Copper Kettle",
    tagline = "Specialty roasts & freshly baked pastries",
    logo = null,
    rating = "4.9",
    businessType = "Cafe & Roastery",
    location = "24 West Elm St, Mill Valley",
    isOpen = true,
  } = business || {};

  return (
    <header className="relative w-full bg-[#FAF7F2] overflow-hidden border-b border-amber-900/5">
      {/* Ambient Warm Atmosphere & Light Flares */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-amber-200/40 via-orange-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-8 left-8 text-amber-900/10 text-3xl font-serif select-none">✦</div>
        <div className="absolute top-12 right-12 text-amber-900/10 text-2xl font-serif select-none">✦</div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-10 text-center">
        
        {/* Brand Stamp / Logo */}
        {logo ? (
          <div className="mb-5 inline-flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-300/40 to-orange-200/40 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
              
              {typeof logo === 'string' && logo.length <= 4 ? (
                <div
                  className="relative w-22 h-22 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100 ring-4 ring-[#FAF7F2] shadow-lg shadow-amber-950/10 flex items-center justify-center text-4xl text-amber-950"
                  aria-hidden="true"
                >
                  {logo}
                </div>
              ) : (
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="relative w-22 h-22 sm:w-24 sm:h-24 object-cover rounded-full ring-4 ring-[#FAF7F2] shadow-lg shadow-amber-950/10 bg-white p-1.5"
                />
              )}

              {/* Status Badge */}
              {isOpen !== undefined && (
                <span
                  className="absolute bottom-0 right-0 flex h-4 w-4"
                  title={isOpen ? "Open Now" : "Closed"}
                >
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-emerald-400' : 'bg-stone-400'}`} />
                  <span className={`relative inline-flex rounded-full h-4 w-4 border-2 border-[#FAF7F2] ${isOpen ? 'bg-emerald-500' : 'bg-stone-400'}`} />
                </span>
              )}
            </div>
          </div>
        ) : (
          /* Subtle top badge if no logo exists */
          <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200/60 text-xs font-semibold text-amber-900 uppercase tracking-widest">
            <span>Freshly Brewed</span>
          </div>
        )}

        {/* Business Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-950 tracking-tight font-serif leading-tight">
          {name}
        </h1>

        {/* Delicate Star Divider */}
        <div className="mt-3 mb-3.5 flex items-center justify-center gap-3">
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-amber-300" />
          <span className="text-amber-500 text-xs select-none">✦</span>
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-amber-300" />
        </div>

        {/* Tagline */}
        {tagline && (
          <p className="text-stone-600 text-base sm:text-lg font-normal max-w-md mx-auto leading-relaxed italic">
            "{tagline}"
          </p>
        )}

        {/* Consolidated Metadata Capsule Strip */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-xs px-4 py-2 rounded-2xl border border-amber-900/10 shadow-xs text-xs sm:text-sm text-stone-700">
          
          {/* Rating */}
          {rating && (
            <div className="flex items-center gap-1.5 font-semibold text-amber-950">
              <svg className="w-4 h-4 text-amber-500 fill-amber-400" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{Number(rating).toFixed(1)}</span>
            </div>
          )}

          {rating && (businessType || location) && (
            <span className="text-amber-300 select-none">•</span>
          )}

          {/* Business Type */}
          {businessType && (
            <span className="font-medium text-amber-900">
              {businessType}
            </span>
          )}

          {businessType && location && (
            <span className="text-amber-300 select-none">•</span>
          )}

          {/* Location */}
          {location && (
            <div className="flex items-center gap-1.5 text-stone-600">
              <svg className="w-3.5 h-3.5 text-amber-700/60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="truncate max-w-[200px] sm:max-w-xs">{location}</span>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;