import React from 'react';
import desktopBackground from '../assets/bg.png';
import { ArrowRight } from "lucide-react";
import './HeroSection.css';
import AnimatedArrow from './AnimatedArrow';


const HeroSection = () => {
  return (
    <div
  className="h-screen w-screen bg-cover bg-center relative bg-opacity-small"
  style={{
    backgroundImage: `url(${desktopBackground})`,
  }}
>


      <div className="absolute inset-0 top-0 lg:pl-20 flex items-center justify-start  sm:pl-10  md:pl-20">
        <div className="ml-8 max-w-lg text-black">
          <h1 className="text-4xl lg:text-4xl font-bold mb-4 text-blue-800">
          No overdraft fees.<br></br>No minimum balance fees.<br></br>
          No worries.
          </h1>

          <p className="text-lg lg:text-2xl mb-8 text-black">
            Your financial fresh start. Learn money basics and build smart habits, whether you're new to banking or seeking a reset.
          </p>
          <AnimatedArrow  />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
