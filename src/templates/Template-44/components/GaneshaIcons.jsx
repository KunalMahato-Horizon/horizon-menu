import React from 'react';

// Sacred Ganesha Silhouette (Trunk, Tusk, Modak & Tilak)
export const GaneshaSilhouette = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Forehead Crescent & Red Tilak */}
    <path d="M50 8C43 14 38 22 38 30C44 26 56 26 62 30C62 22 57 14 50 8Z" fill="#F59E0B" />
    <path d="M48 18H52V34H48V18Z" fill="#DC2626" />
    <circle cx="50" cy="38" r="3.5" fill="#DC2626" />

    {/* Graceful Curved Trunk (Vakratunda) */}
    <path
      d="M50 28C38 34 36 50 44 64C48 72 54 78 60 78C67 78 72 73 70 66C68 60 61 60 58 64C56 68 59 71 61 71"
      stroke="#F59E0B"
      strokeWidth="5.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Ekadanta (Broken Left Tusk) & Right Tusk */}
    <path d="M40 52L34 54L38 58L40 52Z" fill="#FFFDF7" stroke="#B45309" strokeWidth="1" />
    <path d="M60 52L65 53L62 57L60 52Z" fill="#FFFDF7" stroke="#B45309" strokeWidth="1" />

    {/* Gentle Divine Eye */}
    <path d="M37 36C40 33 46 33 48 37C45 39 40 39 37 36Z" fill="#451A03" />
    <path d="M63 36C60 33 54 33 52 37C55 39 60 39 63 36Z" fill="#451A03" />

    {/* Golden Modak on the Palm (Lower Right) */}
    <path d="M68 64C68 56 78 50 78 50C78 50 88 56 88 64C88 70 82 74 78 74C74 74 68 70 68 64Z" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" />
  </svg>
);

// Classical Fluted Ukadiche Modak
export const ModakIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Steamed Rice Flour Body with Saffron Strand */}
    <path
      d="M24 4C24 4 11 16 10 29C9 38 16 43 24 43C32 43 39 38 38 29C37 16 24 4 24 4Z"
      fill="#FFFBEB"
      stroke="#D97706"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Pleats (Kalyan) */}
    <path d="M17 26C18 34 22 41 22 41" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M31 26C30 34 26 41 26 41" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 16V42" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
    {/* Kesar (Saffron Drop) on Tip */}
    <circle cx="24" cy="7" r="2.5" fill="#DC2626" />
  </svg>
);

// Puneri Dhol & Tasha Drums with Lejim
export const DholTashaIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Dhol Barrel */}
    <ellipse cx="22" cy="24" rx="10" ry="14" fill="#B45309" stroke="#78350F" strokeWidth="2" />
    <path d="M22 10C32 12 36 34 22 38C12 34 10 12 22 10Z" fill="#F59E0B" stroke="#78350F" strokeWidth="1.5" />
    <path d="M16 12L28 36M28 12L16 36" stroke="#FFFDF7" strokeWidth="1.2" strokeOpacity="0.8" />
    {/* Tasha Bowl (High Pitched Drum) */}
    <path d="M34 18C41 18 44 24 41 28L35 29L32 23L34 18Z" fill="#DC2626" stroke="#78350F" strokeWidth="1.5" />
    {/* Beating Sticks (Tiprus) */}
    <path d="M8 38L24 24" stroke="#451A03" strokeWidth="3" strokeLinecap="round" />
    <circle cx="24" cy="24" r="2" fill="#DC2626" />
  </svg>
);

// Sacred 21 Durva Grass Blades
export const DurvaGrassIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M24 44V22" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M24 22C16 18 10 10 12 4C18 7 22 14 24 22Z" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
    <path d="M24 22C32 18 38 10 36 4C30 7 26 14 24 22Z" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
    <path d="M24 22C21 14 23 7 24 3C25 7 27 14 24 22Z" fill="#4ADE80" stroke="#15803D" strokeWidth="1.5" />
    <path d="M24 32C17 28 12 22 14 16C19 18 22 24 24 32Z" fill="#22C55E" stroke="#15803D" strokeWidth="1.2" />
    <path d="M24 32C31 28 36 22 34 16C29 18 26 24 24 32Z" fill="#22C55E" stroke="#15803D" strokeWidth="1.2" />
  </svg>
);

// Red Jaswand (Hibiscus) Flower
export const JaswandFlower = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* 5 Petals of Red Hibiscus */}
    <circle cx="24" cy="14" r="8" fill="#DC2626" />
    <circle cx="33" cy="21" r="8" fill="#DC2626" />
    <circle cx="29" cy="32" r="8" fill="#B91C1C" />
    <circle cx="19" cy="32" r="8" fill="#B91C1C" />
    <circle cx="15" cy="21" r="8" fill="#DC2626" />
    <circle cx="24" cy="24" r="5" fill="#7F1D1D" />
    {/* Central Stamen with Golden Pollen */}
    <path d="M24 24C28 17 33 13 37 8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
    <circle cx="37" cy="8" r="2" fill="#FDE68A" />
    <circle cx="34" cy="11" r="1.5" fill="#FDE68A" />
  </svg>
);

// Auspicious Marigold & Mango Leaf Toran Ribbon
export const ToranRunner = ({ className = "w-full h-5" }) => (
  <svg viewBox="0 0 600 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="repeat-x">
    <pattern id="toran-tile" width="60" height="24" patternUnits="userSpaceOnUse">
      {/* Mango Leaves */}
      <path d="M0 0C6 8 10 18 15 22C20 18 24 8 30 0H0Z" fill="#15803D" opacity="0.85" />
      <path d="M30 0C36 8 40 18 45 22C50 18 54 8 60 0H30Z" fill="#15803D" opacity="0.85" />
      {/* Orange & Yellow Marigold Blooms (Genda Phool) */}
      <circle cx="15" cy="7" r="4.5" fill="#EA580C" />
      <circle cx="15" cy="7" r="2.5" fill="#F59E0B" />
      <circle cx="45" cy="7" r="4.5" fill="#F59E0B" />
      <circle cx="45" cy="7" r="2.5" fill="#EA580C" />
      {/* Hanging Gold Bead Line */}
      <path d="M0 2H60" stroke="#B45309" strokeWidth="1.5" />
    </pattern>
    <rect width="600" height="24" fill="url(#toran-tile)" />
  </svg>
);