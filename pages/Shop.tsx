
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Vouchers from '../components/Vouchers';
import Contact from '../components/Contact';
import { MERCHANDISE } from '../constants';

const Shop: React.FC = () => {
  return (
    <div className="pt-24 w-full">
      {/* Shop Hero */}
      <section className="bg-brand-dark text-white min-h-[60vh] relative flex items-center overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563297123-1d8839074092?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
         <div className="absolute inset-0 bg-brand-dark/90"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs mb-6 block border-l-2 border-brand-blue pl-4">
                SpectraWash Shop
              </span>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
                Vouchery & <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Autokosmetika</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-xl mb-10 font-light leading-relaxed">
                Darujte dokonalou čistotu nebo si dopřejte profesionální produkty pro údržbu vašeho vozu u vás doma.
              </p>
            </motion.div>
         </div>
      </section>

      {/* Vouchers Section (Reused) */}
      <Vouchers />

      {/* Merchandise Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-0"
                >
                    <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs mb-3 block flex items-center gap-2">
                    <ShoppingBag size={16} /> Oficiální Merch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark leading-tight">
                    Vybrané <br /> <span className="text-brand-blue">Produkty</span>
                    </h2>
                </motion.div>
                
                <Button variant="outline" className="border-gray-200 text-brand-dark hover:bg-brand-dark hover:text-white hover:border-brand-dark">
                    Zobrazit vše
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {MERCHANDISE.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="relative h-64 overflow-hidden bg-gray-50 p-4 flex items-center justify-center">
                            {item.tag && (
                                <span className="absolute top-4 left-4 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 z-20">
                                    {item.tag}
                                </span>
                            )}
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="h-full w-full object-cover mix-blend-multiply filter contrast-125 group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay CTA */}
                            <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Button className="scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 delay-100">
                                    Do košíku
                                </Button>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-heading font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                                {item.title}
                            </h3>
                            <div className="flex justify-between items-center">
                                <span className="text-brand-gray font-medium">{item.price}</span>
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-brand-dark group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Shop;
