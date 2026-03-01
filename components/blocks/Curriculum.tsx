'use client';

import { Course, Lesson } from '@/types';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import styles from './Curriculum.module.css';

interface CurriculumProps {
  course: Course;
  lessons: Lesson[];
}

function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours === 0) return `${mins} min`;
  if (mins === 0) return `${hours}h`;
  return `${hours}h ${mins}m`;
}

export default function Curriculum({ course, lessons }: CurriculumProps) {
  const lessonsByModule = course.modules.map((module) => ({
    ...module,
    lessons: lessons
      .filter((lesson) => lesson.moduleId === module.id)
      .sort((a, b) => a.order - b.order),
  }));

  const totalDuration = lessons.reduce((acc, lesson) => acc + lesson.duration, 0);
  const totalLessons = lessons.length;

  return (
    <div className={styles.curriculum}>
      <div className={styles.header}>
        <h3 className={styles.title}>Course Curriculum</h3>
        <div className={styles.stats}>
          <span>{course.modules.length} modules</span>
          <span>•</span>
          <span>{totalLessons} lessons</span>
          <span>•</span>
          <span>{formatDuration(totalDuration)} total</span>
        </div>
      </div>
      <Accordion>
        {lessonsByModule.map((module) => (
          <AccordionItem key={module.id} id={module.id} title={module.title}>
            <ul className={styles.lessonList}>
              {module.lessons.map((lesson, index) => (
                <li key={lesson.id} className={styles.lessonItem}>
                  <span className={styles.lessonNumber}>{index + 1}</span>
                  <div className={styles.lessonContent}>
                    <span className={styles.lessonTitle}>{lesson.title}</span>
                    <div className={styles.lessonMeta}>
                      <span className={styles.lessonType}>
                        {lesson.type === 'video' && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M4 3.5a.5.5 0 0 1 .832-.374l8 5.5a.5.5 0 0 1 0 .748l-8 5.5A.5.5 0 0 1 4 14.5v-11z" />
                          </svg>
                        )}
                        {lesson.type === 'article' && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0h-11zM2 2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v8H2V2.5zm11 10v-3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4 5h3v2H4V5z" />
                          </svg>
                        )}
                        {lesson.type === 'quiz' && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M5.5 0A2.5 2.5 0 0 0 3 2.5v11A2.5 2.5 0 0 0 5.5 16h5a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 1 1 0v1a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 2 13.5v-11A3.5 3.5 0 0 1 5.5-1h1a.5.5 0 0 1 0 1h-1z" />
                          </svg>
                        )}
                      </span>
                      <span className={styles.lessonDuration}>{formatDuration(lesson.duration)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
