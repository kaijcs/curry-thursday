import React from 'react';
import SectionWrapper from './SectionWrapper';
import { NEXT_EVENTS } from '../constants';
import { MapPin, Clock, Utensils } from 'lucide-react';

const Schedule: React.FC = () => {
  return (
    <SectionWrapper id="schedule">
      <div className="flex flex-col items-center">
        <h2 className="font-heading text-5xl md:text-7xl mb-16 text-curry-dark relative inline-block text-center">
          MARK THE DATES
          <span className="absolute -bottom-2 left-0 w-full h-4 bg-curry-yellow -z-10 -rotate-1"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl mx-auto">
          {NEXT_EVENTS.map((event, index) => (
            <div 
              key={index}
              className="group relative bg-white border-4 border-curry-dark p-6 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_0px_#1A0B2E]"
            >
              {/* Decorative "Holes" for Ticket Look */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-curry-cream rounded-r-full border-r-4 border-curry-dark" />
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-curry-cream rounded-l-full border-l-4 border-curry-dark" />

              {/* Decorative Stamps - Positioned randomly to fill space */}
              <div className="absolute -top-4 -right-4 bg-curry-red text-white font-heading text-xs px-3 py-1 rotate-12 shadow-md border-2 border-curry-dark z-10">
                FREE FOOD!
              </div>
              <div className="absolute bottom-16 right-6 opacity-10 rotate-[-15deg]">
                <Utensils size={80} className="text-curry-dark" />
              </div>

              {/* Main Content */}
              <div className="flex flex-col items-center justify-center border-b-4 border-dotted border-curry-dark/20 pb-6 mb-6 relative">
                <span className="font-body font-bold text-curry-orange uppercase tracking-widest mb-2">Save the Date</span>
                <span className="font-heading text-6xl md:text-7xl text-curry-dark leading-none text-center">
                  {event.date}
                </span>
                
                {/* Time Badge */}
                <div className="mt-4 bg-curry-yellow border-2 border-curry-dark px-4 py-1 rounded-full flex items-center gap-2 font-body font-bold text-curry-dark shadow-[2px_2px_0px_0px_#2D0A00]">
                    <Clock size={18} />
                    {event.time}
                </div>
              </div>

              {/* Lower Section: Vibe Text instead of Menu */}
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="font-heading text-2xl md:text-3xl text-curry-dark/80 -rotate-2">
                   GOOD VIBES & <br/>
                   <span className="text-curry-orange">SPICY CURRY</span>
                </div>
                
                <div className="w-full flex justify-center mt-4 pt-4">
                    <div className="inline-flex items-center gap-2 text-gray-500 font-mono text-sm bg-gray-100 px-3 py-1 rounded-md border border-gray-300">
                        <MapPin size={14} />
                        Nordheim Court 1st Floor
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Schedule;