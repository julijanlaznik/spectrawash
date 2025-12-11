
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check initial state
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }

    // Listen for custom reset event (for testing/re-opening)
    const handleReset = () => {
      localStorage.removeItem('cookieConsent');
      setIsVisible(true);
    };

    window.addEventListener('resetCookieConsent', handleReset);

    return () => {
      window.removeEventListener('resetCookieConsent', handleReset);
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 w-full z-[60] bg-brand-dark border-t border-brand-blue/30 shadow-2xl p-4 md:p-8"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="text-white text-xs md:text-sm leading-relaxed max-w-3xl text-center md:text-left">
              <span className="font-bold text-brand-blue block mb-1 uppercase tracking-widest text-[10px] md:text-xs">Používáme cookies</span>
              Tento web používá soubory cookies k zajištění správného fungování a analýze návštěvnosti. Používáním webu s tím souhlasíte.
            </div>
            <div className="flex gap-3 md:gap-4 shrink-0 w-full md:w-auto">
               <Button 
                 onClick={handleDecline} 
                 variant="outline" 
                 className="flex-1 md:flex-none justify-center !py-2 md:!py-3 px-2 md:px-6 text-[10px] md:text-xs border-gray-600 text-gray-400 hover:text-white hover:border-white"
               >
                 Odmítnout
               </Button>
               <Button 
                 onClick={handleAccept} 
                 className="flex-1 md:flex-none justify-center !py-2 md:!py-3 px-2 md:px-8 text-[10px] md:text-xs"
               >
                 Rozumím
               </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
