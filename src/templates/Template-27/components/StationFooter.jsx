import React from 'react';

const StationFooter = ({ business }) => {
  const { name = 'STUDIO RAW', hours = [], location = '' } = business || {};

  return (
    <footer className="mt-12 pt-8 border-t border-[#1A1A1A]/10 text-xs font-mono text-[#1A1A1A]/60">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <span className="font-bold text-[#1A1A1A] block mb-1">SERVICE STATIONS</span>
          <p className="leading-relaxed">{location || 'Kitchen Counter & Main Dining Room'}</p>
        </div>
        <div>
          <span className="font-bold text-[#1A1A1A] block mb-1">TIMING MATRIX</span>
          {hours.length > 0 ? (
            hours.map((h, idx) => (
              <div key={idx} className="flex justify-between">
                <span>{h.days}:</span>
                <span className="font-bold text-[#1A1A1A]">{h.time}</span>
              </div>
            ))
          ) : (
            <p>12:00 PM – 11:30 PM</p>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-[#1A1A1A]/10 text-[10px]">
        <span>© {new Date().getFullYear()} {name} • DUAL-STAGE TABLE SERVICE</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[#1A1A1A] font-bold hover:underline"
        >
          TOP ↑
        </button>
      </div>
    </footer>
  );
};

export default StationFooter;