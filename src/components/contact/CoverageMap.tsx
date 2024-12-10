import React from 'react';
import { MapPin } from 'lucide-react';

const serviceAreas = [
  "Kent",
  "London",
  "Sussex",
  "Surrey",
  "Essex",
  "Hampshire"
];

export function CoverageMap() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Service Coverage Area</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We provide comprehensive electrical services across Southeast England, with rapid response times throughout our coverage area.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {serviceAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-2"
            >
              <MapPin className="text-blue-600" size={20} />
              <span className="font-medium">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}