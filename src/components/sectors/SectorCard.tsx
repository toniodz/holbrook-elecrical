import React from 'react';
import type { Service } from '../../types';

type SectorCardProps = Service;

export function SectorCard({ title, description, icon: Icon, image, services }: SectorCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      {/* Background Image */}
      <div className="relative h-[500px]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="text-white mb-4">
          <Icon size={32} />
        </div>
        <h3 className="text-scale-2xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-scale-lg text-blue-100 mb-6">{description}</p>
        
        <div className="space-y-2">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-2 text-blue-200">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
              <span className="text-scale-md">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}