import React from 'react';

const DossierFooter = ({ business }) => {
  const { name = 'PROJECT // NOVA', location = '', hours = [] } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#1A1A1A] text-[#ECE3CE] pt-12 pb-10 px-4 sm:px-6 lg:px-8 border-t-4 border-[#B91C1C] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Card 1: Bureau Instructions */}
          <div className="p-5 rounded-xl bg-[#262626] border border-white/10">
            <span className="text-[10px] uppercase tracking-widest text-[#FEF08A] font-black block mb-2">
              // DISPOSAL PROTOCOL
            </span>
            <p className="text-xs font-sans text-zinc-300 leading-relaxed font-light">
              This menu is classified for in-house table dining only. Do not remove records from premises. Inform your attendant of any allergen vulnerabilities.
            </p>
          </div>

          {/* Card 2: Operating Timetable */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-xl bg-[#262626] border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-[#FEF08A] font-black block mb-2">
                // ACTIVE OPERATIONAL WINDOW
              </span>
              <div className="space-y-1.5 text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-zinc-400">{h.days}</span>
                    <span className="font-bold text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 3: Safehouse Coordinates */}
          {location && (
            <div className="p-5 rounded-xl bg-[#262626] border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-[#FEF08A] font-black block mb-2">
                // SAFEHOUSE LOCATION
              </span>
              <p className="text-xs font-sans text-zinc-300 leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] text-[#FEF08A] block font-bold">
                ● AUTHORIZED DINE-IN SERVICE ONLY
              </span>
            </div>
          )}
        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} {name}. OFFICIAL INTELLIGENCE DOSSIER.</p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded bg-white/10 hover:bg-[#B91C1C] hover:text-white font-bold uppercase transition-all"
          >
            Return to Cover Page ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default DossierFooter;