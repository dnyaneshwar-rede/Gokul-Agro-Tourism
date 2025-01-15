"use client" ;

import React from "react";
import ImageCard from "./ImageCard";
import { imageData } from "@/constants/ImagesData";

const ImageGallery = () => {
  
  return (
    
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 py-3 px-3" id="photo-gallery">
      
      {imageData.map((data, index) => (
        <ImageCard
          key={index}
          src={data.src}
          heading={data.heading}
          //tags={data.tags}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
