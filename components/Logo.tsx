import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col leading-none select-none ${className}`}>
      <span className="text-3xl font-heading font-black tracking-tighter uppercase">
        Spectra
      </span>
      <span className="text-[0.65rem] font-bold tracking-[0.4em] uppercase opacity-60 ml-[2px]">
        Wash
      </span>
    </div>
  );
};

export default Logo;