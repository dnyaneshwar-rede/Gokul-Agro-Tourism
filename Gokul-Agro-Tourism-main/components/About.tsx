"use client"
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about-us"
      className="px-6 py-12 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-8 text-center drop-shadow-lg">
          Welcome to Gokul 
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="flex-1">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Experience a unique blend of traditional farm life and eco-friendly adventures at Gokul Agro Tourism.
              Our mission is to reconnect you with nature through authentic rural experiences, sustainable farming,
              and locally-prepared organic cuisine. Explore hands-on activities, breathtaking landscapes, and a warm
              community that celebrates the beauty of agro-tourism.
            </p>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
              <li className="flex items-center">
                <span className="mr-3 text-2xl">🌿</span> Authentic farm experiences
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-2xl">🍲</span> Organic & locally-prepared cuisine
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-2xl">🏕️</span> Adventure activities & nature trails
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-2xl">🌞</span> Relaxing and rejuvenating escapes
              </li>
            </ul>
          </div>

          {/* Image with 3D-inspired hover effect */}
          <div
            className="relative flex-1 w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105"
            style={{ perspective: "1200px" }}
          >
            <Image
              src="/assets/images/GokulHero.webp"
              alt="Gokul Agro Tourism Scenic View"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-500"></div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;
