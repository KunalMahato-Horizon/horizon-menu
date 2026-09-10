import React from 'react';

const LaboratoryFooter = ({ business }) => {
  const { name = 'ELEMENTAL // LAB', location = '', hours = [] } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#05060A] text-white pt-12 pb-12 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/30 font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Safety Protocols */}
          <div className="p-5 rounded-2xl bg-[#0E121B] border border-white/10">
            <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold block mb-2">
              ⚛ DECONTAMINATION PROTOCOL
            </span>
            <p className="text-xs font-sans text-zinc-400 leading-relaxed font-light">
              All culinary compounds are formulated live in our active clean room. Inform your attending chemist of any allergy nuances or compound contraindications.
            </p>
          </div>

          {/* Cyclotron Active Hours */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#0E121B] border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold block mb-2">
                ⏳ CYCLOTRON SERVICE HOURS
              </span>
              <div className="space-y-1.5 text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-zinc-500">{h.days}</span>
                    <span className="font-bold text-cyan-300">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Facility Location */}
          {location && (
            <div className="p-5 rounded-2xl bg-[#0E121B] border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold block mb-2">
                🔬 LABORATORY COORDINATES
              </span>
              <p className="text-xs font-sans text-zinc-400 leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] text-cyan-300 block">
                ● CALIBRATED TABLE CARTE SERVICE
              </span>
            </div>
          )}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {name}. PERIODIC TABLE OF FLAVOR.</p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-cyan-400 hover:text-black font-bold uppercase transition-all"
          >
            Ascend To Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default LaboratoryFooter;