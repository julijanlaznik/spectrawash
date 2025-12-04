
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Calculator, Clock, Check } from 'lucide-react';
import ServiceCalculator from './ServiceCalculator';

const Services: React.FC = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [calcService, setCalcService] = useState<{id: string, name: string, basePrice: number} | null>(null);

  const openCalculator = (serviceId: string, serviceName: string, basePrice: number) => {
    setCalcService({ id: serviceId, name: serviceName, basePrice });
    setIsCalculatorOpen(true);
  };

  return (
    <section id="services" className="relative bg-white overflow-hidden">
      
      {/* HEADER SECTION */}
      <div className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-6 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4 justify-start">
              <span className="h-[1px] w-12 bg-brand-blue"></span>
              <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs">Dokonalost</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-brand-dark leading-tight">
              Nabídka <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-dark">Programů</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* SERVICES LIST - FULL WIDTH BANDS (ZEBRA LAYOUT) */}
      <div className="flex flex-col">
        {SERVICES.map((service, index) => {
          // Even index: White background, Text Left (Desktop)
          // Odd index: Gray background, Image Left (Desktop)
          const isEven = index % 2 === 0;
          const bgClass = isEven ? 'bg-white' : 'bg-[#F9FAFB]'; // Very subtle gray for contrast

          return (
            <div key={service.id} className={`w-full py-16 md:py-20 border-t border-gray-100 ${bgClass}`}>
              <div className="container mx-auto px-6">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col lg:flex-row items-end lg:items-center gap-12 lg:gap-20"
                >
                  
                  {/* TEXT COLUMN */}
                  <div className={`flex-1 w-full text-left ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    <div className="mb-3">
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark uppercase tracking-wide leading-tight">
                        {service.title.split(':')[0]} <br/>
                        <span className="text-brand-blue">{service.title.split(':')[1] || ''}</span>
                      </h3>
                    </div>

                    {/* Price & Calculator Row */}
                    <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-200/60 justify-start">
                       <span className="text-lg font-bold font-heading uppercase tracking-wider text-brand-dark">
                          {service.price}
                       </span>

                       {service.duration && (
                         <span className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-wide border-l border-gray-200 pl-4">
                           <Clock size={12} /> {service.duration}
                         </span>
                       )}
                       
                       {/* Calculator Button */}
                       {service.basePrice > 0 && ['p1', 'p2', 'p3', 'pickup'].includes(service.id) && (
                         <button 
                            onClick={() => openCalculator(service.id, service.title, service.basePrice)}
                            className="lg:ml-auto flex items-center gap-2 px-4 py-2 bg-brand-dark text-white hover:bg-brand-blue transition-all duration-300 text-[10px] font-bold uppercase tracking-wider rounded-none"
                         >
                           <Calculator size={14} /> Spočítat
                         </button>
                       )}
                    </div>

                    <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-xl mr-auto lg:ml-0">
                      {service.description}
                    </p>

                    {/* UPDATED: grid-cols-2 on mobile to save vertical space */}
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-[11px] md:text-xs font-medium text-brand-dark/80 flex-row gap-2 text-left leading-tight">
                          <div className="mt-0.5 min-w-[12px]">
                             <Check size={12} className="text-brand-blue" />
                          </div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* IMAGE COLUMN */}
                  <div className={`flex-1 w-full ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                     <div className="relative group overflow-hidden shadow-xl w-full aspect-[16/9] md:aspect-[3/2]">
                        <div className="absolute inset-0 border-[1px] border-white/10 z-10 pointer-events-none"></div>
                        
                        {/* Always Grayscale */}
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover filter grayscale contrast-[1.15] brightness-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />

                        {/* Number Overlay in Bottom Left */}
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 p-6 z-20 pointer-events-none">
                            <span className="text-brand-blue font-heading font-bold text-6xl md:text-8xl leading-none opacity-20 tracking-tighter">
                              0{index + 1}
                            </span>
                        </div>
                     </div>
                  </div>

                </motion.div>
              </div>
            </div>
          );
        })}
      </div>

      {/* DISCLAIMERS - Separate band at the bottom */}
      <div className="bg-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-[10px] text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">
            <p className="mb-3 font-bold text-brand-dark/60 uppercase tracking-widest">*Při nadměrném znečištění vozu může být cena po předchozí dohodě navýšena.</p>
            <p>
              Zákazník je povinen po poskytnutí sjednaných služeb provést řádnou prohlídku vyčištěného vozidla s tím, 
              že po jeho převzetí, úhradě a opuštění prostor provozovny poskytovatele nebude brán na pozdější reklamace zřetel, 
              což bere zákazník objednáním služeb a přenecháním vozidla k vyčištění bez dalšího na vědomí.
            </p>
          </div>
        </div>
      </div>
      
      {calcService && (
        <ServiceCalculator 
          isOpen={isCalculatorOpen}
          onClose={() => setIsCalculatorOpen(false)}
          serviceId={calcService.id}
          serviceName={calcService.name}
          basePrice={calcService.basePrice}
        />
      )}
    </section>
  );
};

export default Services;
