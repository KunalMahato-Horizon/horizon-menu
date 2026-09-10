import React from 'react';

const Hero = ({ business }) => {
  const {
    name = "Menu",
    tagline = "",
    coverImage = null,
    description = "",
  } = business || {};

  return (
    <section className="relative bg-black pt-16 md:pt-20 pb-12 md:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Huge Typography */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            Eat. Drink.<br />
            <span className="text-white/30">Repeat.</span>
          </h1>

          {/* Tagline */}
          {tagline && (
            <p className="text-sm md:text-base text-white/50 uppercase tracking-widest font-mono">
              {tagline}
            </p>
          )}
        </div>

        {/* Featured Food Image */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="rounded-lg overflow-hidden border-2 border-white/10">
            {coverImage ? (
              <img 
                src={coverImage} 
                alt={name}
                className="w-full h-[300px] md:h-[450px] object-cover"
              />
            ) : (
              <div className="w-full h-[300px] md:h-[450px] bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                <span className="text-8xl md:text-9xl">🍔</span>
              </div>
            )}
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* Bottom info */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="text-white text-lg md:text-2xl font-black uppercase tracking-tight">
                {name}
              </span>
              <span className="text-white/60 text-sm font-mono">
                Featured
              </span>
            </div>
          </div>

          {/* Geometric accent */}
          <div className="absolute -top-3 -right-3 w-16 h-16 bg-[#FF4D00] rounded-lg"></div>
          <div className="absolute -bottom-3 -left-3 w-12 h-12 border-2 border-white/20 rounded-lg"></div>
        </div>

        {/* Description */}
        {description && (
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm md:text-base text-white/40 leading-relaxed">
              {description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;