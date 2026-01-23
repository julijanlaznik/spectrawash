import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Gem, Droplets, Clock, Zap, Award, Search, CheckCircle2, Layers } from 'lucide-react';
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

  const techSpecs = [
    { title: "Krystalická struktura", desc: "Vytvoření pevné vazby s lakem na molekulární úrovni pro maximální odolnost." },
    { title: "Hydrofobní povrch", desc: "Povrch odpuzující vodu a nečistoty, což výrazně usnadňuje následnou údržbu vozu." },
    { title: "UV Stabilizace", desc: "Ochrana pigmentu laku před degradací a oxidací způsobenou slunečním zářením." },
    { title: "Chemická rezistence", desc: "Vysoká odolnost proti agresivním čisticím prostředkům, soli a ptačímu trusu." }
  ];

  return (
    <div className="w-full bg-white pt-[70px] xl:pt-[88px]">
      {/* Hero Section */}
      <section className="relative py-24 md:py-44 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/keramicka-ochrana-laku.webp" className="w-full h-full object-cover opacity-20 grayscale" alt="Keramická ochrana laku Praha" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl">
            <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-6 block border-l-2 border-brand-blue pl-4">Prémiová ochrana laku</span>
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-8 leading-tight uppercase tracking-tighter">
              Keramická <br/> <span className="text-brand-blue">ochrana laku</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed max-w-2xl">
              Dlouhodobá technologická ochrana laku s vysokým leskem a extrémní odolností. Profesionální aplikace pro nové i ojeté vozy v Praze.
            </p>
            <Button onClick={handleBooking}>Vyžádat kalkulaci</Button>
          </motion.div>
        </div>
      </section>

      {/* Technical Focus Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
               <img src="/aplikace-keramiky-auto.webp" className="rounded-2xl shadow-2xl" alt="Aplikace keramiky Praha" />
               <div className="absolute -bottom-6 -right-6 bg-brand-blue p-8 rounded-xl shadow-xl hidden md:block">
                  <div className="text-brand-dark font-black text-4xl mb-1 tracking-tighter">9H</div>
                  <div className="text-brand-dark font-bold text-xs uppercase tracking-widest">Tvrdost ochrany</div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-heading font-bold mb-8 text-brand-dark uppercase tracking-tight">Technologie <span className="text-brand-blue">SiO2</span></h2>
              <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed">
                <p>
                  Keramická ochrana laku je moderní alternativou k voskování. Jedná se o tekutý polymer, který po správné aplikaci a vytvrdnutí vytváří krystalickou vrstvu, která se stává součástí povrchu vozu.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                  {techSpecs.map((spec, i) => (
                    <div key={i}>
                       <h4 className="font-bold text-brand-dark uppercase text-xs tracking-widest mb-3 flex items-center gap-2">
                         <CheckCircle2 size={16} className="text-brand-blue" /> {spec.title}
                       </h4>
                       <p className="text-sm text-gray-500 font-light leading-relaxed">{spec.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6 uppercase tracking-tight">Postup aplikace</h2>
             <p className="text-gray-500 font-light italic">"Kvalita keramické ochrany je přímo úměrná kvalitě přípravy povrchu."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Search />, title: "Detailní příprava", desc: "Zahrnuje vícestupňové mytí, chemickou a mechanickou dekontaminaci (clay) pro odstranění všech nečistot." },
              { icon: <Zap />, title: "Strojní leštění", desc: "Keramiku aplikujeme pouze na lak zbavený defektů. Provádíme korekci laku pro dosažení maximálního optického jasu." },
              { icon: <Layers />, title: "Aplikace & Aktivace", desc: "Nanesení povlaku ve stabilním prostředí a následné vytvrzení pomocí infračervených zářičů pro garantovanou životnost." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-blue mb-8">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 font-heading uppercase tracking-widest text-brand-dark">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-24 bg-white border-t border-gray-100">
         <div className="container mx-auto px-6 text-center max-w-4xl">
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-8 uppercase">Údržba keramické ochrany</h3>
            <p className="text-gray-600 font-light text-lg mb-12">
               I když keramický povlak výrazně omezuje špinění vozu, pro zachování jeho hydrofobních vlastností doporučujeme pravidelné ruční mytí pH neutrálními šampony a pravidelnou regeneraci vrchní vrstvy.
            </p>
            <Button onClick={handleBooking} className="px-16">Poptat konzultaci stavu laku</Button>
         </div>
      </section>
    </div>
  );
};

export default ServiceCeramicPraha;