'use client';

import styles from './Progress.module.css';

interface ProgressProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'linear' | 'circular';
  showLabel?: boolean;
}

export default function Progress({
  value,
  max = 100,
  size = 'md',
  variant = 'linear',
  showLabel = false,
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  if (variant === 'circular') {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className={`${styles.circular} ${styles[size]}`}>
        <svg viewBox="0 0 80 80" className={styles.circularSvg}>
          <circle
            className={styles.circularTrack}
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            strokeWidth="6"
          />
          <circle
            className={styles.circularFill}
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 40 40)"
          />
        </svg>
        {showLabel && (
          <span className={styles.circularLabel}>{Math.round(percentage)}%</span>
        )}
      </div>
    );
  }

  return (
    <div className={`${styles.linear} ${styles[size]}`}>
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
      {showLabel && (
        <span className={styles.label}>{Math.round(percentage)}%</span>
      )}
    </div>
  );
}
