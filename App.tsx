import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FloatingButtons from './components/FloatingButtons';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import PromoBar from './components/PromoBar';

import RucniMytiAuto from './pages/services/ServiceCleaning';

/**
 * Komponenta pro správné měření pageview při změně URL (BrowserRouter)
 */
const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // @ts-ignore
    if (typeof gtag === 'function') {
      // @ts-ignore
      gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <Router>
      <AnalyticsTracker />
      <ScrollToTop />

      <div className="flex flex-col min-h-screen bg-brand-light font-sans text-brand-dark relative">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-brand-blue origin-left z-[100]"
          style={{ scaleX: scrollYProgress }}
        />

        <Header />
        <PromoBar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* SEO služby */}
            <Route path="/rucni-myti-auta-praha" element={<RucniMytiAuto />} />
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