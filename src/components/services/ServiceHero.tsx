import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

export function ServiceHero() {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-blue-900 text-white overflow-hidden py-24 md:py-32">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 animate-gradient"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-[90vw]">
          <h1 className="text-scale-8xl font-bold leading-[1.1] tracking-tight mb-scale-lg">
            Electrical Design, Installation & Maintenance
          </h1>
          
          <p className="text-scale-2xl text-blue-200 mb-scale-xl max-w-3xl">
            From industrial power systems to smart building solutions, we deliver comprehensive electrical services across Southeast England.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="text-scale-md inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>
            
            <a
              href="tel:01234567890"
              className="text-scale-md flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              <Phone size={20} />
              <span>24/7 Emergency: 01234 567890</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}