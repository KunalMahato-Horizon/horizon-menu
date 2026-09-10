import React from 'react';
import { AshokaChakra, SarnathCapital, ConstitutionFloralRunner } from './RepublicIcons';

const Hero = ({ business, onScrollToMenu }) => {
  const {
    name = 'GANTANTRA // 1950',
    tagline = 'Ek Bharat Shreshtha Bharat — Regional state table dockets, saffron embers & royal darbar feasts',
    description = 'In commemoration of the Sovereign Republic. A curated ceremonial degustation traversing the frontier roasts of the North, coastal Coromandel curries, fragrant Deccan biryanis, and artisanal saffron mithais plated upon regal brass chargers.',
    rating = 4.9,
    businessType = 'Sovereign State Banquet & Diplomatic Dining',
    location = 'Kartavya Path Pavilion, Suite 47',
  } = business || {};

  return (
    <section className="relative pt-5 pb-4 px-3 sm:px-6 lg:px-8 text-[#FDFBF7] font-serif">
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="p-6 sm:p-9 rounded-3xl bg-gradient-to-br from-[#0D1B3A] via-[#09142C] to-[#050C1C] border-2 border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
          
          {/* Ambient State Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF671F]/10 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#046A38]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#112248] border border-[#38BDF8]/40 text-xs font-sans text-[#38BDF8]">
                <SarnathCapital className="w-4 h-4" />
                <span className="uppercase tracking-wider font-black">SATYAMEVA JAYATE</span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-200 font-medium">{businessType}</span>
                {rating && <span className="text-[#FF671F] font-black">★ {rating}</span>}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#FDFBF7] leading-[1.02]">
                {name}
              </h1>

              {tagline && (
                <div className="relative border-l-4 border-[#FF671F] pl-3.5 py-1">
                  <p className="text-base sm:text-lg text-[#FDE68A] italic font-semibold">
                    "{tagline}"
                  </p>
                  <span className="text-[10px] font-sans text-zinc-400 block mt-0.5">
                    (Honoring the founding of the Republic through the culinary heritage of our provinces)
                  </span>
                </div>
              )}

              {description && (
                <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed max-w-xl font-light">
                  {description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-2 font-sans">
                <button
                  onClick={onScrollToMenu}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF671F] to-[#D9530F] text-white font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#FF671F]/30 flex items-center gap-2"
                >
                  <span>Inspect State Banquet Menu</span>
                  <span>↓</span>
                </button>
                {location && (
                  <div className="px-4 py-2.5 rounded-xl bg-[#070F22] border border-[#D4AF37]/30 text-xs text-[#FDFBF7] font-medium">
                    📍 {location}
                  </div>
                )}
              </div>
            </div>

            {/* Right Showcase: Presidential Thali Seal */}
            <div className="lg:col-span-4">
              <div className="p-5 rounded-2xl bg-[#070F22] border border-[#38BDF8]/30 text-center space-y-3 shadow-inner relative">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#0E1E42] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg">
                  <AshokaChakra className="w-10 h-10 text-[#38BDF8]" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-sans font-black uppercase tracking-widest text-[#FF671F] block">
                    PRESIDENTIAL BANQUET THALI
                  </span>
                  <h3 className="text-lg font-black text-white uppercase">
                    Shahi Darbar Mahathali
                  </h3>
                  <p className="text-xs font-sans text-zinc-300 leading-relaxed">
                    Awadhi Zafrani Biryani, Kashmiri Rogan Josh, Dal Raisina simmered 24 hours, Malabar Parotta & 24K Gold Kaju Katli.
                  </p>
                </div>

                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-sans text-zinc-400">
                  <span>Diplomatic Seating</span>
                  <span className="font-bold text-[#38BDF8]">PROTOCOL CLEARED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Constitution Border */}
          <div className="pt-6 opacity-60">
            <ConstitutionFloralRunner className="w-full h-3.5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;