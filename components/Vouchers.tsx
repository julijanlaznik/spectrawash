
import React from 'react';
import { Check, Printer, Mail, HelpCircle, Calendar, FileCheck } from 'lucide-react';
import { VOUCHERS } from '../constants';
import Button from './Button';
import { motion } from 'framer-motion';

const Vouchers: React.FC = () => {
  
  const handleBuyVoucher = (voucherId: number) => {
    // -------------------------------------------------------------------------
    // ZDE VLOŽTE ODKAZY NA PLATEBNÍ BRÁNU (STRIPE / PAYMENT LINK)
    // -------------------------------------------------------------------------
    
    let link = "";

    if (voucherId === 1) {
       // 1. Voucher: Light Refresh (2 500 Kč)
       link = "https://buy.stripe.com/vase-odkaz-1"; 
    } 
    else if (voucherId === 2) {
       // 2. Voucher: Deep Complete (3 800 Kč)
       link = "https://buy.stripe.com/vase-odkaz-2";
    } 
    else if (voucherId === 3) {
       // 3. Voucher: Premium Credit (5 000 Kč)
       link = "https://buy.stripe.com/vase-odkaz-3";
    }

    // Pokud je odkaz nastaven, přesměrujeme uživatele
    if (link && link !== "" && !link.includes("vase-odkaz")) {
      window.location.href = link;
    } else {
      console.log("Platební odkaz není nastaven (ID: " + voucherId + ")");
      // Fallback: Scroll na kontakt pro objednávku formulářem
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const VOUCHER_FAQ = [
    { q: "Jak voucher funguje?", a: "Vyberete si hodnotu, zaplatíte online a voucher vám ihned dorazí na e-mail." },
    { q: "Jak ho obdržím?", a: "Voucher obdržíte v PDF formátu na zadaný e-mail ihned po připsání platby." },
    { q: "Lze ho vytisknout?", a: "Ano, PDF je připraveno ve vysokém rozlišení pro tisk na formát DL nebo A4." },
    { q: "Jak se uplatňuje?", a: "Držitel voucheru si rezervuje termín přes náš formulář (vybere konkrétní voucher v nabídce služeb) nebo telefonicky. Při rezervaci nebo příjezdu se prokáže unikátním kódem uvedeným v e-mailu." },
  ];

  // Helper function to get image path based on voucher ID
  const getVoucherImage = (id: number) => {
    switch(id) {
        case 1: return '/voucher-light-refresh.png';
        case 2: return '/voucher-deep-complete.png';
        case 3: return '/voucher-premium-credit.png';
        default: return '/voucher-light-refresh.png';
    }
  };

  return (
    <section id="vouchers" className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gray-50 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-dark/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HERO HEADER --- */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            Originální dárek
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-brand-dark leading-tight mb-4"
          >
            Dárkové vouchery <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-dark">které dávají smysl</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-500 text-lg font-light"
          >
            Vyberte si voucher a zakupte ho pohodlně online. Doručení e-mailem ihned po zaplacení.
          </motion.p>
        </div>

        {/* --- 3D VOUCHER CARDS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-32">
          {VOUCHERS.map((voucher, index) => {
            // Determine styling based on type
            const isPremium = index === 2; // Credit 5000
            
            return (
              <motion.div
                key={voucher.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col h-full"
              >
                {/* 3D CARD BOX */}
                <div 
                   className={`
                      relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500
                      ${isPremium 
                        ? 'bg-brand-dark text-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10' 
                        : 'bg-white text-brand-dark shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-2xl hover:-translate-y-2'
                      }
                   `}
                >
                  {/* Gloss Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  {/* VOUCHER VISUAL SLOT (Image Preview) */}
                  <div className="p-2">
                    <div 
                      className={`
                        w-full aspect-[1.6/1] rounded-xl relative overflow-hidden shadow-inner
                        ${isPremium 
                          ? 'bg-gray-900 border border-white/5' 
                          : 'bg-gray-50 border border-gray-200'
                        }
                      `}
                    >
                       {/* REAL IMAGE RENDER - Cropped/Centered */}
                       <img 
                          src={getVoucherImage(voucher.id)}
                          alt={voucher.title}
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            // Fallback styling if image missing
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'p-4');
                            e.currentTarget.parentElement!.innerHTML = `<span class="text-[10px] text-gray-400 text-center">Náhled voucheru<br/>(Nahrajte /public${getVoucherImage(voucher.id)})</span>`;
                          }}
                       />
                       
                       {/* Tag overlay if needed */}
                       {voucher.tag && (
                          <div className="absolute top-2 right-2 z-10">
                            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-brand-blue text-white rounded-sm shadow-sm">
                              {voucher.tag}
                            </span>
                          </div>
                       )}
                    </div>
                  </div>

                  {/* CONTENT BODY */}
                  <div className="p-8 flex-grow flex flex-col">
                     <div className="mb-6">
                        <h3 className={`text-2xl font-bold font-heading mb-2 ${isPremium ? 'text-white' : 'text-brand-dark'}`}>
                            {voucher.title}
                        </h3>
                        <p className={`text-sm leading-relaxed ${isPremium ? 'text-gray-400' : 'text-gray-500'}`}>
                           {voucher.description}
                        </p>
                     </div>

                     {/* Features List */}
                     <ul className="space-y-4 mb-8 mt-auto">
                        {voucher.features.map((feature, i) => (
                          <li key={i} className={`flex items-start text-sm ${isPremium ? 'text-gray-300' : 'text-gray-600'}`}>
                              <div className={`mt-0.5 mr-3 rounded-full flex items-center justify-center w-4 h-4 shrink-0
                                  ${isPremium ? 'bg-brand-blue/20 text-brand-blue' : 'bg-gray-100 text-brand-blue'}
                              `}>
                                  <Check size={10} strokeWidth={3} />
                              </div>
                              {feature}
                          </li>
                        ))}
                     </ul>

                     <Button 
                       onClick={() => handleBuyVoucher(voucher.id)}
                       fullWidth 
                       variant={isPremium ? 'primary' : 'dark'}
                       className="mt-2"
                     >
                       Koupit za {voucher.price}
                     </Button>
                     
                     <div className="text-center mt-4">
                        <span className="text-[10px] uppercase tracking-widest text-gray-400 opacity-60">Více detailů níže</span>
                     </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- VISUAL PREVIEW SECTION (Stack) --- */}
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
                    Ihned po zaplacení vám do e-mailu dorazí <strong>profesionální PDF voucher</strong> ve vysokém rozlišení. 
                    Je navržen ve formátu A4, takže ho můžete snadno vytisknout doma, vložit do obálky a darovat pod stromeček.
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
              <div className="lg:w-1/2 w-full relative h-[600px] flex items-center justify-center">
                 {/* Decorative background circle */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-[80px] -z-10"></div>

                 {/* Stack of 3 overlapping voucher images */}
                 {[
                    { 
                      rotate: -15, x: -80, y: 30, z: 10, scale: 0.9, 
                      img: '/voucher-deep-complete.png', 
                      alt: 'Voucher Deep Complete' 
                    },
                    { 
                      rotate: 15, x: 80, y: 30, z: 10, scale: 0.9, 
                      img: '/voucher-light-refresh.png', 
                      alt: 'Voucher Light Refresh' 
                    },
                    { 
                      rotate: 0, x: 0, y: 0, z: 20, scale: 1.0, 
                      img: '/voucher-premium-credit.png', 
                      alt: 'Voucher Premium Credit' 
                    }, // Center on top
                 ].map((card, i) => (
                    <motion.div
                       key={i}
                       initial={{ opacity: 0, y: 100, rotate: 0 }}
                       whileInView={{ 
                          opacity: 1, 
                          y: card.y, 
                          rotate: card.rotate, 
                          x: card.x,
                          scale: card.scale
                       }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: i * 0.15, type: "spring", stiffness: 50 }}
                       className="absolute w-[280px] md:w-[320px] shadow-2xl rounded-sm"
                       style={{ zIndex: card.z }}
                    >
                       {/* REAL IMAGE RENDER */}
                       <img 
                          src={card.img} 
                          alt={card.alt}
                          className="w-full h-auto rounded-sm shadow-xl object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.classList.add('bg-white');
                            e.currentTarget.parentElement!.innerHTML = `
                              <div class="w-full aspect-[1/1.414] flex items-center justify-center text-center p-4 border-2 border-dashed border-gray-400">
                                <span class="text-xs text-gray-500 font-mono">
                                  Zde se zobrazí obrázek:<br/><strong>${card.img}</strong><br/><br/>
                                  Nahrajte soubor do složky public.
                                </span>
                              </div>
                            `;
                          }}
                       />

                       {/* Shine Overlay for Realism */}
                       <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20 pointer-events-none rounded-sm"></div>
                    </motion.div>
                 ))}
              </div>

           </div>
        </div>

        {/* --- BOOKING CTA BAR --- */}
        <div className="max-w-4xl mx-auto bg-brand-blue/10 border border-brand-blue p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-blue text-brand-dark flex items-center justify-center">
                 <Calendar size={24} />
              </div>
              <div>
                 <h4 className="font-heading font-bold text-lg text-brand-dark uppercase">Máte již zakoupený voucher?</h4>
                 <p className="text-sm text-gray-600">Rezervujte si termín online nebo telefonicky. Nezapomeňte uvést kód voucheru.</p>
              </div>
           </div>
           <Button onClick={scrollToContact} variant="dark" className="whitespace-nowrap">
              Uplatnit voucher
           </Button>
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
