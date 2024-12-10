import type { PageMeta } from '../types';

interface SiteMetadata {
  [key: string]: PageMeta;
}

export const metadata: SiteMetadata = {
  home: {
    title: 'Industrial & Commercial Electrical Contractors',
    description: 'Holbrook Electrical provides expert electrical services for industrial and commercial clients across Southeast England. 24/7 emergency support available.',
    keywords: ['electrical contractors', 'industrial electrical', 'commercial electrical', 'electrical services', 'Southeast England'],
    ogType: 'website'
  },
  services: {
    title: 'Electrical Design, Installation & Maintenance Services',
    description: 'Comprehensive electrical services including industrial installations, power distribution, testing, maintenance, and 24/7 emergency support.',
    keywords: ['electrical services', 'electrical installation', 'power distribution', 'electrical maintenance', 'emergency electrical'],
    ogType: 'website'
  },
  sectors: {
    title: 'Sector-Specific Electrical Solutions',
    description: 'Specialized electrical solutions for marine, industrial, educational, and commercial sectors. Expert solutions tailored to your industry.',
    keywords: ['marine electrical', 'industrial electrical', 'commercial electrical', 'educational facilities', 'sector solutions'],
    ogType: 'website'
  },
  caseStudies: {
    title: 'Electrical Project Case Studies',
    description: 'Explore our successful electrical installations and solutions across various sectors. Real results for real businesses.',
    keywords: ['case studies', 'electrical projects', 'project portfolio', 'electrical installations'],
    ogType: 'website'
  },
  contact: {
    title: 'Contact Our Electrical Experts',
    description: 'Get in touch with our team for expert electrical solutions. 24/7 emergency support available across Southeast England.',
    keywords: ['electrical contact', 'emergency electrical', 'electrical support', 'electrical quote'],
    ogType: 'website'
  },
  whyHolbrook: {
    title: 'Why Choose Holbrook Electrical',
    description: 'Discover why leading businesses trust Holbrook Electrical for their electrical needs. Expert team, proven track record, 24/7 support.',
    keywords: ['electrical expertise', 'electrical contractors', 'electrical services', 'trusted electrical'],
    ogType: 'website'
  }
};