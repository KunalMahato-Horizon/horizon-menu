import React from 'react';

const Footer = ({ business }) => {
  const {
    name = 'Brasserie Saint-Germain',
    location = '',
    hours = [],
  } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#0A1A13] text-[#F8F5EE] pt-12 pb-8 px-4 sm:px-6 border-t-2 border-[#C5A059]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Table Service Guidelines */}
          <div className="p-5 rounded-md bg-[#0E261C] border border-[#C5A059]/30">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
              Service à Table
            </span>
            <p className="text-xs font-serif text-[#F8F5EE]/80 leading-relaxed">
              Tous nos plats sont préparés à la commande selon la tradition française. Pour toute allergie, merci de prévenir votre chef de rang.
            </p>
          </div>

          {/* Kitchen Schedule */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-md bg-[#0E261C] border border-[#C5A059]/30">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
                Horaires De Service
              </span>
              <div className="space-y-1.5">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-xs font-serif">
                    <span className="text-[#C5A059]">{h.days}</span>
                    <span className="font-bold text-[#F8F5EE]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Location */}
          {location && (
            <div className="p-5 rounded-md bg-[#0E261C] border border-[#C5A059]/30">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
                Emplacement
              </span>
              <p className="text-xs font-serif text-[#F8F5EE]/80 leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] font-mono text-[#C5A059] block">
                ⚜️ Service Continu En Salle
              </span>
            </div>
          )}
        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#0E261C] text-xs font-serif text-[#C5A059]/70">
          <p>© {new Date().getFullYear()} {name}. Carte de Restaurant Numérique.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-[#F8F5EE] font-bold transition-colors uppercase tracking-widest text-[10px] font-mono"
          >
            Haut De Page ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;