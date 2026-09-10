import React from 'react';

const CompactFooter = ({ business }) => {
  const { name = 'ATELIER LINEAR', location = '', hours = [] } = business || {};

  return (
    <footer className="mt-16 pt-8 pb-24 border-t border-white/10 text-white/50 font-mono text-xs max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-bold text-white block mb-0.5">{name}</span>
          <p className="text-[11px] text-white/40">{location} • Sequential Course Dining</p>
        </div>

        {hours.length > 0 && (
          <div className="text-[11px] text-right text-white/40">
            <span>{hours[0].days}: {hours[0].time}</span>
          </div>
        )}

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[10px] text-[#FF5722] font-bold hover:underline"
        >
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  );
};

export default CompactFooter;