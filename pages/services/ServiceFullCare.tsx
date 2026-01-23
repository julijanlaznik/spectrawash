import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Check, Sparkles, Wind, ShieldCheck, Thermometer, Clock, Handshake } from 'lucide-react';
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
    <>
      {/* SEO */}
      <Helmet>
        <title>Kompletní péče o auto Praha | Hloubkový detailing interiéru – SpectraWash</title>
        <meta
          name="description"
          content="Kompletní péče o auto v Praze. Hloubkový detailing interiéru a exteriéru, detox vozu, ozónová dezinfekce, tepování a ochrana povrchů. Program P3 od SpectraWash."
        />
        <link
          rel="canonical"
          href="https://spectrawash.cz/kompletni-pece-o-auto"
        />
      </Helmet>

      <div className="w-full bg-white pt-[70px] xl:pt-[88px]">
        {/* Hero Section */}
        <section className="relative py-24 md:py-44 bg-brand-dark text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/rucni-myti-exterieru-auta.webp"
              className="w-full h-full object-cover opacity-20 grayscale"
              alt="Kompletní detailing interiéru Praha"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-xs mb-6 block border-l-2 border-brand-blue pl-4">
                Komplexní regenerace vozu
              </span>

              <h1 className="text-4xl md:text-7xl font-heading font-bold mb-8 leading-tight uppercase tracking-tighter">
                Detox a hloubková <br />
                <span className="text-brand-blue">péče o vůz</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed max-w-2xl">
                Nezaměřujeme se pouze na vnější lesk. Vytváříme v interiéru čisté, hygienicky nezávadné a luxusní prostředí pomocí profesionálních metod čištění.
              </p>

              <Button onClick={handleBooking}>Rezervovat Program P3</Button>
            </motion.div>
          </div>
        </section>

        {/* Interior Depth Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-8 text-brand-dark uppercase tracking-tight">
                  Regenerace <span className="text-brand-blue">všech povrchů</span>
                </h2>

                <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
                  Interiér vozu je místem, kde trávíte nejvíce času. Prach, bakterie a mikroorganismy se usazují hluboko ve vláknech a pórech materiálů. Náš program hloubkové péče tyto faktory eliminuje.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="p-3 bg-brand-light rounded-lg text-brand-blue">
                      <Thermometer size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-sm uppercase tracking-widest mb-1">
                        Extrakční čištění
                      </h4>
                      <p className="text-sm text-gray-500 font-light">
                        Hloubkové mokré tepování textilií a koberců.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 bg-brand-light rounded-lg text-brand-blue">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-sm uppercase tracking-widest mb-1">
                        Ošetření kůže
                      </h4>
                      <p className="text-sm text-gray-500 font-light">
                        Čištění a výživa kůže pro zachování přirozeného vzhledu.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 bg-brand-light rounded-lg text-brand-blue">
                      <Wind size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-sm uppercase tracking-widest mb-1">
                        Dezinfekce ozónem
                      </h4>
                      <p className="text-sm text-gray-500 font-light">
                        Likvidace pachů, bakterií a virů v celém voze.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="/kompletni-detailing-vozu.webp"
                  className="rounded-2xl shadow-2xl"
                  alt="Hloubkové čištění interiéru Praha"
                />
              </div>
            </div>

            {/* Program P3 */}
            <div className="bg-brand-dark text-white rounded-3xl p-8 md:p-16">
              <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
                <h3 className="text-3xl md:text-5xl font-heading font-bold uppercase">
                  Komplexní Program <span className="text-brand-blue">P3</span>
                </h3>
                <div>
                  <span className="block text-gray-400 uppercase text-xs tracking-widest mb-2">
                    Orientační doba péče
                  </span>
                  <span className="text-2xl font-bold">5–7 hodin</span>
                </div>
              </div>

              <Button onClick={handleBooking} fullWidth>
                Objednat kompletní péči
              </Button>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-12 uppercase">
              Kvalita garantovaná detailingovým studiem
            </h3>

            <div className="flex justify-center gap-20 opacity-60">
              <ShieldCheck size={40} className="text-brand-blue" />
              <Clock size={40} className="text-brand-blue" />
              <Handshake size={40} className="text-brand-blue" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceFullCare;