
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Pouze 4 sjednocené komponenty
import ServiceCleaningPraha from './pages/services/ServiceCleaningPraha';
import ServiceCeramicPraha from './pages/services/ServiceCeramicPraha';
import ServicePPFPraha from './pages/services/ServicePPFPraha';
import ServiceFullCare from './pages/services/ServiceFullCare';

import FloatingButtons from './components/FloatingButtons';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import PromoBar from './components/PromoBar';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const sendPageView = () => {
      // @ts-ignore
      if (typeof gtag === 'function') {
        // @ts-ignore
        gtag('event', 'page_view', {
          page_path: window.location.pathname + window.location.hash,
        });
      }
    };

    sendPageView();
    window.addEventListener('hashchange', sendPageView);
    return () => {
      window.removeEventListener('hashchange', sendPageView);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-light font-sans text-brand-dark relative overflow-x-hidden">
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-brand-blue origin-left z-[100]"
          style={{ scaleX: scrollYProgress }}
        />
        
        <Header />
        <PromoBar />

        <main className="flex-grow relative z-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            
            {/* SEO Service Pages - Mapování 9 cest na 4 soubory */}
            {/* 1. Mytí (Cleaning) */}
            <Route path="/rucni-myti-auta-praha" element={<ServiceCleaningPraha />} />
            <Route path="/rucni-myti-auta-praha-6" element={<ServiceCleaningPraha />} />
            <Route path="/rucni-myti-auta-roztoky" element={<ServiceCleaningPraha />} />
            
            {/* 2. Keramika (Ceramic) */}
            <Route path="/keramicka-ochrana-laku" element={<ServiceCeramicPraha />} />
            <Route path="/keramicka-ochrana-laku-praha" element={<ServiceCeramicPraha />} />
            
            {/* 3. Fólie (PPF + Shield) */}
            <Route path="/ppf-folie" element={<ServicePPFPraha />} />
            <Route path="/ppf-folie-praha" element={<ServicePPFPraha />} />
            <Route path="/ochranne-folie-na-auto" element={<ServicePPFPraha />} />
            
            {/* 4. Kompletní péče */}
            <Route path="/kompletni-pece-o-auto" element={<ServiceFullCare />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
        <FloatingButtons />
        <CookieConsent />
      </div>
    </Router>
  );
};

export default App;
