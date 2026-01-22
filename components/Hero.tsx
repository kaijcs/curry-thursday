import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* Background kinetic type */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none opacity-5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="font-heading text-[15vw] leading-[0.8] text-curry-dark whitespace-nowrap animate-marquee">
            SPICY HOT • DELICIOUS • NORDHEIM COURT • 
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.5 }}
          className="mb-6 bg-curry-yellow text-curry-dark font-body font-black uppercase tracking-widest py-2 px-6 rounded-full border-2 border-curry-dark shadow-[4px_4px_0px_0px_rgba(45,10,0,1)]"
        >
          Freshly Made
        </motion.div>

        {/* Main Title - Staggered */}
        <h1 className="font-heading text-[12vw] md:text-[10rem] leading-[0.85] text-curry-orange drop-shadow-lg mix-blend-hard-light">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            CURRY
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-curry-dark relative"
          >
            THURSDAY
            
            {/* Decorative squiggle */}
            <svg className="absolute -top-4 -right-4 md:-right-12 w-16 md:w-32 h-16 md:h-32 text-curry-yellow animate-bounce-slow" viewBox="0 0 100 100" fill="none">
              <path d="M10 50 Q 25 20, 50 50 T 90 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </motion.div>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 font-body font-bold text-xl md:text-2xl text-curry-dark max-w-md mx-auto"
        >
          Bi-weekly flavor explosion at <span className="underline decoration-curry-orange decoration-4">Nordheim Court</span>.
        </motion.p>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10"
      >
        <ArrowDown size={32} className="text-curry-dark" />
      </motion.div>
    </section>
  );
};

export default Hero;