"use client";
import React, { useState, useEffect } from "react";
import { HeroSectionBackgroundImages } from "@/constants";

const HeroSection = () => {
  return (
    <section className="hero-section relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex justify-center items-center fade p-10">
        <div>
          <h1 className="head_text text-center md:text-8xl">
            Gokul Agro Tourism
            <br />
            <span className="orange_gradient text-center">
              A place to relax and enjoy
            </span>
          </h1>
          <p className="text-2xl font-medium mt-6 text-center md:text-4xl md:mt-10">
            Visit, Enjoy, Experience and return with wonderful experiences
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
