import type { LucideIcon } from 'lucide-react';

export interface CaseStudy {
  slug: string;
  title: string;
  sector: string;
  date: string;
  featuredImage: string;
  gallery: {
    url: string;
    caption: string;
  }[];
  featured: boolean;
  content: string;
  meta?: PageMeta;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface Testimonial {
  author: string;
  company: string;
  content: string;
  image?: string;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export type { LucideIcon };