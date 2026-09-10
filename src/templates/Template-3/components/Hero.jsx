import React from 'react';

const Hero = ({ business }) => {
  const {
    name = "Menu",
    description = "",
    coverImage = null,
    rating = null,
    businessType = "",
    isOpen = true,
  } = business || {};

  return (
    <section className="relative w-full bg-white border-b border-neutral-200/80 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-stretch md:min-h-[520px] lg:min-h-[580px]">
        
        {/* Visual Cover Section (Top on mobile, Right on desktop) */}
        <div className="order-1 md:order-2 flex-1 relative w-full aspect-[16/10] sm:aspect-[2/1] md:aspect-auto md:min-h-full overflow-hidden bg-neutral-900">
          {coverImage ? (
            <>
              <img
                src={coverImage}
                alt={name}
                className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-700 hover:scale-100"
              />
              {/* Responsive gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent md:bg-gradient-to-r md:from-black/40 md:via-transparent md:to-transparent" />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 flex items-center justify-center">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>
          )}

          {/* Floating Mobile Badge */}
          {businessType && (
            <div className="absolute top-4 left-4 md:hidden">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-neutral-900 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                {businessType}
              </span>
            </div>
          )}
        </div>

        {/* Content Section (Bottom on mobile, Left on desktop) */}
        <div className="order-2 md:order-1 flex-1 flex items-center bg-white px-5 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16">
          <div className="max-w-xl w-full mx-auto md:mx-0">
            
            {/* Desktop Category & Status Pills */}
            <div className="hidden md:flex items-center gap-2.5 mb-5">
              {businessType && (
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-neutral-900 text-white shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  {businessType}
                </span>
              )}

              {isOpen !== undefined && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-[1.1] mb-3 md:mb-4">
              {name}
            </h1>

            {/* Accent Divider Bar */}
            <div className="flex items-center gap-1.5 mb-4 md:mb-6">
              <span className="w-10 md:w-14 h-1 bg-neutral-900 rounded-full" />
              <span className="w-2 h-1 bg-amber-500 rounded-full" />
            </div>

            {/* Description */}
            {description && (
              <p className="text-sm sm:text-base md:text-lg text-neutral-600 mb-6 md:mb-8 font-normal leading-relaxed">
                {description}
              </p>
            )}

            {/* Rating Strip */}
            {rating && (
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-neutral-50 border border-neutral-200/70 shadow-xs">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <svg
                      key={idx}
                      className={`w-4 h-4 ${
                        idx < Math.floor(Number(rating))
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-neutral-300 fill-neutral-200'
                      }`}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-bold text-neutral-900">
                  {Number(rating).toFixed(1)}
                </span>
                <span className="text-xs text-neutral-400 font-normal">/ 5.0</span>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;