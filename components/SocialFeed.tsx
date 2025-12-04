
import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { SOCIAL_FEED } from '../constants';
import { Instagram, Play, ArrowRight, ArrowLeft } from 'lucide-react';

const SocialFeed: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 50, damping: 20 } }
  };

  return (
    <section id="social" className="py-24 md:py-32 bg-brand-dark overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
            Sledujte nás
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
            SpectraWash <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">Backstage</span>
          </h2>
        </motion.div>
        
        {/* Navigation & Social Link */}
        <div className="hidden md:flex items-center gap-6 mt-8 md:mt-0">
            {/* Instagram Link Badge */}
            <a 
              href="https://www.instagram.com/spectra_wash/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-brand-blue group-hover:text-brand-blue transition-all duration-300">
                    <Instagram size={18} />
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                    @spectra_wash
                </span>
            </a>

            {/* Divider */}
            <div className="w-[1px] h-8 bg-white/10"></div>

            {/* Arrows */}
            <div className="flex gap-4">
                <button 
                    onClick={() => scroll('left')} 
                    className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark text-white transition-all duration-300 rounded-full"
                >
                    <ArrowLeft size={20} />
                </button>
                <button 
                    onClick={() => scroll('right')} 
                    className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-brand-dark text-white transition-all duration-300 rounded-full"
                >
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative w-full">
        <div 
            ref={scrollContainerRef}
            className="w-full overflow-x-auto pb-12 pl-6 md:pl-[max(1.5rem,calc((100vw-1280px)/2))] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="flex space-x-6 min-w-max pr-6 md:pr-20"
            >
            {SOCIAL_FEED.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative w-[280px] aspect-[9/16] group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-gray-900" 
                  onClick={() => window.open(item.link, '_blank')}
                >
                  {/* Image */}
                  <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.8] group-hover:brightness-100"
                  />
                  
                  {/* Instagram Badge (Top Right) */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center z-20 border border-white/20">
                     <Instagram size={14} className="text-white" />
                  </div>

                  {/* Play Button (Center) */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-80 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm flex items-center justify-center rounded-full border border-white/30 group-hover:scale-110 group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-300">
                        <Play className="text-white fill-white ml-1" size={20} />
                      </div>
                  </div>
                </motion.div>
            ))}
            </motion.div>
        </div>
      </div>
      
      {/* Mobile only hint */}
      <div className="md:hidden text-center text-gray-500 text-xs mt-[-20px] pb-12 animate-pulse">
         Posunutím zobrazíte více
      </div>

    </section>
  );
};

export default SocialFeed;
