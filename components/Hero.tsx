import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { HERO_SLIDES } from '../constants';
import Button from './Button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const containerRef = useRef(null);
  
  // Parallax Effect Hook
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  useEffect(() => {
    setIsFirstRender(false);
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Preload next image to prevent flickering during transition
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % HERO_SLIDES.length;
    const img = new Image();
    img.src = HERO_SLIDES[nextIndex].image;
  }, [currentSlide]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-brand-dark">
      {/* Background Image Layer with Parallax */}
      <motion.div 
         style={{ y }} 
         className="absolute inset-0 w-full h-full"
      >
          {/* Slider Images - Optimized for Crossfade */}
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              initial={isFirstRender && currentSlide === 0 ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 10, ease: "linear" } 
              }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={HERO_SLIDES[currentSlide].image}
                alt={HERO_SLIDES[currentSlide].title}
                className="w-full h-full object-cover object-center"
                fetchPriority={currentSlide === 0 ? "high" : "auto"}
                loading={currentSlide === 0 ? "eager" : "lazy"}
                decoding={currentSlide === 0 ? "sync" : "async"}
              />
            </motion.div>
          </AnimatePresence>

          {/* OVERLAYS - Subtle and Functional */}
          {/* 1. Top Gradient for Navigation Clarity */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-transparent h-3/4 pointer-events-none z-[1]" />
          
          {/* 2. Left Side Gradient for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent w-full md:w-3/4 pointer-events-none z-[1]" />
          
          {/* 3. Global subtle darkening for depth */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none z-[1]" />
          
          {/* 4. Brand blue tint mix */}
          <div className="absolute inset-0 bg-brand-blue/5 mix-blend-overlay pointer-events-none z-[1]" />
          
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-4xl pt-16 md:pt-20">
          <motion.div
            key={`counter-${currentSlide}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-4 md:mb-6"
          >
            <span className="text-brand-blue font-bold text-lg">0{currentSlide + 1}</span>
            <div className="h-[2px] w-12 bg-white/20">
              <motion.div 
                key={`progress-${currentSlide}`}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 7, ease: "linear" }}
                className="h-full bg-brand-blue"
              />
            </div>
            <span className="text-white/40 font-bold text-lg">0{HERO_SLIDES.length}</span>
          </motion.div>

          <div className="overflow-hidden mb-3 md:mb-4">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl lg:text-9xl font-heading font-bold text-white leading-[1.1] tracking-tighter max-w-4xl whitespace-pre-line"
            >
              {HERO_SLIDES[currentSlide].title}
            </motion.h1>
          </div>
          
          <motion.p
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-xl text-gray-100 mb-8 md:mb-10 max-w-xl font-light leading-relaxed border-l-2 border-brand-blue pl-6 whitespace-pre-line drop-shadow-md"
          >
            {HERO_SLIDES[currentSlide].subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-6"
          >
            <Button onClick={scrollToContact} fullWidth={false} className="w-full sm:w-auto">
              Rezervovat Online
            </Button>
            <Button onClick={scrollToPortfolio} variant="outline" fullWidth={false} className="w-full sm:w-auto">
              Reference a vozy v péči
            </Button>
          </motion.div>
        </div>
      </div>

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