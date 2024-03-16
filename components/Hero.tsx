"use client"
import React, { useState, useEffect } from "react";
import { HeroSectionBackgroundImages } from "@/constants";

const HeroSection = () => {
  const [backgroundImage, setBackgroundImage] = useState(0);
  const images = HeroSectionBackgroundImages
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  
    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <div className="hero-section relative w-full h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[backgroundImage]})`
        }}
      />
      {/* Your other content here */}
    </div>
  );
};

export default HeroSection;
