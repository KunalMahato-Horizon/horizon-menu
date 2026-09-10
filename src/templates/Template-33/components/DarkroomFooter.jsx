import React from 'react';

const DarkroomFooter = ({ business, isSafelight }) => {
  const { name = 'NOIR 35MM', location = '', hours = [] } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      id="info"
      className={`pt-12 pb-12 px-4 sm:px-6 lg:px-8 border-t font-mono transition-colors ${
        isSafelight
          ? 'bg-[#0D0203] border-[#FF2A3A]/40 text-[#FF2A3A]'
          : 'bg-[#050608] border-white/10 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Box 1: Chemical Protocol */}
          <div
            className={`p-5 rounded-2xl border ${
              isSafelight ? 'bg-[#150406] border-[#FF2A3A]/30' : 'bg-[#12141A] border-white/10'
            }`}
          >
            <span
              className={`text-[10px] uppercase tracking-widest font-bold block mb-2 ${
                isSafelight ? 'text-[#FF2A3A]' : 'text-[#FFC72C]'
              }`}
            >
              // TABLE SERVICE PROTOCOL
            </span>
            <p className="text-xs font-sans leading-relaxed opacity-70 font-light">
              All dishes are exposed fresh to order over open mesquite coals. Please notify your station captain of any allergy nuances or ingredient sensitivities.
            </p>
          </div>

          {/* Box 2: Operating Schedule */}
          {hours && hours.length > 0 && (
            <div
              className={`p-5 rounded-2xl border ${
                isSafelight ? 'bg-[#150406] border-[#FF2A3A]/30' : 'bg-[#12141A] border-white/10'
              }`}
            >
              <span
                className={`text-[10px] uppercase tracking-widest font-bold block mb-2 ${
                  isSafelight ? 'text-[#FF2A3A]' : 'text-[#FFC72C]'
                }`}
              >
                // DARKROOM SERVICE HOURS
              </span>
              <div className="space-y-1.5 text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="opacity-50">{h.days}</span>
                    <span className="font-bold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Box 3: Studio Location */}
          {location && (
            <div
              className={`p-5 rounded-2xl border ${
                isSafelight ? 'bg-[#150406] border-[#FF2A3A]/30' : 'bg-[#12141A] border-white/10'
              }`}
            >
              <span
                className={`text-[10px] uppercase tracking-widest font-bold block mb-2 ${
                  isSafelight ? 'text-[#FF2A3A]' : 'text-[#FFC72C]'
                }`}
              >
                // GALLERY STUDIO
              </span>
              <p className="text-xs font-sans leading-relaxed mb-2 opacity-70">
                {location}
              </p>
              <span className="text-[10px] block opacity-90">
                🎞 LIVE TABLE DINE-IN SERVICE
              </span>
            </div>
          )}
        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs opacity-50">
          <p>© {new Date().getFullYear()} {name}. 35MM CONTACT PROOF MENU.</p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white hover:text-black font-bold uppercase transition-all"
          >
            Return To Lightbox Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default DarkroomFooter;