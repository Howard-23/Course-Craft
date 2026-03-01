import { Course } from '@/types';

export const courses: Course[] = [
  {
    id: 'course-1',
    slug: 'complete-web-development-bootcamp',
    title: 'Complete Web Development Bootcamp 2024',
    description: 'Master full-stack web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and more through hands-on projects. This comprehensive course takes you from beginner to professional developer with real-world applications.',
    shortDescription: 'Master full-stack web development from scratch with hands-on projects',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop',
    instructor: {
      id: 'instructor-1',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      bio: 'Senior Software Engineer at Google with 10+ years of experience'
    },
    price: 89.99,
    currency: 'USD',
    level: 'beginner',
    duration: 2400,
    topic: 'Development',
    rating: 4.8,
    reviewCount: 12453,
    enrollmentCount: 89432,
    lastUpdated: '2024-01-15',
    modules: [
      { id: 'mod-1', title: 'Getting Started', order: 1 },
      { id: 'mod-2', title: 'HTML Fundamentals', order: 2 },
      { id: 'mod-3', title: 'CSS Mastery', order: 3 },
      { id: 'mod-4', title: 'JavaScript Essentials', order: 4 },
      { id: 'mod-5', title: 'React Development', order: 5 },
      { id: 'mod-6', title: 'Backend with Node.js', order: 6 }
    ],
    whatYouWillLearn: [
      'Build responsive websites from scratch',
      'Create interactive web applications',
      'Understand database design and management',
      'Deploy applications to production servers',
      'Write clean, maintainable code',
      'Debug and troubleshoot common issues'
    ],
    isFeatured: true
  },
  {
    id: 'course-2',
    slug: 'ui-ux-design-fundamentals',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the principles of user interface and user experience design. Master Figma, create wireframes, prototypes, and build a professional design portfolio. Perfect for aspiring designers and developers wanting to improve their design skills.',
    shortDescription: 'Master UI/UX design principles and build your design portfolio',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop',
    instructor: {
      id: 'instructor-2',
      name: 'Michael Torres',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      bio: 'Lead Product Designer at Airbnb with expertise in design systems'
    },
    price: 79.99,
    currency: 'USD',
    level: 'beginner',
    duration: 1800,
    topic: 'Design',
    rating: 4.9,
    reviewCount: 8734,
    enrollmentCount: 56231,
    lastUpdated: '2024-02-20',
    modules: [
      { id: 'mod-1', title: 'Introduction to UI/UX', order: 1 },
      { id: 'mod-2', title: 'Design Thinking', order: 2 },
      { id: 'mod-3', title: 'Figma Mastery', order: 3 },
      { id: 'mod-4', title: 'Wireframing & Prototyping', order: 4 },
      { id: 'mod-5', title: 'Design Systems', order: 5 }
    ],
    whatYouWillLearn: [
      'Create stunning user interfaces',
      'Build interactive prototypes',
      'Conduct user research and testing',
      'Design accessible products',
      'Build a professional design portfolio',
      'Work with design tools like Figma'
    ],
    isFeatured: true
  },
  {
    id: 'course-3',
    slug: 'data-science-python',
    title: 'Data Science with Python',
    description: 'Dive deep into data science using Python. Learn pandas, NumPy, matplotlib, and machine learning fundamentals. Build real-world projects and analyze complex datasets to extract valuable insights.',
    shortDescription: 'Master data science with Python and build real-world projects',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    instructor: {
      id: 'instructor-3',
      name: 'Dr. Emily Watson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      bio: 'Data Scientist at Netflix, PhD in Computer Science'
    },
    price: 94.99,
    currency: 'USD',
    level: 'intermediate',
    duration: 2100,
    topic: 'Data',
    rating: 4.7,
    reviewCount: 6234,
    enrollmentCount: 45892,
    lastUpdated: '2024-01-28',
    modules: [
      { id: 'mod-1', title: 'Python Refresher', order: 1 },
      { id: 'mod-2', title: 'NumPy Fundamentals', order: 2 },
      { id: 'mod-3', title: 'Pandas for Data Analysis', order: 3 },
      { id: 'mod-4', title: 'Data Visualization', order: 4 },
      { id: 'mod-5', title: 'Machine Learning Basics', order: 5 }
    ],
    whatYouWillLearn: [
      'Analyze complex datasets with pandas',
      'Create stunning visualizations',
      'Build machine learning models',
      'Perform data preprocessing',
      'Extract insights from data',
      'Apply statistical analysis'
    ],
    isFeatured: true
  },
  {
    id: 'course-4',
    slug: 'digital-marketing-masterclass',
    title: 'Digital Marketing Masterclass',
    description: 'Learn digital marketing strategies that drive results. Master SEO, social media marketing, content marketing, email campaigns, and analytics. Build campaigns that convert visitors into customers.',
    shortDescription: 'Master digital marketing and grow any business online',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    instructor: {
      id: 'instructor-4',
      name: 'Jessica Miller',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
      bio: 'CMO at TechStartup, 15 years in digital marketing'
    },
    price: 69.99,
    currency: 'USD',
    level: 'beginner',
    duration: 1500,
    topic: 'Business',
    rating: 4.6,
    reviewCount: 4521,
    enrollmentCount: 32156,
    lastUpdated: '2024-03-01',
    modules: [
      { id: 'mod-1', title: 'Marketing Fundamentals', order: 1 },
      { id: 'mod-2', title: 'SEO Basics', order: 2 },
      { id: 'mod-3', title: 'Social Media Marketing', order: 3 },
      { id: 'mod-4', title: 'Content Marketing', order: 4 },
      { id: 'mod-5', title: 'Analytics & Measurement', order: 5 }
    ],
    whatYouWillLearn: [
      'Create effective SEO strategies',
      'Build engaging social media campaigns',
      'Write compelling marketing copy',
      'Measure marketing performance',
      'Optimize for conversions',
      'Build brand awareness'
    ],
    isFeatured: false
  },
  {
    id: 'course-5',
    slug: 'advanced-react-patterns',
    title: 'Advanced React Patterns',
    description: 'Take your React skills to the next level with advanced patterns and best practices. Learn compound components, render props, hooks, performance optimization, and state management strategies.',
    shortDescription: 'Master advanced React patterns and write production-ready code',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
    instructor: {
      id: 'instructor-1',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      bio: 'Senior Software Engineer at Google with 10+ years of experience'
    },
    price: 99.99,
    currency: 'USD',
    level: 'advanced',
    duration: 1200,
    topic: 'Development',
    rating: 4.9,
    reviewCount: 3456,
    enrollmentCount: 23456,
    lastUpdated: '2024-02-10',
    modules: [
      { id: 'mod-1', title: 'Advanced Hooks', order: 1 },
      { id: 'mod-2', title: 'Compound Components', order: 2 },
      { id: 'mod-3', title: 'Render Props Pattern', order: 3 },
      { id: 'mod-4', title: 'Performance Optimization', order: 4 },
      { id: 'mod-5', title: 'State Management', order: 5 }
    ],
    whatYouWillLearn: [
      'Build reusable component libraries',
      'Optimize React performance',
      'Master custom hooks',
      'Implement state management',
      'Write clean component architecture',
      'Handle complex state logic'
    ],
    isFeatured: false
  },
  {
    id: 'course-6',
    slug: 'mobile-app-development-flutter',
    title: 'Mobile App Development with Flutter',
    description: 'Build beautiful, natively compiled mobile applications for iOS and Android from a single codebase. Learn Dart, Flutter widgets, state management, and publish your apps to app stores.',
    shortDescription: 'Build cross-platform mobile apps with Flutter and Dart',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop',
    instructor: {
      id: 'instructor-5',
      name: 'Alex Rivera',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      bio: 'Mobile Developer at Instagram, Flutter enthusiast'
    },
    price: 84.99,
    currency: 'USD',
    level: 'intermediate',
    duration: 1900,
    topic: 'Development',
    rating: 4.7,
    reviewCount: 5123,
    enrollmentCount: 38765,
    lastUpdated: '2024-01-20',
    modules: [
      { id: 'mod-1', title: 'Dart Fundamentals', order: 1 },
      { id: 'mod-2', title: 'Flutter Basics', order: 2 },
      { id: 'mod-3', title: 'Widgets Deep Dive', order: 3 },
      { id: 'mod-4', title: 'State Management', order: 4 },
      { id: 'mod-5', title: 'Publishing Apps', order: 5 }
    ],
    whatYouWillLearn: [
      'Build iOS and Android apps from one codebase',
      'Create beautiful UIs with Flutter',
      'Implement state management',
      'Use device features (camera, GPS)',
      'Publish to App Store and Play Store',
      'Test and debug mobile apps'
    ],
    isFeatured: false
  },
  {
    id: 'course-7',
    slug: 'machine-learning-fundamentals',
    title: 'Machine Learning Fundamentals',
    description: 'Understand the core concepts of machine learning and AI. Learn supervised and unsupervised learning, neural networks, and build ML models using scikit-learn and TensorFlow.',
    shortDescription: 'Master machine learning fundamentals and build intelligent systems',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    instructor: {
      id: 'instructor-3',
      name: 'Dr. Emily Watson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      bio: 'Data Scientist at Netflix, PhD in Computer Science'
    },
    price: 109.99,
    currency: 'USD',
    level: 'intermediate',
    duration: 2300,
    topic: 'Data',
    rating: 4.8,
    reviewCount: 4567,
    enrollmentCount: 29876,
    lastUpdated: '2024-02-05',
    modules: [
      { id: 'mod-1', title: 'ML Foundations', order: 1 },
      { id: 'mod-2', title: 'Supervised Learning', order: 2 },
      { id: 'mod-3', title: 'Unsupervised Learning', order: 3 },
      { id: 'mod-4', title: 'Neural Networks', order: 4 },
      { id: 'mod-5', title: 'Deep Learning Intro', order: 5 }
    ],
    whatYouWillLearn: [
      'Understand ML algorithms',
      'Build classification models',
      'Create clustering solutions',
      'Implement neural networks',
      'Evaluate model performance',
      'Deploy ML models'
    ],
    isFeatured: false
  },
  {
    id: 'course-8',
    slug: 'product-management-bootcamp',
    title: 'Product Management Bootcamp',
    description: 'Become a successful product manager. Learn product lifecycle, roadmapping, user research, agile methodologies, and stakeholder management. Launch products that users love.',
    shortDescription: 'Become a product manager and launch products users love',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop',
    instructor: {
      id: 'instructor-6',
      name: 'David Park',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      bio: 'VP Product at Stripe, former product leader at multiple startups'
    },
    price: 74.99,
    currency: 'USD',
    level: 'beginner',
    duration: 1600,
    topic: 'Business',
    rating: 4.6,
    reviewCount: 3892,
    enrollmentCount: 25678,
    lastUpdated: '2024-03-10',
    modules: [
      { id: 'mod-1', title: 'Product Management Intro', order: 1 },
      { id: 'mod-2', title: 'User Research', order: 2 },
      { id: 'mod-3', title: 'Product Strategy', order: 3 },
      { id: 'mod-4', title: 'Roadmapping', order: 4 },
      { id: 'mod-5', title: 'Stakeholder Management', order: 5 }
    ],
    whatYouWillLearn: [
      'Define product strategy',
      'Conduct user research',
      'Create product roadmaps',
      'Prioritize features',
      'Work with stakeholders',
      'Launch products successfully'
    ],
    isFeatured: false
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}

export function getFeaturedCourses(): Course[] {
  return courses.filter(course => course.isFeatured);
}

export function getCoursesByTopic(topic: string): Course[] {
  return courses.filter(course => course.topic.toLowerCase() === topic.toLowerCase());
}

export function getCoursesByLevel(level: string): Course[] {
  return courses.filter(course => course.level.toLowerCase() === level.toLowerCase());
}

export function searchCourses(query: string): Course[] {
  const lowerQuery = query.toLowerCase();
  return courses.filter(course => 
    course.title.toLowerCase().includes(lowerQuery) ||
    course.description.toLowerCase().includes(lowerQuery) ||
    course.instructor.name.toLowerCase().includes(lowerQuery)
  );
}
