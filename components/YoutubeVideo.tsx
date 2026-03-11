"use client"
import React from "react";
import Link from "next/link";
import { Spinner } from "@/components/ui/Spinner";
import Image from "next/image";
import { useEffect, useState } from "react";

type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
};

interface YouTubeVideosProps {
  limit?: number;
}

const YOUTUBE_BASE_URL = "https://www.youtube.com/watch?v=";

const useFetchVideos = (limit?: number) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        if (limit !== undefined && (isNaN(limit) || limit <= 0 || limit > 100)) {
          throw new Error("Invalid limit parameter");
        }

        const response = await fetch("/api/youtube");
        const data = await response.json();

        if (response.ok) {
          setVideos(limit ? data.videos.slice(0, limit) : data.videos);
        } else {
          setError(data.error || "Failed to fetch videos");
        }
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [limit]);

  return { videos, error, loading };
};

const VideoCard: React.FC<{ video: Video }> = ({ video }) => (
  <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
    <Link
      href={`${YOUTUBE_BASE_URL}${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={video.thumbnail}
          alt={`Thumbnail of ${video.title}`}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
    <div className="p-6 space-y-3">
      <p className="text-sm font-medium text-green-600 dark:text-green-400">
        {new Date(video.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors">
        <Link
          href={`${YOUTUBE_BASE_URL}${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600 dark:hover:text-green-400"
        >
          {video.title}
        </Link>
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-base line-clamp-3">
        {video.description || "No description available."}
      </p>
    </div>
  </div>
);

class ErrorBoundary extends React.Component<{ children: React.ReactNode }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary: ", error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <div className="text-center py-8">
        <div className="text-red-500 text-lg font-medium inline-flex items-center gap-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Error rendering videos
        </div>
      </div>
    ) : (
      this.props.children
    );
  }
}

const YouTubeVideos: React.FC<YouTubeVideosProps> = ({ limit }) => {
  const { videos, error, loading } = useFetchVideos(limit);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center gap-3">
          <Spinner  />
          <span className="text-gray-600 dark:text-gray-400 text-lg font-medium">
            Loading videos...
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-8 max-w-md">
          <div className="text-red-500 text-xl font-medium inline-flex items-center gap-2 mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Loading Error
          </div>
          <p className="text-gray-600 dark:text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent inline-block">
              {limit ? "Featured Videos" : "Videos Gallery"}
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our latest farm adventures, tutorials, and behind-the-scenes moments
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default YouTubeVideos;