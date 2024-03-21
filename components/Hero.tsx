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
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex justify-center items-center fade p-10 "
        style={{
          backgroundImage: `url(${images[backgroundImage]})`,
        }}
      >
        <div>
          <h1 className="head_text text-center">
            Gokul Agro Tourism Picnic Spot  
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">
              A place to relax and enjoy
            </span>
          </h1>
          <p className=" text-center ">
            Visit, Enjoy, Experience and return with wonderful experiences
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
