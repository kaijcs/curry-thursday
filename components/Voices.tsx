import React from 'react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

const Voices: React.FC = () => {
  return (
    <section id="voices" className="py-24 overflow-hidden bg-curry-dark text-curry-cream relative">
      <div className="text-center mb-12">
        <h2 className="font-heading text-4xl md:text-6xl text-curry-yellow">
          THE WORD ON THE STREET
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden py-8">
        {/* Marquee Container */}
        <motion.div 
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }
          }}
        >
          {/* Double the array to ensure seamless looping */}
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`}
              className="inline-block w-[300px] md:w-[400px] bg-curry-orange p-6 rounded-2xl border-2 border-curry-cream whitespace-normal shrink-0"
            >
              <p className="font-heading text-xl md:text-2xl mb-4 leading-tight">"{item.quote}"</p>
              <div className="flex justify-between items-end border-t border-curry-dark/20 pt-4">
                <span className="font-body font-bold text-curry-dark">{item.name}</span>
                <span className="font-mono text-xs uppercase tracking-wider bg-curry-dark text-curry-yellow px-2 py-1 rounded">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-curry-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-curry-dark to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Voices;
