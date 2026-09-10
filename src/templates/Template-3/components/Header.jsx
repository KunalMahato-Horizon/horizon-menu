import React from 'react';

const Header = ({ business }) => {
  const {
    name = "Menu",
    tagline = "",
    logo = null,
    rating = null,
    location = "",
    isOpen = true,
  } = business || {};

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
            {/* Logo */}
            {logo ? (
              <div className="flex-shrink-0">
                {typeof logo === 'string' && logo.length <= 4 ? (
                  <div
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xl sm:text-2xl font-black shadow-xs ring-1 ring-black/5"
                    aria-hidden="true"
                  >
                    {logo}
                  </div>
                ) : (
                  <img
                    src={logo}
                    alt={`${name} logo`}
                    className="w-11 h-11 sm:w-12 sm:h-12 object-cover rounded-2xl ring-1 ring-slate-200/80 shadow-xs bg-white"
                  />
                )}
              </div>
            ) : (
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-base sm:text-lg font-bold shadow-xs flex-shrink-0">
                {name.slice(0, 2).toUpperCase()}
              </div>
            )}

            {/* Name & Tagline */}
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-slate-900 truncate">
                  {name}
                </h1>
                {isOpen !== undefined && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20 flex-shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open
                  </span>
                )}
              </div>

              {tagline ? (
                <p className="text-xs sm:text-sm text-slate-500 truncate font-normal">
                  {tagline}
                </p>
              ) : location ? (
                <p className="text-xs sm:text-sm text-slate-500 truncate font-normal">
                  {location}
                </p>
              ) : null}
            </div>
          </div>

          {/* Minimal Info Badges */}
          {(rating || location) && (
            <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
              {rating && (
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-500/10 text-amber-900 text-xs font-semibold ring-1 ring-inset ring-amber-500/20">
                  <svg className="w-3.5 h-3.5 fill-amber-500 text-amber-500" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{Number(rating).toFixed(1)}</span>
                </div>
              )}

              {location && (
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 text-slate-600 text-xs font-medium">
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="truncate max-w-[160px]">{location}</span>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </header>
  );
};

export default Header;