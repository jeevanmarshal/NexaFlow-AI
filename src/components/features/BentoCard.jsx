// src/components/features/BentoCard.jsx
import React from 'react';

export default function BentoCard({ 
  feature, 
  isActive, 
  onHover 
}) {
  const { index, title, iconPath, description, accent } = feature;

  return (
    <article 
      onMouseEnter={() => onHover(index)}
      className={`bento-card relative h-full flex flex-col justify-between overflow-hidden rounded-2xl border p-6 backdrop-blur-sm cursor-pointer select-none ${
        isActive 
          ? 'border-forsythia/30 bg-oceanic-noir shadow-xl shadow-forsythia/5 -translate-y-1' 
          : 'border-arctic-powder/15 bg-oceanic-noir/40 hover:border-arctic-powder/25'
      }`}
    >
      {/* Background Gradient Glow */}
      <div 
        className={`absolute inset-0 -z-10 bg-gradient-to-br ${accent} opacity-0 transition-opacity duration-300 ${
          isActive ? 'opacity-100' : 'group-hover:opacity-50'
        }`}
      ></div>

      {/* Top Section: Icon & Header */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div 
            className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 ${
              isActive 
                ? 'bg-forsythia border-forsythia text-oceanic-noir shadow-lg shadow-forsythia/25 scale-105' 
                : 'bg-arctic-powder/5 border-arctic-powder/15 text-arctic-powder'
            }`}
          >
            <img 
              src={iconPath} 
              alt="" 
              aria-hidden="true" 
              className={`h-6 w-6 transition-all duration-300 ${
                isActive ? 'filter-none scale-110' : 'invert brightness-200'
              }`} 
            />
          </div>
          
          {/* Index Counter */}
          <span className="font-display text-xs text-arctic-powder/30 font-semibold">
            0{index + 1}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-bold text-white mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-arctic-powder/70 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom Section: Decorative indicator */}
      <div className="mt-8 flex items-center justify-end">
        <span 
          className={`font-body text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-colors duration-200 ${
            isActive ? 'text-forsythia' : 'text-arctic-powder/40'
          }`}
        >
          Explore
          <img 
            src="/svgs/chevron-right.svg" 
            alt="" 
            aria-hidden="true" 
            className={`h-3.5 w-3.5 transition-transform duration-200 ${
              isActive ? 'translate-x-1 invert brightness-200' : 'opacity-40 invert'
            }`} 
          />
        </span>
      </div>
    </article>
  );
}
