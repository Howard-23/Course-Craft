'use client';

import { Review } from '@/types';
import Rating from '@/components/ui/Rating';
import styles from './Reviews.module.css';

interface ReviewsProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

export default function Reviews({ reviews, averageRating, totalReviews }: ReviewsProps) {
  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((r) => Math.floor(r.rating) === rating).length,
    percentage: totalReviews > 0 
      ? (reviews.filter((r) => Math.floor(r.rating) === rating).length / totalReviews) * 100 
      : 0,
  }));

  return (
    <div className={styles.reviews}>
      <div className={styles.header}>
        <h3 className={styles.title}>Student Reviews</h3>
      </div>
      
      <div className={styles.summary}>
        <div className={styles.ratingOverview}>
          <span className={styles.ratingNumber}>{averageRating.toFixed(1)}</span>
          <Rating value={averageRating} size="lg" />
          <span className={styles.totalReviews}>{totalReviews} reviews</span>
        </div>
        
        <div className={styles.distribution}>
          {ratingDistribution.map(({ rating, count, percentage }) => (
            <div key={rating} className={styles.distributionRow}>
              <span className={styles.starLabel}>{rating} stars</span>
              <div className={styles.barContainer}>
                <div 
                  className={styles.barFill} 
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className={styles.countLabel}>{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.reviewList}>
        {reviews.slice(0, 6).map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <img 
                src={review.userAvatar} 
                alt={review.userName}
                className={styles.avatar}
              />
              <div className={styles.reviewMeta}>
                <span className={styles.reviewerName}>{review.userName}</span>
                <div className={styles.reviewRating}>
                  <Rating value={review.rating} size="sm" />
                  <span className={styles.reviewDate}>
                    {new Date(review.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </div>
            <p className={styles.reviewText}>{review.text}</p>
            <div className={styles.reviewFooter}>
              <button className={styles.helpfulButton}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z"/>
                  <path d="M7.5 7a.5.5 0 00-.5.5v1.5a.5.5 0 001 0V8a.5.5 0 00-.5-.5zm-3 .5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z"/>
                  <path d="M3.5 4A1.5 1.5 0 002 5.5v2.047a1.5 1.5 0 00.56 1.164l.684.411a.5.5 0 01.277.848v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-3a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v3a.5.5 0 01-.5.5h-1A1.5 1.5 0 001 11.5v-3.5a.5.5 0 01.177-.427l.684-.411A1.5 1.5 0 002.947 5.5H3.5z"/>
                </svg>
                Helpful ({review.helpful})
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
