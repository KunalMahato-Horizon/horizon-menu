import React from 'react';

const Footer = ({ business }) => {
  const {
    name = "Menu",
    location = "",
    phone = "",
    instagram = "",
    mapsUrl = "",
    hours = [],
  } = business || {};

  return (
    <footer className="relative w-full bg-[#FAF7F2] border-t border-amber-900/10 mt-12 sm:mt-16 md:mt-24 overflow-hidden">
      {/* Ambient Lighting Backdrop */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-48 sm:h-72 bg-gradient-to-t from-amber-200/25 via-orange-100/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 sm:pb-12">
        
        {/* Star Divider Ornament */}
        <div className="mb-8 sm:mb-12 flex items-center justify-center gap-2.5">
          <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-amber-300" />
          <span className="text-amber-500 text-[10px] sm:text-xs select-none">✦</span>
          <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-amber-300" />
        </div>

        {/* Responsive Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10">
          
          {/* Location Card */}
          {location && (
            <div className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 rounded-2xl bg-white/80 backdrop-blur-xs border border-amber-900/5 shadow-xs transition-all duration-200 hover:bg-white hover:border-amber-900/15 sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-900/[0.04] border border-amber-900/10 flex items-center justify-center text-amber-900 mb-2.5 sm:mb-3 flex-shrink-0 select-none">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[11px] sm:text-xs font-semibold text-amber-950 uppercase tracking-wider mb-1">
                Find Us
              </h3>
              {mapsUrl ? (
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-stone-600 hover:text-amber-900 transition-colors leading-relaxed line-clamp-2 sm:line-clamp-none"
                >
                  {location}
                </a>
              ) : (
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-2 sm:line-clamp-none">{location}</p>
              )}
            </div>
          )}

          {/* Phone Card */}
          {phone && (
            <div className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 rounded-2xl bg-white/80 backdrop-blur-xs border border-amber-900/5 shadow-xs transition-all duration-200 hover:bg-white hover:border-amber-900/15">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-900/[0.04] border border-amber-900/10 flex items-center justify-center text-amber-900 mb-2.5 sm:mb-3 flex-shrink-0 select-none">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-[11px] sm:text-xs font-semibold text-amber-950 uppercase tracking-wider mb-1">
                Call Us
              </h3>
              <a
                href={`tel:${phone}`}
                className="text-xs sm:text-sm text-stone-600 hover:text-amber-900 font-medium transition-colors"
              >
                {phone}
              </a>
            </div>
          )}

          {/* Social Card */}
          {instagram && (
            <div className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 rounded-2xl bg-white/80 backdrop-blur-xs border border-amber-900/5 shadow-xs transition-all duration-200 hover:bg-white hover:border-amber-900/15">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-900/[0.04] border border-amber-900/10 flex items-center justify-center text-amber-900 mb-2.5 sm:mb-3 flex-shrink-0 select-none">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <h3 className="text-[11px] sm:text-xs font-semibold text-amber-950 uppercase tracking-wider mb-1">
                Follow Along
              </h3>
              <a
                href={`https://instagram.com/${instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-stone-600 hover:text-amber-900 transition-colors font-medium break-all"
              >
                {instagram.startsWith('@') ? instagram : `@${instagram}`}
              </a>
            </div>
          )}
        </div>

        {/* Operating Hours Capsule */}
        {hours && hours.length > 0 && (
          <div className="w-full max-w-sm sm:max-w-md mx-auto mb-8 sm:mb-12">
            <div className="p-4 sm:p-5 md:p-6 rounded-2xl bg-white/85 backdrop-blur-xs border border-amber-900/10 shadow-xs">
              <div className="flex items-center justify-center gap-2 mb-3">
                <svg className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
                <h3 className="text-[11px] sm:text-xs font-bold text-amber-950 uppercase tracking-wider">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-2 divide-y divide-amber-900/5">
                {hours.map((schedule, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs sm:text-sm pt-2 first:pt-0">
                    <span className="text-stone-600 font-medium">{schedule.days}</span>
                    <span className="text-amber-950 font-semibold">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Brand & Attribution */}
        <div className="pt-6 sm:pt-8 border-t border-amber-900/10 text-center">
          <p className="text-sm sm:text-base font-bold text-amber-950 font-serif mb-1">
            {name}
          </p>
          <p className="text-[11px] sm:text-xs text-stone-500 font-medium">
            Digital Menu powered by <span className="text-amber-950 font-semibold">Horizon</span>
          </p>
          <div className="mt-2.5 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] text-stone-400">
            <span>Scan</span>
            <span>•</span>
            <span>Browse</span>
            <span>•</span>
            <span>Enjoy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;