
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Star, Quote, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  // Duplicate testimonials to create a seamless infinite loop
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-gray-50 overflow-hidden border-t border-gray-200">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN - STATS & HEADER (Static Anchor) */}
          <div className="w-full lg:w-1/3 shrink-0 relative z-20">
             <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
               Hodnocení klientů
             </span>
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6 leading-tight">
               Důvěra <br/> je základ.
             </h2>
             
             {/* Stats Box */}
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 inline-block w-full">
                <div className="flex items-center gap-4 mb-4 border-b border-gray-100 pb-4">
                   <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue">
                      <Star size={24} fill="currentColor" />
                   </div>
                   <div>
                      <div className="text-3xl font-bold text-brand-dark leading-none">5.0</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">z 5.0 Hvězdiček</div>
                   </div>
                </div>
                <div className="flex items-center justify-between">
                   <div className="flex -space-x-2">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-500">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full bg-brand-dark border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                        11
                      </div>
                   </div>
                   <a 
                     href="https://www.google.com/maps/place/Spectra+Wash/@50.1604905,14.3680251,612m/data=!3m1!1e3!4m8!3m7!1s0x470bc169266c69d7:0xd51032c3e7f78c0f!8m2!3d50.1604871!4d14.3706054!9m1!1b1!16s%2Fg%2F11t5njqnd9?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-xs font-bold text-brand-blue hover:text-brand-dark transition-colors flex items-center gap-1"
                   >
                     Google Recenze <ArrowRight size={12} />
                   </a>
                </div>
             </div>
          </div>

          {/* RIGHT COLUMN - INFINITE MARQUEE LOOP */}
          <div className="w-full lg:w-2/3 relative overflow-hidden">
             
             {/* Fade Gradients (Masks) for smooth edges */}
             <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
             <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

             {/* The Moving Track */}
             <motion.div 
               className="flex gap-6 w-max"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ 
                 duration: 40, 
                 ease: "linear", 
                 repeat: Infinity 
               }}
             >
                {duplicatedTestimonials.map((t, i) => (
                   <div 
                     key={i}
                     className="w-[300px] md:w-[380px] bg-white p-6 md:p-8 rounded-xl shadow-[0_5px_15px_-5px_rgba(0,0,0,0.03)] border border-gray-100 relative group"
                   >
                      <Quote className="text-brand-blue/10 absolute top-6 right-6 group-hover:text-brand-blue/20 transition-colors" size={40} />
                      
                      <div className="mb-6 relative z-10">
                         <div className="flex text-yellow-400 mb-3 gap-0.5">
                            {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                         </div>
                         <p className="text-gray-600 text-sm leading-relaxed font-medium">
                            "{t.text}"
                         </p>
                      </div>
                      
                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
                         <div className="w-8 h-8 bg-brand-light rounded-full flex items-center justify-center font-bold text-brand-dark text-xs">
                            {t.name.charAt(0)}
                         </div>
                         <div>
                            <h4 className="text-xs font-bold text-brand-dark uppercase">{t.name}</h4>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">{t.car}</p>
                         </div>
                      </div>
                   </div>
                ))}
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
