'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import styles from './PricingTable.module.css';

interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  cta: string;
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    description: 'Perfect for individual learners',
    monthlyPrice: 19,
    annualPrice: 15,
    features: [
      'Access to 50+ courses',
      'Basic progress tracking',
      'Course certificates',
      'Mobile app access',
      'Community forums',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    description: 'Best for serious learners',
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      'Access to all courses',
      'Advanced progress analytics',
      'Priority certificates',
      'Offline downloads',
      '1-on-1 mentoring sessions',
      'Career resources',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Team',
    description: 'For teams and organizations',
    monthlyPrice: 99,
    annualPrice: 79,
    features: [
      'Everything in Pro',
      'Up to 10 team members',
      'Team analytics dashboard',
      'Custom learning paths',
      'Dedicated support',
      'API access',
    ],
    cta: 'Contact Sales',
  },
];

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Simple, Transparent Pricing</h2>
          <p className={styles.subtitle}>
            Choose the plan that fits your learning goals
          </p>
          
          <div className={styles.toggle}>
            <button
              className={`${styles.toggleButton} ${!isAnnual ? styles.active : ''}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`${styles.toggleButton} ${isAnnual ? styles.active : ''}`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
              <span className={styles.saveBadge}>Save 20%</span>
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.name}
              variant={tier.popular ? 'elevated' : 'default'}
              padding="lg"
              className={`${styles.tierCard} ${tier.popular ? styles.popular : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tier.popular && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              <div className={styles.tierHeader}>
                <h3 className={styles.tierName}>{tier.name}</h3>
                <p className={styles.tierDescription}>{tier.description}</p>
              </div>
              <div className={styles.pricing}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>
                  {isAnnual ? tier.annualPrice : tier.monthlyPrice}
                </span>
                <span className={styles.period}>/month</span>
              </div>
              {isAnnual && (
                <p className={styles.annualTotal}>
                  Billed ${tier.annualPrice * 12} annually
                </p>
              )}
              <Button
                variant={tier.popular ? 'primary' : 'outline'}
                size="lg"
                className={styles.ctaButton}
              >
                {tier.cta}
              </Button>
              <ul className={styles.featureList}>
                {tier.features.map((feature) => (
                  <li key={feature} className={styles.feature}>
                    <svg
                      className={styles.checkIcon}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
