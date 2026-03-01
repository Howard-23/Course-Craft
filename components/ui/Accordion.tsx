'use client';

import { useState, createContext, useContext, ReactNode } from 'react';
import styles from './Accordion.module.css';

interface AccordionContextType {
  expanded: string | null;
  toggle: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within Accordion');
  }
  return context;
}

interface AccordionProps {
  children: ReactNode;
  defaultExpanded?: string | null;
}

export function Accordion({ children, defaultExpanded = null }: AccordionProps) {
  const [expanded, setExpanded] = useState<string | null>(defaultExpanded);

  const toggle = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <AccordionContext.Provider value={{ expanded, toggle }}>
      <div className={styles.accordion}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function AccordionItem({ id, title, children }: AccordionItemProps) {
  const { expanded, toggle } = useAccordion();
  const isExpanded = expanded === id;

  return (
    <div className={`${styles.item} ${isExpanded ? styles.expanded : ''}`}>
      <button
        id={`trigger-${id}`}
        className={styles.trigger}
        onClick={() => toggle(id)}
        aria-expanded={isExpanded}
        aria-controls={`panel-${id}`}
      >
        <span className={styles.title}>{title}</span>
        <span className={styles.icon}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        id={`panel-${id}`}
        className={styles.content}
        role="region"
        aria-labelledby={`trigger-${id}`}
        hidden={!isExpanded}
      >
        <div className={styles.contentInner}>{children}</div>
      </div>
    </div>
  );
}

export function AccordionTrigger({ id, children }: { id: string; children: ReactNode }) {
  const { expanded, toggle } = useAccordion();
  const isExpanded = expanded === id;

  return (
    <button
      id={`trigger-${id}`}
      className={styles.trigger}
      onClick={() => toggle(id)}
      aria-expanded={isExpanded}
      aria-controls={`panel-${id}`}
    >
      <span className={styles.title}>{children}</span>
      <span className={styles.icon}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}

export function AccordionPanel({ id, children }: { id: string; children: ReactNode }) {
  const { expanded } = useAccordion();
  const isExpanded = expanded === id;

  return (
    <div
      id={`panel-${id}`}
      className={styles.content}
      role="region"
      aria-labelledby={`trigger-${id}`}
      hidden={!isExpanded}
    >
      <div className={styles.contentInner}>{children}</div>
    </div>
  );
}
