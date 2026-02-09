import { EventDate, Testimonial } from './types';

// ==========================================
// 📅 ここでスケジュールを更新してください (SCHEDULE)
// ==========================================
export const NEXT_EVENTS: EventDate[] = [
  {
    date: "02/12",
    time: "18:00",
  },
  {
    date: "02/26",
    time: "18:00",
  }
];

// ==========================================
// 🗣️ ここで参加者の声を更新してください (VOICES)
// ==========================================
export const TESTIMONIALS: Testimonial[] = [
  { 
    id: 1, 
    name: "Waka", 
    quote: "Amazing curry, I'll definitely come every time", 
    role: "Friend" 
  },
  { 
    id: 2, 
    name: "Haruto", 
    quote: "We'll have a hot meal waiting for you", 
    role: "Chef" 
  },
  { 
    id: 3, 
    name: "Kai", 
    quote: "The smell drew me in instantly. Such a cozy vibe!", 
    role: "Neighbor" 
  },

];

export const CONTACT_INFO = {
  location: "Nordheim Court, 1st Floor",
  instagram: "https://www.instagram.com/currythursday4/?utm_source=ig_web_button_share_sheet",
  email: "haoki@uw.edu"
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Dates", href: "#schedule" },
  { label: "Vibe", href: "#voices" },
  { label: "Contact", href: "#contact" },
];
