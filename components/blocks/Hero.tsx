import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.pattern}></div>
        <div className={styles.gradient}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.actions}>
            {primaryCTA && (
              <Link href={primaryCTA.href}>
                <Button size="lg">{primaryCTA.label}</Button>
              </Link>
            )}
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <Button variant="outline" size="lg">
                  {secondaryCTA.label}
                </Button>
              </Link>
            )}
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <svg viewBox="0 0 400 300" className={styles.illustration}>
              <defs>
                <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4a373" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#e8d5b7" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <rect x="20" y="20" width="360" height="260" rx="16" fill="url(#heroGrad1)" />
              <rect x="40" y="60" width="200" height="120" rx="8" fill="#fff" opacity="0.9" />
              <rect x="50" y="75" width="60" height="40" rx="4" fill="#d4a373" opacity="0.6" />
              <circle cx="80" cy="95" r="8" fill="#1a1a2e" />
              <rect x="60" y="130" width="100" height="8" rx="4" fill="#e8e6e1" />
              <rect x="60" y="148" width="80" height="6" rx="3" fill="#e8e6e1" />
              <rect x="260" y="60" width="100" height="180" rx="8" fill="#fff" opacity="0.9" />
              <rect x="275" y="80" width="70" height="8" rx="4" fill="#1a1a2e" opacity="0.7" />
              <rect x="275" y="100" width="50" height="6" rx="3" fill="#e8e6e1" />
              <rect x="275" y="120" width="60" height="6" rx="3" fill="#e8e6e1" />
              <rect x="275" y="140" width="40" height="6" rx="3" fill="#e8e6e1" />
              <circle cx="300" cy="180" r="20" fill="#d4a373" opacity="0.5" />
              <circle cx="340" cy="200" r="15" fill="#b08968" opacity="0.4" />
              <circle cx="280" cy="220" r="10" fill="#d4a373" opacity="0.3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
