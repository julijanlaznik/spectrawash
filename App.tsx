
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-light font-sans text-brand-dark relative">
        {/* Scroll Progress Bar - Fixed at top, very high z-index */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-brand-blue origin-left z-[100]"
          style={{ scaleX: scrollYProgress }}
        />
        
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
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
