'use client';

import React, { useEffect, useState } from 'react';

type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
};

const YouTubeVideos: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/youtube');
        const data = await response.json();

        if (response.ok) {
          setVideos(data.videos);
        } else {
          setError(data.error || 'Failed to fetch videos');
        }
      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred');
      }
    };

    fetchVideos();
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-xl font-medium">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-8">
        Latest YouTube Videos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 border border-gray-200"
          >
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-566 object-cover"
              />
            </a>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 transition">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {video.title}
                </a>
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(video.publishedAt).toLocaleDateString()}
              </p>
              <p className="text-gray-700 text-sm mt-2 line-clamp-2">
                {video.description || 'No description available.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideos;
