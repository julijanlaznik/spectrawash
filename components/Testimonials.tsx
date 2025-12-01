

import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="shrink-0">
             <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs">
                Hodnocení klientů
             </span>
             <h3 className="text-2xl font-heading font-bold text-brand-dark mt-2">
                Co o nás říkají
             </h3>
          </div>

          {/* Marquee effect */}
          <div className="flex-1 overflow-hidden relative mask-linear-fade">
             {/* 
               FIX: Added min-w-max to prevent wrapping on small screens.
               FIX: Duplicated 4 times to ensure seamless loop mathematics.
               FIX: Animate to -50% (moves 2 full sets), which is visually identical to start if we have 4 sets.
             */}
             <motion.div 
               className="flex gap-8 md:gap-12 min-w-max"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ duration: 40, ease: "linear", repeat: Infinity }}
             >
                {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, idx) => (
                  <div key={idx} className="w-80 shrink-0 bg-gray-50 p-6 border-l-2 border-brand-blue">
                     <div className="flex gap-1 mb-3 text-brand-blue">
                        {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                     </div>
                     <p className="text-sm text-gray-600 italic mb-4 leading-relaxed">"{item.text}"</p>
                     <div className="flex justify-between items-end">
                        <span className="font-bold text-brand-dark text-sm">{item.name}</span>
                        <span className="text-xs text-gray-400 uppercase tracking-wide">{item.car}</span>
                     </div>
                  </div>
                ))}
             </motion.div>
             {/* Gradient Masks */}
             <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
             <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
