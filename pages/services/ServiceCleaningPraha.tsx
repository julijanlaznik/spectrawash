import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Check, MapPin, Sparkles, Clock, Droplets, ShieldCheck, Wind, Car } from 'lucide-react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const ServiceCleaningPraha: React.FC = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/#contact');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const steps = [
    { title: "Chemická dekontaminace", desc: "Odstranění náletové rzi a brzdového prachu pomocí pH neutrálních přípravků. Klíčový krok před kontaktním mytím.", icon: <Droplets className="text-brand-blue" /> },
    { title: "Bezpečné předmytí", desc: "Aplikace aktivní pěny pro uvolnění hrubých nečistot bez rizika poškrábání laku.", icon: <Sparkles className="text-brand-blue" /> },
    { title: "Metoda dvou věder", desc: "Profesionální ruční mytí s využitím ochranných mřížek, které eliminují kontakt nečistot s mycí rukavicí.", icon: <Car className="text-brand-blue" /> },
    { title: "Šetrné sušení", desc: "Využití horkého filtrovaného vzduchu a prémiových mikrovláken pro zamezení vzniku stop po vodě.", icon: <Wind className="text-brand-blue" /> }
  ];

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Ruční mytí aut Praha | Profesionální detailingové mytí – SpectraWash</title>
        <meta
          name="description"
          content="Profesionální ruční mytí aut v Praze a okolí. Šetrné detailingové postupy, dekontaminace laku, bezpečné mytí bez poškození. Rezervujte termín u SpectraWash."
        />
        <link
          rel="canonical"
          href="https://spectrawash.cz/rucni-myti-auta-praha"
        />
      </Helmet>

      <div className="w-full bg-white pt-[70px] xl:pt-[88px]">
        {/* Hero Section */}
        <section className="relative py-24 md:py-44 bg-brand-dark text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/profesionalni-rucni-myti-auta.webp"
              className="w-full h-full object-cover opacity-20 grayscale"
              alt="Prémiové ruční mytí aut Praha"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
              <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-6 block border-l-2 border-brand-blue pl-4">
                Detailingové studio Roztoky
              </span>

              <h1 className="text-4xl md:text-7xl font-heading font-bold mb-8 leading-tight uppercase tracking-tighter">
                Profesionální <br />
                <span className="text-brand-blue">ruční mytí aut</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed max-w-2xl">
                Specializované pracoviště pro klienty z Prahy a okolí. Poskytujeme šetrnou péči o exteriér i interiér vozů s důrazem na zachování hodnoty laku.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button onClick={handleBooking}>Rezervovat termín</Button>
                <div className="flex items-center gap-2 text-white/60 text-sm font-bold uppercase tracking-widest">
                  <MapPin size={16} className="text-brand-blue" /> 15 min z Prahy 6
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-8 text-brand-dark uppercase tracking-tight">
                  Proč zvolit profesionální <span className="text-brand-blue">detailingové mytí</span>?
                </h2>

                <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                  <p>
                    Běžné automatické myčky využívají agresivní chemii a rotující kartáče, které na povrchu laku vytvářejí mikro-škrábance. Naše ruční mytí je maximálně šetrné a bezpečné.
                  </p>
                  <p>
                    Dekontaminační postupy odstraní i náletovou rez, asfalt a organické nečistoty. Lak je tak připraven na aplikaci ochranných vrstev.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 font-bold text-brand-dark uppercase text-xs tracking-widest">
                    <ShieldCheck className="text-brand-blue" size={20} /> pH neutrální postupy
                  </div>
                  <div className="flex items-center gap-3 font-bold text-brand-dark uppercase text-xs tracking-widest">
                    <Check className="text-brand-blue" size={20} /> Čištění mezidveřních prostor
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/detailing-exterier.webp"
                  className="rounded-2xl shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  alt="Detailing exteriéru Praha"
                />
                <div className="absolute -bottom-6 -left-6 bg-brand-dark p-6 rounded-lg text-white hidden md:block border-l-4 border-brand-blue">
                  <span className="block text-brand-blue font-bold text-xl uppercase mb-1">90+ min</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60">Průměrný čas péče</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-brand-light">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6 uppercase tracking-tight">
                Náš procesní standard
              </h2>
              <p className="text-gray-500 font-light">
                Každý vůz prochází identickým řetězcem úkonů pro garantovaný výsledek.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="p-8 bg-white border border-gray-100 rounded-xl hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-4 font-heading uppercase tracking-widest text-brand-dark">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6">
            <div className="bg-brand-dark rounded-3xl p-8 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl">
                <h3 className="text-2xl md:text-4xl font-heading font-bold mb-6 uppercase">
                  Dlouhodobá hodnota vašeho vozu
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Pravidelné ruční mytí v detailingovém standardu udržuje lak v perfektním stavu a zvyšuje zůstatkovou hodnotu vozu.
                </p>
              </div>
              <Button onClick={handleBooking} className="px-12">Poptat termín mytí</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceCleaningPraha;