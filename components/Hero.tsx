"use client";
import React, { useState, useEffect } from "react";
import { HeroSectionBackgroundImages } from "@/constants";

const HeroSection = () => {
  const [backgroundImage, setBackgroundImage] = useState(0);
  const images = HeroSectionBackgroundImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-section relative w-full h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex justify-center items-center fade"
        style={{
          backgroundImage: `url(${images[backgroundImage]})`,
        }}
      >
        <div className="flex flex-col gap-5 text-center text-white">
          <span className="capitalize text-7xl font-bold">Welcome to Gokul Krushi Paryatan Kendra</span>
          <span className="capitalize text-4xl font-semibold">Visit, Enjoy, Experience and return with wonderful experiences</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
