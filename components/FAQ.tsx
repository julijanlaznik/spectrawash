
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '../constants';
import { Plus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-brand-light border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
             <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs">
                Časté dotazy
             </span>
             <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mt-2">
                Vše, co potřebujete vědět
             </h3>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="bg-white border border-gray-100 overflow-hidden group">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left transition-colors hover:bg-gray-50"
                >
                   <span className="font-bold text-brand-dark text-sm md:text-base pr-8">{item.q}</span>
                   <motion.div 
                     animate={{ rotate: openIndex === index ? 45 : 0 }}
                     className="text-brand-blue"
                   >
                     <Plus size={20} />
                   </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-5 pt-0 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
