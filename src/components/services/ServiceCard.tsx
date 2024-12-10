import React from 'react';
import type { Service } from '../../types';

type ServiceCardProps = Service;

export function ServiceCard({ title, description, icon: Icon, image }: ServiceCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/70 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="text-white mb-4">
          <Icon size={32} />
        </div>
        <h3 className="text-scale-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-scale-md text-blue-100">{description}</p>
      </div>
    </div>
  );
}