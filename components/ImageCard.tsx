"use client";

import React from 'react';
import Image from 'next/image';

const ImageCard = ({ src, heading,   }: { src: string; heading: string;   }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-wrap">
      {/* Fix the src prop to use a leading slash for relative paths */}
      <Image className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
        src={src.startsWith('/') ? src : `/${src}`} // Add leading slash if missing
        alt="image"
        width={500}
        height={500}
        //layout="fill" // Recommended for responsive layouts
        style={{ objectFit: "cover" }} // Optionally specify object fit
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{heading}</div>
        {/* <p className="text-gray-700 text-base">{des}</p> */}
      </div>
      
    </div>
  );
};

export default ImageCard;
