import React from 'react';

const Footer = ({ business }) => {
  const {
    name = "Menu",
    location = "",
    phone = "",
    instagram = "",
    mapsUrl = "",
  } = business || {};

  return (
    <footer id="info" className="bg-black text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Business Name - Huge typography */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            {name}
          </h2>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-1 bg-[#FF4D00]"></span>
            <span className="w-2 h-2 bg-white/30 rotate-45"></span>
            <span className="w-12 h-1 bg-[#FF4D00]"></span>
          </div>
        </div>

        {/* Info Grid - Bold minimal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Location */}
          {location && (
            <div className="text-center">
              <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">
                Find Us
              </h3>
              {mapsUrl ? (
                <a 
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white/80 hover:text-[#FF4D00] transition-colors"
                >
                  {location}
                </a>
              ) : (
                <p className="text-sm font-bold text-white/80">{location}</p>
              )}
            </div>
          )}

          {/* Opening Hours */}
          {business.hours && business.hours.length > 0 && (
            <div className="text-center">
              <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">
                Open Today
              </h3>
              <p className="text-sm font-bold text-white/80">
                {business.hours[0].time}
              </p>
            </div>
          )}

          {/* Contact */}
          <div className="text-center">
            <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">
              Contact
            </h3>
            <div className="space-y-2">
              {phone && (
                <a 
                  href={`tel:${phone}`}
                  className="block text-sm font-bold text-white/80 hover:text-[#FF4D00] transition-colors"
                >
                  {phone}
                </a>
              )}
              {instagram && (
                <a 
                  href={`https://instagram.com/${instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-bold text-white/80 hover:text-[#FF4D00] transition-colors"
                >
                  {instagram}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        {phone && (
          <div className="text-center mb-10">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF4D00] text-white text-sm font-black uppercase tracking-wider rounded-lg hover:bg-[#E64500] transition-colors"
            >
              <span>Call Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        )}

        {/* Bottom Section */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            Digital Menu by <span className="font-bold text-white/60">Horizon</span>
          </p>
          <p className="text-xs text-white/20 mt-1">
            Scan • Browse • Enjoy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;