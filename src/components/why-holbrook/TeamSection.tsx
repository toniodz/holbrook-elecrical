import React from 'react';
import { TeamMember } from '../about/TeamMember';
import { teamMembers } from '../../data/team';
import { SectionHeader } from '../ui/SectionHeader';

export function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Meet Our Team"
          subtitle="Our experienced professionals bring decades of electrical expertise to every project."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}