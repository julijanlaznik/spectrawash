
import React, { useState } from 'react';
import { TEAM } from '../constants';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const Team: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-brand-dark pb-8"
          >
             <div className="mb-6 md:mb-0">
                <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                  Lidé za značkou
                </span>
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-dark">
                  Tým <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-dark">SpectraWash</span>
                </h2>
             </div>
             <div className="mt-6 md:mt-0 md:text-right">
               <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                 Profesionálové v mytí vozů
               </p>
             </div>
          </motion.div>
      </div>

      {/* Horizontal Accordion Layout */}
      <div className="w-full flex flex-col md:flex-row border-t border-b border-gray-100 md:h-[70vh]">
        {TEAM.map((member, index) => (
          <motion.div 
            key={member.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}
            className={`relative group overflow-hidden border-b md:border-b-0 md:border-r border-gray-200 transition-all duration-700 ease-[0.22, 1, 0.36, 1] ${
              hoveredMember === index ? 'md:flex-[3]' : 'md:flex-[1]'
            } flex flex-col justify-end min-h-[400px] md:min-h-auto`}
          >
            {/* Image Layer */}
            <div className="absolute inset-0 w-full h-full">
               <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover filter grayscale contrast-125 transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Standard state: darkened bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Hover state: Brand Blue Multiply Overlay */}
              <div className="absolute inset-0 bg-brand-blue mix-blend-multiply opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 p-0 h-full">
              
              {/* Role: Top Left, Vertical, Readable */}
              <div className={`absolute top-0 left-0 pt-10 pl-6 h-full pointer-events-none transition-all duration-500 ${hoveredMember === index ? 'opacity-0' : 'opacity-100'}`}>
                 <span className="block text-white/50 text-xs font-bold uppercase tracking-[0.25em] whitespace-nowrap md:[writing-mode:vertical-rl] md:rotate-180">
                   {member.role}
                 </span>
              </div>

              {/* Name: Bottom Left, Horizontal, Just First Name, Blue */}
              <div className={`transition-all duration-500 absolute bottom-10 left-10 md:left-14 ${hoveredMember === index ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                 <h3 className="text-4xl md:text-6xl font-heading font-bold text-brand-blue uppercase tracking-tighter">
                   {member.name.split(" ")[0]}
                 </h3>
              </div>

              {/* EXPANDED STATE CONTENT */}
              <div className={`absolute bottom-0 left-0 w-full p-8 md:p-12 transform transition-all duration-500 flex flex-col justify-end ${
                hoveredMember === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/30 px-3 py-1">
                    0{index + 1}
                  </span>
                  <div className="h-[1px] w-12 bg-white/50"></div>
                </div>
                
                {/* Full Name in Expanded View */}
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 uppercase leading-[0.9]">
                  {member.name.split(" ")[0]}<br/>
                  <span className="text-white/50">{member.name.split(" ")[1]}</span>
                </h3>
                
                <p className="text-white/80 text-sm font-light italic mb-6 border-l-2 border-white/30 pl-4 mt-6 max-w-md">
                  {member.quote}
                </p>

                <p className="text-xs font-bold uppercase tracking-widest text-white mt-8 flex items-center gap-2 group/btn cursor-pointer">
                  Zobrazit profil <Plus size={16} className="group-hover/btn:rotate-90 transition-transform"/>
                </p>
              </div>

              {/* SIGNATURE (Fake Autograph) - Bottom Right on Hover */}
              <div className={`absolute bottom-8 right-8 z-20 transition-all duration-700 delay-200 transform ${hoveredMember === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                 <span className="font-signature text-3xl md:text-5xl text-white/90 -rotate-6 block">
                    {member.name}
                 </span>
              </div>

            </div>

            {/* Sharp Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
