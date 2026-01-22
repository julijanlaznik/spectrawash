
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Gem, Star, Droplets, CheckCircle, Clock, Thermometer, ShieldCheck, Award, Zap } from 'lucide-react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const ServiceCeramicPraha: React.FC = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/#contact');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const benefits = [
    {
      icon: <Shield className="text-brand-blue" size={24} />,
      title: "Chemická odolnost",
      desc: "Chrání lak před agresivní solí v zimě, ptačím trusem i kyselými dešti."
    },
    {
      icon: <Droplets className="text-brand-blue" size={24} />,
      title: "Extrémní hydrofobita",
      desc: "Voda a nečistoty se na povrchu neudrží. Mytí zabere zlomek času."
    },
    {
      icon: <Gem className="text-brand-blue" size={24} />,
      title: "Hluboký lesk",
      desc: "Keramika vytvoří sklovitý efekt, který zvýrazní hloubku metalízy."
    },
    {
      icon: <Zap className="text-brand-blue" size={24} />,
      title: "UV Ochrana",
      desc: "Zabraňuje vyšisování a oxidaci laku vlivem slunečního záření."
    }
  ];

  return (
    <div className="w-full bg-white pt-[70px] xl:pt-[88px]">
      {/* HERO SECTION - Unified sizes */}
      <section className="relative py-20 md:py-32 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/keramicka-ochrana-laku-praha-gyeon.webp" className="w-full h-full object-cover grayscale" alt="Keramická ochrana laku Praha" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Certifikované studio Gyeon Praha</span>
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Keramická ochrana <br/> <span className="text-brand-blue">laku Praha</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed">
              Nejmodernější způsob ochrany vozu pro pražské silnice. Investujte do ochrany, která se vrátí v podobě snadné údržby a vyšší prodejní ceny vozu.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button onClick={handleBooking}>Poptat keramiku</Button>
              <div className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-widest font-bold">
                 <Clock size={16} className="text-brand-blue" /> Životnost až 5 let
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO CONTENT - Unified sizes */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-brand-dark leading-tight uppercase tracking-tighter">Nekompromisní brnění <br/>pro Váš vůz</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-base mb-10">
                <p>
                  V Praze a okolí je lak vozu vystaven extrémním podmínkám – od prachu z brzd v husté dopravě až po chemické posypy v zimních měsících. Běžný vosk tuto zátěž nevydrží déle než pár týdnů.
                </p>
                <p>
                  Keramická ochrana (SiO2) vytváří permanentní vazbu s lakem, čímž vzniká vrstva s tvrdostí až 9H. Výsledkem je auto, které vypadá stále jako čerstvě umyté.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                 {benefits.map((benefit, i) => (
                   <div key={i} className="flex flex-col gap-1">
                      <div className="mb-1">{benefit.icon}</div>
                      <h4 className="font-bold text-brand-dark uppercase text-[11px] tracking-widest">{benefit.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{benefit.desc}</p>
                   </div>
                 ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-blue/10 rounded-3xl -z-10 rotate-3"></div>
              <img src="/aplikace-keramiky-praha.webp" className="rounded-2xl shadow-2xl w-full object-cover aspect-video" alt="Detailing keramika Praha" />
            </div>
          </div>
        </div>
      </section>

      {/* THE PROCESS SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Proces aplikace</h2>
            <p className="text-gray-500">Aplikace keramiky je 90 % o přípravě. V SpectraWash Praha nezkracujeme cesty.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Dekontaminace", desc: "Důkladné chemické a mechanické (Clay) vyčištění laku od asfaltu a náletové rzi." },
              { title: "Leštění laku", desc: "Provádíme minimálně jednostupňové leštění, aby byl lak dokonale hladký a bez škrábanců." },
              { title: "Aplikace", desc: "Nanášení keramického povlaku v kontrolovaném prostředí s následným vytvrdnutím." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-brand-blue font-heading font-black text-4xl mb-6 opacity-20">0{i+1}</div>
                <h3 className="text-lg font-bold mb-3 font-heading uppercase tracking-tight">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES / CTA */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
           <Award className="text-brand-blue mx-auto mb-8" size={64} />
           <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 uppercase tracking-tighter">Investice do hodnoty vozu</h2>
           <p className="text-lg text-gray-400 mb-12 font-light leading-relaxed">
             Cena keramické ochrany na naší pobočce v Roztokách začíná na 5 000 Kč. Každá aplikace zahrnuje poradenství pro následnou údržbu.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button onClick={handleBooking}>Získat kalkulaci</Button>
              <Button variant="outline" onClick={() => navigate('/kompletni-pece-o-auto')}>Balíček P3</Button>
           </div>
        </div>
      </section>

      {/* SEO FOOTER TEXT */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <h3 className="text-xl font-bold mb-6 uppercase tracking-widest text-brand-dark">Proč SpectraWash Praha?</h3>
           <p className="text-gray-400 text-sm leading-relaxed italic mb-4">
             Jako certifikované studio prémiové značky <strong>Gyeon</strong> garantujeme správný technologický postup. Keramika na auto Praha od SpectraWash není jen "rychlovoskování", ale profesionální detailingový proces.
           </p>
           <p className="text-gray-400 text-sm leading-relaxed italic">
             Našimi klienty jsou majitelé vozů z celého regionu <strong>Praha 6, Dejvice, Bubenče a Suchdola</strong>, kteří hledají nekompromisní kvalitu.
           </p>
        </div>
      </section>
    </div>
  );
};

export default ServiceCeramicPraha;
