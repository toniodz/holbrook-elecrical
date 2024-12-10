import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CaseStudy } from '../../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  featured?: boolean;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={caseStudy.featuredImage || caseStudy.image} 
          alt={caseStudy.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/70 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-4">
          {caseStudy.sector}
        </span>
        <h3 className="text-scale-xl font-semibold text-white mb-4">{caseStudy.title}</h3>
        <p className="text-scale-md text-blue-100 mb-6">
          {caseStudy.content.split('## Challenge')[1]?.split('##')[0]?.trim().slice(0, 120)}...
        </p>
        <Link 
          to={`/case-studies/${caseStudy.slug}`}
          className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
        >
          View Case Study
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}