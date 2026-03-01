import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCourseBySlug, courses } from '@/data/courses';
import { getLessonsByCourse } from '@/data/lessons';
import { getReviewsByCourse } from '@/data/reviews';
import Curriculum from '@/components/blocks/Curriculum';
import Reviews from '@/components/blocks/Reviews';
import Rating from '@/components/ui/Rating';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const lessons = getLessonsByCourse(course.id);
  const reviews = getReviewsByCourse(course.id);
  const averageRating = reviews.length > 0
    ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
    : course.rating;

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) return `${mins} min`;
    if (mins === 0) return `${hours}h`;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className={styles.page}>
      <div className={styles.breadcrumb}>
        <a href="/">Home</a>
        <span>/</span>
        <a href="/courses">Courses</a>
        <span>/</span>
        <span>{course.title}</span>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badges}>
            <Badge variant="primary">{course.topic}</Badge>
            <Badge variant="secondary">{course.level}</Badge>
          </div>
          <h1 className={styles.title}>{course.title}</h1>
          <p className={styles.description}>{course.shortDescription}</p>
          
          <div className={styles.meta}>
            <div className={styles.instructor}>
              <img 
                src={course.instructor.avatar} 
                alt={course.instructor.name}
                className={styles.instructorAvatar}
              />
              <span>by {course.instructor.name}</span>
            </div>
            <div className={styles.rating}>
              <Rating value={averageRating} size="sm" />
              <span>({reviews.length || course.reviewCount} reviews)</span>
            </div>
            <div className={styles.students}>
              {course.enrollmentCount.toLocaleString()} students
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{formatDuration(course.duration)}</span>
            </div>
            <div className={styles.stat}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              <span>{lessons.length} lessons</span>
            </div>
            <div className={styles.stat}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
              </svg>
              <span>Updated {new Date(course.lastUpdated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
            </div>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src={course.thumbnail} alt={course.title} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.mainContent}>
          <section className={styles.section}>
            <h2>What you&apos;ll learn</h2>
            <ul className={styles.learnList}>
              {course.whatYouWillLearn.map((item, index) => (
                <li key={index}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <Curriculum course={course} lessons={lessons} />

          <Reviews 
            reviews={reviews} 
            averageRating={averageRating} 
            totalReviews={reviews.length || course.reviewCount} 
          />
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.purchaseCard}>
            <div className={styles.price}>
              <span className={styles.currency}>$</span>
              <span className={styles.amount}>{course.price}</span>
            </div>
            <Link href={`/learn/${course.slug}`}>
              <Button variant="primary" size="lg" className={styles.ctaButton}>
                Start Learning
              </Button>
            </Link>
            <p className={styles.ctaSubtext}>30-day money-back guarantee</p>
            
            <div className={styles.includes}>
              <h4>This course includes:</h4>
              <ul>
                <li>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  {formatDuration(course.duration)} of video content
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  {lessons.length} lessons
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Lifetime access
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Certificate of completion
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
