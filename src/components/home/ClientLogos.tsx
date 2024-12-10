import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

const clients = [
  {
    name: "Dover Port Authority",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80",
  },
  {
    name: "Kent Manufacturing Group",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80",
  },
  {
    name: "Sussex University",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80",
  },
  {
    name: "London Array",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80",
  },
  {
    name: "Thames Water",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80",
  },
  {
    name: "Surrey Council",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80",
  }
];

export function ClientLogos() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Who We Work With"
          subtitle="Trusted by leading organizations across Southeast England"
          align="center"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="aspect-[3/2] relative bg-white rounded-lg shadow-sm p-4 flex items-center justify-center group hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gray-200 rounded animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-gray-600 text-sm font-medium text-center">
                    {client.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}