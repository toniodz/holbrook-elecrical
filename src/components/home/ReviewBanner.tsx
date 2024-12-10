import React from 'react';
import { Star } from 'lucide-react';

export function ReviewBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-6 overflow-hidden">
      <div className="animate-slide-left-right">
        <div className="flex items-center gap-8 text-white">
          <div className="flex items-center gap-4 whitespace-nowrap">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-lg font-medium">
              "Outstanding electrical solutions and professional service"
            </span>
            <span className="text-blue-200">— Sarah Thompson, Facility Manager</span>
          </div>
          
          {/* Duplicate content for seamless loop */}
          <div className="flex items-center gap-4 whitespace-nowrap">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-lg font-medium">
              "Outstanding electrical solutions and professional service"
            </span>
            <span className="text-blue-200">— Sarah Thompson, Facility Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
}