
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* 
        Fixed SVG: Separated S and W.
        S top bar shortened (H55) to avoid overlapping W (starts at 65).
      */}
      <svg 
        viewBox="0 0 110 34" 
        className="h-8 w-auto fill-current text-brand-blue"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The 'S' Shape - Standard geometric S, top bar ends before W */}
        <path d="M0 8 C0 3 4 0 10 0 H55 V9 H12 V11 H48 C55 11 60 15 60 22 V26 C60 31 56 34 50 34 H0 V25 H48 V23 H10 C4 23 0 19 0 12 V8 Z" />
        
        {/* The 'W' Shape - Distinct, sharp W starting with a gap from S */}
        <path d="M65 0 H79 L84 18 L89 0 H103 L92 34 H78 L73 16 L68 34 H54 L65 0 Z" />
      </svg>
      
      {/* Typography Logo */}
      <div className="flex flex-col leading-none select-none">
        <span className="text-2xl font-heading font-black tracking-tighter uppercase text-current">
          SPECTRA
        </span>
        <span className="text-[0.6rem] font-bold tracking-[0.45em] uppercase opacity-60 ml-[2px] text-current">
          WASH
        </span>
      </div>
    </div>
  );
};

export default Logo;
