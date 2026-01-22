
import React from 'react';
import Vouchers from '../components/Vouchers';
import Contact from '../components/Contact';

const Shop: React.FC = () => {
  return (
    <div className="w-full pt-[70px] xl:pt-[88px]">
      {/* Vouchers Section - Starts immediately after header */}
      <Vouchers />
      <Contact />
    </div>
  );
};

export default Shop;
