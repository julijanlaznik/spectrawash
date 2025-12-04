
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Car, Truck, Check, ChevronRight, Bus } from 'lucide-react';
import Button from './Button';

interface ServiceCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string;
  serviceName: string;
  basePrice: number;
}

type CarSize = 'standard' | 'suv' | 'van';
type DistanceZone = 'zone1' | 'zone2' | 'zone3';

const PRICE_MAP: Record<string, number> = {
  'p1': 690,
  'p2': 1950,
  'p3': 3250,
  'pickup': 0
};

const ServiceCalculator: React.FC<ServiceCalculatorProps> = ({ 
  isOpen, 
  onClose, 
  serviceId,
  serviceName, 
  basePrice 
}) => {
  const [size, setSize] = useState<CarSize>('standard');
  const [distance, setDistance] = useState<DistanceZone>('zone1');

  const mappedPrice = PRICE_MAP[serviceId];
  const effectiveBasePrice = mappedPrice !== undefined ? mappedPrice : (basePrice || 0);

  const isPickup = serviceId === 'pickup';
  const isStandard = !isPickup;

  useEffect(() => {
    if (isOpen) {
      setSize('standard');
      setDistance('zone1');
    }
  }, [isOpen]);

  let finalPrice = 0;
  if (isPickup) {
    const pickupPrices = { zone1: 0, zone2: 300, zone3: 600 };
    finalPrice = pickupPrices[distance];
  } else {
    const multipliers = { standard: 1.0, suv: 1.2, van: 1.3 };
    finalPrice = Math.round(effectiveBasePrice * multipliers[size]);
  }

  const handleBook = () => {
    onClose();
    const params = new URLSearchParams();
    if (isPickup) {
      params.append('pickup', 'true');
    } else {
      params.append('service', serviceName);
    }
    
    let details = "";
    if (isStandard) {
        const sizeLabel = size === 'standard' ? 'Osobní' : size === 'suv' ? 'SUV/MPV' : 'VAN';
        details = `Vybraná konfigurace: ${sizeLabel}\nOdhadovaná cena: ${finalPrice} Kč`;
    }
    if (isPickup) {
        const zoneLabel = distance === 'zone1' ? 'Do 10 km' : distance === 'zone2' ? '10-30 km' : 'Nad 30 km';
        const priceLabel = finalPrice === 0 ? 'Zdarma' : `${finalPrice} Kč`;
        details = `Vzdálenost: ${zoneLabel}\nCena za výjezd: ${priceLabel}`;
    }
    
    if (details) params.append('details', details);

    const newUrl = `/?${params.toString()}#contact`;
    window.location.href = newUrl;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Soft Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-md"
          />

          {/* The Clean Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header Stripe */}
            <div className="bg-white px-8 pt-8 pb-4 flex justify-between items-start relative z-10">
               <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-2 block">
                    Kalkulace ceny
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-brand-dark leading-none">
                     {serviceName.split(':')[0]}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                     {serviceName.split(':')[1] || 'Zvolte variantu'}
                  </p>
               </div>
               <button 
                 onClick={onClose}
                 className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-brand-dark hover:text-white transition-colors"
               >
                 <X size={16} />
               </button>
            </div>

            {/* Content Body */}
            <div className="p-8 pt-2 flex-grow overflow-y-auto">
               
               {/* CAR SIZE VISUAL SELECTOR */}
               {isStandard && (
                 <div className="space-y-3 mt-4">
                    {[
                      { id: 'standard', label: 'Osobní', icon: Car, surcharge: 'Základ' },
                      { id: 'suv', label: 'SUV / MPV', icon: Truck, surcharge: '+20%' },
                      { id: 'van', label: 'VAN / Dodávka', icon: Bus, surcharge: '+30%' },
                    ].map((item) => {
                       const isActive = size === item.id;
                       const Icon = item.icon;
                       return (
                         <div 
                           key={item.id}
                           onClick={() => setSize(item.id as CarSize)}
                           className={`group relative cursor-pointer p-4 border-2 rounded-xl transition-all duration-300 flex items-center justify-between
                             ${isActive 
                               ? 'border-brand-blue bg-brand-blue/5 shadow-sm' 
                               : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
                             }
                           `}
                         >
                            <div className="flex items-center gap-4">
                               <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
                                  ${isActive ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-white group-hover:text-brand-dark'}
                               `}>
                                  <Icon size={20} />
                               </div>
                               <div>
                                  <h4 className={`text-sm font-bold uppercase tracking-wide ${isActive ? 'text-brand-dark' : 'text-gray-500'}`}>
                                    {item.label}
                                  </h4>
                                  <span className="text-[10px] text-gray-400 font-medium">
                                    Velikost vozu
                                  </span>
                               </div>
                            </div>
                            
                            <div className="text-right">
                               <span className={`text-xs font-bold ${isActive ? 'text-brand-blue' : 'text-gray-300'}`}>
                                  {item.surcharge}
                               </span>
                            </div>

                            {isActive && (
                               <div className="absolute top-1/2 -translate-y-1/2 right-4 text-brand-blue">
                                  {/* Just visual anchor, handled by surcharge text position */}
                               </div>
                            )}
                         </div>
                       )
                    })}
                 </div>
               )}

               {/* PICKUP ZONE SELECTOR */}
               {isPickup && (
                  <div className="space-y-3 mt-4">
                     {[
                       { id: 'zone1', label: 'Do 10 km', price: 'Zdarma' },
                       { id: 'zone2', label: '10 - 30 km', price: '300 Kč' },
                       { id: 'zone3', label: 'Nad 30 km', price: '600 Kč' },
                     ].map((zone) => {
                        const isActive = distance === zone.id;
                        return (
                          <div 
                            key={zone.id}
                            onClick={() => setDistance(zone.id as DistanceZone)}
                            className={`relative cursor-pointer p-5 border-2 rounded-xl transition-all duration-300 flex items-center justify-between
                              ${isActive 
                                ? 'border-brand-blue bg-brand-blue/5' 
                                : 'border-gray-100 bg-white hover:border-gray-200'
                              }
                            `}
                          >
                             <span className={`text-sm font-bold uppercase tracking-wide ${isActive ? 'text-brand-dark' : 'text-gray-500'}`}>
                               {zone.label}
                             </span>
                             <span className={`text-sm font-bold ${isActive ? 'text-brand-blue' : 'text-gray-400'}`}>
                               {zone.price}
                             </span>
                          </div>
                        )
                     })}
                  </div>
               )}

               <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-[10px] text-gray-500 leading-relaxed text-center">
                    Výsledná cena se může lišit dle míry znečištění. Přesnou kalkulaci potvrdíme při převzetí vozu.
                  </p>
               </div>
            </div>

            {/* Footer / Checkout Bar */}
            <div className="bg-brand-dark p-6 flex flex-col gap-4">
                <div className="flex items-end justify-between px-2">
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">
                      Celkem
                    </span>
                    <motion.span 
                       key={finalPrice}
                       initial={{ scale: 0.8, opacity: 0 }}
                       animate={{ scale: 1, opacity: 1 }}
                       className="text-3xl font-heading font-bold text-white tracking-tight"
                    >
                       {isPickup && finalPrice === 0 ? 'Zdarma' : `${finalPrice.toLocaleString('cs-CZ')} Kč`}
                    </motion.span>
                </div>

                <Button 
                   onClick={handleBook} 
                   fullWidth 
                   className="bg-brand-blue text-brand-dark hover:bg-white hover:text-brand-dark border-0 rounded-lg normal-case tracking-widest text-sm font-bold h-14"
                >
                   Rezervovat termín
                </Button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceCalculator;
