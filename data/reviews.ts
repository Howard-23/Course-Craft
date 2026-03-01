import { Review } from '@/types';

export const reviews: Review[] = [
  // Web Development Bootcamp reviews
  {
    id: 'review-1-1',
    courseId: 'course-1',
    userId: 'user-1',
    userName: 'James Wilson',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5,
    text: 'This is hands down the best web development course I\'ve ever taken. Sarah explains complex concepts in a way that\'s easy to understand. The projects are practical and I\'ve already used what I learned to build my own portfolio site.',
    date: '2024-01-20',
    helpful: 234
  },
  {
    id: 'review-1-2',
    courseId: 'course-1',
    userId: 'user-2',
    userName: 'Amanda Rodriguez',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
    text: 'I went from knowing nothing about coding to landing my first developer job in 6 months. The curriculum is comprehensive and the instructor is incredibly supportive. Highly recommend!',
    date: '2024-01-15',
    helpful: 189
  },
  {
    id: 'review-1-3',
    courseId: 'course-1',
    userId: 'user-3',
    userName: 'Robert Kim',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    rating: 4,
    text: 'Great course overall. The React section could use more examples, but everything else is top-notch. The Node.js backend section was particularly helpful.',
    date: '2024-01-10',
    helpful: 156
  },
  {
    id: 'review-1-4',
    courseId: 'course-1',
    userId: 'user-4',
    userName: 'Emma Thompson',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Perfect for beginners! The pacing is just right and there are plenty of exercises to practice. I appreciated the section on best practices and clean code.',
    date: '2024-01-05',
    helpful: 142
  },

  // UI/UX Design reviews
  {
    id: 'review-2-1',
    courseId: 'course-2',
    userId: 'user-5',
    userName: 'Lisa Chang',
    userAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Michael is an amazing instructor. The design thinking module alone is worth the price. I\'ve already recommended this course to my entire team.',
    date: '2024-02-25',
    helpful: 198
  },
  {
    id: 'review-2-2',
    courseId: 'course-2',
    userId: 'user-6',
    userName: 'David Martinez',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    rating: 5,
    text: 'The Figma tutorials are incredibly detailed. I went from Figma novice to creating full design systems. The portfolio project guidance was invaluable.',
    date: '2024-02-20',
    helpful: 167
  },
  {
    id: 'review-2-3',
    courseId: 'course-2',
    userId: 'user-7',
    userName: 'Sophie Anderson',
    userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
    rating: 4,
    text: 'Excellent course for breaking into UX design. Would love to see more advanced prototyping techniques in a follow-up course.',
    date: '2024-02-15',
    helpful: 134
  },

  // Data Science reviews
  {
    id: 'review-3-1',
    courseId: 'course-3',
    userId: 'user-8',
    userName: 'Michael Brown',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Dr. Watson is incredibly knowledgeable. The machine learning section breaks down complex algorithms into understandable pieces. The pandas tutorials are the best I\'ve found online.',
    date: '2024-02-01',
    helpful: 212
  },
  {
    id: 'review-3-2',
    courseId: 'course-3',
    userId: 'user-9',
    userName: 'Jennifer Lee',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 4,
    text: 'Great introduction to data science with Python. The projects are practical and helped me build a strong portfolio. Good balance of theory and hands-on practice.',
    date: '2024-01-28',
    helpful: 178
  },
  {
    id: 'review-3-3',
    courseId: 'course-3',
    userId: 'user-10',
    userName: 'Thomas Garcia',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    rating: 5,
    text: 'As a career switcher, I found this course incredibly accessible. The Python refresher was perfect and the data visualization section is stunning.',
    date: '2024-01-20',
    helpful: 145
  },

  // Digital Marketing reviews
  {
    id: 'review-4-1',
    courseId: 'course-4',
    userId: 'user-11',
    userName: 'Rachel Green',
    userAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Jessica knows her stuff! I implemented what I learned and saw a 200% increase in website traffic within 3 months. The SEO section is gold.',
    date: '2024-03-05',
    helpful: 156
  },
  {
    id: 'review-4-2',
    courseId: 'course-4',
    userId: 'user-12',
    userName: 'Chris Taylor',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    rating: 4,
    text: 'Comprehensive overview of digital marketing. The analytics section helped me understand metrics that were previously confusing. Great for beginners.',
    date: '2024-03-01',
    helpful: 98
  }
];

export function getReviewsByCourse(courseId: string): Review[] {
  return reviews
    .filter(review => review.courseId === courseId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAverageRating(courseId: string): number {
  const courseReviews = reviews.filter(review => review.courseId === courseId);
  if (courseReviews.length === 0) return 0;
  const sum = courseReviews.reduce((acc, review) => acc + review.rating, 0);
  return sum / courseReviews.length;
}

export function getRatingDistribution(courseId: string): { [key: number]: number } {
  const courseReviews = reviews.filter(review => review.courseId === courseId);
  const distribution: { [key: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  
  courseReviews.forEach(review => {
    distribution[review.rating]++;
  });
  
  return distribution;
}
