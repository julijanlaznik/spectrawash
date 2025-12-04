
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import Contact from '../components/Contact';
import SocialFeed from '../components/SocialFeed';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      
      {/* SWAPPED: Portfolio moved up immediately after Services for "Price -> Value" logic */}
      <Portfolio />
      
      {/* Testimonials validate the portfolio */}
      <Testimonials />
      
      {/* Social Feed serves as a dynamic break before the Team section */}
      <SocialFeed />
      
      <Team />
      {/* Partners section removed */}
      <Contact />
      {/* FAQ at the very bottom */}
      <FAQ />
    </div>
  );
};

export default Home;