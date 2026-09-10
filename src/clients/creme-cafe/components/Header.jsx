import React from 'react';

const Header = ({ business }) => {
  const {
    name = "BeCafe",
    tagline = "BREWING JOURNEYS BY BHARAT PETROLEUM",
    stars = "★★★",
  } = business || {};

  return (
    <header className="bg-[#2C1A11] text-white border-b-2 border-[#F2B828] pt-7 pb-6 px-4 shadow-xl text-center relative z-30">
      {/* Halftone Top Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#F2B82815_1px,transparent_1px)] [background-size:12px_12px] opacity-40 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center">
        {/* Emblem Badge */}
        <div className="inline-flex items-center justify-center px-6 py-2 rounded-2xl bg-[#3E2211] border-2 border-[#F2B828] shadow-[0_4px_20px_rgba(242,184,40,0.25)] mb-3">
          <span className="text-[#F2B828] text-lg mr-2 font-serif font-black">☕</span>
          <h1 className="text-2xl sm:text-3xl font-serif font-black tracking-wider text-white uppercase">
            {name}
          </h1>
        </div>

        {/* 3 Stars */}
        <div className="text-[#F2B828] text-xs sm:text-sm tracking-[0.3em] font-black mb-1.5 drop-shadow">
          {stars}
        </div>

        {/* Bharat Petroleum Tagline */}
        <p className="text-[11px] sm:text-xs font-sans font-extrabold uppercase tracking-[0.22em] text-[#EFE3CF]/90">
          {tagline}
        </p>
      </div>
    </header>
  );
};

export default Header;