// src/components/features/BentoGrid.jsx
import React from 'react';
import BentoCard from './BentoCard';
import { FEATURES_DATA } from '../../data/featuresData';

export default function BentoGrid({ activeIndex, onBentoHover }) {
  // Determine layout grid span class based on index for asymmetry
  const getColSpan = (index) => {
    switch (index) {
      case 0:
        return 'md:col-span-2';
      case 1:
        return 'md:col-span-1';
      case 2:
        return 'md:col-span-1';
      case 3:
        return 'md:col-span-2';
      case 4:
        return 'md:col-span-1';
      case 5:
        return 'md:col-span-2';
      default:
        return 'md:col-span-1';
    }
  };

  return (
    <div className="feature-grid grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-6">
      {FEATURES_DATA.map((feature) => (
        <div key={feature.index} className={`${getColSpan(feature.index)}`}>
          <BentoCard
            feature={feature}
            isActive={activeIndex === feature.index}
            onHover={onBentoHover}
          />
        </div>
      ))}
    </div>
  );
}
