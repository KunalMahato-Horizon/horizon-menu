import React from 'react';

const Footer = ({ business }) => {
  const {
    name = "L'Herbier Kitchen",
    location = '',
    hours = [],
  } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#1E2721] text-[#F6F3EB] pt-12 pb-8 px-4 sm:px-6 border-t-2 border-[#C4923C]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card 1: Forager Protocol */}
          <div className="p-5 rounded-xl bg-[#28352C] border border-[#C4923C]/20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C4923C] font-bold block mb-2">
              Table-Side Herbarium
            </span>
            <p className="text-xs font-serif text-[#F6F3EB]/80 leading-relaxed">
              Every dish is plated fresh from our greenhouse and foraged kitchen. Please notify your server directly of any micro-ingredient or seed sensitivities.
            </p>
          </div>

          {/* Card 2: Greenhouse Hours */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-xl bg-[#28352C] border border-[#C4923C]/20">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C4923C] font-bold block mb-2">
                Harvest & Dining Schedule
              </span>
              <div className="space-y-1.5 font-mono">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-xs">
                    <span className="text-[#C4923C]">{h.days}</span>
                    <span className="font-bold text-[#F6F3EB]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 3: Conservatory Coordinates */}
          {location && (
            <div className="p-5 rounded-xl bg-[#28352C] border border-[#C4923C]/20">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C4923C] font-bold block mb-2">
                Conservatory Coordinates
              </span>
              <p className="text-xs font-serif text-[#F6F3EB]/80 leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] font-mono text-[#C4923C] block">
                🌿 Hand-Harvested Micro Dining
              </span>
            </div>
          )}
        </div>

        {/* Back to Top & Colophon */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#28352C] text-xs font-mono text-[#F6F3EB]/60">
          <p>© {new Date().getFullYear()} {name}. Botanical Folio & Table Dining.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-white font-bold transition-colors uppercase tracking-widest text-[10px]"
          >
            Return To Folio Index ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;