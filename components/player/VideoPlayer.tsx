'use client';

import styles from './VideoPlayer.module.css';

interface VideoPlayerProps {
  lessonTitle: string;
  onComplete?: () => void;
}

export default function VideoPlayer({ lessonTitle }: VideoPlayerProps) {
  return (
    <div className={styles.videoPlayer}>
      <div className={styles.videoContainer}>
        <svg viewBox="0 0 800 450" className={styles.videoPlaceholder}>
          <defs>
            <linearGradient id="playerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5f3ef" />
              <stop offset="100%" stopColor="#e8e6e1" />
            </linearGradient>
          </defs>
          <rect width="800" height="450" fill="url(#playerGrad)" />
          <g transform="translate(350, 175)">
            <circle cx="50" cy="50" r="50" fill="#d4a373" opacity="0.2" />
            <path
              d="M40 30 L80 50 L40 70 Z"
              fill="#d4a373"
              opacity="0.6"
            />
          </g>
          <text x="400" y="300" textAnchor="middle" fill="#4a4a68" fontSize="18">
            Video player placeholder
          </text>
          <text x="400" y="330" textAnchor="middle" fill="#4a4a68" fontSize="14" opacity="0.7">
            {lessonTitle}
          </text>
        </svg>
      </div>
    </div>
  );
}
