
import React from 'react';
import { Check, Printer, Mail, HelpCircle, Calendar, FileCheck, Tag, Sparkles, Phone, ShieldCheck, Zap, CreditCard, Gift, ArrowRight } from 'lucide-react';
import { VOUCHERS } from '../constants';
import Button from './Button';
import { motion } from 'framer-motion';

const Vouchers: React.FC = () => {
  
  // URL pro rezervaci
  const RESERVIO_URL = "https://spectra-wash.reservio.com/";

  const handleBuyVoucher = (voucherId: number) => {
    let link = "";

    if (voucherId === 1) {
       // 1. Voucher: Light Refresh
       link = "https://buy.stripe.com/test_28E4gzfrJdFA27B7ry9sk02"; 
    } 
    else if (voucherId === 2) {
       // 2. Voucher: Deep Complete
       link = "https://buy.stripe.com/test_cNieVd3J19pk13x9zG9sk01";
    } 
    else if (voucherId === 3) {
       // 3. Voucher: Premium Credit
       link = "https://buy.stripe.com/test_eVq7sL93leJEcMfcLS9sk00";
    }

    if (link) {
      window.location.href = link;
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRedeemClick = () => {
    window.open(RESERVIO_URL, '_blank');
  };

  const VOUCHER_FAQ = [
    { q: "Jak voucher funguje?", a: "Vyberete si hodnotu, zaplatíte online a voucher vám ihned dorazí na e-mail." },
    { q: "Jak ho obdržím?", a: "Voucher obdržíte v PDF formátu na zadaný e-mail ihned po připsání platby." },
    { q: "Lze ho vytisknout?", a: "Ano, PDF je připraveno ve vysokém rozlišení pro tisk na formát DL nebo A4." },
    { q: "Jak se uplatňuje?", a: "Držitel voucheru si rezervuje termín online přes Reservio. Při rezervaci zadá kód z voucheru." },
  ];

  const getVoucherImage = (id: number) => {
    switch(id) {
        case 1: return '/voucher-light-refresh-web.png';
        case 2: return '/voucher-deep-complete-web.png';
        case 3: return '/voucher-premium-credit.png';
        default: return '/voucher-light-refresh-web.png';
    }
  };

  const getDiscountedPrice = (priceStr: string) => {
    const num = parseInt(priceStr.replace(/\D/g, ''));
    const discounted = num - 100;
    return discounted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " Kč";
  };

  return (
    <section id="vouchers" className="pt-40 pb-24 md:pt-48 md:pb-32 bg-gray-50 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-dark/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HERO HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            Dárek, který zanechá dojem
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold text-brand-dark leading-tight mb-6"
          >
            Darujte pocit <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-dark">nového vozu</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-500 text-lg font-light max-w-2xl mx-auto mb-8"
          >
            Ideální dárek pro každého řidiče. Vyberte prémiovou péči, zaplaťte online a voucher máte <strong>ihned v e-mailu</strong>.
          </motion.p>

          {/* TRUST BAR */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm font-medium text-gray-500 bg-white/50 inline-flex px-6 py-3 rounded-full border border-gray-100 shadow-sm backdrop-blur-sm"
          >
             <span className="flex items-center gap-2"><Zap size={16} className="text-brand-blue" /> Doručení ihned</span>
             <span className="hidden md:inline text-gray-300">|</span>
             <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-brand-blue" /> Platnost 12 měsíců</span>
             <span className="hidden md:inline text-gray-300">|</span>
             <span className="flex items-center gap-2"><CreditCard size={16} className="text-brand-blue" /> Bezpečná platba</span>
          </motion.div>
        </div>

        {/* --- 1. REDEEM BANNER (Máte již voucher?) - TOP --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16"
        >
            <div className="relative bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 text-center sm:text-left">
                     <div className="w-12 h-12 bg-gray-100 text-brand-dark rounded-full flex items-center justify-center shrink-0">
                        <Calendar size={22} />
                    </div>
                    <div>
                       <h4 className="font-heading font-bold text-brand-dark text-lg">Máte již voucher?</h4>
                       <p className="text-sm text-gray-500">Rezervujte si termín uplatnění online.</p>
                    </div>
                </div>
                <div className="w-full sm:w-auto">
                    <Button 
                        onClick={handleRedeemClick} 
                        variant="dark" 
                        className="w-full sm:w-auto py-3 px-8"
                    >
                        Uplatnit voucher
                    </Button>
                </div>
            </div>
        </motion.div>

        {/* --- 2. 3D VOUCHER CARDS GRID (MIDDLE) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start mb-12">
          {VOUCHERS.map((voucher, index) => {
            const isPremium = index === 2; // Credit 5000
            const discountedPrice = getDiscountedPrice(voucher.price);
            
            return (
              <motion.div
                key={voucher.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group h-full"
              >
                {/* CARD CONTAINER */}
                <div 
                   className={`
                      relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300
                      ${isPremium 
                        ? 'bg-brand-dark text-white shadow-2xl ring-1 ring-white/10' 
                        : 'bg-white text-brand-dark shadow-xl hover:shadow-2xl border border-gray-100'
                      }
                   `}
                >
                  {/* Visual Header */}
                  <div className="p-3">
                    <div 
                      className={`
                        w-full aspect-[3/2] rounded-xl relative overflow-hidden shadow-sm
                        ${isPremium ? 'bg-gray-900' : 'bg-gray-50'}
                      `}
                    >
                       <img 
                          src={getVoucherImage(voucher.id)}
                          alt={voucher.title}
                          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                       />
                       
                       {/* Tags */}
                       {voucher.tag && (
                          <div className="absolute top-3 left-3 z-10">
                            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-brand-blue text-brand-dark rounded shadow-lg">
                              {voucher.tag}
                            </span>
                          </div>
                       )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col">
                     <div className="mb-6">
                        <h3 className={`text-2xl font-bold font-heading mb-3 ${isPremium ? 'text-white' : 'text-brand-dark'}`}>
                            {voucher.title}
                        </h3>
                        <p className={`text-sm leading-relaxed ${isPremium ? 'text-gray-400' : 'text-gray-600'}`}>
                           {voucher.description}
                        </p>
                     </div>

                     <ul className="space-y-3 mb-8 mt-auto">
                        {voucher.features.map((feature, i) => (
                          <li key={i} className={`flex items-start text-sm ${isPremium ? 'text-gray-300' : 'text-gray-600'}`}>
                              <Check size={14} className={`mt-1 mr-3 shrink-0 ${isPremium ? 'text-brand-blue' : 'text-green-500'}`} strokeWidth={3} />
                              {feature}
                          </li>
                        ))}
                     </ul>

                     {/* Price Box */}
                     <div className={`mt-auto mb-6 p-4 rounded-xl border ${isPremium ? 'bg-white/5 border-white/10' : 'bg-blue-50/50 border-blue-100'}`}>
                        <div className="flex items-center justify-between mb-1">
                            <span className={`text-xs uppercase tracking-widest ${isPremium ? 'text-gray-500' : 'text-gray-400'}`}>Běžná cena</span>
                            <span className={`text-sm line-through decoration-red-400 decoration-2 ${isPremium ? 'text-gray-500' : 'text-gray-400'}`}>
                                {voucher.price}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
                                <Tag size={12} /> Slevový kód
                            </span>
                            <span className={`text-2xl font-heading font-bold ${isPremium ? 'text-white' : 'text-brand-dark'}`}>
                                {discountedPrice}
                            </span>
                        </div>
                     </div>

                     {/* CTA Button */}
                     <div className="relative group/btn">
                         <div className="absolute -inset-1 bg-brand-blue rounded-lg blur opacity-20 group-hover/btn:opacity-40 transition duration-200"></div>
                         <Button 
                           onClick={() => handleBuyVoucher(voucher.id)}
                           fullWidth 
                           variant={isPremium ? 'primary' : 'dark'}
                           className="relative"
                         >
                           Koupit online
                         </Button>
                     </div>
                     
                     <div className="text-center mt-3 flex items-center justify-center gap-2 text-[10px] text-gray-400">
                        <ShieldCheck size={10} />
                        <span>Zabezpečená platba přes Stripe</span>
                     </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- 3. PROMO BANNER (Sleva 100 Kč) - BOTTOM --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-24"
        >
            <div className="relative bg-white border border-brand-blue/20 rounded-xl p-5 shadow-sm overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
                            <Gift size={24} />
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-heading font-bold text-brand-dark text-lg">Sleva 100 Kč</h4>
                                <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Prvních 50 ks</span>
                            </div>
                            <p className="text-sm text-gray-500">Uplatněte v košíku na jakýkoliv voucher.</p>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-auto md:ml-auto flex items-center bg-gray-50 px-4 py-2 rounded border border-gray-200 border-dashed justify-between md:justify-start gap-4">
                        <span className="text-[10px] uppercase tracking-widest text-gray-400">Kód</span>
                        <span className="font-mono font-bold text-lg text-brand-blue tracking-wider select-all">SPECTRA100</span>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* --- VISUAL PREVIEW SECTION --- */}
        <div className="relative bg-brand-dark rounded-3xl p-8 md:p-16 mb-24 overflow-hidden border border-white/5">
           {/* Decorative Background */}
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent"></div>
           
           <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              
              {/* Left Content */}
              <div className="lg:w-1/2">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-brand-blue text-[10px] font-bold uppercase tracking-widest mb-6">
                    <Printer size={14} /> Připraveno k tisku
                 </div>
                 <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                    Jak voucher <br/> <span className="text-brand-blue">vypadá?</span>
                 </h3>
                 <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Ihned po zaplacení vám do e-mailu dorazí <strong>profesionální PDF voucher</strong>. 
                    Je navržen ve formátu A4, takže ho můžete snadno vytisknout doma, vložit do obálky a darovat.
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                       <div className="p-3 bg-brand-blue/10 rounded-lg text-brand-blue">
                          <Mail size={24} />
                       </div>
                       <div>
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Doručení ihned</h4>
                          <p className="text-gray-500 text-sm">Automaticky e-mailem do pár minut.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="p-3 bg-brand-blue/10 rounded-lg text-brand-blue">
                          <FileCheck size={24} />
                       </div>
                       <div>
                          <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Formát PDF</h4>
                          <p className="text-gray-500 text-sm">Design A4 připravený pro domácí tisk.</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Right Visual (Real Images Stack) */}
              <div className="lg:w-1/2 w-full relative h-[400px] md:h-[600px] flex items-center justify-center">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-blue/20 rounded-full blur-[80px] -z-10"></div>

                 {/* Stack of 3 overlapping voucher images - Increased size to look like A4 */}
                 {[
                    { rotate: -10, x: -60, y: 20, z: 10, scale: 0.9, img: '/voucher-deep-complete.png' },
                    { rotate: 10, x: 60, y: 20, z: 10, scale: 0.9, img: '/voucher-light-refresh.png' },
                    { rotate: 0, x: 0, y: 0, z: 20, scale: 1.0, img: '/voucher-premium-credit.png' }, 
                 ].map((card, i) => (
                    <motion.div
                       key={i}
                       initial={{ opacity: 0, y: 50 }}
                       whileInView={{ opacity: 1, y: 0, rotate: card.rotate, x: card.x, scale: card.scale }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: i * 0.15 }}
                       // Increased width from w-[260px]/w-[320px] to w-[320px]/w-[450px] for bigger impact
                       className="absolute w-[320px] md:w-[450px] shadow-2xl rounded-sm"
                       style={{ zIndex: card.z }}
                    >
                       <img 
                          src={card.img} 
                          alt="Voucher Preview"
                          className="w-full h-auto rounded-sm shadow-xl object-cover"
                       />
                    </motion.div>
                 ))}
              </div>

           </div>
        </div>

        {/* --- MINI FAQ SECTION --- */}
        <div className="max-w-4xl mx-auto border-t border-gray-200 pt-16">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {VOUCHER_FAQ.map((faq, idx) => (
                 <div key={idx} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                       <HelpCircle className="text-brand-blue opacity-50" size={20} />
                    </div>
                    <div>
                       <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wide mb-2">{faq.q}</h4>
                       <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Vouchers;
