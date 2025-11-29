import React from 'react';
import { Briefcase, TrendingUp, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const Business: React.FC = () => {
  return (
    <div className="pt-24 w-full">
      {/* Business Hero - Cinematic */}
      <section className="bg-brand-dark text-white min-h-[70vh] relative flex items-center overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
         {/* Sharp Overlay */}
         <div className="absolute inset-0 bg-brand-dark/80"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-6 block border-l-2 border-brand-blue pl-4">
                Firemní služby
              </span>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
                Program <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Firemní péče</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-xl mb-10 font-light leading-relaxed">
                Vaše flotila je první dojem, který uděláte. Profesionální péče, pick-up servis a reprezentativní vzhled pro váš business.
              </p>
              <Button>Vyžádat B2B Nabídku</Button>
            </motion.div>
         </div>
         
         {/* Technical Lines */}
         <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
         <div className="absolute top-0 right-20 w-[1px] h-full bg-white/5"></div>
      </section>

      {/* Benefits Grid - SHARP EDGES */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-gray-100">
            {[
              { icon: TrendingUp, title: 'Zachování Hodnoty', desc: 'Pravidelná údržba zvyšuje zůstatkovou hodnotu vozů.' },
              { icon: Clock, title: 'Pick-up Servis', desc: 'Vůz si vyzvedneme ve vaší firmě a vrátíme čistý.' },
              { icon: ShieldCheck, title: 'Prémiová Kosmetika', desc: 'Certifikované produkty šetrné k laku i životnímu prostředí.' },
              { icon: Briefcase, title: 'Měsíční Fakturace', desc: 'Přehledné hromadné vyúčtování služeb jednou měsíčně.' }
            ].map((item, idx) => (
              <div key={idx} className="group p-10 border-r border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300 relative">
                {/* Minimal Icon - No background */}
                <div className="text-brand-dark mb-6 group-hover:text-brand-blue transition-colors">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-lg font-bold font-heading text-brand-dark mb-4 uppercase tracking-wide">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Více <ArrowRight size={14} className="ml-2" />
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-brand-blue transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Sharp */}
      <section className="py-24 bg-brand-blue text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-20 -right-20 w-96 h-96 border border-white/10 rotate-45"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20"></div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="mb-10 md:mb-0 max-w-2xl">
            <h2 className="text-4xl font-heading font-bold mb-4">Připraveni na změnu?</h2>
            <p className="opacity-80 text-lg font-light">
              Kontaktujte nás pro individuální nacenění správy vozového parku.
            </p>
          </div>
          <Button variant="secondary" className="border-0 bg-white text-brand-blue hover:bg-brand-dark hover:text-white">
            Kontaktovat obchodní
          </Button>
        </div>
      </section>
      
      {/* Reuse Contact for consistency */}
      <Contact />
    </div>
  );
};

export default Business;