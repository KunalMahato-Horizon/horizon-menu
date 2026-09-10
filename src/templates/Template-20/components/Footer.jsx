import React from 'react';

const Footer = ({ business }) => {
  const {
    name = 'Caffè Pasticceria',
    location = '',
    hours = [],
  } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#3D141E] text-[#FDFBF7] pt-12 pb-8 px-4 sm:px-6 border-t-4 border-[#3D141E]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card 1: Salle Rules */}
          <div className="p-5 rounded-2xl bg-[#521C29] border-2 border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5CAD2] font-bold block mb-2">
              Service En Salle
            </span>
            <p className="text-xs font-sans text-[#FDFBF7]/80 leading-relaxed">
              Toutes nos pâtisseries et plats salés sont confectionnés sur place chaque matin. Merci d'informer votre serveur de vos allergies éventuelles.
            </p>
          </div>

          {/* Card 2: Operating Schedule */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#521C29] border-2 border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5CAD2] font-bold block mb-2">
                Horaires Du Café
              </span>
              <div className="space-y-1.5 font-mono">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-xs">
                    <span className="text-[#FDFBF7]/60">{h.days}</span>
                    <span className="font-bold text-[#CFE7DA]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 3: Location */}
          {location && (
            <div className="p-5 rounded-2xl bg-[#521C29] border-2 border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5CAD2] font-bold block mb-2">
                Adresse
              </span>
              <p className="text-xs font-sans text-[#FDFBF7]/80 leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] font-mono text-[#CFE7DA] block">
                🧁 Service Direct À Table
              </span>
            </div>
          )}
        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs font-mono text-[#FDFBF7]/60">
          <p>© {new Date().getFullYear()} {name}. Pasticceria & Bistro Carte.</p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-[#F5CAD2] text-[#3D141E] font-bold uppercase text-[10px] hover:bg-white transition-all shadow-[2px_2px_0px_#000]"
          >
            Haut De Page ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;