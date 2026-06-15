import React from 'react';

interface LogoProps {
  className?: string; // Tailwind heights, etc.
  scrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-12 md:h-16', scrolled = true }) => {
  return (
    <svg 
      viewBox="0 0 500 500" 
      className={`${className} transition-all duration-500`}
      xmlns="http://www.w3.org/2000/svg"
      id="akn-logo-svg"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="shieldBorder" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" />     {/* Bright Sky Blue */}
          <stop offset="40%" stopColor="#0284c7" />    {/* Medium Ocean Blue */}
          <stop offset="100%" stopColor="#0f172a" />   {/* Deep Navy/Slate */}
        </linearGradient>

        <linearGradient id="shieldFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#f0f9ff" />    {/* Soft clean light blue highlight */}
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>

        <linearGradient id="swooshGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
        </linearGradient>

        <linearGradient id="swooshGradLeft" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
        </linearGradient>

        {/* Shadow Filters for realistic depth exactly like the uploaded image */}
        <filter id="shieldShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0f172a" floodOpacity="0.2" />
        </filter>

        <filter id="textDropShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* 1. Outer curved swooshes / wings (Surrounding aesthetic lines) */}
      <g strokeWidth="4" fill="none">
        {/* Outer Swoop Left 1 */}
        <path 
          d="M 100 140 C 40 200 40 300 135 390" 
          stroke="url(#swooshGradLeft)" 
          strokeWidth="3" 
        />
        {/* Outer Swoop Left 2 */}
        <path 
          d="M 85 150 C 60 220 75 320 150 410" 
          stroke="url(#swooshGradLeft)" 
          strokeWidth="1.5" 
          opacity="0.6"
        />
        {/* Outer Swoop Left 3 */}
        <path 
          d="M 120 120 C 60 180 50 250 110 340" 
          stroke="url(#swooshGradLeft)" 
          strokeWidth="2.5" 
          opacity="0.8"
        />

        {/* Outer Swoop Right 1 */}
        <path 
          d="M 400 140 C 460 200 460 300 365 390" 
          stroke="url(#swooshGrad)" 
          strokeWidth="3" 
        />
        {/* Outer Swoop Right 2 */}
        <path 
          d="M 415 150 C 440 220 425 320 350 410" 
          stroke="url(#swooshGrad)" 
          strokeWidth="1.5" 
          opacity="0.6"
        />
        {/* Outer Swoop Right 3 */}
        <path 
          d="M 380 120 C 440 180 450 250 390 340" 
          stroke="url(#swooshGrad)" 
          strokeWidth="2.5" 
          opacity="0.7"
        />
      </g>

      {/* 2. Left and Right accent semi-circles/wings (seen behind the shield in light blue) */}
      <path d="M 105 180 C 70 200 110 240 125 220" fill="#0ea5e9" opacity="0.4" />
      <path d="M 395 180 C 430 200 390 240 375 220" fill="#0ea5e9" opacity="0.4" />

      {/* 3. The Central Shield */}
      <path 
        d="M 250 125 
           C 310 128, 360 155, 375 168 
           C 375 168, 381 210, 365 275 
           C 345 355, 250 395, 250 395 
           C 250 395, 155 355, 135 275 
           C 119 210, 125 168, 125 168 
           C 140 155, 190 128, 250 125 Z" 
        fill="url(#shieldFill)" 
        stroke="url(#shieldBorder)" 
        strokeWidth="10" 
        filter="url(#shieldShadow)"
        strokeLinejoin="round"
      />

      {/* Inner subtle decorative highlight shield line */}
      <path 
        d="M 250 140
           C 295 142, 345 168, 358 178
           C 358 178, 363 210, 350 265
           C 332 335, 250 375, 250 375
           C 250 375, 168 335, 150 265
           C 137 210, 142 178, 142 178
           C 155 168, 205 142, 250 140 Z"
        fill="none" 
        stroke="#0ea5e9" 
        strokeWidth="2" 
        opacity="0.3"
      />

      {/* 4. Brand Text Group */}
      <g filter="url(#textDropShadow)" className="select-none">
        {/* AKN Title */}
        <text 
          x="250" 
          y="256" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="900" 
          fontSize="82" 
          fill="#061f4d" 
          textAnchor="middle"
          letterSpacing="-1"
        >
          AKN
        </text>

        {/* Elegant horizontal separator line */}
        <line 
          x1="165" 
          y1="268" 
          x2="335" 
          y2="268" 
          stroke="#000000" 
          strokeWidth="3.5" 
          opacity="0.85" 
        />

        {/* SERVICES Subtitle */}
        <text 
          x="253" 
          y="302" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="800" 
          fontSize="24" 
          fill="#061f4d" 
          textAnchor="middle"
          letterSpacing="5"
        >
          SERVICES
        </text>
      </g>
    </svg>
  );
};

export default Logo;
