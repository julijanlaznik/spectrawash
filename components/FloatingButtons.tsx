
import React, { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const FloatingButtons: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons after scrolling down a bit (e.g., 100px)
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:hidden"
        >
          {/* Call Button */}
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
            className="w-14 h-14 bg-white text-brand-dark rounded-full shadow-lg flex items-center justify-center border-2 border-brand-dark active:scale-95 transition-transform"
            aria-label="Zavolat"
          >
            <Phone size={24} />
          </a>

          {/* Booking Button */}
          <button
            onClick={scrollToContact}
            className="w-14 h-14 bg-brand-blue text-brand-dark rounded-full shadow-lg flex items-center justify-center border-2 border-transparent active:scale-95 transition-transform"
            aria-label="Rezervovat"
          >
            <Calendar size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingButtons;
