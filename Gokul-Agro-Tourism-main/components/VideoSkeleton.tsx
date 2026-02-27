import React from "react";

export const VideoSkeleton = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden flex flex-col h-full animate-pulse">
      <div className="aspect-video w-full bg-gray-200"></div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
        <div className="h-5 bg-gray-200 rounded w-1/2 mb-6"></div>
        <div className="mt-auto">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-3"></div>
          <div className="flex justify-between items-center">
            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const VideoSkeletonGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array(8).fill(0).map((_, i) => (
        <VideoSkeleton key={i} />
      ))}
    </div>
  );
};