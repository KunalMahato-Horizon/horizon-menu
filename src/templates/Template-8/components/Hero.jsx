import React from 'react';

const Hero = ({ business }) => {
  const {
    name = "Menu",
    tagline = "",
    logo = null,
    coverImage = null,
    description = "",
  } = business || {};

  return (
    <section className="relative bg-[#F7F1E5] pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Centered Header */}
        <div className="text-center mb-8 md:mb-10">
          {/* Logo */}
          {logo && (
            <span className="text-4xl md:text-5xl mb-3 inline-block" aria-hidden="true">
              {logo}
            </span>
          )}

          {/* Business Name - Serif */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#30382A] tracking-wide mb-2">
            {name}
          </h1>

          {/* Tagline - Sans */}
          {tagline && (
            <p className="text-base md:text-lg text-[#526044] font-sans mb-3">
              {tagline}
            </p>
          )}

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-[#D8C9AD]"></span>
            <span className="text-[#B85C38] text-sm">🫒</span>
            <span className="w-12 h-px bg-[#D8C9AD]"></span>
          </div>
        </div>

        {/* Large Editorial Image with Organic Shape */}
        <div className="relative max-w-3xl mx-auto">
          <div className="relative rounded-t-[2rem] rounded-b-[3rem] overflow-hidden border-4 border-[#FFFDF8] shadow-lg">
            {coverImage ? (
              <img 
                src={coverImage} 
                alt={name}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            ) : (
              <div className="w-full h-[300px] md:h-[400px] bg-gradient-to-br from-[#D8C9AD] to-[#F7F1E5] flex items-center justify-center">
                <span className="text-6xl md:text-7xl">🍝</span>
              </div>
            )}
            
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#30382A]/40 to-transparent"></div>
          </div>

          {/* Decorative organic accent */}
          <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#B85C38]/20 rounded-full blur-xl"></div>
          <div className="absolute -top-3 -left-3 w-16 h-16 bg-[#526044]/20 rounded-full blur-lg"></div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-8">
          <p className="text-sm md:text-base text-[#817A6B] font-sans tracking-wide">
            Fresh • Local • Handmade
          </p>
        </div>

        {/* Description */}
        {description && (
          <div className="text-center mt-4 max-w-xl mx-auto">
            <p className="text-sm text-[#817A6B] leading-relaxed">
              {description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;