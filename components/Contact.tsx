import React, { useRef } from 'react';
import { CONTACT_INFO } from '../constants';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Clock, MapPin, Navigation, Phone, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import ReservioEmbed from './ReservioEmbed';

const Contact: React.FC = () => {
  const containerRef = useRef(null);
  const location = useLocation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for background elements
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Staggered animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const glassVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const MAP_URL = "https://www.google.com/maps/place/Spectra+Wash/@50.1604608,14.37045,46m/data=!3m1!1e3!4m6!3m5!1s0x470bc169266c69d7:0xd51032c3e7f78c0f!8m2!3d50.1604871!4d14.3706054!16s%2Fg%2F11t5njqnd9?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D";
  
  // Client's Reservio URL (Replace this with the real one provided by client)
  // ZDE PAK VLOŽÍŠ ODKAZ OD KLIENTA
  const CLIENT_RESERVIO_URL = "https://spectra-wash.reservio.com/";

  return (
    <section id="contact" ref={containerRef} className="py-24 md:py-32 relative overflow-hidden bg-gray-100">
      
      {/* SECTION BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-brand-dark/10 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2F2F2F 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row shadow-2xl rounded-none overflow-hidden"
        >
          
          {/* --- INFO PANEL (Left Side) --- */}
          <motion.div 
            variants={glassVariants}
            className="lg:w-5/12 relative min-h-[400px] lg:min-h-[600px] flex flex-col justify-between p-8 lg:p-12 border-r border-white/10"
          >
            <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-xl z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-0"></div>

            <div className="relative z-20 h-full flex flex-col justify-between">
               <div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs mb-6 block flex items-center gap-2">
                      <MapPin size={16} /> Kde nás najdete
                    </span>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 tracking-tight">
                      KONTAKT
                    </h3>
                    <div className="w-16 h-[3px] bg-brand-blue mb-10 shadow-[0_0_15px_#3FD5D3]"></div>
                  </motion.div>
                  
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="space-y-8 text-gray-300"
                  >
                    <motion.div variants={itemVariants} className="flex items-start gap-5 group">
                       <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                          <MapPin className="text-brand-blue" size={20} />
                       </div>
                       <div>
                         <p className="text-white font-bold text-sm uppercase tracking-widest mb-1">Adresa</p>
                         <p className="font-light text-white/80">{CONTACT_INFO.address}</p>
                       </div>
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="flex items-start gap-5 group">
                       <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                          <Phone className="text-brand-blue" size={20} />
                       </div>
                       <div>
                         <p className="text-white font-bold text-sm uppercase tracking-widest mb-1">Telefon</p>
                         <p className="font-light text-white/80">{CONTACT_INFO.phone}</p>
                       </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex items-start gap-5 group">
                       <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                          <Mail className="text-brand-blue" size={20} />
                       </div>
                       <div>
                         <p className="text-white font-bold text-sm uppercase tracking-widest mb-1">Email</p>
                         <p className="font-light text-white/80">{CONTACT_INFO.email}</p>
                       </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex items-start gap-5 group">
                       <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                          <Clock className="text-brand-blue" size={20} />
                       </div>
                       <div>
                         <p className="text-white font-bold text-sm uppercase tracking-widest mb-1">Otevírací doba</p>
                         <p className="font-light text-white/80">{CONTACT_INFO.hours}</p>
                       </div>
                    </motion.div>
                  </motion.div>
               </div>
               
               <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ delay: 0.8 }}
                 className="mt-12"
               >
                 <button 
                   onClick={() => window.open(MAP_URL, '_blank')}
                   className="flex items-center gap-3 text-brand-blue font-bold uppercase tracking-widest hover:text-white transition-colors group/link px-6 py-4 border border-brand-blue/30 hover:bg-brand-blue/10 w-fit"
                 >
                   <Navigation size={20} className="group-hover/link:animate-pulse" /> Navigovat k nám
                 </button>
               </motion.div>
            </div>
          </motion.div>

          {/* --- RESERVIO INTEGRATION (Right Side) --- */}
          <motion.div 
            className="lg:w-7/12 bg-white p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center items-start"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-10 w-full">
              <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
                 Poptávka
              </span>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4 leading-tight">
                Rezervace termínu
              </h3>
              <p className="text-gray-500 font-light max-w-lg mb-8">
                 Pro maximální pohodlí využíváme rezervační systém Reservio. Kliknutím níže si vyberete přesný termín, který vám vyhovuje.
              </p>

              {/* RESERVIO COMPONENT - MODAL MODE */}
              <ReservioEmbed 
                url={CLIENT_RESERVIO_URL}
                mode="modal"
                buttonLabel="Vybrat termín online"
                className="w-full md:w-auto"
              />

              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                  Preferujete osobní domluvu?
                </p>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-brand-dark font-bold hover:text-brand-blue transition-colors text-lg">
                  Zavolejte nám: {CONTACT_INFO.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;