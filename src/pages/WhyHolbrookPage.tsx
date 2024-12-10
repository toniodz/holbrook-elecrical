import React from 'react';
import { WhyHolbrookHero } from '../components/why-holbrook/WhyHolbrookHero';
import { BenefitsSection } from '../components/why-holbrook/BenefitsSection';
import { ExperienceSection } from '../components/why-holbrook/ExperienceSection';
import { TeamSection } from '../components/why-holbrook/TeamSection';
import { AccreditationsSection } from '../components/why-holbrook/AccreditationsSection';
import { MetaTags } from '../components/seo/MetaTags';
import { metadata } from '../data/metadata';

export function WhyHolbrookPage() {
  return (
    <>
      <MetaTags meta={metadata.whyHolbrook} path="/why-holbrook" />
      
      <div>
        <WhyHolbrookHero />
        
        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Clients Choose Us</h2>
              <p className="text-gray-600 mb-8">
                For over two decades, Holbrook Electrical has been delivering exceptional electrical solutions to businesses across Southeast England. Our commitment to excellence, innovative approach, and deep industry expertise make us the partner of choice for complex electrical projects.
              </p>
              <p className="text-gray-600">
                Whether you need industrial installations, power distribution systems, or ongoing maintenance, our team of expert engineers brings unmatched experience and dedication to every project.
              </p>
            </div>
          </div>
        </section>

        <BenefitsSection />
        <ExperienceSection />
        <TeamSection />
        <AccreditationsSection />
      </div>
    </>
  );
}