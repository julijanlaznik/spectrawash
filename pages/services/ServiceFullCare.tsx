
import React from 'react';
import { motion } from 'framer-motion';
import { Package, Check, Star, Shield, Smartphone, Heart, Sparkles, MapPin, TrendingUp, Handshake, Car } from 'lucide-react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const ServiceFullCare: React.FC = () => {
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
        <div className="absolute inset-0 opacity-20">
          <img src="/kompletni-pece-auto.webp" className="w-full h-full object-cover" alt="Kompletní detailing auta Praha" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-4 block">To nejlepší pro váš vůz – All-in-one</span>
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Kompletní péče <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">o auto Praha</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed">
               Změníme vaše auto k nepoznání. Naše all-in-one balíčky jsou navrženy pro ty, kteří vyžadují absolutní čistotu, zdravé prostředí v interiéru a dokonalý vzhled exteriéru.
            </p>
            <div className="flex flex-wrap gap-4">
               <Button onClick={handleBooking}>Rezervovat balíček P3</Button>
               <div className="flex items-center gap-2 text-white/60 text-sm">
                  <TrendingUp size={16} className="text-brand-blue" /> Zvyšuje prodejní cenu o 15-20 %
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog-like SEO Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 uppercase tracking-tighter text-brand-dark">Proč zvolit kompletní detailing?</h2>
                 <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg">
                    V SpectraWash chápeme, že auto není jen dopravní prostředek. Je to místo, kde trávíte čas, vozíte rodinu a které vás reprezentuje. Běžné vysátí na benzince nikdy neodstraní hluboko usazený prach, bakterie a mastnotu z pórů kůže či plastů. Naše <strong>kompletní péče</strong> vrací vozu stav nového kusu a zajišťuje zdravější prostředí bez alergenů.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                       <Check size={20} className="text-brand-blue mt-1 shrink-0" />
                       <p className="text-sm font-bold text-brand-dark">Zdravější interiér díky dezinfekci ozónem.</p>
                    </div>
                    <div className="flex items-start gap-3">
                       <Check size={20} className="text-brand-blue mt-1 shrink-0" />
                       <p className="text-sm font-bold text-brand-dark">Příprava vozu na prodej pro maximální zisk.</p>
                    </div>
                    <div className="flex items-start gap-3">
                       <Check size={20} className="text-brand-blue mt-1 shrink-0" />
                       <p className="text-sm font-bold text-brand-dark">Ochrana materiálů proti popraskání.</p>
                    </div>
                    <div className="flex items-start gap-3">
                       <Check size={20} className="text-brand-blue mt-1 shrink-0" />
                       <p className="text-sm font-bold text-brand-dark">Dlouhodobě čistý a chráněný exteriér.</p>
                    </div>
                 </div>
              </div>
              <div className="relative group shadow-2xl rounded-3xl overflow-hidden">
                 <img src="/detailing-exterier.webp" className="relative w-full object-cover aspect-video" alt="Detailing interiéru Praha" />
              </div>
           </div>
        </div>
      </section>

      {/* Detailed Package info */}
      <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto mb-16">
               <h2 className="text-3xl font-heading font-bold mb-4 uppercase tracking-tight">Program P3: Vlajková loď SpectraWash</h2>
               <p className="text-gray-500">Tento komplexní balíček detailingových prací je nejoblíbenější volbou našich klientů.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden shadow-2xl text-left bg-white">
               <div className="p-10 border-r border-gray-100">
                  <h4 className="font-heading font-bold text-xl mb-6 flex items-center gap-3 uppercase tracking-tight">
                     <Car className="text-brand-blue" /> Exteriér
                  </h4>
                  <ul className="space-y-4 text-sm text-gray-500">
                     <li className="flex gap-3"><Check size={16} className="text-brand-blue mt-1 shrink-0" /> Šetrné ruční mytí metodu dvou věder</li>
                     <li className="flex gap-3"><Check size={16} className="text-brand-blue mt-1 shrink-0" /> Chemická dekontaminace laku Gyeon</li>
                     <li className="flex gap-3"><Check size={16} className="text-brand-blue mt-1 shrink-0" /> Tekutý vosk pro vysoký lesk</li>
                  </ul>
               </div>
               <div className="bg-brand-dark text-white p-10 border-r border-white/5">
                  <h4 className="font-heading font-bold text-xl mb-6 flex items-center gap-3 uppercase tracking-tight">
                     <Smartphone className="text-brand-blue" /> Interiér
                  </h4>
                  <ul className="space-y-4 text-sm text-gray-400">
                     <li className="flex gap-3"><Check size={16} className="text-brand-blue mt-1 shrink-0" /> Hloubkové mokré tepování sedaček</li>
                     <li className="flex gap-3"><Check size={16} className="text-brand-blue mt-1 shrink-0" /> Čištění kůže vč. hloubkové výživy</li>
                     <li className="flex gap-3"><Check size={16} className="text-brand-blue mt-1 shrink-0" /> Dezinfekce celého vozu Ozónem</li>
                  </ul>
               </div>
               <div className="p-10">
                  <h4 className="font-heading font-bold text-xl mb-6 flex items-center gap-3 uppercase tracking-tight">
                     <Handshake className="text-brand-blue" /> Bonusy
                  </h4>
                  <ul className="space-y-4 text-sm text-gray-500">
                     <li className="flex gap-3"><Check size={16} className="text-brand-blue mt-1 shrink-0" /> Čištění motorového prostoru</li>
                     <li className="flex gap-3"><Check size={16} className="text-brand-blue mt-1 shrink-0" /> Tekuté stěrače na přední okno</li>
                  </ul>
                  <div className="mt-12">
                     <Button fullWidth onClick={handleBooking}>Objednat program P3</Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

// Helper component for Quote
const Quote = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H4.01697C2.9124 8 2.01697 7.10457 2.01697 6V3L10.017 3V15C10.017 18.3137 7.3307 21 4.01697 21H2.01697Z" />
  </svg>
)

export default ServiceFullCare;
