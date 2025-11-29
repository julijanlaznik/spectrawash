
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Button';
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    // Enable scroll on body when menu closes
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
      
      // If we are not on home and trying to scroll to a home section
      if (location.pathname !== '/' && path.startsWith('/#')) {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // We are on the page or it's a simple hash
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
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

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className={`z-50 group relative transition-colors duration-300 ${
            isMobileMenuOpen ? 'text-brand-dark' : (isScrolled ? 'text-brand-blue' : 'text-white')
          }`}>
            <Logo />
          </NavLink>

          {/* Desktop Navigation - Changed breakpoint to xl (1280px) strictly */}
          <nav className="hidden xl:flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group overflow-hidden">
                <button
                  onClick={() => handleScrollToSection(link.path)}
                  className={`text-[11px] font-light tracking-[0.25em] uppercase transition-colors duration-300 block py-4 ${
                     (isScrolled ? 'text-brand-dark' : 'text-white/90')
                  } hover:text-brand-blue`}
                >
                  {link.name}
                </button>
                {/* Hover Underline Effect - Thicker (2px) and strictly at bottom with gap */}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out`} />
              </div>
            ))}
            <Button 
              variant={isScrolled ? "primary" : "outline"}
              className={!isScrolled ? "border-white/30 hover:border-white" : ""}
              onClick={handleBookingClick}
            >
              Rezervovat
            </Button>
          </nav>

          {/* Mobile Menu Toggle - Visible below XL (1280px) */}
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
                      <Menu className={`h-8 w-8 ${isScrolled ? 'text-brand-dark' : 'text-white'} stroke-1`} />
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
           {/* Background Deco */}
           <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-brand-light rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
           
           {NAV_LINKS.map((link, idx) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5, ease: "easeOut" }}
            >
              <button
                onClick={() => handleScrollToSection(link.path)}
                className="text-2xl font-heading font-light text-brand-dark hover:text-brand-blue transition-colors uppercase tracking-[0.25em] relative group block pb-3 mb-2"
              >
                <span className="relative z-10">{link.name}</span>
                {/* Thicker line, explicit gap via padding-bottom on link */}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-brand-blue -z-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isMobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <Button onClick={handleBookingClick}>
              Rezervovat Online
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Header;
