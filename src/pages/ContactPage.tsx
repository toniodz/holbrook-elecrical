import React from 'react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { CoverageMap } from '../components/contact/CoverageMap';
import { SectionHeader } from '../components/ui/SectionHeader';
import { MetaTags } from '../components/seo/MetaTags';
import { metadata } from '../data/metadata';

export function ContactPage() {
  return (
    <>
      <MetaTags meta={metadata.contact} path="/contact" />
      
      <div>
        <ContactHero />
        
        <section className="py-16" id="contact-form">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <SectionHeader 
                  title="Send Us a Message"
                  subtitle="Whether you need a quote, have a question, or want to discuss your electrical requirements, we're here to help."
                />
                <ContactForm />
              </div>
              
              <div>
                <SectionHeader 
                  title="Contact Information"
                  subtitle="Get in touch with our team through any of our offices or our 24/7 emergency support line."
                />
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>

        <CoverageMap />
      </div>
    </>
  );
}