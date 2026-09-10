import React, { useState, useEffect } from 'react';

const Gallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  if (!images || images.length === 0) return null;

  return (
    <section
      id="gallery"
      className="scroll-mt-24 py-16 sm:py-24 bg-stone-100/70 border-t border-stone-200/80 relative overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-10 sm:w-14 h-px bg-gradient-to-r from-transparent to-amber-500/70" />
            <span className="text-amber-600 text-xs select-none">✦</span>
            <span className="w-10 sm:w-14 h-px bg-gradient-to-l from-transparent to-amber-500/70" />
          </div>

          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-900/80 mb-2 block">
            Atmosphere & Craft
          </span>

          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight"
          >
            A Glimpse Into Our Space
          </h2>

          <p className="text-xs sm:text-sm text-stone-500 font-normal leading-relaxed mt-2.5 max-w-md mx-auto">
            From artisanal kitchen preparations to intimate dining corners, experience the craft behind our ambience.
          </p>
        </div>

        {/* Responsive Bento Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 auto-rows-[160px] sm:auto-rows-[200px]">
          {images.map((image, idx) => {
            const isLarge = idx === 0 || idx === 5;
            const isWide = idx === 3;

            return (
              <div
                key={idx}
                onClick={() => setSelectedImage(image)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(image)}
                aria-label={`View photo ${idx + 1}`}
                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-stone-900 border border-stone-200/80 shadow-xs hover:shadow-xl hover:shadow-stone-950/10 cursor-pointer transition-all duration-300 ${
                  isLarge
                    ? 'col-span-2 row-span-2'
                    : isWide
                    ? 'col-span-2 row-span-1'
                    : 'col-span-1 row-span-1'
                }`}
              >
                <img
                  src={image}
                  alt={`Atmosphere shot ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Ambient Dark Hover Veil */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5 sm:p-5">
                  <span className="text-[11px] sm:text-xs font-semibold text-white/90 tracking-wide font-serif">
                    Explore View
                  </span>

                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center text-xs shadow-sm">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightweight Image Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Close Trigger Button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close preview"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Image Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-stone-900"
          >
            <img
              src={selectedImage}
              alt="Expanded café view"
              className="w-full h-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;