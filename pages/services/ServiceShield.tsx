
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layers, UserCheck, ShieldCheck, Camera, EyeOff, Layout, Brush } from 'lucide-react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const ServiceShield: React.FC = () => {
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
          <img src="/hero-slide-03.webp" className="w-full h-full object-cover grayscale" alt="Barevné ochranné fólie auto Praha" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Styl & Ochrana SpectraWash</span>
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Designové ochranné <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">fólie Praha</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed">
               Dejte svému vozu unikátní vzhled a zároveň ho chraňte. Od Chrome Delete přes tónování světel až po kompletní změnu barvy (wrap).
            </p>
            <Button onClick={handleBooking}>Chci individuální design</Button>
          </motion.div>
        </div>
      </section>

      {/* Blog-like SEO Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 uppercase tracking-tighter text-brand-dark">Detail dělá rozdíl</h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                 Polep auta fólií (wrapping) není jen o změně barvy. Je to o vyjádření osobnosti majitele. V SpectraWash se zaměřujeme na detaily, které jiní přehlížejí. Používáme materiály od světových lídrů jako <strong>3M, Avery Dennison a Inozetek</strong>, které zaručují hluboké barvy a dlouhou životnost.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group border border-gray-100">
                 <div className="w-12 h-12 bg-brand-blue/10 flex items-center justify-center rounded-lg text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <EyeOff size={24} />
                 </div>
                 <h3 className="text-xl font-bold mb-4 font-heading uppercase tracking-tight">Chrome Delete</h3>
                 <p className="text-sm text-gray-500 leading-relaxed">Zbavte se lesklého chromu na lištách oken, masce nebo klikách. Černá lesklá či matná fólie dodá vozu agresivnější a modernější vzhled.</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group border border-gray-100">
                 <div className="w-12 h-12 bg-brand-blue/10 flex items-center justify-center rounded-lg text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Brush size={24} />
                 </div>
                 <h3 className="text-xl font-bold mb-4 font-heading uppercase tracking-tight">Změna barvy</h3>
                 <p className="text-sm text-gray-500 leading-relaxed">Chcete jinou barvu, ale nechcete lakovat? Wrap je ideální řešení, které navíc chrání původní lak pod fólií.</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group border border-gray-100">
                 <div className="w-12 h-12 bg-brand-blue/10 flex items-center justify-center rounded-lg text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Camera size={24} />
                 </div>
                 <h3 className="text-xl font-bold mb-4 font-heading uppercase tracking-tight">Ochrana světel</h3>
                 <p className="text-sm text-gray-500 leading-relaxed">Speciální zatmavené nebo čiré fólie na světlomety, které chrání před pískováním a UV zářením.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Aesthetic Section */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517524008410-b4a165d47953?q=80&w=1964&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
         <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 uppercase leading-tight tracking-tighter">Váš vůz, <span className="text-brand-blue">Vaše vize</span></h2>
            <p className="text-gray-400 text-lg italic border-l-4 border-brand-blue pl-6 mb-10 leading-relaxed text-left">
               "Kvalitní polep není jen o barvě, ale o čistotě provedení v rozích a detailech, které běžné oko nevidí, ale odborník ocení a zákazník si jich všimne při každém nastupování."
            </p>
            <Button variant="primary" onClick={handleBooking}>Poptat individuální polep</Button>
         </div>
      </section>
    </div>
  );
};

export default ServiceShield;
