import React from 'react';

const ZodiacFooter = ({ business }) => {
  const { name = 'THE ARCANA CARTE', location = '', hours = [] } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#05060A] text-white pt-12 pb-10 px-4 sm:px-6 lg:px-8 border-t border-[#E5C06E]/30 font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Card 1: Dining Protocol */}
          <div className="p-5 rounded-3xl bg-[#0D0F1D] border border-white/10">
            <span className="text-[10px] uppercase tracking-widest text-[#E5C06E] font-bold block mb-2">
              ✦ TABLE CARTE RITUAL
            </span>
            <p className="text-xs font-sans text-zinc-400 leading-relaxed font-light">
              Plates are prepared to live order in rhythm with the hearth. Inform your server of any allergy nuances or ingredient sensitivities.
            </p>
          </div>

          {/* Card 2: Hours */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-3xl bg-[#0D0F1D] border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-[#E5C06E] font-bold block mb-2">
                ✦ PLANETARY SERVICE WINDOWS
              </span>
              <div className="space-y-1.5 text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-zinc-500">{h.days}</span>
                    <span className="font-bold text-[#E5C06E]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 3: Location */}
          {location && (
            <div className="p-5 rounded-3xl bg-[#0D0F1D] border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-[#E5C06E] font-bold block mb-2">
                ✦ SANCTUARY LOCATION
              </span>
              <p className="text-xs font-sans text-zinc-400 leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] text-[#E5C06E] block">
                ● LIVE DINE-IN SERVICE
              </span>
            </div>
          )}
        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {name}. CELESTIAL DIVINATIONS.</p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-[#E5C06E] hover:text-[#080911] font-bold uppercase transition-all"
          >
            Ascend To Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ZodiacFooter;