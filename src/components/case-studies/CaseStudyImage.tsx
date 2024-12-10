import React from 'react';

interface CaseStudyImageProps {
  image: string;
  title: string;
  sector: string;
}

export function CaseStudyImage({ image, title, sector }: CaseStudyImageProps) {
  return (
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 p-6">
        <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-2">
          {sector}
        </span>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
    </div>
  );
}