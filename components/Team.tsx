import React, { useState } from 'react';
import { TEAM } from '../constants';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const HIDE_TEAM = import.meta.env.VITE_HIDE_TEAM === 'true';

const Team: React.FC = () => {
  // pokud je flag zapnutý, komponenta nic nerenderuje (zůstane v kódu)
  if (HIDE_TEAM) return null;

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
            <h2 className="mt-0 md:text-6xl font-heading font-bold text-brand-dark">
              Tým <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-dark">SpectraWash</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0 md:text-right">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Profesionálové v mytí vozů</p>
          </div>
        </motion.div>
      </div>

      {/* Horizontal accordion / cards */}
      <div className="w-full flex flex-col md:flex-row border-t border-b border-gray-100 md:h-[70vh]">
        {TEAM.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}
            className={`relative group overflow-hidden border-b md:border-b-0 md:border-r border-gray-200 transition-all duration-700 ease-in-out ${hoveredMember === index ? 'md:flex-[3]' : 'md:flex-[1]'} flex flex-col justify-end min-h-[400px] md:min-h-auto`}
          >
            {/* Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover filter grayscale contrast-125 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <div className="absolute top-0 left-0 p-10 pointer-events-none transition-all duration-500">
                <span className="block text-white/50 text-xs font-bold uppercase tracking-[0.25em] whitespace-nowrap md:writing-mode-vertical-rl">{member.role}</span>
              </div>

              <div className="mb-6">
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 uppercase leading-[0.9]">
                  {member.name.split(' ')[0]} <br /><span className="text-white/50">{member.name.split(' ')[1] ?? ''}</span>
                </h3>
                <p className="text-white/80 text-sm italic mb-6 border-l-2 border-white/30 pl-4 max-w-md">{member.quote}</p>
              </div>

              <div className="absolute bottom-8 right-8 z-20 transition-all duration-700">
                <span className="font-signature text-3xl md:text-5xl text-white/90 rotate-6 block">{member.name}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;