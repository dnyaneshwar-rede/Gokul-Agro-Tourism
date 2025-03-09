"use client"

import React, { useState } from "react";
import Image from "next/image";

const ImageCard = ({ src, heading }: { src: string; heading: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageSrc = src.startsWith("/") ? src : `/${src}`;

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl bg-white dark:bg-gray-900 h-full">
      {/* Image wrapper with aspect ratio */}
      <div className="relative w-full aspect-square overflow-hidden">
        {/* Loading shimmer effect */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 animate-pulse" />
        )}

        <Image
          src={imageSrc}
          alt={heading || "Image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-all duration-700 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          priority
        />

        {/* Subtle hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card content */}
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg md:text-xl text-gray-800 dark:text-white transition-all duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {heading}
        </h3>
      </div>

      {/* Animated hover underline */}
      <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-blue-500 group-hover:w-2/3 group-hover:left-1/6 transition-all duration-300 rounded-full" />
    </div>
  );
};

export default ImageCard;
