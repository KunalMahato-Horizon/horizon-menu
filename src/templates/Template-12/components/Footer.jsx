import React from 'react';

const Footer = ({ business }) => {
  const {
    name = 'Komorebi Tea & Robata',
    location = '',
    hours = [],
  } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#E8E4DC] border-t border-[#DDD7CC] pt-12 pb-8 px-4 sm:px-6 text-[#1F211D]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Dine-In Notice */}
          <div className="p-5 rounded-xl bg-[#F3F1EC] border border-[#DDD7CC]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#4A5844] font-bold block mb-2">
              Dine-In Information
            </span>
            <p className="text-xs text-[#5C5950] leading-relaxed">
              Dishes are made fresh to order. For specific dietary requirements or ingredient notes, please inform your table attendant.
            </p>
          </div>

          {/* Kitchen Hours */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-xl bg-[#F3F1EC] border border-[#DDD7CC]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#4A5844] font-bold block mb-2">
                Service Hours
              </span>
              <div className="space-y-1.5">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-xs font-mono">
                    <span className="text-[#78746B]">{h.days}</span>
                    <span className="font-semibold text-[#1F211D]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Venue Location */}
          {location && (
            <div className="p-5 rounded-xl bg-[#F3F1EC] border border-[#DDD7CC]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#4A5844] font-bold block mb-2">
                Venue Location
              </span>
              <p className="text-xs text-[#5C5950] leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] font-mono text-[#78746B] block">
                🌿 Fresh Ingredients Delivered Daily
              </span>
            </div>
          )}
        </div>

        {/* Back to Top & Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#DDD7CC] text-xs font-mono text-[#78746B]">
          <p>© {new Date().getFullYear()} {name}. Table Carte Experience.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-[#1F211D] font-semibold transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;