'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Course } from '@/types';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Rating from '@/components/ui/Rating';
import Progress from '@/components/ui/Progress';
import styles from './CourseGrid.module.css';

interface CourseCardProps {
  course: Course;
  progress?: number;
}

function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours === 0) return `${mins}m`;
  if (mins === 0) return `${hours}h`;
  return `${hours}h ${mins}m`;
}

function formatPrice(price: number, currency: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(price);
}

function formatEnrollment(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
}

export function CourseCard({ course, progress }: CourseCardProps) {
  const levelColors: Record<string, 'default' | 'amber' | 'success'> = {
    beginner: 'success',
    intermediate: 'amber',
    advanced: 'default',
  };

  return (
    <Link href={`/courses/${course.slug}`} className={styles.cardLink}>
      <Card variant="interactive" padding="none" className={styles.card}>
        <div className={styles.thumbnail}>
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
          />
          <Badge className={styles.topicBadge} size="sm">
            {course.topic}
          </Badge>
          <Badge className={styles.durationBadge} size="sm">
            {formatDuration(course.duration)}
          </Badge>
          {progress !== undefined && progress > 0 && (
            <div className={styles.progressWrapper}>
              <Progress value={progress} size="sm" />
            </div>
          )}
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{course.title}</h3>
          <p className={styles.instructor}>{course.instructor.name}</p>
          <div className={styles.meta}>
            <Rating value={course.rating} size="sm" showValue />
            <span className={styles.enrollments}>
              {formatEnrollment(course.enrollmentCount)} students
            </span>
          </div>
          <div className={styles.footer}>
            <Badge variant={levelColors[course.level]} size="sm">
              {course.level}
            </Badge>
            <span className={styles.price}>
              {course.price === 0 ? 'Free' : formatPrice(course.price, course.currency)}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}

interface CourseGridProps {
  courses: Course[];
  title?: string;
  showViewAll?: boolean;
  progressBySlug?: Record<string, number>;
}

export default function CourseGrid({
  courses,
  title,
  showViewAll,
  progressBySlug,
}: CourseGridProps) {
  return (
    <section className={styles.section}>
      {(title || showViewAll) && (
        <div className={styles.header}>
          {title && <h2 className={styles.sectionTitle}>{title}</h2>}
          {showViewAll && (
            <Link href="/courses" className={styles.viewAll}>
              View all courses
            </Link>
          )}
        </div>
      )}
      <div className={styles.grid}>
        {courses.map((course, index) => (
          <div
            key={course.id}
            className={styles.gridItem}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <CourseCard course={course} progress={progressBySlug?.[course.slug]} />
          </div>
        ))}
      </div>
    </section>
  );
}
