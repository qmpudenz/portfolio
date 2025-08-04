"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Montserrat, Merriweather_Sans } from "next/font/google";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
  weight: "variable",
});

const meriweatherSans = Merriweather_Sans({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function Hero() {
  useEffect(() => {
    // Animation for hero text
    gsap.fromTo(
      ".hero-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2 }
    );
    gsap.fromTo(
      ".hero-subtitle",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      ".hero-description",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.8 }
    );
    gsap.fromTo(
      ".hero-buttons",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1.1 }
    );
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/topography.webp')] bg-opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-75"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-150"></div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className={`${montserrat.className} hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6`}>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Full-Stack
          </span>
          <br />
          <span className="text-white">Developer</span>
        </h1>
        
        <p className={`${meriweatherSans.className} hero-subtitle text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light`}>
          Building innovative web solutions that drive business growth
        </p>
        
        <p className={`${meriweatherSans.className} hero-description text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed`}>
          Passionate about creating exceptional digital experiences with modern technologies like React, Next.js, Node.js, and cloud platforms. Let&apos;s transform your ideas into powerful, scalable applications.
        </p>
        
        <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}