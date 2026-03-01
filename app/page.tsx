import Hero from '@/components/blocks/Hero';
import Features from '@/components/blocks/Features';
import CourseGrid from '@/components/blocks/CourseGrid';
import PricingTable from '@/components/blocks/PricingTable';
import { getFeaturedCourses } from '@/data/courses';

export default function HomePage() {
  const featuredCourses = getFeaturedCourses();

  return (
    <>
      <Hero
        title="Master In-Demand Skills With Expert-Led Courses"
        subtitle="Build practical skills through structured paths, real projects, and a focused learning experience designed for progress."
        primaryCTA={{ label: 'Browse Courses', href: '/courses' }}
        secondaryCTA={{ label: 'See Pricing', href: '/pricing' }}
      />
      <Features />
      <section className="courses-section">
        <CourseGrid courses={featuredCourses} title="Featured Courses" />
      </section>
      <PricingTable />
      <section className="cta-section">
        <div className="cta-banner">
          <h2>Ready to Start Learning?</h2>
          <p>Join thousands of learners and transform your career today.</p>
          <a href="/courses" className="cta-button">
            Browse All Courses
          </a>
        </div>
      </section>
      <style>{`
        .courses-section {
          padding: var(--space-24) 0;
        }
        .cta-section {
          padding: var(--space-24) 0;
          background: var(--color-paper-warm);
        }
        .cta-banner {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0 var(--container-padding);
          text-align: center;
        }
        .cta-banner h2 {
          font-family: var(--font-display);
          font-size: var(--text-4xl);
          font-weight: var(--font-semibold);
          color: var(--color-ink);
          margin-bottom: var(--space-4);
        }
        .cta-banner p {
          font-size: var(--text-lg);
          color: var(--color-ink-light);
          margin-bottom: var(--space-8);
        }
        .cta-button {
          display: inline-block;
          padding: var(--space-4) var(--space-8);
          background: var(--color-amber);
          color: var(--color-surface);
          font-size: var(--text-lg);
          font-weight: var(--font-semibold);
          border-radius: var(--radius-lg);
          text-decoration: none;
          transition: all var(--transition-fast);
        }
        .cta-button:hover {
          background: var(--color-amber-dark);
          color: var(--color-surface);
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
      `}</style>
    </>
  );
}
