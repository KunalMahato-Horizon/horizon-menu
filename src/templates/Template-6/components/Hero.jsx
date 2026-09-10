import React, { useState, useEffect } from 'react';

const Hero = ({ business }) => {
  const {
    name = "Menu",
    tagline = "",
    description = "",
    logo = null,
    coverImage = null,
  } = business || {};

  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background with more visible image */}
      {coverImage ? (
        <div className="absolute inset-0">
          <img 
            src={coverImage} 
            alt={name}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
          {/* Lighter overlay for more image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30"></div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950"></div>
      )}

      {/* Decorative elements - subtle */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[size:32px_32px]"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Content */}
          <div className={`text-left transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            {/* Logo with glow effect */}
            {logo && (
              <div 
                className="mb-6 md:mb-8 group cursor-pointer"
                style={{ transitionDelay: '100ms' }}
              >
                <div className="relative inline-block">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Decorative ring */}
                  <div className="absolute -inset-2 border border-dashed border-purple-500/30 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-700"></div>
                  
                  {typeof logo === 'string' && logo.length <= 4 ? (
                    <div 
                      className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center text-3xl md:text-4xl bg-purple-600/20 border-2 border-purple-500/30 rounded-2xl backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-purple-500/50"
                      aria-hidden="true"
                    >
                      {logo}
                    </div>
                  ) : (
                    <img 
                      src={logo} 
                      alt={`${name} logo`}
                      className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain rounded-2xl border-2 border-purple-500/30 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    />
                  )}
                </div>
              </div>
            )}

            {/* Decorative line */}
            <div 
              className="flex items-center gap-3 mb-4 md:mb-6"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-8 h-px bg-gradient-to-r from-purple-500 to-purple-400/50"></div>
              <span className="text-purple-400 text-sm">✦</span>
            </div>

            {/* Name with gradient */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-tight leading-tight"
              style={{ transitionDelay: '300ms' }}
            >
              <span className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
                {name}
              </span>
            </h1>

            {/* Tagline */}
            {tagline && (
              <p 
                className="text-lg md:text-xl lg:text-2xl text-purple-300 mb-3 md:mb-4 font-medium tracking-wide"
                style={{ transitionDelay: '400ms' }}
              >
                {tagline}
              </p>
            )}

            {/* Description */}
            {description && (
              <p 
                className="text-sm md:text-base lg:text-lg text-slate-300 max-w-md leading-relaxed mb-6 md:mb-8"
                style={{ transitionDelay: '500ms' }}
              >
                {description}
              </p>
            )}

            {/* Rating or additional info */}
            {business.rating && (
              <div 
                className="flex items-center gap-3"
                style={{ transitionDelay: '600ms' }}
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <span 
                      key={idx}
                      className={`text-lg md:text-xl ${
                        idx < Math.floor(business.rating) 
                          ? 'text-yellow-400' 
                          : 'text-slate-600'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-white font-semibold text-sm md:text-base">
                  {business.rating}
                </span>
                <span className="text-slate-400 text-sm">/ 5.0</span>
              </div>
            )}
          </div>

          {/* Right - Decorative with more visibility */}
          <div 
            className={`hidden md:block transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative flex items-center justify-center">
              {/* Concentric circles */}
              <div className="absolute w-72 h-72 lg:w-96 lg:h-96 border-2 border-purple-500/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute w-56 h-56 lg:w-72 lg:h-72 border border-purple-500/30 rounded-full"></div>
              <div className="absolute w-40 h-40 lg:w-48 lg:h-48 border-2 border-purple-500/40 rounded-full border-dashed animate-spin-slow"></div>
              
              {/* Center icon */}
              <div className="relative w-24 h-24 lg:w-32 lg:h-32 bg-purple-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-purple-500/30 shadow-2xl shadow-purple-600/20">
                <span className="text-5xl lg:text-6xl animate-float">
                  {logo ? (typeof logo === 'string' && logo.length <= 4 ? logo : '🍽️') : '🍽️'}
                </span>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute top-4 right-8 text-2xl opacity-50 animate-float-slow">✨</div>
              <div className="absolute bottom-8 left-4 text-xl opacity-40 animate-float-medium">⭐</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator - subtle */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-purple-400/30 hidden md:block">
        <div className="w-px h-12 bg-gradient-to-b from-purple-400/30 to-transparent"></div>
      </div>

      {/* Add to global CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </section>
  );
};

export default Hero;