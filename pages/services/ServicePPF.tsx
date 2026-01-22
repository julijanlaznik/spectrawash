
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Thermometer, Droplets, ArrowRight, ShieldCheck, Crosshair, HardHat, CheckCircle } from 'lucide-react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const ServicePPF: React.FC = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/#contact');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="w-full bg-white pt-[70px] xl:pt-[88px]">
      <section className="relative py-24 md:py-40 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/hero-slide-01.webp" className="w-full h-full object-cover" alt="PPF Fólie na auto Praha" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Nekompromisní ochrana laku PPF</span>
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Ochranné PPF <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">fólie Praha</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed">
              Zastavte dolíky od kamínků a škrábance z parkoviště dřív, než vzniknou. Samoregenerační polyuretanová fólie je jediný způsob, jak stoprocentně ochránit lak nového vozu.
            </p>
            <Button onClick={handleBooking}>Vyžádat kalkulaci PPF</Button>
          </motion.div>
        </div>
      </section>

      {/* Expert Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-8 uppercase tracking-tighter">Proč investovat do PPF?</h2>
                 <p className="text-gray-600 mb-8 leading-relaxed text-base">
                    PPF (Paint Protection Film) je vysoce technologický polyuretan, který má unikátní schopnost <strong>absorbovat náraz</strong>. Odletující kamínky se od fólie odrazí, aniž by poškodily lak pod ní. To je zásadní rozdíl oproti keramické ochraně, která chrání proti chemii, ale ne proti mechanickému poškození.
                 </p>
                 <div className="space-y-6">
                    <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border-l-4 border-brand-blue">
                       <Thermometer className="text-brand-blue shrink-0" size={24} />
                       <div>
                          <h4 className="font-bold text-brand-dark uppercase text-xs mb-1 tracking-widest">Samoregenerace</h4>
                          <p className="text-sm text-gray-500">Drobné škrábance zmizí samy působením tepla. Stačí auto postavit na slunce nebo polít teplou vodou.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border-l-4 border-brand-blue">
                       <ShieldCheck className="text-brand-blue shrink-0" size={24} />
                       <div>
                          <h4 className="font-bold text-brand-dark uppercase text-xs mb-1 tracking-widest">Neviditelná ochrana</h4>
                          <p className="text-sm text-gray-500">Pracujeme s fóliemi STEK a XPEL, které jsou na laku prakticky neviditelné a mají extrémní lesk.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="relative">
                 <img src="/service-p1.webp" className="rounded-2xl shadow-2xl grayscale object-cover aspect-video" alt="Instalace PPF fólie Praha" />
                 <div className="absolute -bottom-8 -right-8 bg-brand-dark text-white p-8 rounded-xl shadow-2xl hidden md:block border border-white/10">
                    <div className="text-brand-blue font-black text-3xl mb-1 uppercase">Záruka</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">10 let na materiál</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Variant Grid */}
      <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-center mb-16 uppercase tracking-tight">Nejoblíbenější balíčky PPF</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 uppercase font-heading">Přední část</h3>
                  <p className="text-xs text-gray-400 mb-6 font-bold uppercase tracking-widest">Základní ochrana</p>
                  <ul className="text-sm text-gray-500 space-y-3 mb-8">
                     <li>Nárazník</li>
                     <li>Kapota</li>
                     <li>Blatníky</li>
                     <li>Světlomety</li>
                  </ul>
                  <Button variant="dark" fullWidth onClick={handleBooking}>Ceník Předek</Button>
               </div>
               <div className="bg-brand-dark text-white p-10 rounded-2xl shadow-2xl text-center relative md:-translate-y-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-brand-dark px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded">Nejprodávanější</div>
                  <h3 className="text-2xl font-bold mb-4 uppercase font-heading">Celý vůz</h3>
                  <p className="text-xs text-brand-blue mb-6 font-bold uppercase tracking-widest">Totální jistota</p>
                  <ul className="text-sm text-gray-400 space-y-3 mb-8">
                     <li>Všechny lakované díly</li>
                     <li>Střecha</li>
                     <li>Sloupky</li>
                     <li>Prahové lišty</li>
                  </ul>
                  <Button variant="primary" fullWidth onClick={handleBooking}>Ceník Full</Button>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 uppercase font-heading">Individuální</h3>
                  <p className="text-xs text-gray-400 mb-6 font-bold uppercase tracking-widest">Dle potřeb</p>
                  <ul className="text-sm text-gray-500 space-y-3 mb-8">
                     <li>Zatmavení světel</li>
                     <li>Chrome delete</li>
                     <li>Piano black díly</li>
                     <li>Prahové hrany</li>
                  </ul>
                  <Button variant="dark" fullWidth onClick={handleBooking}>Poptat díly</Button>
               </div>
            </div>
         </div>
      </section>

      {/* Footer Local SEO */}
      <section className="py-16 bg-white text-center border-t border-gray-100">
         <div className="container mx-auto px-6 max-w-4xl">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Instalace PPF fólií v Praze a Středočeském kraji</h3>
            <p className="text-gray-400 text-xs leading-relaxed italic">
               Díky naší specializaci na prémiové a sportovní vozy k nám jezdí klienti z celé Prahy a okolí. Nabízíme profesionální zázemí v Roztokách, kde je váš vůz v bezpečí a pod dohledem. <strong>PPF fólie Praha</strong> v podání SpectraWash je synonymem pro preciznost.
            </p>
         </div>
      </section>
    </div>
  );
};

export default ServicePPF;
