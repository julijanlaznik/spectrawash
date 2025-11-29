
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '../constants';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Vše');

  const filteredItems = activeCategory === 'Vše' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  // Helper to determine grid span based on index for a dynamic "Bento" look
  const getGridClass = (index: number) => {
    const patternIndex = index % 8; // Cycle every 8 items
    switch (patternIndex) {
      case 0: return "md:col-span-2 md:row-span-2 h-96 md:h-[600px]"; // Big Feature
      case 1: return "md:col-span-1 md:row-span-2 h-96 md:h-[600px]"; // Tall Vertical
      case 2: return "md:col-span-1 md:row-span-1 h-96 md:h-[296px]"; // Standard box
      case 3: return "md:col-span-2 md:row-span-1 h-96 md:h-[296px]"; // Wide Horizontal
      case 4: return "md:col-span-1 md:row-span-1 h-96 md:h-[296px]"; // Standard box
      case 5: return "md:col-span-1 md:row-span-1 h-96 md:h-[296px]"; // Standard box
      case 6: return "md:col-span-2 md:row-span-1 h-96 md:h-[296px]"; // Wide
      case 7: return "md:col-span-1 md:row-span-1 h-96 md:h-[296px]"; // Standard
      default: return "md:col-span-1 md:row-span-1 h-96";
    }
  };

  const handleArchiveClick = () => {
    alert("Zobrazuji kompletní archiv realizací... (Demo)");
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs mb-2 block border-l-2 border-brand-blue pl-4">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-dark leading-none">
              Svěřené <br/> Vozy
            </h2>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 md:gap-8">
            {PORTFOLIO_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 relative pb-1 ${
                  activeCategory === category
                    ? 'text-brand-blue'
                    : 'text-gray-400 hover:text-brand-dark'
                }`}
              >
                {category}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-blue transition-all duration-300 ${
                  activeCategory === category ? 'w-full' : 'w-0'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Mosaic Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-4 gap-2 grid-flow-dense"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden cursor-pointer bg-brand-dark ${getGridClass(index)}`}
              >
                {/* Image layer */}
                <div className="w-full h-full overflow-hidden relative">
                   <motion.img 
                    src={item.image} 
                    alt={item.title} 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Clean Gradient Overlay - Only on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  {/* Content - Editorial Style (Centered or Bottom Left depending on preference, going for Centered Minimal) */}
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                     {/* Category Tag */}
                     <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] border border-white/30 px-3 py-1 mb-4 backdrop-blur-sm">
                        {item.category}
                     </span>
                     
                     {/* Title */}
                     <h3 className="text-white text-3xl font-heading font-bold uppercase text-center leading-tight mb-2">
                        {item.title}
                     </h3>
                     
                     {/* Description */}
                     <p className="text-white/70 text-xs font-light tracking-widest text-center mt-2">
                        {item.desc}
                     </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-12 md:mt-24 flex justify-center">
            <button 
              onClick={handleArchiveClick}
              className="group relative px-8 py-3 bg-transparent overflow-hidden"
            >
                <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] text-brand-dark group-hover:text-white transition-colors duration-300">
                    Prozkoumat celý archiv
                </span>
                <div className="absolute inset-0 bg-brand-dark transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out -z-0"></div>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
