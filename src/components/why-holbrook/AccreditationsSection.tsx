import React from 'react';
import { CheckCircle } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const accreditations = [
  "NICEIC Approved Contractor",
  "ISO 9001:2015 Certified",
  "SafeContractor Approved",
  "ECA Member",
  "CHAS Premium Plus",
  "Constructionline Gold Member"
];

export function AccreditationsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Accreditations"
          subtitle="We maintain the highest industry standards through our comprehensive accreditations and certifications."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accreditations.map((accreditation, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-6 bg-white rounded-lg shadow-sm"
            >
              <CheckCircle className="text-blue-600 flex-shrink-0" size={24} />
              <span className="font-medium">{accreditation}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}