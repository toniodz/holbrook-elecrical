import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ValueCard({ title, description, icon: Icon }: ValueCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-blue-600 mb-4">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}