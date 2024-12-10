import React from 'react';
import { CheckCircle } from 'lucide-react';

const accreditations = [
  "NICEIC Approved Contractor",
  "ISO 9001:2015 Certified",
  "SafeContractor Approved",
  "ECA Member",
  "CHAS Premium Plus",
  "Constructionline Gold Member"
];

export function Accreditations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Accreditations</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We maintain the highest industry standards through our comprehensive accreditations and certifications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accreditations.map((accreditation, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
            >
              <CheckCircle className="text-blue-600" size={24} />
              <span className="font-medium">{accreditation}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}