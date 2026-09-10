import React from 'react';

const TerminalFooter = ({ business }) => {
  const { name = 'AERONAUT AIRWAYS', location = '', hours = [] } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#060D18] text-white pt-12 pb-12 px-4 sm:px-6 lg:px-8 border-t-2 border-[#FF4B26] font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Box 1: Baggage & Table Cabin Rules */}
          <div className="p-5 rounded-2xl bg-[#0F1C32] border border-white/10">
            <span className="text-[10px] uppercase tracking-widest text-[#FF4B26] font-bold block mb-2">
              ✈ IN-FLIGHT DINING PROTOCOL
            </span>
            <p className="text-xs font-sans text-zinc-400 leading-relaxed font-light">
              All dishes are finished fresh upon ticket presentation. Inform your cabin crew attendant of any ingredient allergies or special dietary clearances.
            </p>
          </div>

          {/* Box 2: Flight Schedule */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#0F1C32] border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-[#FFC72C] font-bold block mb-2">
                ⏱ FLIGHT DISPATCH SCHEDULE
              </span>
              <div className="space-y-1.5 text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-zinc-500">{h.days}</span>
                    <span className="font-bold text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Box 3: Terminal Gate Coordinates */}
          {location && (
            <div className="p-5 rounded-2xl bg-[#0F1C32] border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-[#FF4B26] font-bold block mb-2">
                📍 CONCOURSE COORDINATES
              </span>
              <p className="text-xs font-sans text-zinc-400 leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] text-[#FFC72C] block">
                ● AUTHORIZED PASSENGERS ONLY
              </span>
            </div>
          )}
        </div>

        {/* Runway Colophon */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {name}. SUPERSONIC TABLE DINING.</p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#FF4B26] hover:text-white font-bold uppercase transition-all"
          >
            Ascend To Flight Control ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default TerminalFooter;