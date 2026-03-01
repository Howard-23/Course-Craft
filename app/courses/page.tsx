'use client';

import { useState, useMemo } from 'react';
import { courses, searchCourses } from '@/data/courses';
import CourseGrid from '@/components/blocks/CourseGrid';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import styles from './page.module.css';

const levels = [
  { value: 'all', label: 'All Levels' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

const topics = [
  { value: 'all', label: 'All Topics' },
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'business', label: 'Business' },
  { value: 'data', label: 'Data' },
];

const durations = [
  { value: 'all', label: 'Any Duration' },
  { value: 'short', label: 'Under 2 hours' },
  { value: 'medium', label: '2-5 hours' },
  { value: 'long', label: '5+ hours' },
];

const sortOptions = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedSort, setSelectedSort] = useState('popular');

  const mockProgressBySlug = useMemo(
    () =>
      Object.fromEntries(
        courses.map((course, index) => [course.slug, 15 + ((index * 17) % 70)])
      ),
    []
  );

  const filteredCourses = useMemo(() => {
    let result = searchQuery ? searchCourses(searchQuery) : [...courses];

    if (selectedLevel !== 'all') {
      result = result.filter(
        (course) => course.level.toLowerCase() === selectedLevel.toLowerCase()
      );
    }

    if (selectedTopic !== 'all') {
      result = result.filter(
        (course) => course.topic.toLowerCase() === selectedTopic.toLowerCase()
      );
    }

    if (selectedDuration !== 'all') {
      const durationMinutes = {
        short: 120,
        medium: 300,
        long: 300,
      };
      
      if (selectedDuration === 'short') {
        result = result.filter((course) => course.duration < durationMinutes.short);
      } else if (selectedDuration === 'medium') {
        result = result.filter(
          (course) =>
            course.duration >= durationMinutes.short &&
            course.duration <= durationMinutes.medium
        );
      } else if (selectedDuration === 'long') {
        result = result.filter((course) => course.duration > durationMinutes.long);
      }
    }

    // Sort
    switch (selectedSort) {
      case 'popular':
        result.sort((a, b) => b.enrollmentCount - a.enrollmentCount);
        break;
      case 'newest':
        result.sort(
          (a, b) =>
            new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
        );
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
    }

    return result;
  }, [searchQuery, selectedLevel, selectedTopic, selectedDuration, selectedSort]);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Explore Courses</h1>
        <p className={styles.subtitle}>
          Discover courses to advance your skills and career
        </p>
      </div>

      <div className={styles.filters}>
        <div className={styles.searchWrapper}>
          <Input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            leftIcon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
        </div>

        <div className={styles.filterGroup}>
          <Select
            options={levels}
            value={selectedLevel}
            onChange={setSelectedLevel}
            label="Level"
          />
          <Select
            options={topics}
            value={selectedTopic}
            onChange={setSelectedTopic}
            label="Topic"
          />
          <Select
            options={durations}
            value={selectedDuration}
            onChange={setSelectedDuration}
            label="Duration"
          />
          <Select
            options={sortOptions}
            value={selectedSort}
            onChange={setSelectedSort}
            label="Sort By"
          />
        </div>
      </div>

      <div className={styles.results}>
        <p className={styles.resultCount}>
          {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {filteredCourses.length > 0 ? (
        <CourseGrid courses={filteredCourses} progressBySlug={mockProgressBySlug} />
      ) : (
        <div className={styles.emptyState}>
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3>No courses found</h3>
          <p>Try adjusting your filters or search query</p>
        </div>
      )}
    </div>
  );
}
