import React from 'react';

const Footer = ({ business }) => {
  const {
    name = 'Nocturne Atelier',
    tagline = '',
    location = '',
    instagram = '',
    mapsUrl = '#',
    hours = [],
  } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="relative bg-[#0A0B10] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Venue & Map */}
          {location && (
            <div className="p-6 rounded-2xl bg-[#12141C] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E2B855] block mb-2">
                  Location
                </span>
                <p className="text-sm text-white/80 leading-relaxed mb-4">{location}</p>
              </div>
              {mapsUrl && (
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#E2B855] hover:underline"
                >
                  <span>Directions on Google Maps</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          )}

          {/* Card 2: Operating Hours */}
          {hours && hours.length > 0 && (
            <div className="p-6 rounded-2xl bg-[#12141C] border border-white/[0.08]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E2B855] block mb-2">
                Service Schedule
              </span>
              <div className="space-y-2 mt-3">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-xs font-mono">
                    <span className="text-white/50">{h.days}</span>
                    <span className="text-white font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 3: Social & Connect */}
          <div className="p-6 rounded-2xl bg-[#12141C] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E2B855] block mb-2">
                Follow Atelier
              </span>
              <p className="text-xs text-white/50 mb-4">
                Seasonal menu drops, cellar selections & events.
              </p>
            </div>
            {instagram && (
              <a
                href={`https://instagram.com/${instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-mono text-white text-center transition-all"
              >
                {instagram}
              </a>
            )}
          </div>
        </div>

        {/* Back to Top & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06] text-xs font-mono text-white/40">
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;