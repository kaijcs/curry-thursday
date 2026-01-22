import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none`}
      >
        <div 
          className={`pointer-events-auto transition-all duration-300 ease-in-out
            ${scrolled ? 'bg-curry-dark/90 backdrop-blur-md text-white py-3 px-8 rounded-full shadow-lg' : 'bg-transparent text-curry-dark py-4 px-6'}
            flex items-center gap-8
          `}
        >
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-heading text-2xl tracking-tighter hover:scale-105 transition-transform">
            CT<span className="text-curry-orange">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 font-body font-bold uppercase text-sm tracking-widest">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-curry-orange transition-colors relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-curry-orange group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-1"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            className="fixed inset-0 bg-curry-orange z-50 flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white p-2 hover:rotate-90 transition-transform duration-300"
            >
              <X size={48} />
            </button>
            <div className="flex flex-col gap-8 text-center">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  onClick={(e: any) => handleNavClick(e, link.href)}
                  className="font-heading text-5xl md:text-7xl text-white hover:text-curry-yellow transition-colors cursor-pointer"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;