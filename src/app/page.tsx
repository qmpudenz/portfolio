"use client"

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Projects from "./Projects";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import React, { useEffect } from 'react';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    const setVH = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
    }
    setVH();

    window.addEventListener('resize', setVH);
    
    return () => window.removeEventListener('resize', setVH);
  }, []);

  return (
    <div className="h-full">
      <div>
      <Navbar />
        </div>

      <div className="scroll-container vh90"> 
        <div className="module "><About /></div>
        <div className="module"><Projects /></div>
        <div className="module"><Skills /></div> 
        <div className="module"><Testimonials /></div>
      </div>
    </div>
  )
}

