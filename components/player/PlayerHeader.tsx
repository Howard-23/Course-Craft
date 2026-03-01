'use client';

import { Lesson } from '@/types';
import Button from '@/components/ui/Button';
import styles from './PlayerHeader.module.css';

interface PlayerHeaderProps {
  lesson: Lesson;
  hasPrevious: boolean;
  hasNext: boolean;
  isCompleted: boolean;
  playbackSpeed: string;
  onPrevious: () => void;
  onNext: () => void;
  onToggleComplete: () => void;
  onPlaybackSpeedChange: (speed: string) => void;
}

export default function PlayerHeader({
  lesson,
  hasPrevious,
  hasNext,
  isCompleted,
  playbackSpeed,
  onPrevious,
  onNext,
  onToggleComplete,
  onPlaybackSpeedChange,
}: PlayerHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.lessonInfo}>
        <span className={styles.lessonType}>
          {lesson.type === 'video' && 'Video Lesson'}
          {lesson.type === 'article' && 'Article'}
          {lesson.type === 'quiz' && 'Quiz'}
        </span>
        <h1 className={styles.lessonTitle}>{lesson.title}</h1>
      </div>
      
      <div className={styles.controls}>
        <Button
          variant="ghost"
          size="sm"
          onClick={onPrevious}
          disabled={!hasPrevious}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Previous
        </Button>
        
        <Button
          variant={isCompleted ? 'secondary' : 'primary'}
          size="sm"
          onClick={onToggleComplete}
        >
          {isCompleted ? (
            <>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
              </svg>
              Completed
            </>
          ) : (
            'Mark Complete'
          )}
        </Button>

        <label className={styles.speedControl}>
          <span>Speed</span>
          <select
            className={styles.speedSelect}
            value={playbackSpeed}
            onChange={(e) => onPlaybackSpeedChange(e.target.value)}
            aria-label="Playback speed"
          >
            <option value="0.75x">0.75x</option>
            <option value="1x">1x</option>
            <option value="1.25x">1.25x</option>
            <option value="1.5x">1.5x</option>
            <option value="2x">2x</option>
          </select>
        </label>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onNext}
          disabled={!hasNext}
        >
          Next
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
