import React from 'react';

const Footer = ({ business }) => {
  const {
    name = 'The Daily Press',
    location = '',
    hours = [],
  } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#1A1A1A] text-[#F5F2EB] pt-10 pb-8 px-4 sm:px-6 border-t-4 border-[#1A1A1A]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Box 1: Publisher's Notice */}
          <div className="p-4 border border-[#333333] bg-[#222222]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#991B1B] font-bold block mb-2">
              Publisher's Notice
            </span>
            <p className="text-xs font-serif text-[#CCCCCC] leading-relaxed">
              Every dish is freshly prepared table-side upon receipt of ticket. Guests with specific dietary requirements are kindly requested to advise staff directly.
            </p>
          </div>

          {/* Box 2: Press Schedule */}
          {hours && hours.length > 0 && (
            <div className="p-4 border border-[#333333] bg-[#222222]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#991B1B] font-bold block mb-2">
                Press Hours & Circulation
              </span>
              <div className="space-y-1.5">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-xs font-mono">
                    <span className="text-[#888888]">{h.days}</span>
                    <span className="font-bold text-[#F5F2EB]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Box 3: Gazette Office Location */}
          {location && (
            <div className="p-4 border border-[#333333] bg-[#222222]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#991B1B] font-bold block mb-2">
                Dispatch Location
              </span>
              <p className="text-xs font-serif text-[#CCCCCC] leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] font-mono text-[#888888] block">
                • Table Dining Services Active
              </span>
            </div>
          )}
        </div>

        {/* Back to Top & Colophon */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#333333] text-xs font-mono text-[#888888]">
          <p>© {new Date().getFullYear()} {name}. Printed & Distributed for Table Dining.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-white font-bold transition-colors uppercase tracking-widest text-[10px]"
          >
            Back to Front Page ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;