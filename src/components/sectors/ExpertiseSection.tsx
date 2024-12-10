import React from 'react';
import { CheckCircle, Award, Clock, Users } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const stats = [
  {
    icon: CheckCircle,
    value: "1000+",
    label: "Projects Completed"
  },
  {
    icon: Award,
    value: "25+",
    label: "Years Experience"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Emergency Support"
  },
  {
    icon: Users,
    value: "50+",
    label: "Expert Engineers"
  }
];

export function ExpertiseSection() {
  return (
    <section className="py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Expertise"
          subtitle="With decades of experience across multiple sectors, we bring unmatched expertise to every project."
          className="text-white [&_svg_path]:fill-white [&_p]:text-blue-200"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="text-blue-400 mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Icon size={40} />
                </div>
                <div className="text-scale-4xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-scale-lg text-blue-200 group-hover:text-blue-100 transition-colors">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}