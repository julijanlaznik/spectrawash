
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { HERO_SLIDES } from '../constants';
import Button from './Button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  
  // Parallax Effect Hook
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image Layer with Parallax */}
      <motion.div 
         style={{ y }} 
         className="absolute inset-0 w-full h-full"
      >
          {/* Slider Images - Crossfade with Ken Burns Effect */}
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              // Ken Burns: Start at 1.0, slowly scale to 1.15 over a long duration
              initial={{ opacity: 0, scale: 1.0 }}
              animate={{ opacity: 1, scale: 1.15 }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 15, ease: "linear" } // 15s duration ensures smooth slow movement beyond the 7s interval
              }}
              className="absolute inset-0 w-full h-full"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
              />
            </motion.div>
          </AnimatePresence>

          {/* STATIC OVERLAYS - Moved OUTSIDE the loop so they are permanent and stable */}
          
          {/* 1. Main Left-to-Right Dark Gradient (For Text Content) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent pointer-events-none" />
          
          {/* 2. Brand Tint Overlay */}
          <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay pointer-events-none" />

          {/* 3. Top Legibility Gradient - Enhanced for Menu readability */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/90 to-transparent opacity-90 pointer-events-none" />
          
      </motion.div>

      {/* Content Layer - Static relative to Parallax bg */}
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-4xl pt-20">
          <motion.div
            key={`counter-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-brand-blue font-bold text-lg">0{currentSlide + 1}</span>
            <div className="h-[2px] w-12 bg-white/20">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 7, ease: "linear" }}
                className="h-full bg-brand-blue"
              />
            </div>
            <span className="text-white/40 font-bold text-lg">0{HERO_SLIDES.length}</span>
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-8xl lg:text-9xl font-heading font-bold text-white leading-[1.1] tracking-tighter max-w-4xl"
            >
              {HERO_SLIDES[currentSlide].title}
            </motion.h1>
          </div>
          
          <motion.p
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed border-l-2 border-brand-blue pl-6"
          >
            {HERO_SLIDES[currentSlide].subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <Button onClick={scrollToContact} fullWidth={false} className="w-full sm:w-auto">
              Rezervovat Online
            </Button>
            <Button onClick={scrollToPortfolio} variant="outline" fullWidth={false} className="w-full sm:w-auto">
              Prozkoumat Portfolio
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-brand-blue"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
