import React from 'react';

const BusinessInfo = ({ business }) => {
  const {
    location = "",
    phone = "",
    mapsUrl = "",
    hours = [],
  } = business || {};

  return (
    <section id="info" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
              Visit Us
            </span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
        </div>

        {/* Info Content */}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {/* Location */}
            {location && (
              <div className="flex items-center gap-3 justify-center">
                <span className="text-lg" aria-hidden="true">📍</span>
                <p className="text-base text-gray-700">
                  {location}
                </p>
              </div>
            )}

            {/* Hours - Compact display */}
            {hours && hours.length > 0 && (
              <div className="flex items-center gap-3 justify-center">
                <span className="text-lg" aria-hidden="true">🕐</span>
                <p className="text-base text-gray-700">
                  {hours[0].days} · {hours[0].time}
                </p>
              </div>
            )}

            {/* Phone */}
            {phone && (
              <div className="flex items-center gap-3 justify-center">
                <span className="text-lg" aria-hidden="true">☎</span>
                <a 
                  href={`tel:${phone}`}
                  className="text-base text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {phone}
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;