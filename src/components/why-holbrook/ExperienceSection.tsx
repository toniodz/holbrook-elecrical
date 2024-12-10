import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { CheckCircle } from 'lucide-react';

const achievements = [
  {
    value: "1000+",
    label: "Projects Completed",
    description: "Successfully delivered electrical solutions across various sectors"
  },
  {
    value: "25+",
    label: "Years Experience",
    description: "Decades of expertise in industrial and commercial electrical services"
  },
  {
    value: "50+",
    label: "Expert Engineers",
    description: "Highly skilled and certified electrical professionals"
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    description: "Consistently exceeding client expectations"
  }
];

export function ExperienceSection() {
  return (
    <section className="py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader 
              title="Experience That Matters"
              subtitle="Our track record speaks for itself. We've built our reputation on delivering exceptional electrical solutions consistently."
              className="text-white [&_svg_path]:fill-white [&_p]:text-blue-200"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex flex-col">
                <div className="text-scale-5xl font-bold text-blue-300 mb-2">
                  {achievement.value}
                </div>
                <div className="text-scale-xl font-semibold mb-2">
                  {achievement.label}
                </div>
                <p className="text-scale-md text-blue-200">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}