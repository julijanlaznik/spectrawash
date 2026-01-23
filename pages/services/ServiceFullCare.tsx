import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Wind, ShieldCheck, Thermometer, Clock, Handshake, Droplets } from 'lucide-react';
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
      {/* Hero Section */}
      <section className="relative py-24 md:py-44 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/rucni-myti-exterieru-auta.webp" className="w-full h-full object-cover opacity-20 grayscale" alt="Kompletní detailing interiéru Praha" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-xs mb-6 block border-l-2 border-brand-blue pl-4">Komplexní regenerace vozu</span>
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-8 leading-tight uppercase tracking-tighter">
              Detox a hloubková <br/> <span className="text-brand-blue">péče o vůz</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed max-w-2xl">
               Nezaměřujeme se pouze na vnější lesk. Vytváříme v interiéru čisté, hygienicky nezávadné a luxusní prostředí pomocí profesionálních metod čištění.
            </p>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
               <Button onClick={handleBooking}>Rezervovat Program P3</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interior Depth Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
              <div>
                 <h2 className="text-3xl font-heading font-bold mb-8 text-brand-dark uppercase tracking-tight">Regenerace <span className="text-brand-blue">všech povrchů</span></h2>
                 <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
                    Interiér vozu je místem, kde trávíte nejvíce času. Prach, bakterie a mikroorganismy se usazují hluboko ve vláknech a pórech materiálů. Náš program hloubkové péče tyto faktory eliminuje.
                 </p>
                 <div className="space-y-8">
                    <div className="flex gap-4">
                       <div className="p-3 bg-brand-light rounded-lg text-brand-blue shrink-0 h-fit">
                          <Thermometer size={20} />
                       </div>
                       <div>
                          <h4 className="font-bold text-brand-dark text-sm uppercase tracking-widest mb-1">Extrakční čištění</h4>
                          <p className="text-sm text-gray-500 font-light">Hloubkové mokré tepování textilií a koberců, které odstraní nečistoty a alergeny z hloubky vlákna.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="p-3 bg-brand-light rounded-lg text-brand-blue shrink-0 h-fit">
                          <Sparkles size={20} />
                       </div>
                       <div>
                          <h4 className="font-bold text-brand-dark text-sm uppercase tracking-widest mb-1">Ošetření kůže</h4>
                          <p className="text-sm text-gray-500 font-light">Čištění kůže speciálními kartáčky a následná aplikace kondicionérů pro obnovu vláčnosti a matného vzhledu.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="p-3 bg-brand-light rounded-lg text-brand-blue shrink-0 h-fit">
                          <Wind size={20} />
                       </div>
                       <div>
                          <h4 className="font-bold text-brand-dark text-sm uppercase tracking-widest mb-1">Dezinfekce ozónem</h4>
                          <p className="text-sm text-gray-500 font-light">Likvidace pachů a 99,9 % bakterií a virů v celém voze i klimatizačním systému pomocí generátoru ozónu.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="relative">
                 <img src="/kompletni-detailing-vozu.webp" className="rounded-2xl shadow-2xl" alt="Hloubkové čištění kůže a interiéru Praha" />
              </div>
           </div>

           {/* Service Breakdown */}
           <div className="bg-brand-dark text-white rounded-3xl p-8 md:p-16 relative overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
                 <h3 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight">Komplexní Program <span className="text-brand-blue">P3</span></h3>
                 <div className="text-right">
                    <span className="block text-gray-400 uppercase text-xs tracking-[0.3em] mb-2">Orientační doba péče</span>
                    <span className="text-2xl font-bold">5 - 7 Hodin</span>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-12">
                 <div>
                    <h5 className="text-brand-blue font-bold uppercase text-xs tracking-widest mb-6">Exteriér</h5>
                    <ul className="space-y-3 text-sm text-gray-400 font-light">
                       <li className="flex gap-2"><Check size={14} className="text-brand-blue shrink-0" /> Dekontaminace laku</li>
                       <li className="flex gap-2"><Check size={14} className="text-brand-blue shrink-0" /> Mytí podběhů a kol</li>
                       <li className="flex gap-2"><Check size={14} className="text-brand-blue shrink-0" /> Čištění motoru</li>
                       <li className="flex gap-2"><Check size={14} className="text-brand-blue shrink-0" /> Ochranný sealant</li>
                    </ul>
                 </div>
                 <div>
                    <h5 className="text-brand-blue font-bold uppercase text-xs tracking-widest mb-6">Interiér</h5>
                    <ul className="space-y-3 text-sm text-gray-400 font-light">
                       <li className="flex gap-2"><Check size={14} className="text-brand-blue shrink-0" /> Hloubkové tepování</li>
                       <li className="flex gap-2"><Check size={14} className="text-brand-blue shrink-0" /> Čištění stropnice</li>
                       <li className="flex gap-2"><Check size={14} className="text-brand-blue shrink-0" /> Čištění plastů</li>
                       <li className="flex gap-2"><Check size={14} className="text-brand-blue shrink-0" /> Leštění vnitřních skel</li>
                    </ul>
                 </div>
                 <div>
                    <h5 className="text-brand-blue font-bold uppercase text-xs tracking-widest mb-6">Ochrana</h5>
                    <ul className="space-y-3 text-sm text-gray-400 font-light">
                       <li className="flex gap-2"><Check size={14} className="text-brand-blue shrink-0" /> Impregnace plastů</li>
                       <li className="flex gap-2"><Check size={14} className="text-brand-blue shrink-0" /> Výživa kůže</li>
                       <li className="flex gap-2"><Check size={14} className="text-brand-blue shrink-0" /> Tekuté stěrače</li>
                       <li className="flex gap-2"><Check size={14} className="text-brand-blue shrink-0" /> Ochrana textilu</li>
                    </ul>
                 </div>
                 <div className="flex flex-col justify-end">
                    <Button onClick={handleBooking} fullWidth variant="primary">Objednat kompletní péči</Button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-12 uppercase tracking-tight">Kvalita garantovaná detailingovým studiem</h3>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
               <div className="flex flex-col items-center gap-4">
                  <ShieldCheck size={40} className="text-brand-blue" />
                  <span className="text-xs font-bold uppercase tracking-widest">Pojištěné studio</span>
               </div>
               <div className="flex flex-col items-center gap-4">
                  <Clock size={40} className="text-brand-blue" />
                  <span className="text-xs font-bold uppercase tracking-widest">Garantované termíny</span>
               </div>
               <div className="flex flex-col items-center gap-4">
                  <Handshake size={40} className="text-brand-blue" />
                  <span className="text-xs font-bold uppercase tracking-widest">Osobní přístup</span>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ServiceFullCare;