
import React from 'react';
import Vouchers from '../components/Vouchers';
import Contact from '../components/Contact';

const Shop: React.FC = () => {
  return (
    <div className="w-full">
      {/* Vouchers Section - Starts immediately */}
      {/* Header logic handles text color based on route */}
      <Vouchers />
      <Contact />
    </div>
  );
};

export default Shop;
