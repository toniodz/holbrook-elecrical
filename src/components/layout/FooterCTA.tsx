import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function FooterCTA() {
  return (
    <div className="bg-blue-900 text-white py-scale-2xl overflow-hidden">
      <div className="animate-slide-left-right whitespace-nowrap">
        <div className="inline-flex gap-8">
          {[...Array(2)].map((_, index) => (
            <Link 
              key={index}
              to="/contact" 
              className="text-scale-7xl font-bold hover:text-blue-200 transition-colors flex items-center gap-4"
            >
              Start a conversation
              <ArrowRight className="w-12 h-12" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}