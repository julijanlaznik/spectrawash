
import React from 'react';
import { Gift, Check, Printer, Mail, Clock } from 'lucide-react';
import { VOUCHERS } from '../constants';
import Button from './Button';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Vouchers: React.FC = () => {
  
  const handleOrderVoucher = (voucherTitle: string, price: string) => {
    // TODO: HERE YOU WILL INSERT THE LOGIC TO REDIRECT TO STRIPE
    alert(`Přesměrování na platební bránu (Stripe) pro: ${voucherTitle} (${price})...\n\n(V ostré verzi zde bude odkaz na checkout)`);
  };

  return (
    <section id="vouchers" className="py-16 md:py-24 bg-brand-light relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white -skew-x-12 transform translate-x-20 pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs mb-3 block flex items-center gap-2">
              <Gift size={16} /> Dárek, který potěší
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark leading-tight">
              Dárkové <br /> <span className="text-brand-blue">Vouchery</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-md text-sm leading-relaxed mb-2 flex flex-col gap-2"
          >
             <p>Darujte dokonalou péči o vůz. Vyberte si voucher, který potěší každého automobilového nadšence.</p>
          </motion.div>
        </div>

        {/* --- VOUCHER PREVIEW & INFO SECTION --- */}
        <div className="mb-20 bg-white border border-gray-100 p-8 md:p-12 shadow-lg relative overflow-hidden">
           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* Left: Info Text */}
              <div className="lg:w-1/2 relative z-10">
                 <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                    Perfektní dárek pod stromeček
                 </h3>
                 <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    Nestíháte? Nevadí. Naše vouchery jsou navrženy tak, aby dělaly radost okamžitě.
                    Po zaplacení vám dorazí <strong>stylové PDF připravené k tisku</strong>. Stačí vytisknout, vložit do obálky a máte vyřešený luxusní dárek.
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 bg-brand-light flex items-center justify-center rounded-none text-brand-blue">
                          <Mail size={20} />
                       </div>
                       <div>
                          <h4 className="font-bold text-brand-dark text-sm uppercase tracking-wide mb-1">Okamžitě e-mailem</h4>
                          <p className="text-xs text-gray-500">Doručení ihned po zaplacení.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 bg-brand-light flex items-center justify-center rounded-none text-brand-blue">
                          <Printer size={20} />
                       </div>
                       <div>
                          <h4 className="font-bold text-brand-dark text-sm uppercase tracking-wide mb-1">Připraveno k tisku</h4>
                          <p className="text-xs text-gray-500">Designové PDF pro tisk doma.</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Right: Visual Mockup (The "Photo" Space) */}
              <div className="lg:w-1/2 w-full flex justify-center perspective-1000">
                 <motion.div 
                    initial={{ rotateY: 10, rotateX: 5 }}
                    whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="relative w-full max-w-md aspect-[1.586/1] rounded-xl shadow-2xl overflow-hidden bg-brand-dark text-white p-8 flex flex-col justify-between select-none"
                    style={{ 
                      background: 'linear-gradient(135deg, #1a1a1a 0%, #2F2F2F 100%)',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}
                 >
                    {/* Decorative Shine */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent"></div>

                    <div className="flex justify-between items-start relative z-10">
                       <Logo className="scale-75 origin-top-left" />
                       <span className="text-brand-blue font-bold tracking-[0.2em] text-xs border border-brand-blue/30 px-3 py-1">
                          GIFT VOUCHER
                       </span>
                    </div>

                    <div className="relative z-10">
                       <div className="h-px w-20 bg-brand-blue mb-4"></div>
                       <h4 className="text-2xl font-heading font-bold uppercase text-white/90">
                          Exclusive Limit
                       </h4>
                       <p className="text-white/50 text-xs tracking-widest uppercase mt-1">
                          Hodnota: 5 000 Kč
                       </p>
                    </div>

                    <div className="relative z-10 flex justify-between items-end">
                       <div className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
                          No. 2024-001-SW
                       </div>
                       <Printer size={16} className="text-white/30" />
                    </div>
                 </motion.div>
              </div>

           </div>
        </div>

        {/* Vouchers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {VOUCHERS.map((voucher, index) => {
            // Highlighting the Exclusive (most expensive) or Middle option
            const isExclusive = index === 2; // 5000 Kc

            return (
              <motion.div
                key={voucher.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden transition-all duration-300 flex flex-col h-full
                  ${isExclusive ? 'bg-brand-dark text-white shadow-2xl scale-[1.02] border border-brand-blue/30' : 'bg-white text-brand-dark border border-gray-100 hover:shadow-xl hover:-translate-y-2'}
                `}
              >
                {/* Badge for Popular/Exclusive */}
                {voucher.tag && (
                  <div className={`absolute top-0 right-0 px-4 py-1 text-[10px] font-bold uppercase tracking-widest z-20
                    ${isExclusive ? 'bg-brand-blue text-brand-dark' : 'bg-brand-dark text-white'}
                  `}>
                    {voucher.tag}
                  </div>
                )}

                {/* Card Top Accent */}
                <div className={`absolute top-0 left-0 w-full h-[4px] transition-colors duration-300 z-10
                   ${isExclusive ? 'bg-brand-blue' : 'bg-gray-100 group-hover:bg-brand-blue'}
                `}></div>

                <div className="p-8 md:p-10 flex-grow">
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold font-heading mb-2 ${isExclusive ? 'text-white' : 'text-brand-dark'}`}>
                        {voucher.title}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-2xl font-bold tracking-tight ${isExclusive ? 'text-brand-blue' : 'text-brand-dark'}`}>
                          {voucher.price}
                      </span>
                    </div>
                  </div>
                  
                  <p className={`text-sm mb-8 leading-relaxed ${isExclusive ? 'text-gray-400' : 'text-gray-500'}`}>
                    {voucher.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {voucher.features.map((feature, i) => (
                        <li key={i} className={`flex items-start text-sm ${isExclusive ? 'text-gray-300' : 'text-gray-600'}`}>
                            <div className={`mt-1 mr-3 rounded-full flex items-center justify-center w-4 h-4 shrink-0
                                ${isExclusive ? 'bg-brand-blue/20 text-brand-blue' : 'bg-gray-100 text-brand-blue'}
                            `}>
                                <Check size={10} strokeWidth={3} />
                            </div>
                            {feature}
                        </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 md:p-10 pt-0 mt-auto">
                  <Button 
                    onClick={() => handleOrderVoucher(voucher.title, voucher.price)}
                    fullWidth 
                    variant={isExclusive ? 'primary' : 'secondary'}
                    className={`${!isExclusive && 'border-gray-200 hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white'}`}
                  >
                    Koupit Online
                  </Button>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Vouchers;
