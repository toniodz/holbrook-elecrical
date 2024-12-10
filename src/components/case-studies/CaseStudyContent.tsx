import React from 'react';

interface CaseStudyContentProps {
  challenge: string;
  solution?: string;
  results?: string;
  featured?: boolean;
}

export function CaseStudyContent({ challenge, solution, results, featured = false }: CaseStudyContentProps) {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
        <p className="text-gray-600">{challenge}</p>
      </div>

      {featured && solution && (
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
          <p className="text-gray-600">{solution}</p>
        </div>
      )}

      {featured && results && (
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
          <p className="text-gray-600">{results}</p>
        </div>
      )}
    </div>
  );
}