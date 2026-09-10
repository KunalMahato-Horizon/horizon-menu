import React from 'react';
import { MatteClayDiya } from './DiwaliVisuals';

const Hero = ({ business, onScrollToMenu }) => {
  const {
    name = 'DEEPOTSAV // SANDHYA',
    tagline = 'Clay diya embers, pure ghee sweets & celebratory midnight roasts',
    description = 'An ode to authentic Diwali gatherings. Each preparation is composed with cold-pressed oils, slow-steeped saffron, hand-crushed whole spices, and served in unhurried festive courses.',
    rating = 4.9,
    businessType = 'Diwali Festive Feast & Mithai Bar',
    location = 'Courtyard Terrace, Table 45',
  } = business || {};

  return (
    <section className="relative pt-22 sm:pt-26 pb-4 px-4 sm:px-6 lg:px-8 text-[#F4EBD9] font-serif">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#1D1523]/80 border border-[#D4A373]/25 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E07A5F]/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#281D2D] border border-[#D4A373]/30 text-xs font-sans text-[#D4A373]">
                <MatteClayDiya className="w-4 h-4" />
                <span className="uppercase tracking-wider font-semibold">Festive Carte</span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-300 font-normal">{businessType}</span>
                {rating && <span className="text-amber-400 font-bold">★ {rating}</span>}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#F4EBD9] leading-[1.05]">
                {name}
              </h1>

              {tagline && (
                <p className="text-base sm:text-lg text-[#D4A373] italic font-normal">
                  "{tagline}"
                </p>
              )}

              {description && (
                <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed max-w-xl font-light">
                  {description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-2 font-sans">
                <button
                  onClick={onScrollToMenu}
                  className="px-6 py-3 rounded-xl bg-[#D4A373] text-[#1A1320] font-bold text-xs uppercase tracking-wider hover:bg-[#E2B170] active:scale-95 transition-all shadow-md"
                >
                  Explore The Offerings ↓
                </button>
                {location && (
                  <div className="px-4 py-2.5 rounded-xl bg-[#261B2B] border border-[#D4A373]/20 text-xs text-[#D4A373]">
                    📍 {location}
                  </div>
                )}
              </div>
            </div>

            {/* Right Ambient Thali Feature */}
            <div className="lg:col-span-4">
              <div className="p-4 rounded-2xl bg-[#160F1A] border border-[#D4A373]/30 text-center space-y-2.5">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#261B2B] flex items-center justify-center border border-[#D4A373]/40">
                  <MatteClayDiya className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-[#F4EBD9] uppercase tracking-wide">
                  Deepavali Mahathali
                </h3>
                <p className="text-xs font-sans text-zinc-400 leading-relaxed">
                  Slow-steeped Zafrani Biryani, Dal Makhani finished with white butter, and artisanal Pista Kulfi.
                </p>
                <div className="pt-2 border-t border-white/10 text-[11px] font-sans text-[#D4A373]">
                  Prepared Fresh For In-House Dining
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