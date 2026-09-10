import React from 'react';

const Footer = ({ business }) => {
  const {
    name = 'BLUEPRINT // LAB',
    location = '',
    hours = [],
  } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#050C16] text-white pt-12 pb-8 px-4 sm:px-6 border-t-2 border-[#00F0FF]/40 font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Box 1: Engineering Note */}
          <div className="p-4 rounded-lg bg-[#071324] border border-[#00F0FF]/20">
            <span className="text-[9px] uppercase tracking-widest text-[#00F0FF] font-bold block mb-2">
              // TABLE OPERATION TOLERANCE
            </span>
            <p className="text-xs text-[#8DA9C4] leading-relaxed font-sans font-light">
              All dishes are manufactured live upon ticket dispatch. Please alert your station attendant to any structural dietary requirements or allergies.
            </p>
          </div>

          {/* Box 2: Operating Windows */}
          {hours && hours.length > 0 && (
            <div className="p-4 rounded-lg bg-[#071324] border border-[#00F0FF]/20">
              <span className="text-[9px] uppercase tracking-widest text-[#00F0FF] font-bold block mb-2">
                // OPERATION TIMINGS
              </span>
              <div className="space-y-1 text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-[#8DA9C4]">{h.days}</span>
                    <span className="font-bold text-[#F0F4F8]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Box 3: Technical Location */}
          {location && (
            <div className="p-4 rounded-lg bg-[#071324] border border-[#00F0FF]/20">
              <span className="text-[9px] uppercase tracking-widest text-[#00F0FF] font-bold block mb-2">
                // GRID LOCATION
              </span>
              <p className="text-xs text-[#8DA9C4] leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[9px] text-[#00F0FF] block">
                ⌖ LIVE TABLE TOP CARTE DOCKET
              </span>
            </div>
          )}
        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs text-[#8DA9C4]">
          <p>© {new Date().getFullYear()} {name}. DWG 26. ALL SCHEMATICS APPROVED.</p>
          <button
            onClick={scrollToTop}
            className="px-3 py-1 rounded bg-[#00F0FF]/10 text-[#00F0FF] hover:bg-[#00F0FF] hover:text-[#0A192F] font-bold uppercase transition-all"
          >
            RETURN TO TITLE BLOCK ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;