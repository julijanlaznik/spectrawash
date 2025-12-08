
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const PromoBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  // Only show on the Shop/Vouchers page
  if (location.pathname !== '/shop') {
    return null;
  }

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="fixed top-[70px] xl:top-[88px] left-0 w-full z-40 px-4 md:px-0 pointer-events-none"
      >
        <div className="container mx-auto pointer-events-auto">
          {/* Reduced padding from p-3/py-3 to py-2 for a slimmer look */}
          <div className="bg-brand-blue text-brand-dark shadow-lg rounded-b-lg md:rounded-lg overflow-hidden flex items-center justify-between py-2 px-4 md:px-6 relative">
             
             {/* Background glow */}
             <div className="absolute top-0 right-0 w-full h-full bg-white/10 blur-xl"></div>

             <div className="flex items-center gap-3 relative z-10 w-full md:w-auto justify-center md:justify-start">
                <div className="bg-white/20 p-1 rounded-full animate-pulse shrink-0">
                    <Tag size={14} />
                </div>
                <div className="text-[10px] md:text-xs font-medium">
                   <span className="font-bold uppercase tracking-wider mr-1">Limitovaná akce:</span> 
                   Sleva 100 Kč pro prvních <span className="font-bold border-b border-brand-dark/30">50 objednávek!</span>
                   <span className="hidden md:inline ml-2 opacity-70">Kód: SPECTRA100</span>
                </div>
             </div>

             <div className="flex items-center gap-4 relative z-10 hidden md:flex">
                <button 
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-black/10 rounded-full transition-colors"
                >
                   <X size={14} />
                </button>
             </div>
             
             {/* Mobile Close Button */}
             <button 
                  onClick={() => setIsVisible(false)}
                  className="md:hidden absolute top-1/2 -translate-y-1/2 right-1 p-2 text-brand-dark/50"
             >
                   <X size={14} />
             </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PromoBar;
