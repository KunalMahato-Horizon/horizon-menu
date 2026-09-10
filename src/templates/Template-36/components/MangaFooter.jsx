import React from 'react';

const MangaFooter = ({ business }) => {
  const { name = 'SHONEN KITCHEN', location = '', hours = [] } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-white text-black pt-12 pb-10 px-4 sm:px-6 lg:px-8 border-t-4 border-black font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Giant Comic "TO BE CONTINUED" Arrow */}
        <div className="flex items-center justify-end">
          <div className="inline-block bg-black text-white px-6 py-2 border-3 border-black shadow-[4px_4px_0px_0px_#000] rotate-[-1deg]">
            <span className="text-sm sm:text-base font-black tracking-widest uppercase">
              TO BE CONTINUED IN NEXT VISIT... ➔
            </span>
          </div>
        </div>

        {/* Metadata Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
          {/* Card 1: Cooking Protocol */}
          <div className="p-5 rounded-xl bg-[#FAF8F5] border-3 border-black shadow-[3px_3px_0px_0px_#000]">
            <span className="text-[10px] font-black uppercase tracking-widest text-red-600 block mb-2">
              // TABLE POLICY
            </span>
            <p className="text-xs text-black/80 leading-relaxed">
              Every dish is drawn fresh over the flames to order. Inform your attendant of any allergy warnings or ingredient preferences.
            </p>
          </div>

          {/* Card 2: Operating Schedule */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-xl bg-[#FAF8F5] border-3 border-black shadow-[3px_3px_0px_0px_#000]">
              <span className="text-[10px] font-black uppercase tracking-widest text-black block mb-2">
                // CHAPTER RELEASE SCHEDULE
              </span>
              <div className="space-y-1.5 text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-black/60">{h.days}</span>
                    <span className="font-black text-black">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 3: Location */}
          {location && (
            <div className="p-5 rounded-xl bg-[#FAF8F5] border-3 border-black shadow-[3px_3px_0px_0px_#000]">
              <span className="text-[10px] font-black uppercase tracking-widest text-black block mb-2">
                // STUDIO LOCATION
              </span>
              <p className="text-xs text-black/80 leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] font-black text-red-600 block">
                ● LIVE DINE-IN SERVICE ONLY
              </span>
            </div>
          )}
        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t-2 border-black text-xs font-mono text-black/60">
          <p>© {new Date().getFullYear()} {name}. WEEKLY SHONEN ISSUE 36.</p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded bg-black text-white hover:bg-yellow-300 hover:text-black font-black uppercase transition-all shadow-[2px_2px_0px_0px_#000]"
          >
            Back to Cover Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default MangaFooter;