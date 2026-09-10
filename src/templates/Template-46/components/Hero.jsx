import React from 'react';
import { CinnamonOrange, WaxSeal, SnowCap } from './ChristmasArt';

const Hero = ({ business, onScrollToMenu }) => {
  const {
    name = 'THE YULETIDE MANOR',
    tagline = 'Spruce wood embers, slow-mulled winter wine, honeyed turkey roasts & spiced plum pudding',
    description = 'Welcome inside from the winter frost. Gather around our alpine banquet table where heritage roasts, warm cinnamon pastries, and herb-buttered winter vegetables are prepared fresh in rhythm with the hearth.',
    rating = 4.9,
    businessType = 'Victorian Holiday Feast & Winter Chalet',
    location = 'Alpine Pine Ridge, Lodge 46',
  } = business || {};

  return (
    <section className="relative pt-6 sm:pt-8 pb-4 px-3 sm:px-6 lg:px-8 text-[#FFFBEB] font-serif">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Chalet Roof Card with Simulated Snow on Top */}
        <div className="relative">
          {/* Top Snow Drift Overlay */}
          <div className="absolute -top-3 left-4 right-4 z-10 pointer-events-none">
            <SnowCap className="w-full h-4 sm:h-5 text-white filter drop-shadow-md" />
          </div>

          <div className="p-6 sm:p-9 rounded-3xl bg-gradient-to-br from-[#12382A] via-[#0E2C20] to-[#081C14] border-3 border-[#D4AF37]/45 shadow-2xl relative overflow-hidden">
            {/* Ambient Hearth Light Cones */}
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-[#F59E0B]/12 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#991B1B]/15 blur-[120px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Narrative */}
              <div className="lg:col-span-8 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#184634] border border-[#D4AF37]/40 text-xs font-sans text-[#FDE68A]">
                  <CinnamonOrange className="w-4 h-4" />
                  <span className="uppercase tracking-wider font-black">YULETIDE FEAST MANIFEST</span>
                  <span className="text-zinc-400">•</span>
                  <span className="text-zinc-200 font-medium">{businessType}</span>
                  {rating && <span className="text-amber-300 font-black">★ {rating}</span>}
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#FFFBEB] leading-[1.03]">
                  {name}
                </h1>

                {tagline && (
                  <div className="relative border-l-4 border-[#B91C1C] pl-3.5 py-1">
                    <p className="text-base sm:text-lg text-[#FDE68A] italic font-semibold">
                      "{tagline}"
                    </p>
                    <span className="text-[10px] font-sans text-emerald-200 block mt-0.5">
                      (Warm spiced ciders, hearth-crusted meats & festive confections)
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
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#C28B38] text-[#081C14] font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#D4AF37]/20 border border-amber-200"
                  >
                    Explore Holiday Banquet ↓
                  </button>
                  {location && (
                    <div className="px-4 py-2.5 rounded-2xl bg-[#091D15] border border-[#D4AF37]/30 text-xs text-[#FDE68A] font-medium">
                      📍 {location}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Showcase: Roast Basket Box */}
              <div className="lg:col-span-4">
                <div className="p-5 rounded-2xl bg-[#081E15] border-2 border-[#D4AF37]/40 text-center space-y-3 shadow-inner relative">
                  <div className="absolute -top-3.5 right-4">
                    <WaxSeal className="w-8 h-8" />
                  </div>

                  <div className="w-14 h-14 mx-auto rounded-2xl bg-[#143B2C] flex items-center justify-center border-2 border-[#D4AF37]/50 shadow-md">
                    <CinnamonOrange className="w-8 h-8" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-sans font-black uppercase tracking-widest text-[#D4AF37] block">
                      GRAND CHRISTMAS ROAST
                    </span>
                    <h3 className="text-lg font-black text-white uppercase">
                      Glazed Heritage Turkey
                    </h3>
                    <p className="text-xs font-sans text-zinc-300 leading-relaxed">
                      Wild thyme, butter-whipped potatoes, cranberry port jus & braised Brussels sprouts.
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-sans text-amber-200">
                    <span>Hearth-Plated Warm</span>
                    <span className="font-bold text-[#FDE68A]">CHEF'S PICK</span>
                  </div>
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