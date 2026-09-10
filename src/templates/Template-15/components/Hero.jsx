import React from 'react';

const Hero = ({ business }) => {
  const {
    name = 'SUPER DUPER',
    tagline = 'Fresh bakes, smashed patties & loud flavors',
    description = 'Handmade daily from scratch. Real butter, wild fermented buns, and small-batch sauces served straight to your table.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Diner & Craft Bakehouse',
    location = 'Sector 4, Block C',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-12 px-4 sm:px-6 bg-[#FBF8F1] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Box */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#A7F3D0] border-2 border-[#18181B] text-[#18181B] text-xs font-mono font-bold uppercase shadow-[2px_2px_0px_0px_#18181B]">
              <span>{businessType}</span>
              {rating && <span>• ★ {rating}</span>}
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-[#18181B] tracking-tight uppercase leading-[0.95]">
              {name}
            </h1>

            {tagline && (
              <p className="text-base sm:text-xl text-[#FF5733] font-black uppercase tracking-tight">
                "{tagline}"
              </p>
            )}

            {description && (
              <p className="text-xs sm:text-sm text-[#3F3F46] leading-relaxed max-w-xl font-medium">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToMenu}
                className="px-6 py-3 rounded-xl bg-[#FFE500] text-[#18181B] font-black text-xs uppercase tracking-wider border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#18181B] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#18181B] transition-all"
              >
                Browse Menu ↓
              </button>
              {location && (
                <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border-2 border-[#18181B] text-xs font-mono font-bold text-[#18181B] shadow-[3px_3px_0px_0px_#18181B]">
                  <span>📍 {location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Featured Showcase Frame */}
          <div className="lg:col-span-5">
            <div className="relative p-3 rounded-3xl bg-white border-3 border-[#18181B] shadow-[6px_6px_0px_0px_#18181B]">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border-2 border-[#18181B] bg-[#E4E4E7]">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#FFE500]">
                    <span className="text-7xl mb-2">🔥</span>
                    <span className="text-[11px] font-mono tracking-widest text-[#18181B] font-black uppercase">
                      Fresh Off The Grill
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-[#FF5733] border-2 border-[#18181B] text-white font-mono font-black text-[10px] uppercase shadow-[2px_2px_0px_0px_#18181B]">
                  HOT & READY
                </div>
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white border-2 border-[#18181B] flex items-center justify-between shadow-[3px_3px_0px_0px_#18181B]">
                  <span className="text-xs font-black uppercase text-[#18181B]">
                    Table Plated Order
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#FF5733]">
                    100% Scratch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;