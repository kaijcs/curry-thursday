export interface EventDate {
  date: string;
  time: string;
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  role?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string; // Lucide icon name
}