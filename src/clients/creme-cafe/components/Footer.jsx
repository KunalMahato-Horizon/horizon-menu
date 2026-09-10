import React from 'react';

const Footer = ({ business }) => {
  const { name = "BeCafe", disclaimers = [], location = "", timings = "" } = business || {};

  return (
    <footer className="bg-[#2C1A11] text-[#EFE3CF] pt-10 pb-8 px-4 border-t-4 border-[#F2B828] text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Footers / Disclaimers */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans font-bold uppercase tracking-wider text-[#F2B828]">
          {disclaimers.map((text, i) => (
            <span key={i} className="flex items-center gap-2">
              <span>•</span>
              <span>{text}</span>
            </span>
          ))}
        </div>

        <div className="text-xs font-sans text-stone-400 space-y-1">
          <p>{location} | Open {timings}</p>
          <p>© {new Date().getFullYear()} {name} • Bharat Petroleum Corporation Limited</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;