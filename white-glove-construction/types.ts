import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  city: string;
  text: string;
}

export interface GalleryItem {
  src: string;
  category: string;
  title: string;
}