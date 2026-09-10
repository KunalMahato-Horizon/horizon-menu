import React from 'react';

// Pillowy Snow Cap (Rests directly on top of cards and section roofs)
export const SnowCap = ({ className = "w-full h-4" }) => (
  <svg viewBox="0 0 400 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="none">
    <path
      d="M0 16C10 7 24 5 36 9C48 13 62 4 76 7C90 10 102 3 118 6C134 9 148 4 162 8C176 12 190 3 204 6C218 9 232 4 246 8C260 12 274 3 288 7C302 11 316 4 330 8C344 12 358 3 372 7C384 11 394 6 400 16H0Z"
      fill="#F8FAFC"
    />
    <path
      d="M0 16C10 9 24 7 36 11C48 15 62 6 76 9C90 12 102 5 118 8C134 11 148 6 162 10C176 14 190 5 204 8C218 11 232 6 246 10C260 14 274 5 288 9C302 13 316 6 330 10C344 14 358 5 372 9C384 13 394 8 400 16"
      stroke="#E2E8F0"
      strokeWidth="1.5"
    />
  </svg>
);

// Crimson Wax Seal Stamp
export const WaxSeal = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Crinkled Wax Edge */}
    <path
      d="M20 2C24 1.5 27 4 31 5C35 6 38 9 39 13C40 17 38 21 39 25C40 29 37 33 34 35C31 37 27 36 24 38C21 40 17 39 14 38C11 37 7 38 5 35C3 32 4 28 3 24C2 20 1 16 3 13C5 10 7 7 11 5C15 3 17 2.5 20 2Z"
      fill="#991B1B"
      stroke="#7F1D1D"
      strokeWidth="1.5"
    />
    <circle cx="20" cy="20" r="13" fill="#B91C1C" />
    {/* Inner Gold Snowflake Emboss */}
    <path d="M20 11V29M11 20H29M14 14L26 26M14 26L26 14" stroke="#FDE68A" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="20" cy="20" r="2" fill="#F59E0B" />
  </svg>
);

// Pine Christmas Wreath with Red Velvet Bow
export const PineWreath = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Pine Ring */}
    <circle cx="24" cy="24" r="15" stroke="#166534" strokeWidth="6" strokeDasharray="3 4" />
    <circle cx="24" cy="24" r="15" stroke="#14532D" strokeWidth="4" />
    {/* Berries */}
    <circle cx="15" cy="18" r="2.5" fill="#DC2626" />
    <circle cx="33" cy="18" r="2.5" fill="#DC2626" />
    <circle cx="20" cy="34" r="2.5" fill="#DC2626" />
    <circle cx="28" cy="34" r="2.5" fill="#DC2626" />
    {/* Red Ribbon Bow on Top */}
    <path d="M18 10C21 14 24 15 24 15C24 15 27 14 30 10C33 6 28 5 24 9C20 5 15 6 18 10Z" fill="#B91C1C" />
    <path d="M22 14L17 22M26 14L31 22" stroke="#B91C1C" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Cinnamon Sticks with Dried Orange Slice
export const CinnamonOrange = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cinnamon Stick Cross */}
    <rect x="6" y="22" width="28" height="5" rx="2" transform="rotate(-25 6 22)" fill="#78350F" stroke="#451A03" strokeWidth="1" />
    <rect x="8" y="12" width="28" height="5" rx="2" transform="rotate(25 8 12)" fill="#92400E" stroke="#451A03" strokeWidth="1" />
    {/* Dried Orange Wheel */}
    <circle cx="20" cy="20" r="10" fill="#D97706" stroke="#B45309" strokeWidth="1.5" />
    <circle cx="20" cy="20" r="7.5" stroke="#FEF3C7" strokeWidth="1" strokeDasharray="2 2" fill="#F59E0B" />
    {/* Segments */}
    <line x1="20" y1="13" x2="20" y2="27" stroke="#FEF3C7" strokeWidth="1" />
    <line x1="13" y1="20" x2="27" y2="20" stroke="#FEF3C7" strokeWidth="1" />
    {/* Star Anise Center */}
    <circle cx="20" cy="20" r="2" fill="#451A03" />
  </svg>
);

// Vintage Hurricane Lantern with Glowing Candle
export const HearthLantern = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Hanging Loop */}
    <circle cx="18" cy="5" r="3" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
    {/* Brass Roof */}
    <path d="M10 11L18 7L26 11H10Z" fill="#D4AF37" stroke="#A17D1A" strokeWidth="1" />
    {/* Glass Chamber */}
    <rect x="11" y="11" width="14" height="22" rx="1" fill="#FEF3C7" fillOpacity="0.25" stroke="#D4AF37" strokeWidth="1.5" />
    {/* Candle Base & Flame */}
    <rect x="15" y="24" width="6" height="8" fill="#FFFDF8" rx="1" />
    <ellipse cx="18" cy="19" rx="3.5" ry="5" fill="#F59E0B" className="animate-pulse" />
    <circle cx="18" cy="19" r="1.5" fill="#FFFBEB" />
    {/* Bottom Base */}
    <rect x="8" y="33" width="20" height="4" rx="1" fill="#D4AF37" stroke="#A17D1A" strokeWidth="1" />
  </svg>
);