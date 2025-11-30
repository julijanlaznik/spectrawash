
import React, { useRef, useState, useEffect } from 'react';
import { CONTACT_INFO, SERVICES } from '../constants';
import Button from './Button';
import { motion, useScroll, useTransform, Variants, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, MapPin, Navigation, Phone, Mail, Check, X } from 'lucide-react';

const Contact: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15
      }
    }
  };

  // --- CUSTOM DATE/TIME PICKER LOGIC ---
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerStep, setPickerStep] = useState<'date' | 'time'>('date');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // PICKUP STATE
  const [isPickup, setIsPickup] = useState(false);

  // SUCCESS MODAL STATE
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay(); // 0 = Sun, 1 = Mon...
    // Adjust for Monday start (Czech standard)
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1; 
    return { days, firstDay: adjustedFirstDay };
  };

  const { days: totalDays, firstDay: startDay } = getDaysInMonth(currentMonth);
  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: startDay }, (_, i) => i);

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(newDate);
    setPickerStep('time'); // Auto-advance to time
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    setIsPickerOpen(false); // Close picker
    setPickerStep('date'); // Reset for next time
  };

  const formatDisplayDate = () => {
    if (!selectedDate) return '';
    const dateStr = selectedDate.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'numeric', year: 'numeric' });
    if (!selectedTime) return dateStr;
    return `${dateStr} – ${selectedTime}`;
  };

  const TIME_SLOTS = [
    "08:00", "09:00", "10:00", "11:00", 
    "12:00", "13:00", "14:00", "15:00", 
    "16:00", "17:00"
  ];

  const changeMonth = (delta: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + delta, 1));
  };

  // Close picker on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('.custom-picker-container')) return;
      setIsPickerOpen(false);
    };
    if (isPickerOpen) document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isPickerOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get Name from input
    const form = e.target as HTMLFormElement;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    setSubmittedName(nameInput.value || "zákazníku");

    // Show Custom Modal
    setShowSuccessModal(true);
    
    // Reset form logic would go here in a real app
  };

  const MAP_URL = "https://www.google.com/maps/dir/?api=1&destination=Přílepská+1901,+252+63+Roztoky";

  return (
    <section id="contact" ref={containerRef} className="py-24 md:py-32 relative overflow-hidden bg-gray-50">
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        textarea:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px white inset !important;
            -webkit-text-fill-color: #2F2F2F !important;
            transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>

      {/* SECTION BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-dark/5 rounded-full blur-[80px] transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          
          {/* --- INFO PANEL (Left) - Clean Dark Design (No Image) --- */}
          <div className="lg:w-5/12 relative min-h-[400px] lg:min-h-[650px] overflow-hidden bg-brand-dark flex flex-col justify-between p-6 lg:p-12">
            
            {/* Subtle Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
            
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative z-20 h-full flex flex-col justify-between"
            >
               <div>
                  <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs mb-6 block flex items-center gap-2">
                    <MapPin size={16} /> Kde nás najdete
                  </span>
                  <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                    KONTAKT
                  </h3>
                  <div className="w-12 h-[2px] bg-brand-blue mb-10"></div>
                  
                  <div className="space-y-8 text-gray-300">
                    <div className="flex items-start gap-4">
                       <MapPin className="text-brand-blue mt-1 flex-shrink-0" size={24} />
                       <div>
                         <p className="text-white font-bold text-lg uppercase tracking-wide">Adresa</p>
                         <p className="font-light">{CONTACT_INFO.address}</p>
                       </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                       <Phone className="text-brand-blue mt-1 flex-shrink-0" size={24} />
                       <div>
                         <p className="text-white font-bold text-lg uppercase tracking-wide">Telefon</p>
                         <p className="font-light">{CONTACT_INFO.phone}</p>
                       </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <Mail className="text-brand-blue mt-1 flex-shrink-0" size={24} />
                       <div>
                         <p className="text-white font-bold text-lg uppercase tracking-wide">Email</p>
                         <p className="font-light">{CONTACT_INFO.email}</p>
                       </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <Clock className="text-brand-blue mt-1 flex-shrink-0" size={24} />
                       <div>
                         <p className="text-white font-bold text-lg uppercase tracking-wide">Otevírací doba</p>
                         <p className="font-light">{CONTACT_INFO.hours}</p>
                       </div>
                    </div>
                  </div>
               </div>
               
               <div className="mt-12">
                 <button 
                   onClick={() => window.open(MAP_URL, '_blank')}
                   className="flex items-center gap-3 text-brand-blue font-bold uppercase tracking-widest hover:text-white transition-colors group/link"
                 >
                   <Navigation size={20} className="group-hover/link:animate-pulse" /> Navigovat do studia
                 </button>
               </div>
            </motion.div>
          </div>

          {/* --- CONTACT FORM (Right) --- */}
          <div className="lg:w-7/12 bg-white p-6 md:p-12 lg:p-16 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="mb-10">
                <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
                   Rezervace
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
                  Napište nám
                </h3>
                <p className="text-gray-500 font-light max-w-md">
                   Vyplňte formulář níže pro nezávaznou poptávku detailingu. Ozveme se vám obratem.
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-8 group/form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants} className="relative group/input">
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      className="peer w-full border-b border-gray-300 py-3 text-brand-dark focus:border-brand-blue focus:outline-none bg-transparent transition-colors placeholder-transparent"
                      placeholder="Jméno"
                      required
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute left-0 -top-3.5 text-xs font-bold text-brand-blue transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-blue uppercase tracking-wider"
                    >
                      Jméno
                    </label>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative group/input">
                    <input 
                      type="tel" 
                      id="phone" 
                      className="peer w-full border-b border-gray-300 py-3 text-brand-dark focus:border-brand-blue focus:outline-none bg-transparent transition-colors placeholder-transparent"
                      placeholder="Telefon"
                      required
                    />
                    <label 
                      htmlFor="phone" 
                      className="absolute left-0 -top-3.5 text-xs font-bold text-brand-blue transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-blue uppercase tracking-wider"
                    >
                      Telefon
                    </label>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="relative group/input">
                  <input 
                    type="email" 
                    id="email" 
                    className="peer w-full border-b border-gray-300 py-3 text-brand-dark focus:border-brand-blue focus:outline-none bg-transparent transition-colors placeholder-transparent"
                    placeholder="Email"
                    required
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 -top-3.5 text-xs font-bold text-brand-blue transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-blue uppercase tracking-wider"
                  >
                    Email
                  </label>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="flex flex-col">
                    <motion.div variants={itemVariants} className="relative group/input">
                      <select 
                        id="service" 
                        className="peer w-full border-b border-gray-300 py-3 text-brand-dark focus:border-brand-blue focus:outline-none bg-transparent transition-colors appearance-none cursor-pointer"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled hidden></option>
                        {/* Filter out 'pickup' id so it doesn't show in dropdown */}
                        {SERVICES.filter(s => s.id !== 'pickup').map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Jiné">Jiné / Individuální</option>
                      </select>
                      <label 
                        htmlFor="service" 
                        className="absolute left-0 -top-3.5 text-xs font-bold text-brand-blue transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-blue uppercase tracking-wider pointer-events-none"
                      >
                        Služba
                      </label>
                      <div className="absolute right-0 top-3 pointer-events-none text-gray-400">
                        <ChevronRight size={16} className="rotate-90" />
                      </div>
                    </motion.div>

                    {/* PICKUP CHECKBOX EXTRA OPTION */}
                    <div 
                      onClick={() => setIsPickup(!isPickup)}
                      className="mt-6 flex items-center gap-3 cursor-pointer group/check select-none"
                    >
                       <div className={`w-5 h-5 border transition-all duration-300 flex items-center justify-center ${isPickup ? 'bg-brand-blue border-brand-blue' : 'border-gray-300 group-hover/check:border-brand-blue'}`}>
                          {isPickup && <Check size={14} className="text-brand-dark" strokeWidth={3} />}
                       </div>
                       <span className={`text-sm transition-colors ${isPickup ? 'text-brand-dark font-medium' : 'text-gray-500 group-hover/check:text-brand-blue'}`}>
                         Chci využít Pick-up servis (vyzvednutí vozu)
                       </span>
                    </div>

                    {/* DYNAMIC PICKUP ADDRESS INPUT */}
                    <AnimatePresence>
                      {isPickup && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="relative group/input overflow-hidden"
                        >
                          <input 
                            type="text" 
                            id="pickup_address" 
                            className="peer w-full border-b border-gray-300 py-3 text-brand-dark focus:border-brand-blue focus:outline-none bg-transparent transition-colors placeholder-transparent"
                            placeholder="Adresa vyzvednutí"
                            required={isPickup}
                          />
                          <label 
                            htmlFor="pickup_address" 
                            className="absolute left-0 -top-3.5 text-xs font-bold text-brand-blue transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-blue uppercase tracking-wider"
                          >
                            Adresa vyzvednutí
                          </label>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* CUSTOM DATE PICKER TRIGGER */}
                  <motion.div variants={itemVariants} className="relative group/input custom-picker-container">
                    <div 
                      onClick={() => setIsPickerOpen(!isPickerOpen)}
                      className="peer w-full border-b border-gray-300 py-3 text-brand-dark cursor-pointer flex items-center justify-between"
                    >
                       <span className={selectedDate ? 'text-brand-dark' : 'text-transparent'}>
                         {selectedDate ? formatDisplayDate() : 'Vybrat datum'}
                       </span>
                       <CalendarIcon size={16} className="text-gray-400" />
                    </div>
                    <label 
                      className={`absolute left-0 transition-all uppercase tracking-wider pointer-events-none ${selectedDate || isPickerOpen ? '-top-3.5 text-xs font-bold text-brand-blue' : 'top-3 text-base text-gray-400'}`}
                    >
                      Preferovaný termín
                    </label>

                    {/* DROPDOWN POPUP */}
                    <AnimatePresence>
                      {isPickerOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute top-full left-0 z-50 mt-2 w-72 bg-white border border-gray-100 shadow-2xl p-4"
                        >
                           {pickerStep === 'date' ? (
                             <>
                               {/* Calendar Header */}
                               <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100">
                                  <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); changeMonth(-1); }} className="p-1 hover:bg-gray-50"><ChevronLeft size={16}/></button>
                                  <span className="font-bold text-sm uppercase tracking-wider text-brand-dark">
                                    {currentMonth.toLocaleDateString('cs-CZ', { month: 'long', year: 'numeric' })}
                                  </span>
                                  <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); changeMonth(1); }} className="p-1 hover:bg-gray-50"><ChevronRight size={16}/></button>
                               </div>
                               {/* Calendar Grid */}
                               <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-gray-400 font-medium">
                                 <div>Po</div><div>Út</div><div>St</div><div>Čt</div><div>Pá</div><div>So</div><div>Ne</div>
                               </div>
                               <div className="grid grid-cols-7 gap-1">
                                  {emptyDays.map(d => <div key={`empty-${d}`} />)}
                                  {daysArray.map(day => (
                                    <button
                                      key={day}
                                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleDateClick(day); }}
                                      className="w-8 h-8 flex items-center justify-center text-sm hover:bg-brand-blue hover:text-white transition-colors rounded-none"
                                    >
                                      {day}
                                    </button>
                                  ))}
                               </div>
                             </>
                           ) : (
                             <>
                               {/* Time Slots */}
                               <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100 cursor-pointer" onClick={(e) => { e.stopPropagation(); setPickerStep('date'); }}>
                                 <ChevronLeft size={14} className="text-gray-400" />
                                 <span className="font-bold text-sm uppercase tracking-wider text-brand-dark">Vybrat čas</span>
                               </div>
                               <div className="grid grid-cols-2 gap-2">
                                 {TIME_SLOTS.map(time => (
                                   <button
                                     key={time}
                                     onClick={(e) => { e.preventDefault(); handleTimeClick(time); }}
                                     className="py-2 px-3 border border-gray-100 text-sm hover:border-brand-blue hover:text-brand-blue transition-colors text-center"
                                   >
                                     {time}
                                   </button>
                                 ))}
                               </div>
                             </>
                           )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="relative group/input">
                  <textarea 
                    id="message" 
                    rows={4}
                    className="peer w-full border-b border-gray-300 py-3 text-brand-dark focus:border-brand-blue focus:outline-none bg-transparent transition-colors placeholder-transparent resize-none"
                    placeholder="Zpráva"
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 -top-3.5 text-xs font-bold text-brand-blue transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-blue uppercase tracking-wider"
                  >
                    Zpráva / Specifikace vozu
                  </label>
                </motion.div>

                <motion.div variants={itemVariants} className="pt-4">
                  <Button 
                    type="submit" 
                    variant="dark"
                    fullWidth 
                    className="shadow-xl"
                  >
                    Odeslat poptávku
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- SUCCESS POPUP MODAL --- */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setShowSuccessModal(false)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative bg-brand-dark border border-brand-blue p-8 md:p-12 max-w-lg w-full shadow-[0_0_50px_rgba(63,213,211,0.2)]"
            >
              {/* Close Icon */}
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col items-center text-center">
                {/* Success Icon */}
                <div className="w-20 h-20 rounded-full border-2 border-brand-blue flex items-center justify-center mb-6 text-brand-blue shadow-[0_0_20px_rgba(63,213,211,0.3)]">
                   <Check size={40} strokeWidth={3} />
                </div>

                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 uppercase leading-none">
                   Poptávka <br/><span className="text-brand-blue">Odeslána</span>
                </h3>
                
                <p className="text-white text-lg mb-6">
                  Děkujeme, {submittedName}!
                </p>

                <div className="text-gray-400 text-sm font-light leading-relaxed mb-8 max-w-xs mx-auto">
                   Vaši rezervaci jsme úspěšně přijali. Náš tým vás bude kontaktovat do 24 hodin pro potvrzení termínu a detailů.
                </div>

                <div className="w-full h-[1px] bg-white/10 mb-8"></div>

                <div className="flex flex-col gap-2 mb-8">
                   <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Potřebujete to urgentně?</span>
                   <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-xl text-white hover:text-brand-blue transition-colors font-bold">
                     {CONTACT_INFO.phone}
                   </a>
                </div>

                <Button onClick={() => setShowSuccessModal(false)} fullWidth>
                  Zavřít okno
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Contact;
