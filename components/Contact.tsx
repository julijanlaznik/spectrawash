
import React, { useRef, useState, useEffect } from 'react';
import { CONTACT_INFO, SERVICES } from '../constants';
import Button from './Button';
import { motion, useScroll, useTransform, Variants, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, MapPin, Navigation, Phone, Mail, Check, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Contact: React.FC = () => {
  const containerRef = useRef(null);
  const location = useLocation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Staggered animation variants for a "pop-up" feel
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

  // --- CUSTOM DATE/TIME PICKER LOGIC ---
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerStep, setPickerStep] = useState<'date' | 'time'>('date');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // FORM STATE
  const [isPickup, setIsPickup] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [message, setMessage] = useState("");
  // NEW STATE FOR ADDONS
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // AUTO-FILL FROM URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    const pickupParam = params.get('pickup');
    const detailsParam = params.get('details');

    if (pickupParam === 'true') {
      setIsPickup(true);
    }

    if (serviceParam) {
      setSelectedService(serviceParam);
    }

    if (detailsParam) {
      setMessage(detailsParam);
    }
  }, [location]);

  // RESET ADDONS IF SERVICE CHANGES
  useEffect(() => {
    if (selectedService !== 'Doplňkové služby') {
      setSelectedAddons([]);
    }
  }, [selectedService]);

  const toggleAddon = (addon: string) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons(prev => prev.filter(a => a !== addon));
    } else {
      setSelectedAddons(prev => [...prev, addon]);
    }
  };

  const addonsList = SERVICES.find(s => s.id === 'addons')?.details || [];
  const showAddons = selectedService === 'Doplňkové služby';

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

  // Helper to identify today
  const today = new Date();
  const isToday = (day: number) => {
    return day === today.getDate() && 
           currentMonth.getMonth() === today.getMonth() && 
           currentMonth.getFullYear() === today.getFullYear();
  };

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

  // Expanded 30-minute intervals
  const TIME_SLOTS = [
    "08:00", "08:30", "09:00", "09:30", 
    "10:00", "10:30", "11:00", "11:30", 
    "12:00", "12:30", "13:00", "13:30", 
    "14:00", "14:30", "15:00", "15:30", 
    "16:00", "16:30", "17:00", "17:30"
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

  const MAP_URL = "https://www.google.com/maps/place/Spectra+Wash/@50.1604608,14.37045,46m/data=!3m1!1e3!4m6!3m5!1s0x470bc169266c69d7:0xd51032c3e7f78c0f!8m2!3d50.1604871!4d14.3706054!16s%2Fg%2F11t5njqnd9?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="contact" ref={containerRef} className="py-24 md:py-32 relative overflow-hidden bg-gray-100">
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

      {/* SECTION BACKGROUND - Enhanced for Glassmorphism Context */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large abstract shapes to be seen through the glass */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-brand-dark/10 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
        {/* Grid pattern for technical feel */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2F2F2F 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row shadow-2xl rounded-none overflow-hidden"
        >
          
          {/* --- INFO PANEL (Left) - GLASSMORPHISM --- */}
          <motion.div 
            variants={glassVariants}
            className="lg:w-5/12 relative min-h-[400px] lg:min-h-[700px] flex flex-col justify-between p-8 lg:p-12 border-r border-white/10"
          >
            {/* Glass Background Layer */}
            <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-xl z-0"></div>
            
            {/* Inner Sheen/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-0"></div>

            {/* Content */}
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

          {/* --- CONTACT FORM (Right) --- */}
          <motion.div 
            className="lg:w-7/12 bg-white p-8 md:p-12 lg:p-16 relative z-10"
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
                 Vyplňte formulář níže pro nezávaznou poptávku našich služeb. Ozveme se vám obratem.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-8 group/form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="relative group/input">
                  <motion.input 
                    whileFocus={{ scale: 1.02, x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    type="text" 
                    id="name" 
                    name="name"
                    className="peer w-full border-b border-gray-300 py-3 text-brand-dark focus:border-brand-blue focus:outline-none bg-transparent transition-colors placeholder-transparent relative z-10"
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
                  <motion.input 
                    whileFocus={{ scale: 1.02, x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    type="tel" 
                    id="phone" 
                    className="peer w-full border-b border-gray-300 py-3 text-brand-dark focus:border-brand-blue focus:outline-none bg-transparent transition-colors placeholder-transparent relative z-10"
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
                <motion.input 
                  whileFocus={{ scale: 1.01, x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  type="email" 
                  id="email" 
                  className="peer w-full border-b border-gray-300 py-3 text-brand-dark focus:border-brand-blue focus:outline-none bg-transparent transition-colors placeholder-transparent relative z-10"
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
                {/* --- LEFT COLUMN (Service Selection) --- */}
                <div className="flex flex-col">
                  <motion.div variants={itemVariants} className="relative group/input">
                    <motion.select 
                      whileFocus={{ scale: 1.02, x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      id="service" 
                      className="peer w-full border-b border-gray-300 py-3 text-brand-dark focus:border-brand-blue focus:outline-none bg-transparent transition-colors appearance-none cursor-pointer relative z-10"
                      required
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                    >
                      <option value="" disabled hidden></option>
                      {/* Filter out 'pickup' id so it doesn't show in dropdown */}
                      {SERVICES.filter(s => s.id !== 'pickup').map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Jiné">Jiné / Individuální</option>
                    </motion.select>
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
                  <motion.div 
                    variants={itemVariants}
                    onClick={() => setIsPickup(!isPickup)}
                    className="mt-6 flex items-center gap-3 cursor-pointer group/check select-none"
                  >
                     <motion.div 
                        whileTap={{ scale: 0.9 }}
                        className={`w-5 h-5 border transition-all duration-300 flex items-center justify-center ${isPickup ? 'bg-brand-blue border-brand-blue' : 'border-gray-300 group-hover/check:border-brand-blue'}`}
                     >
                        {isPickup && <Check size={14} className="text-brand-dark" strokeWidth={3} />}
                     </motion.div>
                     <span className={`text-sm transition-colors ${isPickup ? 'text-brand-dark font-medium' : 'text-gray-500 group-hover/check:text-brand-blue'}`}>
                       Chci využít Pick-up servis (vyzvednutí vozu)
                     </span>
                  </motion.div>

                  {/* DYNAMIC PICKUP ADDRESS INPUT */}
                  <AnimatePresence>
                    {isPickup && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="relative group/input overflow-hidden"
                      >
                        <motion.input 
                          initial={{ x: -20 }}
                          animate={{ x: 0 }}
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
                
                {/* --- RIGHT COLUMN (Addons + Date Picker) --- */}
                <div className="flex flex-col gap-6">
                  {/* DYNAMIC ADDONS MENU */}
                  <AnimatePresence>
                    {showAddons && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        className="bg-white border border-gray-100 shadow-sm p-6 relative overflow-hidden group/menu"
                      >
                        <div className="absolute top-0 left-0 w-1 h-full bg-brand-blue"></div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-4 flex items-center gap-2">
                           Vyberte doplňkové služby
                        </h4>
                        <div className="space-y-2">
                          {addonsList.map(addon => (
                             <div 
                                key={addon} 
                                onClick={() => toggleAddon(addon)}
                                className="flex items-start gap-3 cursor-pointer group/addon hover:bg-gray-50 p-2 -mx-2 rounded transition-colors"
                             >
                                <div className={`mt-0.5 w-4 h-4 border flex items-center justify-center transition-colors ${selectedAddons.includes(addon) ? 'bg-brand-blue border-brand-blue' : 'border-gray-300 bg-white'}`}>
                                   {selectedAddons.includes(addon) && <Check size={12} className="text-white" strokeWidth={3} />}
                                </div>
                                <span className={`text-sm leading-tight ${selectedAddons.includes(addon) ? 'text-brand-dark font-medium' : 'text-gray-600'}`}>
                                   {addon}
                                </span>
                             </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CUSTOM DATE PICKER TRIGGER */}
                  <motion.div variants={itemVariants} className="relative group/input custom-picker-container">
                    <div 
                      onClick={() => setIsPickerOpen(!isPickerOpen)}
                      className="peer w-full border-b border-gray-300 py-3 text-brand-dark cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                       <span className={selectedDate ? 'text-brand-dark font-medium' : 'text-transparent'}>
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
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                          className="absolute top-full left-0 z-50 mt-2 w-80 bg-white border border-gray-100 shadow-2xl p-4 rounded-none"
                        >
                           {pickerStep === 'date' ? (
                             <>
                               {/* Calendar Header */}
                               <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100">
                                  <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); changeMonth(-1); }} className="p-1 hover:bg-gray-50 rounded-full transition-colors"><ChevronLeft size={16}/></button>
                                  <span className="font-bold text-sm uppercase tracking-wider text-brand-dark">
                                    {currentMonth.toLocaleDateString('cs-CZ', { month: 'long', year: 'numeric' })}
                                  </span>
                                  <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); changeMonth(1); }} className="p-1 hover:bg-gray-50 rounded-full transition-colors"><ChevronRight size={16}/></button>
                               </div>
                               {/* Calendar Grid */}
                               <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-gray-400 font-medium">
                                 <div>Po</div><div>Út</div><div>St</div><div>Čt</div><div>Pá</div><div>So</div><div>Ne</div>
                               </div>
                               <div className="grid grid-cols-7 gap-1">
                                  {emptyDays.map(d => <div key={`empty-${d}`} />)}
                                  {daysArray.map(day => {
                                    const todayHighlight = isToday(day);
                                    return (
                                      <button
                                        key={day}
                                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleDateClick(day); }}
                                        className={`w-8 h-8 flex items-center justify-center text-sm transition-all rounded-none
                                          ${todayHighlight ? 'text-brand-blue font-bold ring-1 ring-brand-blue' : 'hover:bg-brand-blue hover:text-white'}
                                        `}
                                      >
                                        {day}
                                      </button>
                                    );
                                  })}
                               </div>
                             </>
                           ) : (
                             <>
                               {/* Time Slots */}
                               <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100 cursor-pointer group/back" onClick={(e) => { e.stopPropagation(); setPickerStep('date'); }}>
                                 <ChevronLeft size={14} className="text-gray-400 group-hover/back:text-brand-dark" />
                                 <span className="font-bold text-sm uppercase tracking-wider text-brand-dark group-hover/back:text-brand-blue transition-colors">Vybrat čas</span>
                               </div>
                               <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-200">
                                 {TIME_SLOTS.map((time, idx) => (
                                   <motion.button
                                     key={time}
                                     initial={{ opacity: 0, y: 10 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ delay: idx * 0.03 }}
                                     onClick={(e) => { e.preventDefault(); handleTimeClick(time); }}
                                     className="py-2 px-1 border border-gray-100 text-xs hover:border-brand-blue hover:text-brand-blue transition-colors text-center bg-gray-50 hover:bg-white"
                                   >
                                     {time}
                                   </motion.button>
                                 ))}
                               </div>
                             </>
                           )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>

              <motion.div variants={itemVariants} className="relative group/input">
                <motion.textarea 
                  whileFocus={{ scale: 1.01, x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  id="message" 
                  rows={4}
                  className="peer w-full border-b border-gray-300 py-3 text-brand-dark focus:border-brand-blue focus:outline-none bg-transparent transition-colors placeholder-transparent resize-none relative z-10"
                  placeholder="Zpráva"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></motion.textarea>
                <label 
                  htmlFor="message" 
                  className={`absolute left-0 transition-all uppercase tracking-wider ${message ? '-top-3.5 text-xs font-bold text-brand-blue' : 'top-3 text-base text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-blue'}`}
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
        </motion.div>
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
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
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
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 rounded-full border-2 border-brand-blue flex items-center justify-center mb-6 text-brand-blue shadow-[0_0_20px_rgba(63,213,211,0.3)]"
                >
                   <Check size={40} strokeWidth={3} />
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 uppercase leading-none">
                   Rezervace <br/><span className="text-brand-blue">Odeslána</span>
                </h3>
                
                <p className="text-white text-lg mb-6">
                  Děkujeme, {submittedName}!
                </p>

                <div className="text-gray-400 text-sm font-light leading-relaxed mb-8 max-w-xs mx-auto">
                   Vaše objednávka byla úspěšně přijata ke zpracování. Prosím vyčkejte na potvrzení termínu, které vám zašleme e-mailem nebo telefonicky.
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
