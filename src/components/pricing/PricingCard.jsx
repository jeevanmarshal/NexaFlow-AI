// src/components/pricing/PricingCard.jsx
import React, { useRef, useEffect, memo } from 'react';
import { computePrice, PRICING_CONFIG } from '../../data/pricingMatrix';

function PricingCard({ 
  tierKey, 
  currency, 
  billingCycle 
}) {
  const tier = PRICING_CONFIG.tiers[tierKey];
  const priceRef = useRef(null);
  const periodRef = useRef(null);
  const billedPeriodRef = useRef(null);

  // Direct DOM update rule to prevent global React rendering tree churn
  useEffect(() => {
    const { symbol, amount, period, billedPeriod } = computePrice(tierKey, currency, billingCycle);
    
    if (priceRef.current) {
      priceRef.current.textContent = `${symbol}${amount}`;
      
      // Trigger price update slide/fade animation
      priceRef.current.classList.remove('price-update-anim');
      void priceRef.current.offsetWidth; // Trigger reflow to restart animation
      priceRef.current.classList.add('price-update-anim');
    }
    
    if (periodRef.current) {
      periodRef.current.textContent = period;
    }
    
    if (billedPeriodRef.current) {
      billedPeriodRef.current.textContent = billedPeriod;
    }
  }, [currency, billingCycle, tierKey]);

  return (
    <article 
      className={`relative flex flex-col justify-between rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 ${
        tier.popular 
          ? 'border-forsythia bg-oceanic-noir shadow-xl shadow-forsythia/10 scale-105 z-10 md:translate-y-[-8px]' 
          : 'border-arctic-powder/10 bg-oceanic-noir/40 hover:border-arctic-powder/20 hover:scale-[1.02]'
      }`}
    >
      {/* Popular Badge */}
      {tier.popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-forsythia to-deep-saffron px-4 py-1 font-display text-[10px] font-extrabold tracking-widest text-oceanic-noir uppercase flex items-center gap-1.5 shadow-md shadow-forsythia/20">
          <img src="/svgs/arrow-trending-up.svg" alt="" aria-hidden="true" className="h-3 w-3" />
          Most Popular
        </span>
      )}

      {/* Top half */}
      <div>
        {/* Tier Label */}
        <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-2">
          {tier.label}
        </h3>
        
        {/* Tier Description */}
        <p className="font-body text-xs text-arctic-powder/60 leading-relaxed mb-6">
          {tier.description}
        </p>

        {/* Pricing Figures (Direct DOM mutation targets) */}
        <div className="flex items-baseline gap-2 mb-6 border-b border-arctic-powder/5 pb-6">
          <span 
            ref={priceRef} 
            className="font-display text-4xl font-extrabold text-white tracking-tight"
          >
            {/* Populated dynamically */}
          </span>
          <span 
            ref={periodRef} 
            className="font-body text-sm text-arctic-powder/50"
          >
            {/* Populated dynamically */}
          </span>
        </div>

        {/* Perks List */}
        <ul className="space-y-4 font-body text-sm text-arctic-powder/85 mb-8">
          {tier.features.map((featureText, idx) => (
            <li key={idx} className="flex items-start gap-3">
              {/* Permitted link-solid.svg used as checklist bullet */}
              <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-forsythia/10 text-forsythia border border-forsythia/25">
                <img src="/svgs/link-solid.svg" alt="" aria-hidden="true" className="h-2 w-2 text-forsythia" />
              </div>
              <span className="leading-snug">{featureText}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action CTA Button */}
      <div>
        <div 
          ref={billedPeriodRef}
          className="text-center font-display text-[10px] font-semibold text-arctic-powder/40 tracking-wider uppercase mb-3"
        >
          {/* Populated dynamically */}
        </div>
        <button
          type="button"
          className={`w-full font-body h-12 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 active:scale-95 ${
            tier.popular
              ? 'bg-gradient-to-r from-forsythia to-deep-saffron text-oceanic-noir shadow-lg shadow-forsythia/20 hover:shadow-forsythia/35 hover:-translate-y-0.5'
              : 'border border-arctic-powder/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/20'
          }`}
        >
          Get Started with {tier.label}
        </button>
      </div>
    </article>
  );
}

export default memo(PricingCard, (prev, next) => {
  return prev.currency === next.currency &&
         prev.billingCycle === next.billingCycle &&
         prev.tierKey === next.tierKey;
});
