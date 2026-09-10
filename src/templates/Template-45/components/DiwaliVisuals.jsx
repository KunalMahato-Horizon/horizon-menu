import React from 'react';

// Draped Hanging Fairy Lights
export const HangingFairyLights = ({ className = "w-full h-10" }) => (
  <svg viewBox="0 0 1200 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="none">
    <path
      d="M0 4 Q100 24 200 4 Q300 24 400 4 Q500 24 600 4 Q700 24 800 4 Q900 24 1000 4 Q1100 24 1200 4"
      stroke="#524338"
      strokeWidth="1.5"
      fill="none"
    />
    {[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100].map((x, idx) => {
      const isDip = idx % 2 === 0;
      const cy = isDip ? 24 : 4;
      return (
        <g key={x}>
          <rect x={x - 2} y={cy} width="4" height="4" fill="#3D312A" rx="1" />
          <circle cx={x} cy={cy + 7} r="7" fill="#F59E0B" fillOpacity="0.25" />
          <ellipse cx={x} cy={cy + 7} rx="3" ry="4.5" fill={idx % 3 === 0 ? "#FDE68A" : "#FBBF24"} />
          <circle cx={x} cy={cy + 6} r="1" fill="#FFFDF0" />
        </g>
      );
    })}
  </svg>
);

// Earthen Terracotta Diya
export const MatteClayDiya = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="20" cy="12" rx="7" ry="9" fill="#E07A5F" fillOpacity="0.25" />
    <path
      d="M8 20C10 28 30 28 32 20C28 22 12 22 8 20Z"
      fill="#A25035"
      stroke="#7A3922"
      strokeWidth="1.5"
    />
    <ellipse cx="20" cy="20" rx="12" ry="2.5" fill="#C06243" />
    <path
      d="M20 6C18 10 16.5 13 16.5 15.5C16.5 17.5 18 19 20 19C22 19 23.5 17.5 23.5 15.5C23.5 13 22 10 20 6Z"
      fill="#F59E0B"
    />
    <path
      d="M20 11C19.2 13 18.5 14.5 18.5 16C18.5 17 19.2 17.8 20 17.8C20.8 17.8 21.5 17 21.5 16C21.5 14.5 20.8 13 20 11Z"
      fill="#FFFDF0"
    />
  </svg>
);

// Ambient Rangoli Mandala Background Watermark
export const RangoliBackdrop = ({ className = "w-96 h-96" }) => (
  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="200" cy="200" r="180" stroke="#D4A373" strokeWidth="1" strokeDasharray="3 4" opacity="0.35" />
    <circle cx="200" cy="200" r="140" stroke="#D4A373" strokeWidth="1.2" opacity="0.25" />
    <circle cx="200" cy="200" r="100" stroke="#D4A373" strokeWidth="1" strokeDasharray="2 3" opacity="0.35" />
    <circle cx="200" cy="200" r="50" stroke="#D4A373" strokeWidth="1" opacity="0.4" />
    <circle cx="200" cy="200" r="12" fill="#D4A373" opacity="0.25" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 200 200)`}>
        <path
          d="M200 100C190 135 185 155 200 170C215 155 210 135 200 100Z"
          fill="#D4A373"
          fillOpacity="0.06"
          stroke="#D4A373"
          strokeWidth="1"
          opacity="0.45"
        />
        <circle cx="200" cy="80" r="3.5" fill="#D4A373" opacity="0.35" />
      </g>
    ))}
  </svg>
);

// Card Corner Motif
export const CardCornerRangoli = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2 2H14C14 8 8 14 2 14V2Z" fill="#D4A373" fillOpacity="0.1" />
    <path d="M2 2C6 6 6 12 2 16" stroke="#D4A373" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    <path d="M2 2C6 6 12 6 16 2" stroke="#D4A373" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    <circle cx="5" cy="5" r="1.5" fill="#D4A373" opacity="0.6" />
  </svg>
);