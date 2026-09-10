import React from 'react';

const Footer = ({ business }) => {
  const {
    name = 'Torii Midnight Yatai',
    location = '',
    hours = [],
  } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#0D0C0E] text-white pt-12 pb-8 px-4 sm:px-6 border-t-2 border-[#E63946]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card 1: Counter Hospitality Rules */}
          <div className="p-5 rounded-2xl bg-[#18161A] border border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E63946] font-bold block mb-2">
              Counter Dining Policy
            </span>
            <p className="text-xs text-white/70 leading-relaxed font-sans">
              All skewers and broth dishes are served fresh off the binchotan embers. Please inform your server of any seafood or soy sensitivities.
            </p>
          </div>

          {/* Card 2: Stall Hours */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#18161A] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E9C46A] font-bold block mb-2">
                Night Shift Schedule
              </span>
              <div className="space-y-1.5 font-mono text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-white/50">{h.days}</span>
                    <span className="font-bold text-[#E9C46A]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 3: Location Coordinates */}
          {location && (
            <div className="p-5 rounded-2xl bg-[#18161A] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E63946] font-bold block mb-2">
                Stall Coordinates
              </span>
              <p className="text-xs text-white/70 leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] font-mono text-[#E9C46A] block">
                🏮 In-Person Counter Dining Only
              </span>
            </div>
          )}
        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs font-mono text-white/50">
          <p>© {new Date().getFullYear()} {name}. Tokyo Yatai Counter Carte.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-white font-bold transition-colors uppercase tracking-wider text-[10px]"
          >
            Back to Counter Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;