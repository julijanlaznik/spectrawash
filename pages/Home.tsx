
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Partners from '../components/Partners';
import Team from '../components/Team';
import Contact from '../components/Contact';
import SocialFeed from '../components/SocialFeed';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <SocialFeed />
      <Portfolio />
      <Team />
      <Partners />
      <Contact />
    </div>
  );
};

export default Home;
