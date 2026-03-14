import React from 'react';

export const Logo = ({ className = "h-12 w-auto" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 512 600" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Top Left Decorative Wedge */}
      <path 
        d="M100 40V160C100 160 140 80 260 40H100Z" 
        fill="#800080" 
      />
      
      {/* Main Purple Path - Upper Loop */}
      <path 
        d="M190 110H340C400 110 440 150 440 210C440 270 400 310 340 310H190" 
        stroke="#800080" 
        strokeWidth="36" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Pen Nib Icon */}
      <g transform="translate(210, 75) scale(1.2)">
        <path 
          d="M0 0V30L-10 50L10 50L0 30V0Z" 
          fill="black" 
        />
        <rect x="-1.5" y="0" width="3" height="15" fill="black" />
      </g>
      
      {/* Middle Connection and Gap for Dot */}
      <path 
        d="M190 310C130 310 110 340 110 380" 
        stroke="#800080" 
        strokeWidth="36" 
        strokeLinecap="round" 
      />
      
      {/* The Iconic Black Dot */}
      <circle cx="110" cy="430" r="20" fill="black" />
      
      {/* Bottom Section */}
      <path 
        d="M110 480C110 520 130 550 190 550H360" 
        stroke="#800080" 
        strokeWidth="36" 
        strokeLinecap="round" 
      />

      {/* Integrated Brand Text - Nestled in the middle-right area */}
      <text 
        x="165" 
        y="395" 
        fill="#7E7E7E" 
        style={{ 
          fontWeight: 700,
          fontSize: '52px',
          fontFamily: '"Space Grotesk", sans-serif',
          letterSpacing: '-0.06em'
        }}
      >
        namma
      </text>
      <text 
        x="165" 
        y="460" 
        fill="black" 
        style={{ 
          fontWeight: 800,
          fontSize: '68px',
          fontFamily: '"Space Grotesk", sans-serif',
          letterSpacing: '-0.06em'
        }}
      >
        socials
      </text>
    </svg>
  );
};

export const LogoWithText = ({ className = "h-12 w-auto" }: { className?: string }) => {
  // Since the logo now includes the text integrated into the design as per the image
  return <Logo className={className} />;
};
