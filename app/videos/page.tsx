// app/page.tsx
import VideoGrid from '@/components/VideoGrid';
import { Suspense } from 'react';

export const metadata = {
  title: 'Gokul Agro Tourism ',
  description: 'Explore our collection of channel videos.',
};

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 pt-24 min-h-screen py-4">
      <h1 className="text-4xl font-bold text-center mb-8">Channel Videos</h1>
      <Suspense fallback={<div className="text-center">Loading videos...</div>}>
        <VideoGrid />
      </Suspense>
    </main>
  );
}
