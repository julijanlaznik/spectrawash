import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Gift, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Button';
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICE_LINKS = [
  { name: 'Ruční mytí auta Praha', path: '/rucni-myti-auta-praha' },
  { name: 'Keramická ochrana laku', path: '/keramicka-ochrana-laku-praha' },
  { name: 'PPF fólie Praha', path: '/ppf-folie-praha' },
  { name: 'Kompletní péče o auto', path: '/kompletni-pece-o-auto' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isShopPage = location.pathname === '/shop';
  const isHome = location.pathname === '/';
  
  const allServicePaths = [
    '/rucni-myti-auta-praha', 
    '/rucni-myti-auta-praha-6', 
    '/rucni-myti-auta-roztoky', 
    '/keramicka-ochrana-laku', 
    '/keramicka-ochrana-laku-praha', 
    '/ppf-folie', 
    '/ppf-folie-praha', 
    '/ochranne-folie-na-auto', 
    '/kompletni-pece-o-auto'
  ];
  const isServiceDetail = allServicePaths.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleScrollToSection = (path: string) => {
    if (path.includes('#')) {
      const id = path.split('#')[1];
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
    setIsMobileMenuOpen(false);
  };

  const handleBookingClick = () => {
    handleScrollToSection('/#contact');
  };

  const isDark = isScrolled || isMobileMenuOpen || isShopPage || isServiceDetail || !isHome;
  const textColorClass = isDark ? 'text-brand-dark' : 'text-white';
  const subTextColorClass = isDark ? 'text-brand-dark/80' : 'text-white/90';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <NavLink to="/" className={`z-50 group relative transition-colors duration-300 ${textColorClass}`}>
            <Logo />
          </NavLink>

          <nav className="hidden xl:flex items-center space-x-10">
            {NAV_LINKS.map((link) => {
              if (link.name === 'Služby') {
                return (
                  <div 
                    key={link.name} 
                    className="relative group py-4"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      onClick={() => handleScrollToSection(link.path)}
                      className={`text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 flex items-center gap-1 hover:text-brand-blue 
                        font-light ${subTextColorClass}`}
                    >
                      {link.name} <ChevronDown size={12} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100`} />
                    
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-64 bg-white shadow-2xl border-t-2 border-brand-blue py-4 px-2"
                        >
                          {SERVICE_LINKS.map((s) => (
                            <NavLink 
                              key={s.path}
                              to={s.path}
                              className="block px-4 py-3 text-[10px] tracking-widest uppercase text-brand-dark hover:bg-gray-50 hover:text-brand-blue transition-colors border-b border-gray-50 last:border-0"
                            >
                              {s.name}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <div key={link.name} className="relative group overflow-hidden">
                  <button
                    onClick={() => handleScrollToSection(link.path)}
                    className={`text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 block py-4 hover:text-brand-blue 
                      font-light ${subTextColorClass}`}
                  >
                    {link.name}
                  </button>
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100`} />
                </div>
              );
            })}
            
            <div className="relative group overflow-hidden">
              <button 
                onClick={() => navigate('/shop')}
                className={`text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 block py-4 hover:text-brand-blue 
                  font-medium ${subTextColorClass} flex items-center gap-2`}
              >
                <Gift size={16} className={`mb-0.5`} /> VOUCHERS
              </button>
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100`} />
            </div>
            
            <div className="flex items-center gap-4 ml-2">
              <Button 
                variant="primary"
                onClick={handleBookingClick}
                className="shadow-[0_0_20px_rgba(63,213,211,0.3)]"
              >
                Rezervovat
              </Button>
            </div>
          </nav>

          <button 
            className="xl:hidden z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
               {isMobileMenuOpen ? (
                 <X className="h-8 w-8 text-brand-dark" />
               ) : (
                 <Menu className={`h-8 w-8 stroke-1 ${textColorClass}`} />
               )}
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Refined Spacing & Centering */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-screen bg-white z-40 overflow-y-auto"
          >
            {/* Content Container - pt-32 ensures space below logo */}
            <div className="container mx-auto px-6 pt-32 pb-20 min-h-full flex flex-col items-center">
              <div className="flex flex-col items-center justify-start space-y-4 w-full">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div 
                    key={link.name} 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + idx * 0.08 }}
                    className="text-center w-full"
                  >
                    <button
                      onClick={() => link.name === 'Služby' ? setIsServicesOpen(!isServicesOpen) : handleScrollToSection(link.path)}
                      className="text-xl font-heading font-medium text-brand-dark uppercase tracking-[0.3em] flex items-center justify-center gap-3 w-full py-4 hover:text-brand-blue transition-colors"
                    >
                      {link.name}
                      {link.name === 'Služby' && <ChevronDown size={18} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />}
                    </button>
                    
                    <AnimatePresence>
                      {link.name === 'Služby' && isServicesOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col gap-6 mt-4 mb-4 bg-gray-50/50 py-10 w-full text-center rounded-2xl"
                        >
                          {SERVICE_LINKS.map((s) => (
                            <NavLink 
                              key={s.path}
                              to={s.path}
                              className="text-[10px] font-medium tracking-[0.25em] uppercase text-gray-400 hover:text-brand-blue py-1 transition-colors"
                            >
                              {s.name}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
                
                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + NAV_LINKS.length * 0.08 }}
                  onClick={() => navigate('/shop')}
                  className="text-xl font-heading font-medium text-brand-dark uppercase tracking-[0.3em] flex items-center justify-center gap-3 w-full py-4 hover:text-brand-blue transition-colors"
                >
                  <Gift size={20} className="text-brand-blue" /> VOUCHERS
                </motion.button>
                
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + NAV_LINKS.length * 0.08 }}
                  className="pt-10 w-full max-w-[280px]"
                >
                  <Button onClick={handleBookingClick} variant="primary" fullWidth className="py-5 text-[11px] tracking-[0.25em] font-medium">
                    Rezervovat Online
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Subtle background gradients - fixed to stay in place during scroll */}
            <div className="fixed top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="fixed bottom-0 left-0 w-80 h-80 bg-brand-dark/5 rounded-full blur-3xl -z-10 translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;