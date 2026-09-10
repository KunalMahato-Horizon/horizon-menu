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
    <footer id="info" className="bg-[#30382A] text-[#F7F1E5] mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Business Name - Serif */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-serif font-bold text-[#F7F1E5] tracking-wide">
            {name}
          </h2>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-[#526044]"></span>
            <span className="text-[#B85C38] text-sm">🫒</span>
            <span className="w-12 h-px bg-[#526044]"></span>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mb-8">
          <p className="text-sm text-[#D8C9AD] font-sans italic">
            Fresh food. Slow cooking. Good company.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Opening Hours */}
          {business.hours && business.hours.length > 0 && (
            <div className="text-center">
              <h3 className="text-xs font-sans font-bold uppercase tracking-wider text-[#526044] mb-3">
                Open Today
              </h3>
              <p className="text-sm text-[#D8C9AD]">
                {business.hours[0].time}
              </p>
            </div>
          )}

          {/* Location */}
          {location && (
            <div className="text-center">
              <h3 className="text-xs font-sans font-bold uppercase tracking-wider text-[#526044] mb-3">
                Find Us
              </h3>
              {mapsUrl ? (
                <a 
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#D8C9AD] hover:text-[#F7F1E5] transition-colors"
                >
                  📍 {location}
                </a>
              ) : (
                <p className="text-sm text-[#D8C9AD]">📍 {location}</p>
              )}
            </div>
          )}

          {/* Contact */}
          <div className="text-center">
            <h3 className="text-xs font-sans font-bold uppercase tracking-wider text-[#526044] mb-3">
              Contact
            </h3>
            <div className="space-y-1">
              {phone && (
                <a 
                  href={`tel:${phone}`}
                  className="block text-sm text-[#D8C9AD] hover:text-[#F7F1E5] transition-colors"
                >
                  ☎ {phone}
                </a>
              )}
              {instagram && (
                <a 
                  href={`https://instagram.com/${instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#D8C9AD] hover:text-[#F7F1E5] transition-colors"
                >
                  📷 {instagram}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-[#526044]/50 text-center">
          <p className="text-xs text-[#817A6B]">
            Digital Menu by <span className="font-semibold text-[#D8C9AD]">Horizon</span>
          </p>
          <p className="text-xs text-[#526044] mt-1">
            Scan • Browse • Enjoy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;