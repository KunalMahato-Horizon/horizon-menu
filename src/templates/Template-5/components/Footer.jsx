import React from 'react';

const Footer = ({ business = {} }) => {
  const {
    name = "Menu",
    tagline = "Fresh & Artisanal",
    instagram = "",
    phone = "",
    reviewUrl = "",
  } = business;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative bg-neutral-950 text-neutral-300 border-t border-neutral-850 overflow-hidden"
    >
      {/* Subtle Ambient Emerald Flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none select-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 sm:pt-14 sm:pb-10">
        
        {/* Main Content Center Lockup */}
        <div className="flex flex-col items-center text-center max-w-md mx-auto mb-8 sm:mb-10">
          
          {/* In-Store Dine-in Signoff */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 mb-3.5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Thank You For Dining With Us</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-1">
            {name}
          </h2>

          {tagline && (
            <p className="text-xs sm:text-sm text-neutral-400 font-medium">
              {tagline}
            </p>
          )}

          {/* Social & In-Store Actions */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-5">
            {/* Instagram Link (Encourages Story tagging) */}
            {instagram && (
              <a
                href={`https://instagram.com/${instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-neutral-900 hover:bg-neutral-850 hover:text-white border border-neutral-800 text-xs font-semibold transition-all active:scale-95 text-neutral-300 shadow-xs"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Tag {instagram.startsWith('@') ? instagram : `@${instagram}`}</span>
              </a>
            )}

            {/* Direct Phone / Assistance */}
            {phone && (
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-neutral-900 hover:bg-neutral-850 hover:text-white border border-neutral-800 text-xs font-semibold transition-all active:scale-95 text-neutral-300 shadow-xs"
                aria-label="Call Store"
              >
                <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>Front Desk</span>
              </a>
            )}

            {/* Google Review / Feedback (Optional) */}
            {reviewUrl && (
              <a
                href={reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-neutral-900 hover:bg-neutral-850 hover:text-white border border-neutral-800 text-xs font-semibold transition-all active:scale-95 text-neutral-300 shadow-xs"
              >
                <span className="text-amber-400">★</span>
                <span>Leave a Review</span>
              </a>
            )}
          </div>

          {/* Quick Back-to-Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-emerald-400 transition-colors focus:outline-none"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
            <span>Back to top</span>
          </button>
        </div>

        {/* Bottom Attribution & Tech Credit */}
        <div className="pt-6 border-t border-neutral-850/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-neutral-500">
            Digital Dining Menu by <span className="font-bold text-neutral-300">Horizon</span>
          </p>

          <div className="inline-flex items-center gap-2 text-[11px] font-semibold px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 select-none">
            <span>Freshly Made</span>
            <span className="text-neutral-600">•</span>
            <span>Served to Table</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;