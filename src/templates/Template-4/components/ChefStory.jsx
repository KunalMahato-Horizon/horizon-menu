import React from 'react';

const ChefStory = ({ story }) => {
  if (!story) return null;

  const {
    title = "Our Culinary Philosophy",
    subtitle = "Rooted in seasonal craft & timeless tradition",
    description = "Every recipe begins with a deep reverence for authentic flavors and pure ingredients. Sourced directly from local farmers and crafted with meticulous attention to detail, our kitchen celebrates the art of mindful dining.",
    image = null,
    chefName = "Chef Julian Vance",
    chefTitle = "Executive Head Chef",
    quote = "Food is an emotion meant to be experienced unhurried.",
  } = story;

  return (
    <section
      id="about"
      className="scroll-mt-24 py-16 sm:py-24 bg-white border-t border-stone-200/80 relative overflow-hidden"
      aria-labelledby="chef-story-heading"
    >
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-14 items-center">
          
          {/* Visual Column (Chef Portrait & Accent Frame) */}
          <div className="md:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md md:max-w-none">
              {/* Framed Image Container */}
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-stone-900 border border-stone-200/90 shadow-xl shadow-stone-950/5 group">
                {image ? (
                  <>
                    <img
                      src={image}
                      alt={chefName || title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white p-6 text-center">
                    <span className="text-6xl mb-3 select-none" aria-hidden="true">👨‍🍳</span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
                      Culinary Master
                    </span>
                  </div>
                )}

                {/* Floating Bottom Quote Overlay on Image */}
                {quote && (
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-md">
                    <p className="text-xs font-serif italic text-stone-800 leading-snug text-center">
                      "{quote}"
                    </p>
                  </div>
                )}
              </div>

              {/* Decorative Geometric Underlay Frame */}
              <div className="hidden sm:block absolute -bottom-3 -left-3 w-full h-full rounded-3xl border border-amber-500/30 -z-10 pointer-events-none" />
            </div>
          </div>

          {/* Story & Philosophy Column */}
          <div className="md:col-span-7 space-y-4 sm:space-y-6 text-left">
            
            {/* Header Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest bg-amber-50 text-amber-900 border border-amber-200/60">
                <span className="text-amber-500 font-bold">✦</span>
                <span>The Kitchen Story</span>
              </div>
            </div>

            {/* Section Heading */}
            <h2
              id="chef-story-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-tight"
            >
              {title}
            </h2>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-base sm:text-lg text-amber-900/80 font-serif italic leading-relaxed">
                "{subtitle}"
              </p>
            )}

            {/* Description Body */}
            {description && (
              <p className="text-xs sm:text-sm md:text-base text-stone-600 font-normal leading-relaxed">
                {description}
              </p>
            )}

            {/* Chef Profile Badge & Signoff */}
            {(chefName || chefTitle) && (
              <div className="pt-4 sm:pt-6 border-t border-stone-200/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-stone-900 text-amber-300 flex items-center justify-center font-serif font-bold text-base shadow-xs flex-shrink-0">
                    {chefName ? chefName.charAt(0) : "C"}
                  </div>

                  <div>
                    {chefName && (
                      <h3 className="font-serif font-bold text-stone-900 text-base sm:text-lg leading-tight">
                        {chefName}
                      </h3>
                    )}
                    {chefTitle && (
                      <p className="text-xs text-stone-500 font-medium tracking-wide uppercase mt-0.5">
                        {chefTitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Editorial Seal */}
                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-[11px] font-semibold text-stone-600">
                  <span>✦ Handcrafted Daily</span>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default ChefStory;