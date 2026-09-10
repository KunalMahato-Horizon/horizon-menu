import React from 'react';

const Footer = ({ business }) => {
  const {
    name = "L'Artisan",
    tagline = 'Artisanal Baking & Modern Gastronomy',
    location = '124 Culinary Boulevard, Heritage Quarter',
    instagram = '@lartisan.dining',
    mapsUrl = '#',
    rating = 4.9,
    businessType = 'Fine Dining & Bakery',
    hours = [
      { days: 'Mon – Thu', time: '11:00 AM – 10:00 PM' },
      { days: 'Fri – Sun', time: '10:00 AM – 11:30 PM' },
    ],
  } = business || {};

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="info" className="relative bg-[#201E1A] text-[#F8F6F1] mt-20 pt-16 pb-12 overflow-hidden border-t border-[#3A3834]">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#B88746]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Brand Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F8F6F1] tracking-tight mb-3">
            {name}
          </h2>

          {tagline && (
            <p className="text-sm sm:text-base text-[#9E988A] font-serif italic mb-4">
              "{tagline}"
            </p>
          )}

          {/* Rating & Type Badge */}
          {(rating || businessType) && (
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#2C2A24] border border-[#3A3834] text-xs text-[#D5D0C5] shadow-xs">
              {rating && (
                <span className="flex items-center gap-1 font-semibold text-[#F8F6F1]">
                  <span className="text-[#B88746]">★</span>
                  <span>{rating}</span>
                </span>
              )}
              {rating && businessType && (
                <span className="w-1 h-1 rounded-full bg-[#5A5548]" />
              )}
              {businessType && (
                <span className="text-[#9E988A] uppercase tracking-wider text-[11px] font-medium">
                  {businessType}
                </span>
              )}
            </div>
          )}

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#4A4740]" />
            <span className="w-1.5 h-1.5 bg-[#B88746] rotate-45" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#4A4740]" />
          </div>
        </div>

        {/* 3-Card Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {/* Card 1: Location */}
          {location && (
            <div className="p-6 rounded-2xl bg-[#282621] border border-[#3A3834]/80 flex flex-col items-center text-center group hover:border-[#B88746]/40 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#32302A] border border-[#423F3A] flex items-center justify-center text-[#B88746] mb-4 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#9E988A] mb-2">
                Visit Us
              </h3>
              <p className="text-sm text-[#D5D0C5] leading-relaxed mb-4 max-w-[220px]">
                {location}
              </p>
              {mapsUrl && (
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[#B88746] hover:text-[#D4A360] transition-colors"
                >
                  <span>Open in Maps</span>
                  <span>→</span>
                </a>
              )}
            </div>
          )}

          {/* Card 2: Hours */}
          {hours && hours.length > 0 && (
            <div className="p-6 rounded-2xl bg-[#282621] border border-[#3A3834]/80 flex flex-col items-center text-center group hover:border-[#B88746]/40 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#32302A] border border-[#423F3A] flex items-center justify-center text-[#B88746] mb-4 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#9E988A] mb-2">
                Kitchen Hours
              </h3>
              <div className="space-y-1.5 w-full">
                {hours.map((schedule, idx) => (
                  <div key={idx} className="text-xs text-[#D5D0C5] flex justify-between gap-2 px-2">
                    <span className="text-[#9E988A] font-medium">{schedule.days}</span>
                    <span className="font-mono text-[#F8F6F1] font-semibold">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 3: Social / Updates */}
          <div className="p-6 rounded-2xl bg-[#282621] border border-[#3A3834]/80 flex flex-col items-center text-center group hover:border-[#B88746]/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#32302A] border border-[#423F3A] flex items-center justify-center text-[#B88746] mb-4 group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#9E988A] mb-2">
              Follow Along
            </h3>
            <p className="text-xs text-[#D5D0C5] mb-4">
              Daily specials & seasonal menus
            </p>
            {instagram && (
              <a
                href={`https://instagram.com/${instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#32302A] border border-[#423F3A] text-xs font-semibold text-[#D5D0C5] hover:text-white hover:border-[#B88746] transition-all"
              >
                <span>📷</span>
                <span>{instagram}</span>
              </a>
            )}
          </div>
        </div>

        {/* Back to Top */}
        <div className="flex justify-center py-6 border-t border-[#32302A]">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#282621] border border-[#3A3834] text-xs uppercase tracking-wider font-semibold text-[#9E988A] hover:text-[#F8F6F1] hover:border-[#5A5548] transition-all focus:outline-none"
          >
            <span>Back to top</span>
            <span className="text-sm">↑</span>
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 border-t border-[#2C2A24] flex flex-col sm:flex-row items-center justify-between gap-2 text-center text-xs text-[#6C675B]">
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
          <p className="tracking-wide">
            Designed for seamless mobile dining
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;