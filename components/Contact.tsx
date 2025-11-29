
import React, { useRef, useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';
import Button from './Button';
import { motion, useScroll, useTransform, Variants, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon } from 'lucide-react';

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

  // Close picker on outside click (simple implementation)
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
    alert("Děkujeme za vaši poptávku! Budeme vás brzy kontaktovat.");
    // Reset form logic would go here
  };

  // Background Image for the glass effect (Dark luxury car detail)
  const BG_IMAGE = "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop";

  return (
    <section id="contact" ref={containerRef} className="py-24 md:py-32 relative overflow-hidden bg-gray-50">
      {/* CSS Override for Autofill */}
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

      {/* SECTION BACKGROUND: Clean Ambient Glow only */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-dark/5 rounded-full blur-[80px] transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          
          {/* --- CLEAN BLUE GLASS PANEL (Left) --- */}
          <div className="lg:w-5/12 relative min-h-[400px] lg:min-h-[650px] overflow-hidden group/glass bg-brand-blue">
            <div className="absolute inset-0">
               <img src={BG_IMAGE} alt="Car Abstract" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-brand-blue/85 backdrop-blur-md"></div>
            
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative z-30 p-10 lg:p-16 h-full flex flex-col justify-between text-white"
            >
              <div>
                <span className="text-white/70 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block border-l border-white/50 pl-3">
                  Napište nám
                </span>
                <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-8 lg:mb-12 text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                  Kontakt
                </h2>
              </div>

              <div className="space-y-8 lg:space-y-10 relative">
                <div className="group cursor-default relative">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1 group-hover:text-white transition-colors">Adresa</h4>
                  <p className="text-base lg:text-lg font-heading font-medium pb-2 inline-block text-white/90 group-hover:text-white transition-colors relative">
                    {CONTACT_INFO.address}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
                  </p>
                </div>
                <div className="group cursor-default relative">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1 group-hover:text-white transition-colors">Telefon</h4>
                  <p className="text-base lg:text-lg font-heading font-medium pb-2 inline-block text-white/90 group-hover:text-white transition-colors relative">
                    {CONTACT_INFO.phone}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
                  </p>
                </div>
                <div className="group cursor-default relative">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1 group-hover:text-white transition-colors">Email</h4>
                  <p className="text-base lg:text-lg font-heading font-medium pb-2 inline-block text-white/90 group-hover:text-white transition-colors relative">
                    {CONTACT_INFO.email}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
                  </p>
                </div>
                <div className="group cursor-default relative">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1 group-hover:text-white transition-colors">Otevírací doba</h4>
                  <p className="text-base lg:text-lg font-heading font-medium pb-2 inline-block text-white/90 group-hover:text-white transition-colors relative">
                    {CONTACT_INFO.hours}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Section (Right) */}
          <div className="lg:w-7/12 bg-white p-6 md:p-12 lg:p-20 relative overflow-visible group">
            
            {/* 1. Animated Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-blue via-brand-blue to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out z-30"></div>
            
            {/* 2. Corner Detail */}
            <div className="absolute bottom-0 right-0 w-8 h-8 border-l border-t border-gray-200 z-10 transition-colors duration-500"></div>

            <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               className="relative z-10"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-3xl font-heading font-bold text-brand-dark mb-2">Rezervace</h3>
                <p className="text-gray-500 mb-10 font-light">
                  Vyplňte formulář níže pro nezávaznou objednávku mytí.
                </p>
              </motion.div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants} className="relative group/input">
                    <motion.input 
                      whileFocus={{ x: 5 }}
                      type="text" id="name" className="peer w-full border-b border-gray-200 py-3 text-brand-dark focus:border-brand-blue focus:outline-none placeholder-transparent bg-transparent transition-colors rounded-none" placeholder="Jméno" />
                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:text-brand-blue">Jméno</label>
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-blue transition-all duration-500 group-hover/input:w-full peer-focus:w-full"></div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="relative group/input">
                    <motion.input 
                      whileFocus={{ x: 5 }}
                      type="tel" id="phone" className="peer w-full border-b border-gray-200 py-3 text-brand-dark focus:border-brand-blue focus:outline-none placeholder-transparent bg-transparent transition-colors rounded-none" placeholder="Telefon" />
                    <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:text-brand-blue">Telefon</label>
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-blue transition-all duration-500 group-hover/input:w-full peer-focus:w-full"></div>
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariants} className="relative group/input">
                  <motion.input 
                      whileFocus={{ x: 5 }}
                      type="email" id="email" className="peer w-full border-b border-gray-200 py-3 text-brand-dark focus:border-brand-blue focus:outline-none placeholder-transparent bg-transparent transition-colors rounded-none" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:text-brand-blue">Email</label>
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-blue transition-all duration-500 group-hover/input:w-full peer-focus:w-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-50">
                  <motion.div variants={itemVariants} className="relative">
                    <motion.select 
                      whileFocus={{ x: 5 }}
                      id="service" className="w-full border-b border-gray-200 py-3 text-brand-dark focus:border-brand-blue focus:outline-none bg-transparent rounded-none appearance-none cursor-pointer">
                      <option value="" disabled selected>Vyberte službu</option>
                      <option>Ruční mytí a čištění</option>
                      <option>Leštění laku</option>
                      <option>Ochranné PPF fólie</option>
                      <option>Keramická ochrana</option>
                      <option>Tónování skel</option>
                      <option>PDR opravy</option>
                      <option>Pick-up servis</option>
                    </motion.select>
                    <label className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-gray-400">Služba</label>
                  </motion.div>

                  {/* CUSTOM DATE PICKER WIDGET */}
                  <motion.div variants={itemVariants} className="relative custom-picker-container">
                    <div 
                        onClick={() => {
                            setIsPickerOpen(!isPickerOpen);
                            if(!isPickerOpen) setPickerStep('date');
                        }}
                        className="w-full border-b border-gray-200 py-3 text-brand-dark cursor-pointer flex items-center justify-between group/picker"
                    >
                        <span className={!selectedDate ? "text-transparent" : ""}>
                            {formatDisplayDate() || "Vyberte datum"}
                        </span>
                        <CalendarIcon size={16} className="text-gray-400 group-hover/picker:text-brand-blue transition-colors" />
                    </div>
                    <label className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-gray-400">Datum & Čas</label>
                    <div className={`absolute bottom-0 left-0 h-[1px] bg-brand-blue transition-all duration-500 ${isPickerOpen ? 'w-full' : 'w-0'}`}></div>

                    {/* POPUP DROPDOWN */}
                    <AnimatePresence>
                        {isPickerOpen && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute top-full left-0 mt-2 w-72 bg-white shadow-2xl border border-gray-100 z-50 p-4"
                            >
                                {pickerStep === 'date' ? (
                                    // STEP 1: CALENDAR
                                    <motion.div 
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                    >
                                        <div className="flex justify-between items-center mb-4">
                                            <button type="button" onClick={(e) => { e.stopPropagation(); changeMonth(-1); }} className="p-1 hover:bg-gray-100"><ChevronLeft size={16} /></button>
                                            <span className="font-heading font-bold text-sm uppercase">
                                                {currentMonth.toLocaleDateString('cs-CZ', { month: 'long', year: 'numeric' })}
                                            </span>
                                            <button type="button" onClick={(e) => { e.stopPropagation(); changeMonth(1); }} className="p-1 hover:bg-gray-100"><ChevronRight size={16} /></button>
                                        </div>
                                        <div className="grid grid-cols-7 gap-1 text-center mb-2">
                                            {['Po','Út','St','Čt','Pá','So','Ne'].map(d => (
                                                <span key={d} className="text-[10px] font-bold text-gray-400 uppercase">{d}</span>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-7 gap-1">
                                            {emptyDays.map((_, i) => <div key={`empty-${i}`} />)}
                                            {daysArray.map(day => {
                                                const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                                                const isSelected = selectedDate?.toDateString() === date.toDateString();
                                                const isPast = date < new Date(new Date().setHours(0,0,0,0));
                                                
                                                return (
                                                    <button
                                                        key={day}
                                                        type="button"
                                                        disabled={isPast}
                                                        onClick={(e) => { e.stopPropagation(); handleDateClick(day); }}
                                                        className={`h-8 w-8 text-sm flex items-center justify-center transition-colors rounded-none
                                                            ${isSelected ? 'bg-brand-blue text-brand-dark font-bold' : ''}
                                                            ${!isSelected && !isPast ? 'hover:bg-gray-100 text-brand-dark' : ''}
                                                            ${isPast ? 'text-gray-300 cursor-not-allowed' : ''}
                                                        `}
                                                    >
                                                        {day}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </motion.div>
                                ) : (
                                    // STEP 2: TIME SLOTS
                                    <motion.div
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                    >
                                        <div className="flex items-center gap-2 mb-4">
                                            <button type="button" onClick={(e) => { e.stopPropagation(); setPickerStep('date'); }} className="p-1 hover:bg-gray-100"><ChevronLeft size={16} /></button>
                                            <span className="font-heading font-bold text-sm uppercase flex items-center gap-2">
                                                <Clock size={14} className="text-brand-blue" />
                                                Vyberte čas
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            {TIME_SLOTS.map(time => (
                                                <button
                                                    key={time}
                                                    type="button"
                                                    onClick={(e) => { e.stopPropagation(); handleTimeClick(time); }}
                                                    className={`py-2 text-sm border border-gray-100 hover:border-brand-blue hover:text-brand-blue transition-colors
                                                        ${selectedTime === time ? 'bg-brand-blue text-brand-dark border-brand-blue' : 'text-gray-600'}
                                                    `}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="relative group/input">
                  <motion.textarea 
                    whileFocus={{ x: 5 }}
                    id="message" rows={1} className="peer w-full border-b border-gray-200 py-3 text-brand-dark focus:border-brand-blue focus:outline-none placeholder-transparent bg-transparent transition-colors rounded-none resize-none min-h-[50px]" placeholder="Zpráva"></motion.textarea>
                  <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:text-brand-blue">Zpráva</label>
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-blue transition-all duration-500 group-hover/input:w-full peer-focus:w-full"></div>
                </motion.div>

                <motion.div variants={itemVariants} className="pt-4">
                  <Button 
                    type="submit"
                    fullWidth 
                    variant="dark"
                  >
                    Odeslat poptávku
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
