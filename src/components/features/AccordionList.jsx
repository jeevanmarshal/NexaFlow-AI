// src/components/features/AccordionList.jsx
import React from 'react';
import AccordionItem from './AccordionItem';
import { FEATURES_DATA } from '../../data/featuresData';

export default function AccordionList({ activeIndex, onToggle }) {
  return (
    <div className="w-full border-t border-arctic-powder/10 max-w-2xl mx-auto rounded-xl overflow-hidden border-x border-b">
      {FEATURES_DATA.map((feature) => (
        <AccordionItem
          key={feature.index}
          feature={feature}
          isOpen={activeIndex === feature.index}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
