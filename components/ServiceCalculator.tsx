
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Car, Truck, Check, AlertCircle, MapPin } from 'lucide-react';
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

// FALLBACK PRICES to ensure it always works
const PRICE_MAP: Record<string, number> = {
  'p1': 690,
  'p2': 1950,
  'p3': 3250,
  'pickup': 500
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

  // Determine effective base price (use prop or fallback)
  const effectiveBasePrice = PRICE_MAP[serviceId] || basePrice || 0;

  // Identify service type
  const isPickup = serviceId === 'pickup';
  const isStandard = !isPickup; // P1, P2, P3

  // Reset to defaults when opening
  useEffect(() => {
    if (isOpen) {
      setSize('standard');
      setDistance('zone1');
    }
  }, [isOpen]);

  // --- CALCULATION LOGIC ---
  let finalPrice = 0;

  if (isPickup) {
    const distanceFees = { zone1: 0, zone2: 300, zone3: 600 };
    finalPrice = effectiveBasePrice + distanceFees[distance];
  } else {
    // STANDARD SERVICES (P1, P2, P3)
    // Logic: Base * Multiplier
    const multipliers = {
      standard: 1.0,
      suv: 1.2, // +20%
      van: 1.3  // +30%
    };
    
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
    
    // Construct details string for the form
    let details = "";
    if (isStandard) {
        const sizeLabel = size === 'standard' ? 'Osobní' : size === 'suv' ? 'SUV/MPV' : 'VAN';
        details = `Vybraná konfigurace: ${sizeLabel}\nOdhadovaná cena: ${finalPrice} Kč`;
    }
    if (isPickup) {
        const zoneLabel = distance === 'zone1' ? '<10km' : distance === 'zone2' ? '10-30km' : '>30km';
        details = `Vzdálenost: ${zoneLabel}\nCena za výjezd: ${finalPrice} Kč`;
    }
    
    if (details) params.append('details', details);

    const newUrl = `/?${params.toString()}#contact`;
    window.location.href = newUrl;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-brand-light w-full max-w-lg shadow-2xl border border-gray-200 overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="bg-brand-dark p-6 flex justify-between items-start sticky top-0 z-20">
              <div>
                <span className="text-brand-blue text-xs font-bold uppercase tracking-widest block mb-1">
                  Kalkulace Ceny
                </span>
                <h3 className="text-white text-xl font-heading font-bold leading-tight pr-4">
                  {serviceName}
                </h3>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 md:p-8">
              
              {/* --- 1. PICKUP INPUTS --- */}
              {isPickup && (
                <div className="mb-8">
                   <label className="block text-brand-dark text-sm font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
                      <MapPin size={18} className="text-brand-blue"/> Vzdálenost od studia
                   </label>
                   <div className="flex flex-col gap-3">
                      {[
                        { id: 'zone1', label: 'Do 10 km', fee: 'Zdarma', sub: 'Roztoky, Dejvice' },
                        { id: 'zone2', label: '10 - 30 km', fee: '+300 Kč', sub: 'Praha Centrum' },
                        { id: 'zone3', label: 'Nad 30 km', fee: '+600 Kč', sub: 'Okolí Prahy' },
                      ].map((zone) => (
                        <button
                          key={zone.id}
                          onClick={() => setDistance(zone.id as DistanceZone)}
                          className={`relative p-4 flex items-center justify-between border transition-all duration-300 group text-left
                            ${distance === zone.id 
                              ? 'border-brand-blue bg-white shadow-lg' 
                              : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                            }`}
                        >
                          <div>
                             <span className={`block text-sm font-bold uppercase ${distance === zone.id ? 'text-brand-dark' : 'text-gray-600'}`}>
                               {zone.label}
                             </span>
                             <span className="text-xs text-gray-400">{zone.sub}</span>
                          </div>
                          <span className={`text-sm font-bold ${distance === zone.id ? 'text-brand-blue' : 'text-gray-500'}`}>
                            {zone.fee}
                          </span>
                        </button>
                      ))}
                   </div>
                </div>
              )}

              {/* --- 2. CAR SIZE (Standard: P1-P3) --- */}
              {isStandard && (
                <div className="mb-8">
                  <label className="block text-brand-dark text-sm font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
                      Vyberte velikost vozu
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { id: 'standard', label: 'Osobní', sub: 'Základní cena', icon: Car },
                      { id: 'suv', label: 'SUV / MPV', sub: '+ 20%', icon: Car },
                      { id: 'van', label: 'VAN', sub: '+ 30%', icon: Truck },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSize(item.id as CarSize)}
                        className={`relative p-3 flex flex-col items-center justify-center border transition-all duration-300 group h-32
                          ${size === item.id 
                            ? 'border-brand-blue bg-white shadow-lg' 
                            : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                          }`}
                      >
                        <item.icon 
                          size={28} 
                          className={`mb-2 transition-colors ${size === item.id ? 'text-brand-blue' : 'text-gray-400'}`}
                        />
                        <span className={`text-sm font-bold uppercase ${size === item.id ? 'text-brand-dark' : 'text-gray-500'}`}>
                          {item.label}
                        </span>
                        <span className="text-[11px] font-bold text-brand-blue mt-1">{item.sub}</span>
                        {size === item.id && (
                          <div className="absolute top-2 right-2 text-brand-blue">
                            <Check size={14} strokeWidth={3} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* --- RESULT AREA --- */}
              <div className="bg-gray-100 p-8 mb-6 flex flex-col items-center text-center border-t-4 border-brand-blue">
                <span className="text-gray-500 text-sm uppercase tracking-widest mb-2 font-bold">Konečná cena</span>
                
                <div className="text-5xl font-heading font-bold text-brand-dark mb-2">
                  {finalPrice > 0 ? (
                    <span>{finalPrice.toLocaleString('cs-CZ')} Kč</span>
                  ) : (
                    <span>Individuální</span>
                  )}
                </div>
                
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500 bg-white px-3 py-1 rounded-full">
                  <AlertCircle size={12} />
                  <span>Cena se může lišit dle stavu laku a znečištění.</span>
                </div>
              </div>

              <Button onClick={handleBook} fullWidth className="py-4 text-sm">
                Rezervovat
              </Button>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceCalculator;
