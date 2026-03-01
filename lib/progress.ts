import { UserProgress } from '@/types';

const STORAGE_PREFIX = 'coursecraft_progress_';

export function getStorageKey(courseSlug: string): string {
  return `${STORAGE_PREFIX}${courseSlug}`;
}

export function getProgress(courseSlug: string): UserProgress | null {
  if (typeof window === 'undefined') return null;
  
  const key = getStorageKey(courseSlug);
  const stored = localStorage.getItem(key);
  
  if (!stored) return null;
  
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function saveProgress(courseSlug: string, progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  
  const key = getStorageKey(courseSlug);
  localStorage.setItem(key, JSON.stringify(progress));
}

export function markLessonComplete(courseSlug: string, lessonId: string): UserProgress {
  const existing = getProgress(courseSlug);
  const completedLessons = existing?.completedLessons || [];
  
  if (!completedLessons.includes(lessonId)) {
    completedLessons.push(lessonId);
  }
  
  const progress: UserProgress = {
    courseId: courseSlug,
    completedLessons,
    currentLesson: existing?.currentLesson || lessonId,
    lastAccessed: new Date().toISOString(),
    progress: 0
  };
  
  saveProgress(courseSlug, progress);
  return progress;
}

export function markLessonIncomplete(courseSlug: string, lessonId: string): UserProgress {
  const existing = getProgress(courseSlug);
  const completedLessons = (existing?.completedLessons || []).filter(id => id !== lessonId);
  
  const progress: UserProgress = {
    courseId: courseSlug,
    completedLessons,
    currentLesson: existing?.currentLesson || lessonId,
    lastAccessed: new Date().toISOString(),
    progress: 0
  };
  
  saveProgress(courseSlug, progress);
  return progress;
}

export function setCurrentLesson(courseSlug: string, lessonId: string): UserProgress {
  const existing = getProgress(courseSlug);
  
  const progress: UserProgress = {
    courseId: courseSlug,
    completedLessons: existing?.completedLessons || [],
    currentLesson: lessonId,
    lastAccessed: new Date().toISOString(),
    progress: 0
  };
  
  saveProgress(courseSlug, progress);
  return progress;
}

export function calculateProgress(courseSlug: string, totalLessons: number): number {
  const progress = getProgress(courseSlug);
  if (!progress || totalLessons === 0) return 0;
  
  return Math.round((progress.completedLessons.length / totalLessons) * 100);
}

export function isLessonCompleted(courseSlug: string, lessonId: string): boolean {
  const progress = getProgress(courseSlug);
  if (!progress) return false;
  
  return progress.completedLessons.includes(lessonId);
}
