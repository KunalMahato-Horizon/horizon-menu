import React from 'react';

// Exact 24-Spoke Sacred Ashoka Chakra
export const AshokaChakra = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer Double Rim */}
    <circle cx="50" cy="50" r="46" stroke="#38BDF8" strokeWidth="3" />
    <circle cx="50" cy="50" r="41" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="1 3" />
    
    {/* 24 Mathematical Spokes */}
    {Array.from({ length: 24 }).map((_, i) => (
      <line
        key={i}
        x1="50"
        y1="50"
        x2="50"
        y2="9"
        stroke="#38BDF8"
        strokeWidth="1.5"
        strokeLinecap="round"
        transform={`rotate(${i * 15} 50 50)`}
      />
    ))}
    
    {/* 24 Outer Beads */}
    {Array.from({ length: 24 }).map((_, i) => {
      const angle = (i * 15 * Math.PI) / 180;
      const x = 50 + 43.5 * Math.sin(angle);
      const y = 50 - 43.5 * Math.cos(angle);
      return <circle key={i} cx={x} cy={y} r="1.2" fill="#38BDF8" />;
    })}

    {/* Center Hub */}
    <circle cx="50" cy="50" r="7" fill="#070E1E" stroke="#38BDF8" strokeWidth="2" />
    <circle cx="50" cy="50" r="3" fill="#38BDF8" />
  </svg>
);

// Diplomatic Tiranga Silk Piping
export const TirangaRibbon = ({ className = "w-full h-2" }) => (
  <div className={`flex flex-col ${className}`}>
    <div className="h-1/3 bg-[#FF671F]" />
    <div className="h-1/3 bg-[#FDFBF7]" />
    <div className="h-1/3 bg-[#046A38]" />
  </div>
);

// Ashokan Lion Capital Silhouette Emblem
export const SarnathCapital = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 4C14 2 26 2 28 4C30 8 30 16 28 20C26 22 14 22 12 20C10 16 10 8 12 4Z" fill="#D4AF37" />
    <path d="M7 10C8 7 12 6 12 10C12 14 10 18 8 18C6 18 6 13 7 10Z" fill="#B45309" />
    <path d="M33 10C32 7 28 6 28 10C28 14 30 18 32 18C34 18 34 13 33 10Z" fill="#B45309" />
    <rect x="10" y="22" width="20" height="4" rx="1" fill="#D4AF37" />
    <circle cx="20" cy="24" r="1.5" fill="#070E1E" />
    <path d="M8 26L14 34H26L32 26H8Z" fill="#B45309" />
    <rect x="6" y="34" width="28" height="3" rx="1.5" fill="#D4AF37" />
  </svg>
);

// Constitution of India (Nandalal Bose Geometric Lotus Border Runner)
export const ConstitutionFloralRunner = ({ className = "w-full h-4" }) => (
  <svg viewBox="0 0 600 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="repeat-x">
    <pattern id="preamble-border" width="50" height="20" patternUnits="userSpaceOnUse">
      <path d="M25 2C28 6 34 8 34 10C34 12 28 14 25 18C22 14 16 12 16 10C16 8 22 6 25 2Z" fill="#D4AF37" fillOpacity="0.8" />
      <circle cx="25" cy="10" r="2.5" fill="#FF671F" />
      <circle cx="8" cy="10" r="1.5" fill="#046A38" />
      <circle cx="42" cy="10" r="1.5" fill="#046A38" />
      <line x1="0" y1="10" x2="16" y2="10" stroke="#D4AF37" strokeWidth="1" />
      <line x1="34" y1="10" x2="50" y2="10" stroke="#D4AF37" strokeWidth="1" />
    </pattern>
    <rect width="600" height="20" fill="url(#preamble-border)" />
  </svg>
);