
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Partners from '../components/Partners';
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
      <SocialFeed />
      <Portfolio />
      {/* Thin Testimonials Section before Team */}
      <Testimonials />
      <Team />
      <Partners />
      <Contact />
      {/* FAQ at the very bottom */}
      <FAQ />
    </div>
  );
};

export default Home;
