import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ title, subtitle, align = 'left', className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-scale-2xl ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <div className="relative">
        <h2 className="text-scale-5xl font-bold leading-none inline-block">{title}</h2>
        <svg 
          width="32"
          height="32"
          viewBox="0 0 205 205"
          className="inline-block ml-4 -mb-1"
        >
          <path 
            d="M180.339,5H5V180.339H58.951V97.1L166.852,205,205,166.853,97.1,58.951h83.24Z" 
            transform="translate(205, 205) rotate(180)" 
            fill="currentColor"
            stroke="none"
            className="text-black"
          />
        </svg>
      </div>
      {subtitle && (
        <p className={`text-scale-lg text-gray-600 mt-scale-md ${align === 'center' ? 'mx-auto' : ''} max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}