import SectionWrapper from './SectionWrapper';
import { CONTACT_INFO } from '../constants';
import { Instagram, Mail, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-curry-cream min-h-[70vh] flex flex-col justify-center relative overflow-hidden">
      <SectionWrapper className="z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-heading text-[10vw] leading-none text-curry-dark mb-12 mix-blend-multiply">
            DON'T MISS OUT
          </h2>

          <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl mx-auto">
            <a 
              href={CONTACT_INFO.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex-1 bg-white border-4 border-curry-dark p-8 md:p-12 flex flex-col items-center justify-center hover:bg-curry-yellow transition-colors cursor-pointer shadow-[8px_8px_0px_0px_#1A0B2E]"
            >
              <Instagram size={64} className="mb-4 text-curry-dark group-hover:scale-110 transition-transform duration-300" />
              <span className="font-heading text-2xl md:text-3xl text-curry-dark">INSTAGRAM</span>
              <span className="font-mono text-sm mt-2 flex items-center gap-1 group-hover:underline">
                @currythursday4 <ArrowUpRight size={14} />
              </span>
            </a>

            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="group flex-1 bg-white border-4 border-curry-dark p-8 md:p-12 flex flex-col items-center justify-center hover:bg-curry-orange transition-colors cursor-pointer shadow-[8px_8px_0px_0px_#1A0B2E]"
            >
              <Mail size={64} className="mb-4 text-curry-dark group-hover:scale-110 transition-transform duration-300" />
              <span className="font-heading text-2xl md:text-3xl text-curry-dark">EMAIL</span>
              <span className="font-mono text-sm mt-2 flex items-center gap-1 group-hover:underline">
                {CONTACT_INFO.email} <ArrowUpRight size={14} />
              </span>
            </a>
          </div>

          <div className="mt-24 font-body font-bold text-curry-dark/50 text-sm">
            © {new Date().getFullYear()} Curry Thursday. Made with spice 🌶️
          </div>
        </div>
      </SectionWrapper>
      
      {/* Footer Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-curry-yellow via-curry-orange to-curry-red" />
    </footer>
  );
};

export default Contact;
