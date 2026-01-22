import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      className={`relative py-24 px-4 md:px-12 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
