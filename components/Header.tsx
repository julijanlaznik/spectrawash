

import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Gift } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Button';
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Detect if we are on the Shop page
  const isShopPage = location.pathname === '/shop';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const handleScrollToSection = (path: string) => {
    if (path.includes('#')) {
      const id = path.split('#')[1];
      
      // Special logic: Center 'Testimonials' vertically, others align to top
      const scrollOptions: ScrollIntoViewOptions = { 
        behavior: 'smooth',
        block: id === 'testimonials' ? 'center' : 'start'
      };

      if (location.pathname !== '/' && path.startsWith('/#')) {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView(scrollOptions);
          }
        }, 100);
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView(scrollOptions);
        }
      }
    } else {
      navigate(path);
    }
    setIsMobileMenuOpen(false);
  };

  const handleBookingClick = () => {
    handleScrollToSection('/#contact');
  };

  const handleVouchersClick = () => {
    navigate('/shop');
  };

  // Determine text color based on state
  const textColorClass = isScrolled || isMobileMenuOpen || isShopPage ? 'text-brand-dark' : 'text-white';
  const subTextColorClass = isScrolled || isMobileMenuOpen || isShopPage ? 'text-brand-dark' : 'text-white/90';
  const giftIconColor = isScrolled || isMobileMenuOpen || isShopPage ? 'text-brand-dark' : 'text-white';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className={`z-50 group relative transition-colors duration-300 ${textColorClass}`}>
            <Logo />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-10">
            {NAV_LINKS.map((link) => {
              return (
              <div key={link.name} className="relative group overflow-hidden">
                <button
                  onClick={() => handleScrollToSection(link.path)}
                  className={`text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 block py-4 hover:text-brand-blue 
                    font-light ${subTextColorClass}`}
                >
                  {link.name}
                </button>
                {/* FIXED: Added opacity-0 group-hover:opacity-100 to prevent 1px artifact (blue dot) when idle */}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100`} />
              </div>
            )})}
            
            {/* VOUCHER LINK */}
            <div className="relative group overflow-hidden">
              <button 
                onClick={handleVouchersClick}
                className={`text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 block py-4 hover:text-brand-blue 
                  font-medium ${subTextColorClass} flex items-center gap-2`}
              >
                <Gift size={16} className={`mb-0.5 ${giftIconColor}`} /> VOUCHERS
              </button>
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100`} />
            </div>
            
            <div className="flex items-center gap-4 ml-2">
              <Button 
                variant="primary"
                onClick={handleBookingClick}
                className="shadow-[0_0_20px_rgba(63,213,211,0.3)] hover:shadow-[0_0_30px_rgba(63,213,211,0.5)] transition-shadow duration-300"
              >
                Rezervovat
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden z-50 focus:outline-none group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
               <AnimatePresence mode="wait">
                 {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                    >
                      <X className="h-8 w-8 text-brand-dark" />
                    </motion.div>
                 ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                    >
                      <Menu className={`h-8 w-8 stroke-1 ${textColorClass}`} />
                    </motion.div>
                 )}
               </AnimatePresence>
            </div>
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 w-full h-screen bg-white z-40 transform transition-transform duration-700 ease-[0.16,1,0.3,1] ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="w-full h-full flex flex-col items-center justify-center space-y-2 relative overflow-hidden">
           <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-brand-light rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
           
           {NAV_LINKS.map((link, idx) => {
             return (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5, ease: "easeOut" }}
            >
              <button
                onClick={() => handleScrollToSection(link.path)}
                className={`text-2xl font-heading hover:text-brand-blue transition-colors uppercase tracking-[0.25em] relative group block pb-3 mb-2 text-brand-dark font-light`}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-brand-blue -z-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </motion.div>
          )})}

          <motion.div 
            initial={{ opacity: 0 }}
            animate={isMobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6"
          >
             <button
                onClick={() => {
                  navigate('/shop');
                  setIsMobileMenuOpen(false);
                }}
                className="text-2xl font-heading text-brand-dark hover:text-brand-blue font-light uppercase tracking-[0.25em] relative group block pb-3 mb-2 flex items-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-3"><Gift size={24} /> VOUCHERS</span>
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-brand-blue -z-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isMobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <Button onClick={handleBookingClick} variant="primary">
              Rezervovat Online
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Header;