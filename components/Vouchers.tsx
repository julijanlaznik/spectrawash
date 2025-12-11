
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
       link = "https://buy.stripe.com/3cI7sLgxJaf13lUeNwaEE00"; 
    } 
    else if (voucherId === 2) {
       // 2. Voucher: Deep Complete
       link = "https://buy.stripe.com/aFaeVdftF2Mzf4C0WGaEE01";
    } 
    else if (voucherId === 3) {
       // 3. Voucher: Premium Credit
       link = "https://buy.stripe.com/28EcN5bdp9aX09IcFoaEE02";
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
        // Používáme verze s příponou -web.png pro zobrazení na webu
        case 1: return '/voucher-light-refresh-web.png';
        case 2: return '/voucher-deep-complete-web.png';
        case 3: return '/voucher-premium-credit-web.png';
        default: return '/voucher-light-refresh-web.png';
    }
  };

  const getDiscountedPrice = (priceStr: string) => {
    const num = parseInt(priceStr.replace(/\D/g, ''));
    const discounted = num - 100;
    return discounted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " Kč";
  };

  return (
    <section id="vouchers" className="pt-28 pb-24 md:pt-40 md:pb-32 bg-gray-50 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-dark/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- 1. HERO HEADER (Compact & Direct) --- */}
        <div className="flex flex-col md:items-center md:text-center max-w-4xl mx-auto mb-8 md:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-2 md:justify-center"
          >
             <span className="w-8 h-[1px] bg-brand-blue md:hidden"></span>
             <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs">
                Originální dárek
             </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-heading font-bold text-brand-dark leading-tight mb-4"
          >
            Vouchery <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-dark">SpectraWash</span>
          </motion.h2>
          
          <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-500 text-sm md:text-lg font-light max-w-2xl md:mx-auto mb-6 leading-relaxed"
          >
            Vyberte prémiovou péči, zaplaťte kartou a <strong>PDF voucher vám dorazí ihned</strong> do e-mailu.
          </motion.p>

          {/* TRUST BAR - Moved here, compact */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-wide"
          >
             <span className="flex items-center gap-1.5"><Zap size={14} className="text-brand-blue" /> Doručení ihned</span>
             <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-brand-blue" /> Platnost 1 rok</span>
             <span className="flex items-center gap-1.5"><CreditCard size={14} className="text-brand-blue" /> Bezpečná platba</span>
          </motion.div>
        </div>

        {/* --- 2. VOUCHER CARDS GRID (THE MAIN CONTENT) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start mb-16 md:mb-24">
          {VOUCHERS.map((voucher, index) => {
            const isPremium = index === 2; // Credit 5000
            const discountedPrice = getDiscountedPrice(voucher.price);
            
            return (
              <motion.div
                key={voucher.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }} // Faster stagger
                className="group h-full"
              >
                {/* CARD CONTAINER */}
                <div 
                   className={`
                      relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300
                      ${isPremium 
                        ? 'bg-brand-dark text-white shadow-xl ring-1 ring-white/10' 
                        : 'bg-white text-brand-dark shadow-lg hover:shadow-xl border border-gray-100'
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
                          loading="eager" // Load fast for LCP
                          decoding="sync"
                          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                       />
                       
                       {/* Tags - Highlighted */}
                       {voucher.tag && (
                          <div className="absolute top-3 left-3 z-10">
                            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-brand-blue text-brand-dark rounded shadow-lg flex items-center gap-1">
                               <Sparkles size={10} fill="currentColor" /> {voucher.tag}
                            </span>
                          </div>
                       )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-8 flex-grow flex flex-col">
                     <div className="mb-6">
                        <div className="flex justify-between items-start gap-4 mb-2">
                            <h3 className={`text-xl md:text-2xl font-bold font-heading ${isPremium ? 'text-white' : 'text-brand-dark'}`}>
                                {voucher.title}
                            </h3>
                        </div>
                        <p className={`text-sm leading-relaxed ${isPremium ? 'text-gray-400' : 'text-gray-600'}`}>
                           {voucher.description}
                        </p>
                     </div>

                     <ul className="space-y-2.5 mb-8 mt-auto">
                        {voucher.features.map((feature, i) => (
                          <li key={i} className={`flex items-start text-xs md:text-sm ${isPremium ? 'text-gray-300' : 'text-gray-600'}`}>
                              <Check size={14} className={`mt-0.5 mr-2.5 shrink-0 ${isPremium ? 'text-brand-blue' : 'text-green-500'}`} strokeWidth={3} />
                              {feature}
                          </li>
                        ))}
                     </ul>

                     {/* Price Box */}
                     <div className={`mt-auto mb-5 p-3 md:p-4 rounded-xl border ${isPremium ? 'bg-white/5 border-white/10' : 'bg-blue-50/50 border-blue-100'}`}>
                        <div className="flex items-center justify-between mb-1">
                            <span className={`text-[10px] uppercase tracking-widest ${isPremium ? 'text-gray-500' : 'text-gray-400'}`}>Běžná cena</span>
                            <span className={`text-xs line-through decoration-red-400 decoration-2 ${isPremium ? 'text-gray-500' : 'text-gray-400'}`}>
                                {voucher.price}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                                <Tag size={12} /> Slevový kód
                            </span>
                            <span className={`text-xl md:text-2xl font-heading font-bold ${isPremium ? 'text-white' : 'text-brand-dark'}`}>
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
                           className="relative h-12 md:h-14"
                         >
                           Koupit online
                         </Button>
                     </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- 3. PROMO BANNER (Sleva 100 Kč) --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-20 md:mb-24"
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

        {/* --- 4. VISUAL PREVIEW SECTION --- */}
        <div className="relative bg-brand-dark rounded-3xl p-8 md:p-16 mb-20 overflow-hidden border border-white/5">
           {/* Decorative Background */}
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent"></div>
           
           <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              
              {/* Left Content */}
              <div className="lg:w-1/2">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-brand-blue text-[10px] font-bold uppercase tracking-widest mb-6">
                    <Printer size={14} /> Připraveno k tisku
                 </div>
                 <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                    Jak voucher <br/> <span className="text-brand-blue">vypadá?</span>
                 </h3>
                 <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
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
              <div className="lg:w-1/2 w-full relative h-[350px] md:h-[600px] flex items-center justify-center">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-brand-blue/20 rounded-full blur-[80px] -z-10"></div>

                 {/* Stack of 3 overlapping voucher images */}
                 {[
                    { rotate: -10, x: -40, y: 10, z: 10, scale: 0.9, img: '/voucher-deep-complete.png' },
                    { rotate: 10, x: 40, y: 10, z: 10, scale: 0.9, img: '/voucher-light-refresh.png' },
                    { rotate: 0, x: 0, y: 0, z: 20, scale: 1.0, img: '/voucher-premium-credit.png' }, 
                 ].map((card, i) => (
                    <motion.div
                       key={i}
                       initial={{ opacity: 0, y: 50 }}
                       whileInView={{ opacity: 1, y: 0, rotate: card.rotate, x: card.x, scale: card.scale }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: i * 0.15 }}
                       // Responsive width for mobile/desktop
                       className="absolute w-[280px] md:w-[450px] shadow-2xl rounded-sm"
                       style={{ zIndex: card.z }}
                    >
                       <img 
                          src={card.img} 
                          alt="Voucher Preview"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto rounded-sm shadow-xl object-cover"
                       />
                    </motion.div>
                 ))}
              </div>

           </div>
        </div>

        {/* --- 5. REDEEM BANNER (Máte již voucher?) - MOVED DOWN --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16 border-t border-gray-200 pt-12"
        >
            <div className="flex flex-col items-center text-center">
                <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-4">Uplatnění voucheru</span>
                <h4 className="font-heading font-bold text-brand-dark text-2xl mb-4">Máte již zakoupený voucher?</h4>
                <p className="text-gray-500 mb-6 max-w-lg">
                   Rezervujte si termín pro své vozidlo jednoduše online. Do poznámky v rezervaci uveďte kód vašeho voucheru.
                </p>
                <Button 
                    onClick={handleRedeemClick} 
                    variant="outline" 
                    className="border-gray-300 text-gray-600 hover:border-brand-dark hover:text-brand-dark"
                >
                    <Calendar size={18} className="mr-2" /> Rezervovat uplatnění
                </Button>
            </div>
        </motion.div>

        {/* --- 6. MINI FAQ SECTION --- */}
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
