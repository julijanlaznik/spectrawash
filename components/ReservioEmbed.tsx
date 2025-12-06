import React, { useState, useEffect } from 'react';
import { X, Calendar, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

interface ReservioEmbedProps {
  url?: string;
  mode?: 'modal' | 'iframe' | 'link';
  buttonLabel?: string;
  className?: string;
}

// Placeholder URL - replace with client's actual Reservio booking URL
const DEFAULT_RESERVIO_URL = "https://booking.reservio.com"; 

const ReservioEmbed: React.FC<ReservioEmbedProps> = ({
  url = DEFAULT_RESERVIO_URL,
  mode = 'modal',
  buttonLabel = 'Rezervovat termín',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const handleOpen = () => {
    // Analytics Tracking Example
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'booking_initiated', provider: 'reservio' });
    }
    setIsOpen(true);
  };

  const handleLinkClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'booking_link_click', provider: 'reservio' });
    }
  };

  // --- RENDER MODES ---

  // 1. DIRECT IFRAME EMBED
  if (mode === 'iframe') {
    return (
      <div className={`w-full h-[600px] md:h-[700px] bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm ${className}`}>
        <iframe
          src={url}
          title="Online rezervace"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    );
  }

  // 2. SIMPLE LINK BUTTON
  if (mode === 'link') {
    return (
      <div className={className}>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="inline-block"
        >
          <Button variant="primary" className="flex items-center gap-2">
            <Calendar size={18} />
            {buttonLabel} <ExternalLink size={14} />
          </Button>
        </a>
      </div>
    );
  }

  // 3. MODAL (Default)
  return (
    <div className={className}>
      <Button onClick={handleOpen} variant="dark" className="px-12 py-4 text-sm md:text-base w-full md:w-auto">
        <Calendar size={20} className="mr-2" />
        {buttonLabel}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl h-[85vh] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Rezervační formulář"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-100">
                <span className="font-heading font-bold text-brand-dark uppercase tracking-wider text-sm">
                  Online Rezervace
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500 hover:text-brand-dark"
                  aria-label="Zavřít"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Iframe Container */}
              <div className="flex-grow w-full bg-white relative">
                 <iframe
                  src={url}
                  title="Rezervace termínu"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="camera; microphone; autoplay; encrypted-media;"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReservioEmbed;