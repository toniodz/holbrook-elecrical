import React from 'react';
import { SectorHero } from '../components/sectors/SectorHero';
import { SectorCard } from '../components/sectors/SectorCard';
import { ExpertiseSection } from '../components/sectors/ExpertiseSection';
import { sectors } from '../data/sectors';
import { SectionHeader } from '../components/ui/SectionHeader';
import { MetaTags } from '../components/seo/MetaTags';
import { metadata } from '../data/metadata';

export function SectorsPage() {
  return (
    <>
      <MetaTags meta={metadata.sectors} path="/sectors" />
      
      <div>
        <SectorHero />
        
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Our Key Sectors"
              subtitle="We provide specialized electrical solutions across various industries, each with its unique requirements and challenges."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sectors.map((sector, index) => (
                <SectorCard
                  key={index}
                  {...sector}
                />
              ))}
            </div>
          </div>
        </section>

        <ExpertiseSection />
      </div>
    </>
  );
}