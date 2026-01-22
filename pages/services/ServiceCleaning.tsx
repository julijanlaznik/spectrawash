
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, Clock, ShieldCheck, MapPin, Info, Car, Thermometer, Shield } from 'lucide-react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const ServiceCleaning: React.FC = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/#contact');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const steps = [
    { title: "Chemická dekontaminace", desc: "Odstranění náletové rzi a asfaltu pomocí pH neutrálních roztoků, které nepoškodí lak." },
    { title: "Aktivní pěna & šampon", desc: "Používáme chemii Gyeon, která uvolní špínu i z neviditelných pórů laku." },
    { title: "Metoda dvou věder", desc: "Absolutní standard SpectraWash. Separátní nádoby s mřížkou eliminují poškrábání." },
    { title: "Sušení horkým vzduchem", desc: "Minimalizujeme kontakt s vozem. Voda je vyfoukána i z těžko dostupných spár." }
  ];

  return (
    <div className="w-full bg-white pt-[70px] xl:pt-[88px]">
      {/* Hero SEO Section */}
      <section className="relative py-24 md:py-40 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/rucni-myti-auta-praha.webp" className="w-full h-full object-cover grayscale" alt="Prémiové ruční mytí auta Praha" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Detailingové studio Roztoky u Prahy</span>
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Profesionální ruční <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">mytí auta Praha</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed">
              Váš vůz si zaslouží víc než jen vodu a mýdlo. Nabízíme nejšetrnější ruční mytí v okolí Prahy 6, které chrání lak před poškrábáním a navrací mu showroomový lesk.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={handleBooking}>Rezervovat termín mytí</Button>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin size={16} className="text-brand-blue" /> Roztoky – 15 min z centra Dejvic
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authority Content Section */}
      <section className="py-24 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
                Proč je ruční mytí v SpectraWash jiná liga?
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  Většina majitelů aut dělá chybu – jezdí do automatických myček. Kartáče v myčkách fungují jako jemný brusný papír, který v laku zanechává pavučiny (swirls). Lak ztrácí hloubku a auto vypadá starší. 
                </p>
                <p>
                  U nás v <strong>Roztokách</strong> používáme postupy, které jsou k laku maximálně ohleduplné. Každý krok, od předmytí až po sušení, je navržen tak, aby lak zůstal v perfektním stavu. Naše technika zahrnuje mytí podběhů a detailní čištění zádveří v základní ceně.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3 text-brand-dark font-bold text-sm">
                    <Check size={18} className="text-brand-blue" /> Bezpečné pro keramiku a PPF
                  </div>
                  <div className="flex items-center gap-3 text-brand-dark font-bold text-sm">
                    <Check size={18} className="text-brand-blue" /> pH neutrální certifikovaná chemie
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
               <div className="absolute -inset-4 bg-brand-blue/10 rounded-3xl -z-10 rotate-3"></div>
               <img src="/Myti-interieru-auta-praha.webp" className="rounded-2xl shadow-2xl w-full object-cover aspect-video" alt="Mytí interiéru auta Praha" />
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Náš proces krok za krokem</h2>
            <p className="text-gray-500">Transparentnost je pro nás klíčová. Podívejte se, jak budeme o vaše auto pečovat.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-brand-blue font-heading font-black text-4xl mb-6 opacity-20">0{i+1}</div>
                <h3 className="text-lg font-bold mb-3 font-heading uppercase tracking-tight">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Improved Internal Linking Section (3 COLUMNS) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-brand-dark rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center lg:text-left">Hledáte víc než jen mytí?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="flex flex-col bg-white/5 p-8 border border-white/10 rounded-2xl">
                  <h4 className="text-brand-blue font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
                    <Info size={16} /> Detailing interiéru
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    Hloubkové tepování sedaček, čištění kůže Gyeon a dezinfekce ozónem pro zdravé prostředí ve vašem voze.
                  </p>
                  <Button variant="outline" onClick={() => navigate('/kompletni-pece-o-auto')}>Více o interiéru</Button>
                </div>
                <div className="flex flex-col bg-white/5 p-8 border border-white/10 rounded-2xl">
                  <h4 className="text-brand-blue font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
                    <ShieldCheck size={16} /> Keramická Ochrana
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    Extrémní lesk a hydrofobita. Keramický povlak ochrání váš lak před UV zářením a chemií až na 5 let.
                  </p>
                  <Button variant="outline" onClick={() => navigate('/keramicka-ochrana-laku')}>Více o keramice</Button>
                </div>
                <div className="flex flex-col bg-white/5 p-8 border border-white/10 rounded-2xl">
                  <h4 className="text-brand-blue font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
                    <Shield size={16} /> PPF Ochranné Fólie
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    Stoprocentní ochrana proti kamínkům a vandalismu. Samoregenerační fólie, které jsou na voze neviditelné.
                  </p>
                  <Button variant="outline" onClick={() => navigate('/ppf-folie')}>Více o PPF fóliích</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Footer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <h3 className="text-xl font-bold mb-6 uppercase tracking-widest text-brand-dark">Ruční mytí auta Praha 6 a okolí</h3>
           <p className="text-gray-500 text-sm leading-relaxed italic">
             Naše studio SpectraWash v Roztokách u Prahy je ideální volbou pro klienty z <strong>Dejvic, Bubenče, Suchdola</strong> a celého Středočeského kraje. Nabízíme klidné prostředí a špičkovou technologii mytí, kterou v centru Prahy nenajdete.
           </p>
        </div>
      </section>
    </div>
  );
};

export default ServiceCleaning;
