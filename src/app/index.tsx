"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout() {
  return (
      <div>
          <Projects />
          <button onClick={() => alert("Test button clicked!")}>Test Button</button>

      </div>
  );
}


