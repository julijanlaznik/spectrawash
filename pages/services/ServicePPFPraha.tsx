
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Thermometer, Shield } from 'lucide-react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const ServicePPFPraha: React.FC = () => {
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
          <img src="/aplikace-keramiky-na-auto.webp" className="w-full h-full object-cover" alt="PPF fólie Praha" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Neviditelné brnění Vašeho vozu</span>
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              PPF fólie <br/> <span className="text-brand-blue">Praha</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed">
               Jediná 100% ochrana proti odletujícím kamínkům, vandalismu a škrábancům z parkoviště. Polyuretanové fólie se samoregenerační schopností pro náročné majitele vozů v Praze.
            </p>
            <Button onClick={handleBooking}>Vyžádat kalkulaci polepu</Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="/aplikace-ppf-folie.webp" className="rounded-2xl shadow-2xl" alt="Aplikace PPF fólie Praha" />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Stoprocentní ochrana Vaší investice</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                PPF fólie (Paint Protection Film) je nejdokonalejší ochrana laku na současném trhu. V Praze, kde je riziko poškození laku na parkovištích a od kamínků na silnicích vysoké, je PPF fólie nezbytností pro každé nové auto.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-bold text-brand-dark uppercase text-sm">
                  <Thermometer className="text-brand-blue" size={20} /> Samoregenerační schopnost (teplem)
                </div>
                <div className="flex items-center gap-3 font-bold text-brand-dark uppercase text-sm">
                  <ShieldCheck className="text-brand-blue" size={20} /> Extrémní čirost a neviditelný spoj
                </div>
                <div className="flex items-center gap-3 font-bold text-brand-dark uppercase text-sm">
                  <Zap className="text-brand-blue" size={20} /> Záruka 10 let na materiál
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePPFPraha;
