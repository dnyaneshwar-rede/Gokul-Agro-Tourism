import React from 'react';
import ImageCard from './ImageCard';

const ImageGallery = () => {
const imageData = [
    {
        src: '/assets/images/boat-2.jpg',
        heading: 'The Coldest Sunset',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
        tags: ['photography', 'travel', 'winter'],
    },

    {
        src: '/assets/images/Birthday.jpg',
        heading: 'The Coldest Sunset',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
        tags: ['photography', 'travel', 'winter'],
    },
    {
        src: '/assets/images/rest.jpg',
        heading: 'The Coldest Sunset',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
        tags: ['photography', 'travel', 'winter'],
    },

    {
        src: '/assets/images/special-welcome.jpg',
        heading: 'The Coldest Sunset',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
        tags: ['photography', 'travel', 'winter'],
    },

    {
        src: '/assets/images/train.jpg',
        heading: 'The Coldest Sunset',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
        tags: ['photography', 'travel', 'winter'],
    },

    {
        src: '/assets/images/horse-ride.jpg',
        heading: 'The Coldest Sunset',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
        tags: ['photography', 'travel', 'winter'],
    },

    {
        src: '/assets/images/grp-1.jpg',
        heading: 'The Coldest Sunset',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
        tags: ['photography', 'travel', 'winter'],
    },

    {
        src: '/assets/images/grp-child.jpg',
        heading: 'The Coldest Sunset',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
        tags: ['photography', 'travel', 'winter'],
    },

    {
        src: '/assets/images/rest-3.jpg',
        heading: 'The Coldest Sunset',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
        tags: ['photography', 'travel', 'winter'],
    },

    {
        src: '/assets/images/farm-frutes.jpg',
        heading: 'The Coldest Sunset',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
        tags: ['photography', 'travel', 'winter'],
    },

    {
        src: '/assets/images/family.jpg',
        heading: 'The Coldest Sunset',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
        tags: ['photography', 'travel', 'winter'],
    },

    {
        src: '/assets/images/lunch.jpg',
        heading: 'The Coldest Sunset',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
        tags: ['photography', 'travel', 'winter'],
    },

    {
        src: '/assets/images/child-eating.jpg',
        heading: 'The Coldest Sunset',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
        tags: ['photography', 'travel', 'winter'],
    },

    {
        src: '/assets/images/farm-lady.jpg',
        heading: 'The Coldest Sunset',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
        tags: ['photography', 'travel', 'winter'],
    },

    {
        src: '/assets/images/couple.jpg',
        heading: 'The Coldest Sunset',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
        tags: ['photography', 'travel', 'winter'],
    },
    
    {
        src: '/assets/images/special-lunch.jpg',
        heading: 'The Coldest Sunset',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
        tags: ['photography', 'travel', 'winter'],
    },
    


    // Add more image data objects as needed
];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 py-3 px-3">
      {imageData.map((data, index) => (
        <ImageCard key={index} src={data.src} heading={data.heading} des={data.des} tags={data.tags} />
      ))}
    </div>
  );
};

export default ImageGallery;
