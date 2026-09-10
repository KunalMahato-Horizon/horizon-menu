import React from 'react';
import {
  GaneshaSilhouette,
  ModakIcon,
  DurvaGrassIcon,
  JaswandFlower,
  DholTashaIcon,
  ToranRunner,
} from './GaneshaIcons';

const GaneshotsavHero = ({ business }) => {
  const {
    name = 'SIDDHIVINAYAK BHOJ',
    tagline = 'Morya re bappa morya re, shahi modak, kothimbir vadi & puran poli thali',
    description = 'Prepared with pure Desi Ghee, fresh hand-grated coconut, jaggery, and fragrant cardamom. From authentic Ukadiche Modak to spicy Kolhapuri roasts and golden Puran Poli, celebrate Ganeshotsav with divine royal hospitality.',
    rating = 4.9,
    businessType = 'Ganeshotsav Mahaprasad & Festive Bhojnalaya',
    location = 'Utsav Pandal Mandap, Gate 44',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-6 px-3 sm:px-6 lg:px-8 bg-[#180407] text-[#FFFDF7] font-serif overflow-hidden">
      {/* Sanctum Brass Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[360px] bg-[#EA580C]/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-24 right-8 w-80 h-80 bg-[#F59E0B]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-6">
        {/* Ornate Temple Mandap Frame */}
        <div className="p-5 sm:p-8 rounded-3xl bg-gradient-to-b from-[#2E0B10] via-[#23080C] to-[#1A0508] border-3 border-[#F59E0B] shadow-2xl shadow-black relative overflow-hidden">
          
          {/* Top Marigold Garland Border */}
          <div className="absolute top-0 left-0 right-0">
            <ToranRunner className="w-full h-4.5 opacity-90" />
          </div>

          {/* Sub-header Proclamation */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#F59E0B]/30 pb-3 pt-2 font-sans text-xs">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-[#EA580C] text-white font-black text-[10px] tracking-wider uppercase border border-[#F59E0B]/60 shadow-xs">
                भाद्रपद चतुर्थी उत्सव • SHAHI NAIVEDYA
              </span>
              <span className="text-[#FDE68A] font-serif font-bold hidden sm:inline">
                {businessType}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#F59E0B] font-bold">
              <span>★ {rating} Pandal Purity</span>
              <span>•</span>
              <span className="text-[#FDE68A]">मंगलमूर्ती वरदविनायक</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-5">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EA580C]/20 border border-[#F59E0B]/40 text-xs font-sans font-bold text-[#FDE68A]">
                <JaswandFlower className="w-4 h-4 text-[#DC2626]" />
                <span className="uppercase tracking-wider">SATVIK NAIVEDYA & SHAHI THALI</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#FDE68A] leading-[1.02]">
                {name}
              </h1>

              {tagline && (
                <div className="relative border-l-4 border-[#EA580C] pl-3.5 py-1">
                  <p className="text-base sm:text-lg text-[#F59E0B] italic font-bold">
                    "{tagline}"
                  </p>
                  <span className="text-[10px] font-sans text-zinc-400 block mt-0.5">
                    (In the praise of Lord Ganesha, royal steamed modaks, crisp vadis & warm puran poli)
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
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#DC2626] text-white font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#EA580C]/40 border border-[#F59E0B] flex items-center gap-2"
                >
                  <span>Inspect Prasadam Menu</span>
                  <span>↓</span>
                </button>
                {location && (
                  <div className="px-4 py-2.5 rounded-xl bg-black/50 border border-[#F59E0B]/40 text-xs text-[#FDE68A] font-bold">
                    📍 {location}
                  </div>
                )}
              </div>
            </div>

            {/* Right Mandap Sanctum Showcase Box */}
            <div className="lg:col-span-5">
              <div className="relative p-5 rounded-2xl bg-gradient-to-b from-[#3B0E14] to-[#20070B] border-2 border-[#F59E0B] shadow-2xl text-center space-y-4">
                
                {/* Glowing Bappa Visage Plaque */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#EA580C] via-[#DC2626] to-[#7F1D1D] border-3 border-[#F59E0B] mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.4)]">
                  <GaneshaSilhouette className="w-16 h-16 text-white" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-sans font-black uppercase tracking-widest text-[#F59E0B] block">
                    MAHAPRASAD SPECIAL PLATTER
                  </span>
                  <h3 className="text-xl font-black text-white uppercase">
                    Panch-Pakwan Shahi Thali
                  </h3>
                  <p className="text-xs font-sans text-zinc-300 max-w-xs mx-auto">
                    Ukadiche Modak, Puran Poli drenched in desi ghee, Kothimbir Vadi, Aluchi Patal Bhaji & Amti.
                  </p>
                </div>

                {/* 4 Ganesha Elements Ribbon */}
                <div className="grid grid-cols-4 gap-2 pt-3 border-t border-[#F59E0B]/30 font-sans text-[10px]">
                  <div className="p-2 rounded-lg bg-black/50 border border-[#F59E0B]/25 text-[#FDE68A] flex flex-col items-center gap-1">
                    <ModakIcon className="w-5 h-5" />
                    <span>Ukadiche</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/50 border border-[#F59E0B]/25 text-[#FDE68A] flex flex-col items-center gap-1">
                    <DurvaGrassIcon className="w-5 h-5" />
                    <span>21 Durva</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/50 border border-[#F59E0B]/25 text-[#FDE68A] flex flex-col items-center gap-1">
                    <JaswandFlower className="w-5 h-5" />
                    <span>Jaswand</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/50 border border-[#F59E0B]/25 text-[#FDE68A] flex flex-col items-center gap-1">
                    <DholTashaIcon className="w-5 h-5" />
                    <span>Dhol Tasha</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Toran Frame */}
          <div className="pt-6">
            <ToranRunner className="w-full h-4 opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GaneshotsavHero;