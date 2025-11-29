import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  // Sharp edges: rounded-none
  // CHANGED: 'group' -> 'group/btn' to isolate hover scope
  const baseStyles = "relative overflow-hidden px-10 py-5 font-heading font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 group/btn rounded-none";
  
  const variants = {
    // Primary now uses dark text because brand-blue is light turquoise
    primary: "bg-brand-blue text-brand-dark hover:text-white",
    secondary: "bg-white text-brand-dark hover:text-white border border-transparent",
    outline: "border border-white/40 text-white hover:text-brand-dark hover:border-white",
    dark: "bg-brand-dark text-white hover:text-white" // New Dark variant
  };

  const width = fullWidth ? 'w-full' : 'w-auto';

  // Hover background slide colors
  const hoverBg = {
    primary: "bg-brand-dark",
    secondary: "bg-brand-dark",
    outline: "bg-white",
    dark: "bg-brand-blue" // Slides to blue on hover
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${width} ${className}`}
      {...props}
    >
      {/* CHANGED: group-hover -> group-hover/btn */}
      <span className={`absolute inset-0 w-full h-full transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-in-out ${hoverBg[variant]}`}></span>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};

export default Button;