export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Module {
  id: string;
  title: string;
  order: number;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  instructor: Instructor;
  price: number;
  currency: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  topic: string;
  rating: number;
  reviewCount: number;
  enrollmentCount: number;
  lastUpdated: string;
  modules: Module[];
  whatYouWillLearn: string[];
  isFeatured: boolean;
}

export interface Lesson {
  id: string;
  courseId: string;
  moduleId: string;
  title: string;
  description: string;
  duration: number;
  type: 'video' | 'article' | 'quiz';
  content?: string;
  order: number;
}

export interface Review {
  id: string;
  courseId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  text: string;
  date: string;
  helpful: number;
}

export interface UserProgress {
  courseId: string;
  completedLessons: string[];
  currentLesson: string;
  lastAccessed: string;
  progress: number;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type InputSize = 'sm' | 'md' | 'lg';
