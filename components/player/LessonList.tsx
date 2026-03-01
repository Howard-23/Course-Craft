'use client';

import { Course, Lesson } from '@/types';
import { getProgress, isLessonCompleted } from '@/lib/progress';
import Progress from '@/components/ui/Progress';
import styles from './LessonList.module.css';

interface LessonListProps {
  course: Course;
  lessons: Lesson[];
  currentLessonId: string;
  onSelectLesson: (lessonId: string) => void;
}

function formatDuration(minutes: number): string {
  const mins = minutes % 60;
  return `${mins} min`;
}

export default function LessonList({
  course,
  lessons,
  currentLessonId,
  onSelectLesson,
}: LessonListProps) {
  const progress = getProgress(course.slug);
  const completedLessons = progress?.completedLessons || [];
  const progressPercentage = course && lessons.length > 0 
    ? Math.round((completedLessons.length / lessons.length) * 100) 
    : 0;

  const lessonsByModule = course.modules.map((module) => ({
    ...module,
    lessons: lessons
      .filter((lesson) => lesson.moduleId === module.id)
      .sort((a, b) => a.order - b.order),
  }));

  return (
    <div className={styles.lessonList}>
      <div className={styles.header}>
        <h2 className={styles.courseTitle}>{course.title}</h2>
        <Progress value={progressPercentage} size="sm" showLabel />
      </div>
      
      <div className={styles.modules}>
        {lessonsByModule.map((module) => (
          <div key={module.id} className={styles.module}>
            <div className={styles.moduleHeader}>
              <span className={styles.moduleTitle}>{module.title}</span>
              <span className={styles.moduleProgress}>
                {module.lessons.filter((l) => completedLessons.includes(l.id)).length}/
                {module.lessons.length}
              </span>
            </div>
            <ul className={styles.lessons}>
              {module.lessons.map((lesson) => {
                const isCompleted = completedLessons.includes(lesson.id);
                const isCurrent = lesson.id === currentLessonId;
                
                return (
                  <li key={lesson.id}>
                    <button
                      className={`${styles.lessonButton} ${isCurrent ? styles.current : ''} ${isCompleted ? styles.completed : ''}`}
                      onClick={() => onSelectLesson(lesson.id)}
                    >
                      <span className={styles.lessonStatus}>
                        {isCompleted ? (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                          </svg>
                        ) : (
                          <span className={styles.lessonNumber}>{lesson.order}</span>
                        )}
                      </span>
                      <span className={styles.lessonTitle}>{lesson.title}</span>
                      <span className={styles.lessonDuration}>
                        {formatDuration(lesson.duration)}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
