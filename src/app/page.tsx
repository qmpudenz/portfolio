"use client"


import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Projects from "./Projects";
import Shopify from "./Shopify";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import React, { useEffect } from 'react';

import './globals.css'

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // useEffect(() => {
  //   const setVH = () => {
  //     document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
  //   }
  //   setVH();

  //   window.addEventListener('resize', setVH);
    
  //   return () => window.removeEventListener('resize', setVH);
  // }, []);

  return (
    <div className="min-h-screen">
      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <Navbar />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Main Content Sections */}
      <div className="bg-white">
        <div id="about" className="min-h-screen">
          <About />
        </div>
        <div id="skills" className="min-h-screen bg-gray-50">
          <Skills />
        </div>
        <div id="projects" className="min-h-screen">
          <Projects />
        </div>
        <div id="testimonials" className="min-h-screen bg-gray-50">
          <Testimonials />
        </div>
        <div id="contact" className="min-h-screen">
          <Contact />
        </div>
      </div>
    </div>
  )
}

