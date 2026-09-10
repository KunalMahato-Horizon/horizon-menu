import React from 'react';

const TerminalFooter = ({ business }) => {
  const { name = 'METRO CONCOURSE', location = '', hours = [] } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#07080C] text-white pt-12 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Station Protocol */}
          <div className="p-5 rounded-2xl bg-[#161922] border border-white/10">
            <span className="text-[10px] uppercase tracking-widest text-[#00D26A] font-bold block mb-2">
              // PASSENGER TABLE NOTICE
            </span>
            <p className="text-xs font-sans text-white/60 leading-relaxed font-light">
              All dishes are plated and dispatched upon ticket receipt. For route modifications or dietary transfers, notify your station attendant.
            </p>
          </div>

          {/* Timetable Service Windows */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#161922] border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-[#FFB800] font-bold block mb-2">
                // SERVICE TIMETABLE
              </span>
              <div className="space-y-1.5 text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-white/40">{h.days}</span>
                    <span className="font-bold text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Terminal Concourse Address */}
          {location && (
            <div className="p-5 rounded-2xl bg-[#161922] border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-[#FF3344] font-bold block mb-2">
                // TERMINAL JUNCTION
              </span>
              <p className="text-xs font-sans text-white/60 leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] text-[#00D26A] block">
                ● RAPID TABLE PLATFORM ACTIVE
              </span>
            </div>
          )}
        </div>

        {/* Return to Platform Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {name}. MUNICIPAL TRANSIT DINING.</p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white hover:text-black font-bold uppercase transition-all"
          >
            Return to Concourse Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default TerminalFooter;