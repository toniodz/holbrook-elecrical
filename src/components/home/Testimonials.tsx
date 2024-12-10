import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-scale-3xl bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Stars */}
          <div className="flex gap-2 justify-center mb-scale-lg">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={32} 
                className="fill-current text-yellow-400" 
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-center mb-scale-xl">
            <p className="text-scale-4xl font-bold leading-tight mb-scale-xl text-gray-900">
              "From start to finish, the team at Holbrook delivered exceptional service. Their expertise and professionalism made all the difference to our project."
            </p>
            <footer className="text-scale-lg text-gray-600">
              <strong className="block text-gray-900 mb-1">Sarah Thompson</strong>
              Facility Manager, Dover Port Authority
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}