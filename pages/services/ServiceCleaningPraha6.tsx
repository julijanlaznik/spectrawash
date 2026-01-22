
import React from 'react';
import { motion } from 'framer-motion';
import { Check, MapPin, Star, ShieldCheck, Car } from 'lucide-react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const ServiceCleaningPraha6: React.FC = () => {
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
      <section className="relative py-20 md:py-32 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/service-p1.webp" className="w-full h-full object-cover grayscale" alt="Ruční mytí auta Praha 6" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Detailing pro Prahu 6</span>
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Ruční mytí auta <br/> <span className="text-brand-blue">Praha 6 – Dejvice</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light">
              Hledáte profesionální ruční mytí v blízkosti Dejvic, Bubenče nebo Suchdola? Naše studio v Roztokách je vzdálené jen 15 minut jízdy a nabízí péči, kterou v centru Prahy nenajdete.
            </p>
            <Button onClick={handleBooking}>Rezervovat termín</Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Prémiová péče kousek od Hanspaulky</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pro majitele vozů z Prahy 6 nabízíme klidné zázemí našeho studia, kde se vašemu vozu věnujeme s maximální precizností. Na rozdíl od uspěchaných pražských myček u nás auto dostane tolik času, kolik skutečně potřebuje.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 font-bold text-brand-dark">
                  <Check className="text-brand-blue" size={20} /> Metoda dvou věder pro nulové poškrábání
                </li>
                <li className="flex items-center gap-3 font-bold text-brand-dark">
                  <Check className="text-brand-blue" size={20} /> Pouze prémiová pH neutrální chemie Gyeon
                </li>
                <li className="flex items-center gap-3 font-bold text-brand-dark">
                  <Check className="text-brand-blue" size={20} /> Možnost pick-up servisu z Vašeho domova
                </li>
              </ul>
            </div>
            <div className="relative">
              <img src="/service-p2.webp" className="rounded-2xl shadow-2xl" alt="Čištění interiéru Praha 6" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Detailingové služby pro Prahu 6</h3>
           <p className="text-gray-400 text-sm leading-relaxed italic">
             Naše ruční mytí auta Praha 6 pravidelně využívají klienti z Dejvic, Bubenče, Suchdola, Hanspaulky a Baby. Nabízíme kompletní programy od základního mytí až po hloubkové čištění interiérů.
           </p>
        </div>
      </section>
    </div>
  );
};

export default ServiceCleaningPraha6;
