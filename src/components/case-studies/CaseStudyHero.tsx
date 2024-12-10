import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export function CaseStudyHero() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader 
              title="Our Success Stories"
              subtitle="Real solutions, real results for our clients. Explore how we've helped businesses across various sectors overcome their electrical challenges."
            />
          </div>
          
          <div className="flex flex-col justify-center gap-6">
            <p className="text-scale-xl text-gray-600">
              From marine installations to industrial power systems, discover how our expertise delivers exceptional results across diverse sectors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Start Your Project
                <ArrowRight size={20} />
              </Link>
              
              <a
                href="tel:01234567890"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-8 py-3 rounded-md hover:bg-gray-200 transition-colors"
              >
                <Phone size={20} />
                <span>24/7 Emergency: 01234 567890</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}