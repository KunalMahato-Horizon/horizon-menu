import React from 'react';

// Royal Mukut (Crown) + Divine Trinetra Visage
export const MukutTrinetra = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ornate Gold Mukut (Crown) */}
    <path d="M60 4L70 24L88 14L82 32L102 30L88 44L60 36L32 44L18 30L38 32L32 14L50 24L60 4Z" fill="#F59E0B" stroke="#B45309" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="60" cy="18" r="3.5" fill="#DC2626" />
    <circle cx="45" cy="26" r="2.5" fill="#DC2626" />
    <circle cx="75" cy="26" r="2.5" fill="#DC2626" />
    <path d="M30 44C42 38 78 38 90 44V48C78 43 42 43 30 48V44Z" fill="#D97706" />

    {/* Central Third Eye (Urdhva Netra) */}
    <path d="M60 42C55 50 54 58 60 64C66 58 65 50 60 42Z" fill="#F59E0B" stroke="#B91C1C" strokeWidth="2" />
    <circle cx="60" cy="53" r="2.5" fill="#7F1D1D" />

    {/* Sacred Vermilion Chandan Bindi */}
    <circle cx="60" cy="69" r="4.5" fill="#DC2626" />

    {/* Left Divine Eye */}
    <path d="M22 66C34 54 50 56 55 66C46 76 30 75 22 66Z" fill="#FFFDF8" stroke="#7F1D1D" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M18 66C26 51 46 51 56 63" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" />
    <circle cx="39" cy="66" r="5" fill="#1C1917" />
    <circle cx="41" cy="64.5" r="1.5" fill="#FFFFFF" />

    {/* Right Divine Eye */}
    <path d="M98 66C86 54 70 56 65 66C74 76 90 75 98 66Z" fill="#FFFDF8" stroke="#7F1D1D" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M102 66C94 51 74 51 64 63" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" />
    <circle cx="81" cy="66" r="5" fill="#1C1917" />
    <circle cx="83" cy="64.5" r="1.5" fill="#FFFFFF" />

    {/* Traditional Nath (Gold Nose Ring) */}
    <circle cx="53" cy="80" r="9" stroke="#F59E0B" strokeWidth="2.5" fill="none" />
    <circle cx="44" cy="80" r="2.5" fill="#DC2626" />
  </svg>
);

// Sacred Trishul (Trident) Weapon
export const TrishulIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M24 3V45" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M24 3L20 11H28L24 3Z" fill="#DC2626" stroke="#F59E0B" strokeWidth="1.5" />
    <path d="M9 16C11 27 18 32 24 32C30 32 37 27 39 16" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M9 16L7 11L12 12L9 16Z" fill="#DC2626" stroke="#F59E0B" strokeWidth="1.5" />
    <path d="M39 16L37 11L42 12L39 16Z" fill="#DC2626" stroke="#F59E0B" strokeWidth="1.5" />
    <circle cx="24" cy="35" r="3" fill="#DC2626" stroke="#F59E0B" strokeWidth="1.5" />
  </svg>
);

// Smoking Terracotta Dhunachi (Aarti Incense)
export const DhunachiIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M19 5C17 9 23 11 20 15" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 3" />
    <path d="M28 3C26 7 32 9 29 14" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 17H41C39 27 32 31 29 32H19C16 31 9 27 7 17Z" fill="#B45309" stroke="#78350F" strokeWidth="2" />
    <ellipse cx="24" cy="17" rx="17" ry="3.5" fill="#F59E0B" />
    <path d="M21 32V42H27V32" fill="#92400E" stroke="#78350F" strokeWidth="2" />
    <path d="M15 42H33V45H15V42Z" fill="#78350F" />
    <path d="M35 23C42 23 44 31 38 34" stroke="#B45309" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

// Traditional Dhak Drum with Crane Feathers (Kash Phool/Palak)
export const DhakIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M13 5C15 11 14 15 12 19" stroke="#FFFDF8" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M17 3C19 10 17 15 14 20" stroke="#FFFDF8" strokeWidth="3" strokeLinecap="round" />
    <ellipse cx="29" cy="20" rx="9" ry="13" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
    <path d="M29 7C39 9 43 31 29 33C17 31 15 9 29 7Z" fill="#F59E0B" stroke="#991B1B" strokeWidth="1.5" />
    <path d="M23 9L35 31M35 9L23 31" stroke="#FFFDF8" strokeWidth="1.2" strokeOpacity="0.8" />
    <path d="M5 36L26 22" stroke="#451A03" strokeWidth="3" strokeLinecap="round" />
    <circle cx="26" cy="22" r="3" fill="#DC2626" />
  </svg>
);

// Sacred Conch (Shankha)
export const ShankhoIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 24C12 14 19 9 29 9C37 9 41 15 41 22C41 31 32 39 21 39C13 39 12 31 12 24Z" fill="#FFFDF8" stroke="#DC2626" strokeWidth="2" />
    <path d="M25 9C25 16 31 22 33 28C35 34 31 39 21 39C16 39 13 33 14 26C15 20 22 14 25 9Z" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
    <path d="M12 24L3 27L10 32" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Hand-Painted Sacred Alpona Runner
export const AlponaBanner = ({ className = "w-full h-5" }) => (
  <svg viewBox="0 0 600 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="repeat-x">
    <pattern id="alpona-flow" width="60" height="24" patternUnits="userSpaceOnUse">
      <circle cx="30" cy="12" r="4" fill="#DC2626" />
      <circle cx="30" cy="12" r="2" fill="#F59E0B" />
      <path d="M30 2C33 7 39 10 39 12C39 14 33 17 30 22C27 17 21 14 21 12C21 10 27 7 30 2Z" fill="#FFFDF8" stroke="#F59E0B" strokeWidth="1" />
      <circle cx="8" cy="12" r="2.5" fill="#F59E0B" />
      <circle cx="52" cy="12" r="2.5" fill="#F59E0B" />
      <path d="M0 12H18M42 12H60" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
    </pattern>
    <rect width="600" height="24" fill="url(#alpona-flow)" />
  </svg>
);