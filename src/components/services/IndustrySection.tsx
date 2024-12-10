import React from 'react';
import { Factory, Building2, Warehouse, School } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Specialized electrical solutions for manufacturing facilities and production lines, ensuring optimal performance and safety."
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Comprehensive electrical services for office buildings and retail spaces, from installation to maintenance."
  },
  {
    icon: Warehouse,
    title: "Industrial",
    description: "Heavy-duty electrical installations for industrial complexes and warehouses, built to handle demanding requirements."
  },
  {
    icon: School,
    title: "Educational",
    description: "Safe and efficient electrical systems for schools and universities, designed with safety and reliability in mind."
  }
];

export function IndustrySection() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <SectionHeader 
              title="Industry-Specific Solutions"
              className="text-white [&_svg_path]:fill-white"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-scale-xl text-gray-300">
              We understand that different industries have unique electrical requirements. Our expertise spans across various sectors, delivering tailored solutions that meet specific industry standards and challenges.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index} 
                className="group bg-gray-800 text-white p-8 rounded-lg transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                <div className="flex flex-col gap-4">
                  <div className="text-blue-400 transform group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-scale-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-scale-md text-gray-400 group-hover:text-gray-300 transition-colors">
                      {industry.description}
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