import React from 'react';

export function AboutHero() {
  return (
    <div className="relative bg-blue-900 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      />
      
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Partner in Power
          </h1>
          
          <p className="text-xl mb-8 text-blue-100">
            Solving complex electrical challenges for businesses across Southeast England with innovative, cost-effective solutions.
          </p>
        </div>
      </div>
    </div>
  );
}