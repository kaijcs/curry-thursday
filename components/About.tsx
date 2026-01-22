import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="min-h-[60vh] flex items-center">
      <div className="relative border-4 border-curry-dark bg-white p-8 md:p-16 shadow-[12px_12px_0px_0px_#FF5C00] rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
        {/* Decorative Tape */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-10 bg-curry-yellow/80 rotate-2 backdrop-blur-sm" />
        
        <h2 className="font-heading text-4xl md:text-6xl text-curry-dark mb-8 text-center">
          WHAT IS IT?
        </h2>
        
        <p className="font-body text-xl md:text-3xl font-bold leading-relaxed text-center text-curry-dark/90">
          "Every other week at <span className="text-curry-orange">Nordheim Court</span>, we cook curry, hang out, and have a great time. Everyone’s welcome!"
        </p>

        {/* Sticker style decorations */}
        <motion.div 
          className="absolute -bottom-8 -right-8 bg-curry-red text-white font-heading p-4 rounded-full text-sm rotate-12 shadow-lg"
          whileHover={{ scale: 1.1, rotate: 20 }}
        >
          FREE FOOD!
        </motion.div>
        
        <motion.div 
          className="absolute -top-8 -left-8 bg-curry-dark text-curry-yellow font-heading p-3 rounded-none text-xl -rotate-6 shadow-lg"
          whileHover={{ scale: 1.1, rotate: -12 }}
        >
          BRING FRIENDS
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
