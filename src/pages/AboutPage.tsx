import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { ValueCard } from '../components/about/ValueCard';
import { TeamMember } from '../components/about/TeamMember';
import { Accreditations } from '../components/about/Accreditations';
import { companyValues } from '../data/values';
import { teamMembers } from '../data/team';
import { CheckCircle, Users, Clock, Building } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';

export function AboutPage() {
  return (
    <div>
      <AboutHero />
      
      {/* Introduction */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader 
                title="Your Trusted Electrical Partner"
                subtitle="For over two decades, we've been delivering exceptional electrical solutions across Southeast England."
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-scale-xl text-gray-600 mb-8">
                At Holbrook Electrical, we combine technical expertise with innovative thinking to solve complex electrical challenges. Our commitment to excellence and deep industry knowledge makes us the partner of choice for businesses across multiple sectors.
              </p>
              <p className="text-scale-lg text-gray-600">
                Whether you need industrial installations, power distribution systems, or ongoing maintenance, our team of expert engineers brings unmatched experience and dedication to every project.
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: CheckCircle, value: "1000+", label: "Projects Completed" },
              { icon: Users, value: "50+", label: "Expert Engineers" },
              { icon: Clock, value: "24/7", label: "Support Available" },
              { icon: Building, value: "4", label: "Regional Offices" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Core Values"
            subtitle="These principles guide everything we do and shape how we deliver value to our clients."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <ValueCard
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Meet Our Leadership"
            subtitle="Our experienced team brings decades of electrical expertise to every project."
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

      <Accreditations />
    </div>
  );
}