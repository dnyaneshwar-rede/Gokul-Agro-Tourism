'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Spinner } from '@/components/ui/Spinner';

type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
};

interface YouTubeVideosProps {
  limit?: number; // Optional limit for videos
}

const useFetchVideos = (limit?: number) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/youtube');
        const data = await response.json();

        if (response.ok) {
          setVideos(limit ? data.videos.slice(0, limit) : data.videos);
        } else {
          setError(data.error || 'Failed to fetch videos');
        }
      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [limit]);

  return { videos, error, loading };
};

const VideoCard: React.FC<{ video: Video }> = ({ video }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 border border-gray-200">
    <Link href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
      <img
        src={video.thumbnail}
        alt={`Thumbnail of ${video.title}`}
        className="w-full h-56 object-cover"
      />
    </Link>
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 transition">
        <Link href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
          {video.title}
        </Link>
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        {new Date(video.publishedAt).toLocaleDateString()}
      </p>
      <p className="text-gray-700 text-sm mt-2 line-clamp-2">
        {video.description || 'No description available.'}
      </p>
    </div>
  </div>
);

const YouTubeVideos: React.FC<YouTubeVideosProps> = ({ limit }) => {
  const { videos, error, loading } = useFetchVideos(limit);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
        <span className="ml-2 text-gray-700">Loading videos...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-xl font-medium">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-green-500">
          {limit ? 'Featured Videos' : 'Videos Gallery'}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideos;


