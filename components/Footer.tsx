
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, ArrowUp, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetCookies = () => {
    window.dispatchEvent(new Event('resetCookieConsent'));
    scrollToTop();
  };

  return (
    <footer className="bg-brand-dark text-white pt-32 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Parallax Background Text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <motion.div 
            initial={{ x: 0 }}
            whileInView={{ x: -100 }}
            transition={{ duration: 20, ease: "linear" }}
            className="text-[25vw] font-heading font-bold leading-none text-white whitespace-nowrap absolute -top-20 -left-10 select-none"
        >
          SPECTRAWASH
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-4">
            <NavLink to="/" className="inline-block mb-8 group text-white">
              <Logo />
            </NavLink>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
              Precizní ruční mytí a čištění vozů v Praze. Poctivá práce, šetrná péče a čistota, která přesvědčí.
            </p>
            
            {/* Newsletter Input - Sharp Design */}
            <div className="relative max-w-xs group">
                <input 
                    type="email" 
                    placeholder="Odebírat novinky" 
                    className="w-full bg-white/5 border border-white/10 py-3 pl-4 pr-12 text-sm text-white placeholder-gray-600 focus:border-brand-blue focus:outline-none transition-colors rounded-none"
                />
                <button className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-gray-400 hover:text-brand-blue transition-colors">
                    <Send size={16} />
                </button>
            </div>
          </div>

          {/* Links Column */}
          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-white/40">Menu</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><NavLink to="/" className="hover:text-brand-blue hover:pl-2 transition-all inline-block duration-300">Domů</NavLink></li>
              <li><NavLink to="/#services" className="hover:text-brand-blue hover:pl-2 transition-all inline-block duration-300">Služby</NavLink></li>
              <li><NavLink to="/shop" className="hover:text-brand-blue hover:pl-2 transition-all inline-block duration-300">Shop</NavLink></li>
              <li><NavLink to="/#contact" className="hover:text-brand-blue hover:pl-2 transition-all inline-block duration-300">Rezervace</NavLink></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-white/40">Služby</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
                  <span className="w-1 h-1 bg-brand-blue"></span> Ruční Mytí Exteriéru
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
                  <span className="w-1 h-1 bg-brand-blue"></span> Renovace & Leštění
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
                  <span className="w-1 h-1 bg-brand-blue"></span> Voskování & Ochrana
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
                  <span className="w-1 h-1 bg-brand-blue"></span> Kompletní Interiér
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-white/40">Sledujte nás</h4>
            <div className="flex gap-6 items-center">
              <a 
                href="https://www.instagram.com/spectra_wash/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group"
              >
                <Instagram size={24} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.facebook.com/spectrawash" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group"
              >
                <Facebook size={24} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} SpectraWash.</p>
          <div className="flex items-center mt-6 md:mt-0 space-x-8">
            <NavLink to="/privacy" className="hover:text-white transition-colors">Ochrana dat</NavLink>
            <NavLink to="/terms" className="hover:text-white transition-colors">Podmínky</NavLink>
            <button onClick={resetCookies} className="hover:text-white transition-colors">Nastavení cookies</button>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 flex items-center justify-center border border-white/10 hover:bg-white hover:text-brand-dark transition-all duration-300 group"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
