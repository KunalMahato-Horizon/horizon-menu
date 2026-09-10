import React from 'react';
import {
  MukutTrinetra,
  TrishulIcon,
  DhunachiIcon,
  DhakIcon,
  ShankhoIcon,
  AlponaBanner,
} from './DurgaIcons';

const EkchalaHero = ({ business }) => {
  const {
    name = 'MAHAMAYA BHOG',
    tagline = 'Dhaker aawaz, kashphool er shubhro choya, ebong thalir rajokiyo anondo',
    description = 'Cooked with pure mustard oil, fresh Gobindobhog rice, fragrant whole garam masala, and served in sacred brass Kansa platters. Celebrate Bengal’s greatest festival directly at your table.',
    rating = 4.9,
    businessType = 'Heritage Durga Puja Feast & Pandal Carte',
    location = 'Maha Pandal Courtyard, Sector 43',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-6 px-3 sm:px-6 lg:px-8 bg-[#120306] text-[#FFFDF8] font-serif overflow-hidden">
      {/* Pandal Golden Aarti Aura */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-[#DC2626]/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-24 right-6 w-80 h-80 bg-[#F59E0B]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-6">
        {/* Chalchitra Royal Arched Gate */}
        <div className="p-5 sm:p-8 rounded-3xl bg-gradient-to-b from-[#24080F] via-[#1C060C] to-[#140408] border-3 border-[#F59E0B] shadow-2xl shadow-black relative overflow-hidden">
          
          {/* Top Temple Trim */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#F59E0B]/30 pb-3 font-sans text-xs">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-[#DC2626] text-white font-black text-[10px] tracking-wider uppercase border border-[#F59E0B]/50">
                শারদোৎসব ১৪৩৩ • PUJO SPECIAL
              </span>
              <span className="text-[#FDE68A] font-serif font-bold hidden sm:inline">
                {businessType}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#F59E0B] font-bold">
              <span>★ {rating} PANDAL RATING</span>
              <span>•</span>
              <span className="text-[#FDE68A]">আনন্দময়ীর আগমন</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-5">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DC2626]/20 border border-[#F59E0B]/40 text-xs font-sans font-bold text-[#FDE68A]">
                <TrishulIcon className="w-4 h-4 text-[#F59E0B]" />
                <span className="uppercase tracking-wider">MAHASHAKTI RAJBARI CARTE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#FDE68A] leading-[1.02]">
                {name}
              </h1>

              {tagline && (
                <div className="relative border-l-4 border-[#DC2626] pl-3.5 py-1">
                  <p className="text-base sm:text-lg text-[#F59E0B] italic font-bold">
                    "{tagline}"
                  </p>
                  <span className="text-[10px] font-sans text-zinc-400 block mt-0.5">
                    (Sound of the drums, soft autumn touch of white kash flowers, and the joy of royal thalis)
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
                  onClick={scrollToMenu}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#991B1B] text-white font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#DC2626]/40 border border-[#F59E0B]/50 flex items-center gap-2"
                >
                  <span>Open Sacred Bhog Menu</span>
                  <span>↓</span>
                </button>
                {location && (
                  <div className="px-4 py-2.5 rounded-xl bg-black/40 border border-[#F59E0B]/30 text-xs text-[#FDE68A] font-bold">
                    📍 {location}
                  </div>
                )}
              </div>
            </div>

            {/* Right Chalchitra Idol Sanctum Box */}
            <div className="lg:col-span-5">
              <div className="relative p-5 rounded-2xl bg-gradient-to-b from-[#2E0A13] to-[#1A050B] border-2 border-[#F59E0B] shadow-2xl text-center space-y-4">
                
                {/* Glowing Crown & Visage */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#DC2626] to-[#7F1D1D] border-3 border-[#F59E0B] mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.3)]">
                  <MukutTrinetra className="w-16 h-16 text-white" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-sans font-black uppercase tracking-widest text-[#F59E0B] block">
                    MAHASTHAMI SPECIAL BANQUET
                  </span>
                  <h3 className="text-xl font-black text-white uppercase">
                    Kansa Thali Mahabhoj
                  </h3>
                  <p className="text-xs font-sans text-zinc-300 max-w-xs mx-auto">
                    Gobindobhog khichuri, labra, chhanar dalna, beguni, plastic chutney & nolen gurer payesh.
                  </p>
                </div>

                {/* 4 Sacred Elements Bar */}
                <div className="grid grid-cols-4 gap-2 pt-3 border-t border-[#F59E0B]/30 font-sans text-[10px]">
                  <div className="p-2 rounded-lg bg-black/40 border border-[#F59E0B]/20 text-[#FDE68A] flex flex-col items-center gap-1">
                    <DhunachiIcon className="w-5 h-5 text-[#F59E0B]" />
                    <span>Dhunuchi</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-[#F59E0B]/20 text-[#FDE68A] flex flex-col items-center gap-1">
                    <TrishulIcon className="w-5 h-5 text-[#F59E0B]" />
                    <span>Trishul</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-[#F59E0B]/20 text-[#FDE68A] flex flex-col items-center gap-1">
                    <DhakIcon className="w-5 h-5 text-[#F59E0B]" />
                    <span>Dhak</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-[#F59E0B]/20 text-[#FDE68A] flex flex-col items-center gap-1">
                    <ShankhoIcon className="w-5 h-5 text-[#F59E0B]" />
                    <span>Shankho</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Alpona Wave */}
          <div className="pt-6">
            <AlponaBanner className="w-full h-4 opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EkchalaHero;