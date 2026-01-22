
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
  
  // Kontrola, zda jsme na jakékoliv podstránce služeb (včetně těch skrytých z menu)
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
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
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
                    
                    {/* Dropdown Desktop */}
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-screen bg-white z-40 overflow-y-auto pt-24"
          >
            <div className="flex flex-col items-center justify-center space-y-6 px-6">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="text-center w-full">
                  <button
                    onClick={() => link.name === 'Služby' ? setIsServicesOpen(!isServicesOpen) : handleScrollToSection(link.path)}
                    className="text-2xl font-heading text-brand-dark uppercase tracking-widest flex items-center justify-center gap-2 w-full py-2"
                  >
                    {link.name}
                    {link.name === 'Služby' && <ChevronDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />}
                  </button>
                  
                  {link.name === 'Služby' && isServicesOpen && (
                    <div className="flex flex-col gap-4 mt-4 bg-gray-50 py-4 w-full text-center">
                      {SERVICE_LINKS.map((s) => (
                        <NavLink 
                          key={s.path}
                          to={s.path}
                          className="text-sm tracking-[0.2em] uppercase text-gray-500 py-2"
                        >
                          {s.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <button
                onClick={() => navigate('/shop')}
                className="text-2xl font-heading text-brand-dark uppercase tracking-widest flex items-center gap-2 py-2"
              >
                <Gift size={24} /> VOUCHERS
              </button>
              
              <div className="pt-8 w-full">
                <Button onClick={handleBookingClick} variant="primary" fullWidth>
                  Rezervovat Online
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
