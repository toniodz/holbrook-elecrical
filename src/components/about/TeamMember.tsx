import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

export function TeamMember({ name, role, image, description }: TeamMemberProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 p-4 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-blue-200">{role}</p>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}