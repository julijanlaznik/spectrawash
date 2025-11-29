import React from 'react';
import { PARTNERS } from '../constants';
import { motion } from 'framer-motion';
import { Circle, Square, Minus } from 'lucide-react';

const Partners: React.FC = () => {
  // Duplicate partners to ensure seamless loop
  const duplicatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];
  
  // Shapes to intersperse between text
  const shapes = [
    <Circle size={10} className="fill-white/50 stroke-none" />,
    <Square size={10} className="stroke-white/50 fill-none rotate-45" />,
    <Minus size={20} className="text-white/50" />,
    <Circle size={10} className="stroke-white/50 fill-none" />
  ];

  return (
    <section className="py-12 bg-brand-blue text-white relative overflow-hidden">
      {/* Background Atmosphere - CLEAN, NO NOISE */}
      <div className="absolute inset-0 bg-brand-blue">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"></div>
      </div>

      <div className="w-full relative z-10">
        <div className="flex items-center gap-12 mb-8 container mx-auto px-6">
            <span className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px]">
                Spolupracujeme s lídry v oboru
            </span>
            <div className="h-[1px] flex-grow bg-white/10"></div>
        </div>

        {/* Infinite Marquee Container - Full Width, No Box */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-blue to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-blue to-transparent z-10"></div>
          
          <motion.div 
            className="flex items-center min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`}
                className="flex items-center gap-16 px-8 group transition-all duration-500 opacity-60 hover:opacity-100"
              >
                {/* Geometric Separator */}
                <div className="opacity-40">
                    {shapes[index % shapes.length]}
                </div>

                {/* Typography Styling Logic */}
                <span className={`text-3xl md:text-5xl tracking-tighter uppercase whitespace-nowrap transition-colors duration-300 ${
                    index % 3 === 0 ? 'font-black font-heading text-white' : 
                    index % 3 === 1 ? 'font-light font-sans text-white/80' : 
                    'font-bold font-heading text-transparent stroke-white stroke-2'
                }`}
                style={index % 3 === 2 ? { WebkitTextStroke: '1px rgba(255,255,255,0.6)' } : {}}
                >
                    {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;