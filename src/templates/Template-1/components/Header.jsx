import React from 'react';

const Header = ({ business }) => {
  const {
    name = "Menu",
    tagline = "",
    logo = null,
    rating = null,
    businessType = "",
    location = "",
    coverImage = null,
    isOpen = true,
  } = business || {};

  return (
    <header className="relative w-full bg-white overflow-hidden border-b border-slate-150/60">
      {/* Ambient Faded Cover Backdrop */}
      {coverImage ? (
        <div className="absolute inset-x-0 top-0 h-72 md:h-96 overflow-hidden pointer-events-none select-none">
          <img
            src={coverImage}
            alt=""
            className="w-full h-full object-cover object-center scale-105 filter blur-xs opacity-25"
          />
          {/* Dual multi-stop gradient for seamless white fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/75 to-white" />
        </div>
      ) : (
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent pointer-events-none" />
      )}

      {/* Main Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-10 text-center">
        
        {/* Brand Stamp / Tilted Logo */}
        {logo && (
          <div className="mb-6 inline-flex justify-center group cursor-pointer">
            <div className="relative transform -rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 ease-out">
              {/* Soft ambient glow underneath */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition-opacity" />

              {typeof logo === 'string' && logo.length <= 4 ? (
                <div
                  className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-slate-900 text-white flex items-center justify-center text-3xl md:text-4xl font-black shadow-xl ring-4 ring-white"
                  aria-hidden="true"
                >
                  {logo}
                </div>
              ) : (
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="relative w-20 h-20 md:w-24 md:h-24 object-contain rounded-2xl md:rounded-3xl bg-white p-2.5 shadow-xl ring-4 ring-white"
                />
              )}

              {/* Status Dot Pip */}
              {isOpen !== undefined && (
                <span
                  className="absolute -top-1 -right-1 flex h-4 w-4"
                  title={isOpen ? "Open" : "Closed"}
                >
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-emerald-400' : 'bg-slate-400'}`} />
                  <span className={`relative inline-flex rounded-full h-4 w-4 border-2 border-white ${isOpen ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                </span>
              )}
            </div>
          </div>
        )}

        {/* Business Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {name}
        </h1>

        {/* Tagline */}
        {tagline && (
          <p className="mt-3 text-slate-600 text-base sm:text-lg font-normal max-w-xl mx-auto leading-relaxed">
            {tagline}
          </p>
        )}

        {/* Centered Accent Bar */}
        <div className="mt-5 mb-6 flex items-center justify-center gap-2">
          <span className="h-0.5 w-3 rounded-full bg-amber-300" />
          <span className="h-1 w-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 shadow-sm shadow-orange-500/20" />
          <span className="h-0.5 w-3 rounded-full bg-amber-300" />
        </div>

        {/* Meta Info Strip */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-slate-50/80 backdrop-blur-xs px-4 py-2 rounded-2xl border border-slate-200/60 shadow-xs text-xs sm:text-sm text-slate-600">
          
          {/* Rating */}
          {rating && (
            <div className="flex items-center gap-1.5 font-semibold text-slate-800 pr-1">
              <svg className="w-4 h-4 text-amber-500 fill-amber-400" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{Number(rating).toFixed(1)}</span>
            </div>
          )}

          {rating && (businessType || location) && (
            <span className="text-slate-300 select-none">•</span>
          )}

          {/* Business Type */}
          {businessType && (
            <span className="font-medium text-slate-700">
              {businessType}
            </span>
          )}

          {businessType && location && (
            <span className="text-slate-300 select-none">•</span>
          )}

          {/* Location */}
          {location && (
            <div className="flex items-center gap-1 text-slate-600">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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