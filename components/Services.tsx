import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax for side image
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="services" ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Blue Block */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left: Interactive List */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="h-[1px] w-12 bg-brand-blue"></span>
                <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs">Dokonalost</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-brand-dark leading-tight">
                Služby <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-dark">na míru</span>
              </h2>
            </motion.div>

            <div className="space-y-0 border-t border-gray-200">
              {SERVICES.map((service, index) => (
                <div 
                  key={service.id}
                  onMouseEnter={() => setActiveService(index)}
                  className="group relative cursor-pointer border-b border-gray-200"
                >
                  {/* PADDING ADJUSTMENT: Increased pl-8 for better mobile spacing from the left line */}
                  <div className={`flex items-start py-8 transition-all duration-500 ${activeService === index ? 'pl-8 lg:pl-10' : 'pl-0'}`}>
                    
                    {/* Number Indicator (Desktop List - Hidden when active image shows it) */}
                    <span className={`hidden lg:block text-xs font-bold font-heading mr-8 mt-2 transition-colors duration-300 ${activeService === index ? 'text-brand-blue' : 'text-gray-300'}`}>
                      0{index + 1}
                    </span>

                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className={`text-2xl md:text-3xl font-heading font-bold transition-colors duration-300 uppercase tracking-wide ${
                          activeService === index ? 'text-brand-dark' : 'text-gray-400'
                        }`}>
                          {service.title}
                        </h3>
                        {/* Mobile Arrow */}
                        <ArrowRight className={`lg:hidden transform transition-all duration-300 ${
                          activeService === index ? 'text-brand-blue rotate-90' : 'text-gray-300'
                        }`} />
                      </div>
                      
                      <div className={`overflow-hidden transition-all duration-500 ease-[0.16,1,0.3,1] ${
                        activeService === index ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                      }`}>
                        
                        {/* MOBILE IMAGE INTEGRATION */}
                        <div className="lg:hidden w-full h-56 mb-6 relative overflow-hidden">
                           <img 
                              src={service.image} 
                              alt={service.title}
                              className="w-full h-full object-cover grayscale contrast-125"
                           />
                           <div className="absolute inset-0 border border-white/10"></div>
                           {/* Mobile Number Overlay - Blue Transparent - Bottom Left */}
                           <div className="absolute bottom-0 left-0 p-2">
                             <span className="text-brand-blue/50 font-bold font-heading text-7xl leading-none block mix-blend-multiply">
                               0{index + 1}
                             </span>
                           </div>
                        </div>

                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
                          {service.description}
                        </p>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {service.details.map((detail, i) => (
                            <li key={i} className="flex items-center text-xs font-semibold text-brand-dark">
                              <span className="w-1 h-1 bg-brand-blue mr-2"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Desktop Arrow */}
                    <ArrowRight className={`hidden lg:block transform transition-all duration-500 ${
                      activeService === index ? 'text-brand-blue -rotate-45 opacity-100 translate-x-0' : 'text-gray-300 opacity-0 -translate-x-4'
                    }`} />
                  </div>
                  
                  {/* Left Active Border */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-brand-blue transition-all duration-500 ${
                    activeService === index ? 'h-full opacity-100' : 'h-0 opacity-0'
                  }`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Sharp Image Display (Desktop Only) with Parallax */}
          <div className="lg:w-1/2 relative h-[600px] hidden lg:block sticky top-20">
            <motion.div style={{ y }} className="w-full h-full relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                    animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
                    exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // FASTER TRANSITION (0.4s)
                    className="absolute inset-0 w-full h-full"
                  >
                    {/* Sharp edges + Grayscale + High Contrast */}
                    <img 
                      src={SERVICES[activeService].image} 
                      alt={SERVICES[activeService].title} 
                      className="w-full h-full object-cover filter grayscale contrast-125 brightness-90"
                    />
                    
                    {/* Technical Overlay Frame */}
                    <div className="absolute inset-0 border border-white/10 p-8 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                         {/* Clean header area on image - NO ICONS HERE */}
                      </div>
                      
                      {/* BOLD Number Overlay - Bottom Left - Transparent Blue Style */}
                      {/* Opacity set to 40% for "lehce pruhledny" effect */}
                      <div className="absolute bottom-0 left-0 p-4">
                         <span className="text-brand-blue/40 font-bold text-[12rem] font-heading leading-none block mix-blend-hard-light">
                          0{activeService + 1}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Background Accent Box */}
                <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-brand-dark/5 -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;