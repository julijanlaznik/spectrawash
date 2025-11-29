import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';
import { VOUCHERS } from '../constants';
import Button from './Button';
import { motion } from 'framer-motion';

const Vouchers: React.FC = () => {
  return (
    <section id="vouchers" className="py-24 bg-brand-light relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs mb-3 block flex items-center gap-2">
              <Gift size={16} /> Dárek, který potěší
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark leading-tight">
              Dárkové <br /> <span className="text-brand-blue">Vouchery</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-md text-sm leading-relaxed mb-2"
          >
            Darujte čistotu a péči. Vyberte si dárkový voucher na ruční mytí vozu. Vhodné jako dárek k Vánocům, narozeninám nebo jako poděkování.
          </motion.p>
        </div>

        {/* Vouchers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VOUCHERS.map((voucher, index) => (
            <motion.div
              key={voucher.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gray-100 group-hover:bg-brand-blue transition-colors duration-300"></div>

              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold font-heading text-brand-dark group-hover:text-brand-blue transition-colors">
                    {voucher.title}
                </h3>
                <span className="bg-brand-light text-brand-blue font-bold px-3 py-1 text-sm tracking-wide">
                    {voucher.price}
                </span>
              </div>
              
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                {voucher.description}
              </p>

              <ul className="space-y-4 mb-10">
                {voucher.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-brand-dark/80">
                        <span className="w-1.5 h-1.5 bg-brand-blue mr-3 rounded-full"></span>
                        {feature}
                    </li>
                ))}
              </ul>

              <Button fullWidth variant="secondary" className="border-gray-200 hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white">
                Objednat voucher
              </Button>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vouchers;