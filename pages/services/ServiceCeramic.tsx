
import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Shield, Zap, Sparkles, MapPin, Star, AlertTriangle, Droplets, CheckCircle } from 'lucide-react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const ServiceCeramic: React.FC = () => {
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
          <img src="/keramicka-ochrana-auta.webp" className="w-full h-full object-cover grayscale" alt="Keramická ochrana laku Praha" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Autorizované studio Gyeon Praha</span>
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Keramická ochrana <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">laku Praha</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed">
              Zastavte stárnutí svého vozu. Keramický povlak je nekompromisní ochrana, která zajistí zrcadlový lesk, snadnou údržbu a vysokou prodejní cenu vašeho vozu.
            </p>
            <Button onClick={handleBooking}>Vyžádat kalkulaci keramiky</Button>
          </motion.div>
        </div>
      </section>

      {/* Authority Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
               <img src="/portfolio-01.webp" className="rounded-2xl shadow-2xl grayscale" alt="Aplikace keramiky Praha" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 bg-brand-blue/90 rounded-full flex items-center justify-center animate-pulse">
                     <Droplets className="text-brand-dark" size={32} />
                  </div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
                Co je to "keramika" a proč ji potřebujete?
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-base">
                <p>
                  Keramická ochrana laku je tekutý polymer na bázi oxidu křemičitého (SiO2). Po vytvrdnutí vytvoří na povrchu laku neviditelnou, extrémně tvrdou vrstvu, která se s lakem chemicky spojí. Na rozdíl od vosku, který vydrží týdny, keramika chrání váš vůz až 5 let.
                </p>
                <p>
                  V SpectraWash používáme prémiové produkty <strong>Gyeon</strong>, které nabízí nejlepší hydrofobní vlastnosti na trhu. Voda a nečistoty z laku prostě stečou, což znamená, že auto vydrží čisté mnohem déle.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-3 font-bold text-brand-dark">
                    <CheckCircle className="text-brand-blue" size={20} /> Ochrana proti UV záření a oxidaci
                  </li>
                  <li className="flex items-center gap-3 font-bold text-brand-dark">
                    <CheckCircle className="text-brand-blue" size={20} /> Odolnost vůči ptačímu trusu a chemii
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Table: Comparison */}
      <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-heading font-bold text-center mb-16 uppercase tracking-tight">Vosk vs. Keramika Gyeon</h2>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
               <table className="w-full text-left">
                  <thead className="bg-brand-dark text-white font-heading uppercase text-xs tracking-widest">
                     <tr>
                        <th className="p-6">Vlastnost</th>
                        <th className="p-6">Tradiční vosk</th>
                        <th className="p-6 text-brand-blue">Keramika Infinite</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm">
                     <tr className="border-b border-gray-100">
                        <td className="p-6 font-bold">Životnost</td>
                        <td className="p-6">2-4 měsíce</td>
                        <td className="p-6 text-brand-blue font-bold">Až 60 měsíců</td>
                     </tr>
                     <tr className="border-b border-gray-100">
                        <td className="p-6 font-bold">Tvrdost povrchu</td>
                        <td className="p-6">Nízká</td>
                        <td className="p-6 text-brand-blue font-bold">9H (Extrémní)</td>
                     </tr>
                     <tr>
                        <td className="p-6 font-bold">Mytí vozu</td>
                        <td className="p-6">Standardní</td>
                        <td className="p-6 text-brand-blue font-bold">Samočistící efekt</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark text-white text-center">
         <div className="container mx-auto px-6">
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-12 uppercase tracking-tighter">Váš vůz si zaslouží <span className="text-brand-blue">zrcadlový lesk</span></h3>
            <div className="flex flex-wrap justify-center gap-6">
               <Button onClick={handleBooking}>Chci rezervovat keramiku</Button>
               <Button variant="outline" onClick={() => navigate('/kompletni-pece-o-auto')}>Balíček s interiérem</Button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ServiceCeramic;
