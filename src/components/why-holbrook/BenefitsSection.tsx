import React from 'react';
import { Shield, Brain, Award, Clock } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const benefits = [
  {
    icon: Shield,
    title: "Your One-Stop Solution",
    description: "From initial design to ongoing maintenance, we handle all your electrical needs under one roof."
  },
  {
    icon: Brain,
    title: "Problem-Solving Experts",
    description: "Our experienced team tackles complex electrical challenges with innovative solutions."
  },
  {
    icon: Award,
    title: "Trusted by Industry Leaders",
    description: "Serving major institutions and businesses across Southeast England with excellence."
  },
  {
    icon: Clock,
    title: "Available 24/7",
    description: "Round-the-clock emergency response for when you need us most."
  }
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* First Row: Title and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <SectionHeader 
              title="What Sets Us Apart"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-scale-xl text-gray-600">
              With a focus on innovation, reliability, and exceptional service, we deliver electrical solutions that power your success.
            </p>
          </div>
        </div>

        {/* Second Row: Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="group bg-gray-900 text-white p-8 rounded-lg transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                <div className="flex flex-col gap-4">
                  <div className="text-blue-400 transform group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-scale-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-scale-md text-gray-400 group-hover:text-gray-300 transition-colors">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}