'use client';

import { useEffect, useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@/components/ui/Tabs';
import Button from '@/components/ui/Button';
import styles from './NotesPanel.module.css';

interface NotesPanelProps {
  lessonId: string;
}

const sampleNotes: Record<string, string> = {
  'lesson-1-1': `## Course Introduction

Welcome to the Complete Web Development Bootcamp!

In this course, you'll learn:
- HTML & CSS fundamentals
- JavaScript programming
- React development
- Backend with Node.js

Make sure to complete all the exercises and projects.`,
  'lesson-1-2': `## Setting Up Your Environment

### Required Tools:
1. VS Code - Our recommended code editor
2. Node.js - JavaScript runtime
3. Git - Version control

### Extensions to Install:
- ESLint
- Prettier
- Live Server`,
};

function getNotesKey(lessonId: string): string {
  return `coursecraft_notes_${lessonId}`;
}

export default function NotesPanel({ lessonId }: NotesPanelProps) {
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem(getNotesKey(lessonId));
    setNotes(stored ?? sampleNotes[lessonId] ?? '');
  }, [lessonId]);

  const handleSave = () => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(getNotesKey(lessonId), notes);
  };

  return (
    <div className={styles.notesPanel}>
      <Tabs defaultTab="overview">
        <TabList>
          <Tab id="overview">Overview</Tab>
          <Tab id="notes">Notes</Tab>
          <Tab id="resources">Resources</Tab>
        </TabList>
        
        <TabPanels>
          <TabPanel id="overview">
            <div className={styles.overview}>
              <h4>About this lesson</h4>
              <p>
                This lesson covers the fundamentals of the topic. 
                Make sure to follow along with the code examples.
              </p>
              
              <h4>Learning Objectives</h4>
              <ul>
                <li>Understand core concepts</li>
                <li>Apply best practices</li>
                <li>Build practical examples</li>
              </ul>
            </div>
          </TabPanel>
          
          <TabPanel id="notes">
            <div className={styles.notes}>
              <textarea
                className={styles.notesTextarea}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Take notes here..."
              />
              <div className={styles.notesActions}>
                <Button variant="primary" size="sm" onClick={handleSave}>
                  Save Notes
                </Button>
              </div>
            </div>
          </TabPanel>
          
          <TabPanel id="resources">
            <div className={styles.resources}>
              <h4>Downloadable Resources</h4>
              <ul className={styles.resourceList}>
                <li>
                  <a href="#" className={styles.resourceLink}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 12.293V.5A.5.5 0 0 1 8 0z"/>
                      <path d="M1 14.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    Lesson Slides
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.resourceLink}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                    </svg>
                    Source Code
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.resourceLink}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3z"/>
                      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1z"/>
                    </svg>
                    Cheat Sheet
                  </a>
                </li>
              </ul>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
