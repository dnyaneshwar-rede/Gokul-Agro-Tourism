import React from 'react';
import Image from 'next/image';

const ImageCard = ({ src, heading,  tags }: { src: string; heading: string;  tags: string[] }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-wrap">
      {/* Fix the src prop to use a leading slash for relative paths */}
      <Image className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
        src={src.startsWith('/') ? src : `/${src}`} // Add leading slash if missing
        alt="image"
        width={500}
        height={500}
        //layout="fill" // Recommended for responsive layouts
        //objectFit="cover" // Optionally specify object fit
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{heading}</div>
        {/* <p className="text-gray-700 text-base">{des}</p> */}
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
