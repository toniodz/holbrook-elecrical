import React from 'react';
import { ServiceHero } from '../components/services/ServiceHero';
import { ServiceCard } from '../components/services/ServiceCard';
import { IndustrySection } from '../components/services/IndustrySection';
import { services } from '../data/services';
import { SectionHeader } from '../components/ui/SectionHeader';
import { MetaTags } from '../components/seo/MetaTags';
import { metadata } from '../data/metadata';

export function ServicesPage() {
  return (
    <>
      <MetaTags meta={metadata.services} path="/services" />
      
      <div>
        <ServiceHero />
        
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Our Core Services"
              subtitle="We provide comprehensive electrical solutions tailored to meet the diverse needs of our industrial and commercial clients."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  {...service}
                />
              ))}
            </div>
          </div>
        </section>

        <IndustrySection />
      </div>
    </>
  );
}