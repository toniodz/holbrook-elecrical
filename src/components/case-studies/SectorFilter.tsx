import React from 'react';
import { clsx } from 'clsx';

interface SectorFilterProps {
  sectors: string[];
  activeSector: string;
  onSectorChange: (sector: string) => void;
}

export function SectorFilter({ sectors, activeSector, onSectorChange }: SectorFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onSectorChange('all')}
        className={clsx(
          'px-4 py-2 rounded-full text-sm font-medium transition-colors',
          activeSector === 'all'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        )}
      >
        All Sectors
      </button>
      
      {sectors.map((sector) => (
        <button
          key={sector}
          onClick={() => onSectorChange(sector)}
          className={clsx(
            'px-4 py-2 rounded-full text-sm font-medium transition-colors',
            activeSector === sector
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          )}
        >
          {sector}
        </button>
      ))}
    </div>
  );
}