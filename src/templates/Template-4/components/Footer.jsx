import React from 'react';

const Footer = ({ business = {} }) => {
  const {
    name = "L'Oasis",
    tagline = "Fine Dining & Lounge",
    logo = null,
    location = "",
    phone = "",
    instagram = "",
    mapsUrl = "",
    hours = [],
  } = business;

  return (
    <footer
      id="contact"
      className="relative w-full bg-stone-950 text-stone-300 border-t border-stone-850 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-amber-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-18 pb-10">
        
        {/* Brand Showcase Header */}
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-12 sm:mb-16">
          {/* Logo Emblem */}
          {logo && (
            <div className="mb-4">
              {typeof logo === 'string' && logo.length <= 4 ? (
                <div
                  className="w-14 h-14 rounded-2xl bg-stone-900/90 border border-stone-800 text-amber-300 flex items-center justify-center text-2xl font-serif font-black shadow-lg shadow-black/40"
                  aria-hidden="true"
                >
                  {logo}
                </div>
              ) : (
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="w-14 h-14 object-cover rounded-2xl ring-1 ring-white/10 shadow-lg"
                />
              )}
            </div>
          )}

          {/* Restaurant Title */}
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
            {name}
          </h2>

          {tagline && (
            <p className="text-xs sm:text-sm text-stone-400 font-serif italic mt-1 max-w-md">
              "{tagline}"
            </p>
          )}

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-10 sm:w-14 h-px bg-gradient-to-r from-transparent to-stone-700" />
            <span className="text-amber-500 text-xs select-none">✦</span>
            <span className="w-10 sm:w-14 h-px bg-gradient-to-l from-transparent to-stone-700" />
          </div>
        </div>

        {/* 3-Column Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 pb-12 border-b border-stone-800/80">
          
          {/* Column 1: Location & Directions */}
          {location && (
            <div className="space-y-3 text-center sm:text-left">
              <div className="inline-flex sm:flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-stone-200">
                  Address & Location
                </h3>
              </div>

              {mapsUrl ? (
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-center sm:justify-start gap-2.5 text-sm text-stone-400 hover:text-white transition-colors leading-relaxed"
                >
                  <svg className="w-4 h-4 mt-0.5 text-stone-500 group-hover:text-amber-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{location}</span>
                </a>
              ) : (
                <div className="flex items-start justify-center sm:justify-start gap-2.5 text-sm text-stone-400 leading-relaxed">
                  <svg className="w-4 h-4 mt-0.5 text-stone-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{location}</span>
                </div>
              )}
            </div>
          )}

          {/* Column 2: Dining Hours */}
          {hours && hours.length > 0 && (
            <div className="space-y-3 text-center sm:text-left">
              <div className="inline-flex sm:flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-stone-200">
                  Kitchen Hours
                </h3>
              </div>
              <div className="space-y-1.5">
                {hours.map((schedule, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs sm:text-sm text-stone-400 max-w-xs mx-auto sm:mx-0">
                    <span>{schedule.days}</span>
                    <span className="font-semibold text-stone-200 font-mono">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Column 3: Contact & Socials */}
          {(phone || instagram) && (
            <div className="space-y-3 text-center sm:text-left sm:col-span-2 md:col-span-1">
              <div className="inline-flex sm:flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-stone-200">
                  Direct Inquiries
                </h3>
              </div>

              <div className="space-y-2.5 flex flex-col items-center sm:items-start">
                {phone && (
                  <a
                    href={`tel:${phone}`}
                    className="group flex items-center gap-2.5 text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 text-stone-500 group-hover:text-amber-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{phone}</span>
                  </a>
                )}

                {instagram && (
                  <a
                    href={`https://instagram.com/${instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 text-stone-500 group-hover:text-amber-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    <span>{instagram.startsWith('@') ? instagram : `@${instagram}`}</span>
                  </a>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Bottom Attribution & Brand Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-xs text-stone-400">
              Digital Experience handcrafted by <span className="font-bold text-stone-200">Horizon</span>
            </p>
            <p className="text-[11px] text-stone-600 mt-0.5">
              Curated for tabletop scanning & in-store dining.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-[11px] font-semibold px-3 py-1 rounded-full bg-stone-900/90 border border-stone-800 text-stone-400">
            <span>Scan</span>
            <span className="text-stone-600">•</span>
            <span>Browse</span>
            <span className="text-stone-600">•</span>
            <span>Enjoy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;