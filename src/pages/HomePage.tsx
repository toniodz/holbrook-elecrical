import React from 'react';
import { Hero } from '../components/home/Hero';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { Testimonials } from '../components/home/Testimonials';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ContactForm } from '../components/contact/ContactForm';
import { ServiceCard } from '../components/services/ServiceCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { MetaTags } from '../components/seo/MetaTags';
import { metadata } from '../data/metadata';

export function HomePage() {
  return (
    <>
      <MetaTags meta={metadata.home} path="/" />
      
      <div>
        <Hero />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Electrical Design, Installation & Maintenance"
              subtitle="From schools and marine installations to high-voltage private networks, we deliver expert electrical solutions across Southeast England."
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    {...service}
                  />
                ))}
                
                <div className="md:col-span-2 text-center mt-8">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Find out more about what we do
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="lg:sticky lg:top-24">
                  <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 via-blue-800 to-blue-900 p-8 text-white">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 animate-gradient"></div>
                    <div className="relative">
                      <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                      <ContactForm lightMode />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturedProjects />
        <WhyChooseUs />
        <Testimonials />
      </div>
    </>
  );
}