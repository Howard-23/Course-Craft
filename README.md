# CourseCraft - Premium E-Learning Platform

A premium e-learning website built with Next.js 14 (App Router), TypeScript, and CSS Modules. Features course catalog browsing, course detail pages, and an immersive course player with progress tracking.

## Features

- **Course Catalog** - Browse and filter courses by topic, level, duration
- **Course Details** - Comprehensive course pages with curriculum, reviews, and instructor info
- **Course Player** - Video player interface with notes, resources, and lesson navigation
- **Progress Tracking** - localStorage-based progress persistence
- **Responsive Design** - Works on all device sizes
- **Accessibility** - Keyboard navigation and ARIA support

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- CSS Modules with CSS Variables
- No UI libraries

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```
bash
# Navigate to the project directory
cd coursecraft

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```
bash
npm run build
npm start
```

## Project Structure

```
coursecraft/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles & tokens
│   ├── courses/            # Course catalog
│   │   ├── page.tsx
│   │   └── [slug]/         # Course detail
│   ├── learn/[slug]/       # Course player
│   ├── pricing/            # Pricing page
│   └── style-guide/        # Component showcase
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── ui/                 # Reusable UI components
│   ├── blocks/              # Page sections
│   └── player/              # Course player components
├── data/                   # Mock data (courses, lessons, reviews)
├── lib/                    # Utilities (progress tracking)
└── types/                  # TypeScript definitions
```

## Adding Courses

### 1. Add Course Data

Edit `data/courses.ts`:

```
typescript
{
  id: 'course-new',
  slug: 'new-course-slug',
  title: 'New Course Title',
  description: 'Full description...',
  shortDescription: 'Short summary...',
  thumbnail: 'https://...',
  instructor: {
    id: 'instructor-id',
    name: 'Instructor Name',
    avatar: 'https://...',
    bio: 'Instructor bio...'
  },
  price: 79.99,
  currency: 'USD',
  level: 'beginner', // 'beginner' | 'intermediate' | 'advanced'
  duration: 1200, // minutes
  topic: 'Development',
  rating: 4.8,
  reviewCount: 100,
  enrollmentCount: 1000,
  lastUpdated: '2024-01-15',
  modules: [
    { id: 'mod-1', title: 'Module 1', order: 1 },
    // Add more modules
  ],
  whatYouWillLearn: [
    'Learning objective 1',
    // Add more
  ],
  isFeatured: false
}
```

### 2. Add Lessons

Edit `data/lessons.ts`:

```
typescript
{
  id: 'lesson-1-1',         // Unique lesson ID
  courseId: 'course-new',   // Must match course.id
  moduleId: 'mod-1',       // Must match module.id in course
  title: 'Lesson Title',
  description: 'Lesson description',
  duration: 20,            // Duration in minutes
  type: 'video',           // 'video' | 'article' | 'quiz'
  order: 1                 // Lesson order within module
}
```

### 3. Add Reviews (Optional)

Edit `data/reviews.ts`:

```
typescript
{
  id: 'review-1',
  courseId: 'course-new',
  userId: 'user-1',
  userName: 'John Doe',
  userAvatar: 'https://...',
  rating: 5,
  text: 'Great course!',
  date: '2024-01-20',
  helpful: 42
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, features, featured courses |
| `/courses` | Course catalog with search and filters |
| `/courses/[slug]` | Course detail page |
| `/learn/[slug]` | Course player interface |
| `/pricing` | Pricing plans |
| `/style-guide` | Component documentation |

## Design System

See `/style-guide` for complete component documentation including:

- Color palette
- Typography
- Button variants
- Form elements
- Badges & progress
- Accordion & tabs

## License

MIT
