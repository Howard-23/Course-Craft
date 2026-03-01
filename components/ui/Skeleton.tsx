import styles from './Skeleton.module.css';

interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  className?: string;
}

export default function Skeleton({
  variant = 'rectangular',
  width,
  height,
  borderRadius,
  className = '',
}: SkeletonProps) {
  const defaultHeight =
    variant === 'text' ? '1em' : variant === 'circular' ? '40px' : '20px';

  const resolvedBorderRadius =
    borderRadius || (variant === 'circular' ? '50%' : 'var(--radius-sm)');

  const style: React.CSSProperties = {
    width: width || '100%',
    height: height || defaultHeight,
    borderRadius: resolvedBorderRadius,
  };

  return (
    <div
      className={`${styles.skeleton} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}
