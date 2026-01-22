import React from 'react';
import { motion } from 'framer-motion';

const FloatingIngredients: React.FC = () => {
  // Using simple SVG shapes to represent abstract ingredients
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
      {/* Abstract Potato/Rock */}
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-24 bg-curry-orange rounded-[40%_60%_70%_30%/40%_50%_60%_50%] mix-blend-multiply filter blur-xl"
        animate={{
          y: [0, -40, 0],
          rotate: [0, 20, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Abstract Carrot/Shape */}
      <motion.div
        className="absolute bottom-1/3 right-20 w-40 h-40 bg-curry-yellow rounded-full mix-blend-multiply filter blur-2xl"
        animate={{
          y: [0, 60, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Abstract Spice Particle */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-20 h-20 bg-curry-red rounded-full mix-blend-multiply filter blur-lg"
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default FloatingIngredients;
