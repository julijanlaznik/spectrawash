
import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { SOCIAL_FEED } from '../constants';
import { Instagram, Play, ArrowRight, ArrowLeft } from 'lucide-react';

const SocialFeed: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
  };

  return (
    <section id="social" className="py-24 md:py-32 bg-brand-dark overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-brand-blue/5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
            Sociální Sítě
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white">
            Sledujte <br /> Proces
          </h2>
        </motion.div>
        <motion.div 
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="mt-8 md:mt-0"
        >
          <a 
            href="https://www.instagram.com/cleanstylecz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-white group"
          >
             {/* Text stays white on hover */}
             <span className="text-sm font-bold uppercase tracking-widest mr-4 text-white transition-colors duration-300">
               Instagram & Reels
             </span>
             {/* Icon box turns blue on hover */}
             <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-brand-blue transition-all duration-300 rounded-none">
                <Instagram size={20} className="text-white group-hover:text-brand-blue transition-colors duration-300" />
             </div>
          </a>
        </motion.div>
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
            viewport={{ once: true, margin: "-100px" }}
            className="flex space-x-6 md:space-x-10 min-w-max pr-6 md:pr-20"
            >
            {SOCIAL_FEED.map((item) => (
                <motion.div
                key={item.id}
                variants={itemVariants}
                className="relative w-80 md:w-96 h-[32rem] md:h-[36rem] group cursor-pointer bg-gray-900 overflow-hidden rounded-none border-none" 
                >
                <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
                />
                
                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md flex items-center justify-center transform group-hover:scale-110 group-hover:bg-brand-blue transition-all duration-500 rounded-none">
                    <Play className="text-white fill-white ml-1" size={24} />
                    </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-10 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="overflow-hidden">
                    <h3 className="text-white font-heading font-bold text-2xl mb-2 leading-tight">
                        {item.title}
                    </h3>
                    </div>
                    <div className="flex justify-between items-end pt-2">
                    <span className="text-white/60 text-xs uppercase tracking-widest">{item.views} zhlédnutí</span>
                    <ArrowRight className="text-brand-blue opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" size={20} />
                    </div>
                </div>
                </motion.div>
            ))}
            </motion.div>
        </div>
      </div>

      {/* Custom Navigation Controls (Centered below) */}
      <div className="container mx-auto px-6 mt-4 flex justify-center items-center gap-6">
        <button 
            onClick={() => scroll('left')} 
            className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all duration-300 rounded-none group"
            aria-label="Scroll Left"
        >
            <ArrowLeft size={20} className="text-white/60 group-hover:text-white transition-colors" />
        </button>
        
        {/* Decorative Divider */}
        <div className="w-24 h-[1px] bg-white/10"></div>

        <button 
            onClick={() => scroll('right')} 
            className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all duration-300 rounded-none group"
            aria-label="Scroll Right"
        >
            <ArrowRight size={20} className="text-white/60 group-hover:text-white transition-colors" />
        </button>
      </div>

    </section>
  );
};

export default SocialFeed;
