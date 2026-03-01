'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getCourseBySlug } from '@/data/courses';
import { getLessonsByCourse, getLessonById } from '@/data/lessons';
import { Lesson } from '@/types';
import { markLessonComplete, markLessonIncomplete, isLessonCompleted, setCurrentLesson as saveCurrentLesson, getProgress } from '@/lib/progress';
import LessonList from '@/components/player/LessonList';
import VideoPlayer from '@/components/player/VideoPlayer';
import PlayerHeader from '@/components/player/PlayerHeader';
import NotesPanel from '@/components/player/NotesPanel';
import styles from './page.module.css';

export default function LearnPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [currentLessonId, setCurrentLessonId] = useState<string>('');
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState('1x');
  
  const course = getCourseBySlug(slug);
  const lessons = course ? getLessonsByCourse(course.id) : [];
  
  // Initialize current lesson
  useEffect(() => {
    if (!course || lessons.length === 0) return;
    
    const progress = getProgress(slug);
    const firstLessonId = progress?.currentLesson || lessons[0].id;
    setCurrentLessonId(firstLessonId);
    setCurrentLesson(getLessonById(firstLessonId) || lessons[0]);
    saveCurrentLesson(slug, firstLessonId);
  }, [course, lessons.length, slug]);
  
  // Check completion status
  useEffect(() => {
    if (!currentLessonId) return;
    setIsCompleted(isLessonCompleted(slug, currentLessonId));
  }, [currentLessonId, slug]);
  
  if (!course || !currentLesson) {
    return (
      <div className={styles.loading}>
        <p>Loading course...</p>
      </div>
    );
  }
  
  const currentLessonIndex = lessons.findIndex(l => l.id === currentLessonId);
  const hasPrevious = currentLessonIndex > 0;
  const hasNext = currentLessonIndex < lessons.length - 1;
  
  const handleSelectLesson = (lessonId: string) => {
    const lesson = getLessonById(lessonId);
    if (lesson) {
      setCurrentLessonId(lessonId);
      setCurrentLesson(lesson);
      saveCurrentLesson(slug, lessonId);
    }
  };
  
  const handlePrevious = () => {
    if (hasPrevious) {
      const prevLesson = lessons[currentLessonIndex - 1];
      handleSelectLesson(prevLesson.id);
    }
  };
  
  const handleNext = () => {
    if (hasNext) {
      const nextLesson = lessons[currentLessonIndex + 1];
      handleSelectLesson(nextLesson.id);
    }
  };
  
  const handleToggleComplete = () => {
    if (isCompleted) {
      markLessonIncomplete(slug, currentLessonId);
    } else {
      markLessonComplete(slug, currentLessonId);
    }
    setIsCompleted(!isCompleted);
  };

  return (
    <div className={styles.player}>
      <aside className={styles.sidebar}>
        <LessonList
          course={course}
          lessons={lessons}
          currentLessonId={currentLessonId}
          onSelectLesson={handleSelectLesson}
        />
      </aside>
      
      <div className={styles.main}>
        <PlayerHeader
          lesson={currentLesson}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
          isCompleted={isCompleted}
          playbackSpeed={playbackSpeed}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onToggleComplete={handleToggleComplete}
          onPlaybackSpeedChange={setPlaybackSpeed}
        />
        
        <div className={styles.content}>
          <div className={styles.videoSection}>
            <VideoPlayer lessonTitle={currentLesson.title} />
          </div>
          
          <div className={styles.tabsSection}>
            <NotesPanel lessonId={currentLessonId} />
          </div>
        </div>
      </div>
    </div>
  );
}
