import React from 'react';

const TavernFooter = ({ business }) => {
  const { name = "ALCHEMIST'S CODEX", location = '', hours = [] } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#07080C] text-white pt-12 pb-12 px-4 sm:px-6 lg:px-8 border-t-2 border-[#F59E0B]/30 font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Box 1: Tavern Hall Laws */}
          <div className="p-5 rounded-2xl bg-[#121622] border border-white/10">
            <span className="text-[10px] uppercase tracking-widest text-[#F59E0B] font-bold block mb-2">
              ⚔️ TAVERN HALL LAWS
            </span>
            <p className="text-xs font-sans text-zinc-400 leading-relaxed font-light">
              All feasts and elixirs are concocted live upon order dispatch. Present any curse vulnerabilities or ingredient allergies to your table keeper.
            </p>
          </div>

          {/* Box 2: Operating Bells */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#121622] border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-[#FDE68A] font-bold block mb-2">
                ⏳ ACTIVE SERVICE BELLS
              </span>
              <div className="space-y-1.5 text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-zinc-500">{h.days}</span>
                    <span className="font-bold text-[#F59E0B]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Box 3: Guildhall Location */}
          {location && (
            <div className="p-5 rounded-2xl bg-[#121622] border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-[#F59E0B] font-bold block mb-2">
                🏰 GUILDHALL COORDINATES
              </span>
              <p className="text-xs font-sans text-zinc-400 leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] text-[#FDE68A] block">
                ● IN-PERSON TABLE BANQUET SERVICE
              </span>
            </div>
          )}
        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {name}. ALCHEMICAL GUILD CODEX.</p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#F59E0B] hover:text-[#0B0D13] font-bold uppercase transition-all"
          >
            Ascend To Guild Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default TavernFooter;