import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'CourseCraft - Master New Skills, Transform Your Career',
  description: 'Premium e-learning platform with curated courses from industry experts. Learn web development, design, data science, and more.',
  keywords: 'online courses, e-learning, education, programming, web development, design, data science',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
