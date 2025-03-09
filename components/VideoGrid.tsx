"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { YouTubeVideo } from '../lib/youtube';
import { VideoSkeletonGrid } from './VideoSkeleton';

// Custom hook for fetching YouTube videos
function useYoutubeVideos() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchVideos() {
      try {
        const response = await fetch('/api/youtube-videos', { signal: controller.signal });
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        setVideos(data);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();

    return () => controller.abort();
  }, []);

  return { videos, loading, error };
}

export default function VideoGrid() {
  const { videos, loading, error } = useYoutubeVideos();

  if (loading) {
    return <VideoSkeletonGrid />;
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center my-8 mx-auto max-w-2xl">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to load videos</h3>
        <p className="text-red-600">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
          aria-label="Retry loading videos"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No videos found</h3>
        <p className="text-gray-500 max-w-md mx-auto">
          There are currently no videos available. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
          >
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block group"
              aria-label={`Watch ${video.title} on YouTube`}
            >
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={480}
                  height={270}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL="/placeholder-thumbnail.jpg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/placeholder-thumbnail.jpg';
                  }}
                />
              </div>
            </a>
            <div className="p-4 flex-grow flex flex-col">
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h3 className="font-semibold text-gray-800 text-lg hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                  {video.title}
                </h3>
              </a>
              <div className="mt-auto">
                <a
                  href={`https://www.youtube.com/channel/${video.channelId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {video.channelTitle}
                </a>
                <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                  <span>
                    {new Date(video.publishedAt).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span>{formatViewCount(Number(video.viewCount))} views</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper function to format view counts (e.g., 1.2M, 450K)
function formatViewCount(count: number): string {
  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
  }
  if (count >= 1_000) {
    return `${(count / 1_000).toFixed(1).replace(/\.0$/, '')}K`;
  }
  return count.toString();
}
