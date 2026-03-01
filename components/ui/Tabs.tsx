'use client';

import { useState, createContext, useContext, ReactNode } from 'react';
import styles from './Tabs.module.css';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within Tabs');
  }
  return context;
}

interface TabsProps {
  children: ReactNode;
  defaultTab: string;
}

export function Tabs({ children, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={styles.tabs}>{children}</div>
    </TabsContext.Provider>
  );
}

interface TabListProps {
  children: ReactNode;
}

export function TabList({ children }: TabListProps) {
  return (
    <div className={styles.tabList} role="tablist" aria-orientation="horizontal">
      {children}
    </div>
  );
}

interface TabProps {
  id: string;
  children: ReactNode;
}

export function Tab({ id, children }: TabProps) {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === id;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    const tabList = target.closest('[role="tablist"]');
    if (!tabList) return;

    const tabs = Array.from(
      tabList.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    );
    const currentIndex = tabs.indexOf(target);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;

    if (event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const nextTab = tabs[nextIndex];
    const nextId = nextTab.dataset.tabId;
    if (nextId) {
      setActiveTab(nextId);
      nextTab.focus();
    }
  };

  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${id}`}
      id={`tab-${id}`}
      data-tab-id={id}
      tabIndex={isActive ? 0 : -1}
      className={`${styles.tab} ${isActive ? styles.active : ''}`}
      onClick={() => setActiveTab(id)}
      onKeyDown={handleKeyDown}
    >
      {children}
    </button>
  );
}

interface TabPanelProps {
  id: string;
  children: ReactNode;
}

export function TabPanel({ id, children }: TabPanelProps) {
  const { activeTab } = useTabs();
  const isActive = activeTab === id;

  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      className={styles.tabPanel}
    >
      {children}
    </div>
  );
}

interface TabPanelsProps {
  children: ReactNode;
}

export function TabPanels({ children }: TabPanelsProps) {
  return <div className={styles.tabPanels}>{children}</div>;
}
