import Skeleton from '@/components/ui/Skeleton';
import styles from './loading.module.css';

export default function LoadingCoursesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Skeleton width="30%" height={44} />
        <Skeleton width="45%" height={24} />
      </div>

      <div className={styles.filters}>
        <Skeleton height={52} />
        <Skeleton height={52} />
        <Skeleton height={52} />
        <Skeleton height={52} />
        <Skeleton height={52} />
      </div>

      <div className={styles.results}>
        <Skeleton width={140} height={18} />
      </div>

      <div className={styles.grid}>
        {Array.from({ length: 6 }).map((_, index) => (
          <article key={index} className={styles.card}>
            <Skeleton height={190} borderRadius="0" />
            <div className={styles.cardBody}>
              <Skeleton width="35%" height={18} />
              <Skeleton width="80%" height={22} />
              <Skeleton width="55%" height={18} />
              <Skeleton width="100%" height={12} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
