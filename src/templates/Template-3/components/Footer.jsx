import React from 'react';

const Footer = ({ business = {} }) => {
  const {
    name = "Menu",
    location = "",
    phone = "",
    instagram = "",
    mapsUrl = "",
    hours = [],
  } = business;

  return (
    <footer className="relative w-full bg-neutral-950 text-neutral-300 border-t border-neutral-850 mt-14 sm:mt-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-52 bg-amber-500/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 mb-12">
          
          {/* Location */}
          {location && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-200">
                  Location
                </h3>
              </div>
              
              {mapsUrl ? (
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors leading-relaxed"
                >
                  <svg className="w-4 h-4 mt-0.5 text-neutral-500 group-hover:text-amber-400 flex-shrink-0 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{location}</span>
                </a>
              ) : (
                <div className="flex items-start gap-2.5 text-sm text-neutral-400 leading-relaxed">
                  <svg className="w-4 h-4 mt-0.5 text-neutral-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{location}</span>
                </div>
              )}
            </div>
          )}

          {/* Service Hours */}
          {hours && hours.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-200">
                  Kitchen Hours
                </h3>
              </div>
              <div className="space-y-1.5">
                {hours.map((schedule, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs sm:text-sm text-neutral-400">
                    <span>{schedule.days}</span>
                    <span className="font-semibold text-neutral-200 font-mono">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Connect & Socials */}
          {(phone || instagram) && (
            <div className="space-y-3 sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-200">
                  Connect
                </h3>
              </div>

              <div className="space-y-2.5">
                {phone && (
                  <a
                    href={`tel:${phone}`}
                    className="group flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
                    className="group flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
        <div className="pt-8 border-t border-neutral-800/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-base font-black text-white tracking-tight">
              {name}
            </p>
            <p className="text-xs text-neutral-500 mt-0.5">
              Digital In-Store Menu powered by <span className="font-semibold text-neutral-300">Horizon</span>
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400">
            <span>Scan</span>
            <span className="text-neutral-600">•</span>
            <span>Browse</span>
            <span className="text-neutral-600">•</span>
            <span>Enjoy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;