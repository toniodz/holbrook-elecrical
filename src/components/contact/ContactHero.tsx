import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export function ContactHero() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader 
              title="Get Expert Electrical Help"
              subtitle="Need support with your industrial or commercial electrical systems? Our expert team is ready to help."
            />
          </div>
          
          <div className="flex flex-col justify-center gap-6">
            <p className="text-scale-xl text-gray-600">
              From emergency repairs to long-term maintenance contracts, we provide comprehensive electrical solutions tailored to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:01234567890"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                <Phone size={20} />
                <span>24/7 Emergency: 01234 567890</span>
              </a>
              
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-8 py-3 rounded-md hover:bg-gray-200 transition-colors"
              >
                Send a Message
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}