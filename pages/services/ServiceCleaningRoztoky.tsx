
import React from 'react';
import { motion } from 'framer-motion';
import { Check, MapPin, Clock, Sparkles } from 'lucide-react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const ServiceCleaningRoztoky: React.FC = () => {
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
          <img src="/hero-slide-01.webp" className="w-full h-full object-cover" alt="Ruční mytí auta Roztoky" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Vaše lokální myčka</span>
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Ruční mytí auta <br/> <span className="text-brand-blue">Roztoky a okolí</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light">
              Jsme hrdí na to, že můžeme nabídnout špičkové detailingové služby přímo v Roztokách. Už nemusíte jezdit do Prahy pro profesionální péči o svůj vůz.
            </p>
            <Button onClick={handleBooking}>Rezervovat termín v Roztokách</Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center uppercase tracking-tight">Kvalita bez kompromisů u Vás za rohem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 p-8 rounded-xl">
                <Clock className="text-brand-blue mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2 uppercase">Šetříme Váš čas</h3>
                <p className="text-gray-500 text-sm">Pro obyvatele Roztok nabízíme bezplatný odvoz a dovoz vozu zpět k Vám domů.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <Sparkles className="text-brand-blue mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2 uppercase">Lokální expert</h3>
                <p className="text-gray-500 text-sm">Známe potřeby našich sousedů a garantujeme osobní přístup každému vozu.</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-center italic">
              "V Roztokách tvoříme komunitu milovníků aut. Naše mytí není jen o vodě, je to o vášni a poctivé ruční práci."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCleaningRoztoky;
