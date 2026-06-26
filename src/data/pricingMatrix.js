// src/data/pricingMatrix.js

export const PRICING_CONFIG = {
  tiers: {
    starter: {
      key: 'starter',
      label: 'Starter',
      baseMonthlyUSD: 29,
      description: 'Ideal for early-stage startups and small projects looking to automate basic data pipelines.',
      features: [
        '5 active self-healing pipelines',
        'Basic schema drift alerts',
        '10,000 pipeline runs / month',
        'Next-day email support',
        'Integration with 5 data sources'
      ],
      popular: false
    },
    pro: {
      key: 'pro',
      label: 'Pro',
      baseMonthlyUSD: 79,
      description: 'Built for scaling teams requiring predictive analytics and self-healing orchestration.',
      features: [
        'Unlimited active pipelines',
        'Real-time anomaly detection',
        'Predictive schema drift repair',
        '100,000 pipeline runs / month',
        'Priority 24/7 slack/email support',
        'Custom configuration engine access'
      ],
      popular: true
    },
    enterprise: {
      key: 'enterprise',
      label: 'Enterprise',
      baseMonthlyUSD: 199,
      description: 'Designed for high-throughput edge architectures with custom ML and SLA guarantees.',
      features: [
        'Edge-distributed compute deployment',
        'Dedicated ML model training pipeline',
        'Unlimited pipeline runs & bandwith',
        '99.99% uptime SLA guarantee',
        'Dedicated customer success engineer',
        'Custom security & SSO/SAML integrations'
      ],
      popular: false
    }
  },
  annualDiscountMultiplier: 0.80, // 20% off annual billing
  currencyTariffs: {
    USD: { symbol: '$', code: 'USD', regionalMultiplier: 1.00 },
    INR: { symbol: '₹', code: 'INR', regionalMultiplier: 83.50 },
    EUR: { symbol: '€', code: 'EUR', regionalMultiplier: 0.92 }
  }
};

export function computePrice(tierKey, currency, billingCycle) {
  const tier = PRICING_CONFIG.tiers[tierKey];
  if (!tier) return { symbol: '', amount: 0, period: '' };
  
  const tariff = PRICING_CONFIG.currencyTariffs[currency] || PRICING_CONFIG.currencyTariffs.USD;
  const cycleMultiplier = billingCycle === 'annual'
    ? PRICING_CONFIG.annualDiscountMultiplier
    : 1.00;
  const rawPrice = tier.baseMonthlyUSD * tariff.regionalMultiplier * cycleMultiplier;
  return {
    symbol: tariff.symbol,
    amount: Math.round(rawPrice),
    period: billingCycle === 'annual' ? '/mo' : '/mo',
    billedPeriod: billingCycle === 'annual' ? 'Billed annually' : 'Billed monthly'
  };
}
