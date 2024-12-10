import React, { useState, useMemo, useEffect } from 'react';
import { CaseStudyHero } from '../components/case-studies/CaseStudyHero';
import { CaseStudyCard } from '../components/case-studies/CaseStudyCard';
import { SectorFilter } from '../components/case-studies/SectorFilter';
import { getCaseStudies } from '../utils/markdown';
import type { CaseStudy } from '../types';
import { SectionHeader } from '../components/ui/SectionHeader';
import { MetaTags } from '../components/seo/MetaTags';
import { metadata } from '../data/metadata';

export function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [activeSector, setActiveSector] = useState('all');
  
  const sectors = useMemo(() => 
    Array.from(new Set(caseStudies.map(study => study.sector))),
    [caseStudies]
  );
  
  const filteredStudies = useMemo(() =>
    activeSector === 'all'
      ? caseStudies
      : caseStudies.filter(study => study.sector === activeSector),
    [activeSector, caseStudies]
  );

  useEffect(() => {
    getCaseStudies().then(setCaseStudies);
  }, []);

  return (
    <>
      <MetaTags meta={metadata.caseStudies} path="/case-studies" />
      
      <div>
        <CaseStudyHero />
        
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Featured Projects"
              subtitle="Explore our latest electrical installations and solutions across various sectors."
            />
            
            <SectorFilter
              sectors={sectors}
              activeSector={activeSector}
              onSectorChange={setActiveSector}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study) => (
                <CaseStudyCard
                  key={study.slug}
                  caseStudy={study}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}