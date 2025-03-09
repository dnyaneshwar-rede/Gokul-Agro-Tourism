"use client"
import React from "react";

const Video = () => {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 dark:from-gray-800 dark:to-gray-900 py-12 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            <span className="text-green-600 dark:text-green-400">
              Take a peek
            </span>{" "}
            into the heart of our farm
            <span className="block mt-4 text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300">
              Experience authentic agritourism adventures
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Escape the city and reconnect with nature through agritourism. 
            Experience the joy of farm life, fresh food, and authentic experiences 
            that create lasting memories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="https://api.whatsapp.com/send?phone=919423121863"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 group"
            >
              Book Now
              <svg
                className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          <iframe
            className="w-full aspect-video rounded-lg transform group-hover:scale-[1.02] transition-transform duration-300"
            src="https://www.youtube.com/embed/nzQ-XD85dag?si=cmKxmFcIvJOFpz3Z"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Video;