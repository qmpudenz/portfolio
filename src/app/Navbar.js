import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

import { Inter_Tight, Agbalumo, Merriweather_Sans } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const inter = Inter_Tight({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
});

const merriweatherSans = Merriweather_Sans({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const agbalumo = Agbalumo({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 md:flex-row">
        {/* Logo/Name */}
        <div className={`${merriweatherSans.className} flex-grow`}>
          <div className={`${agbalumo.className} title-font flex items-center text-2xl font-light text-slate-900`}>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="pr-5 text-2xl font-medium hover:text-blue-600 transition-colors"
            >
              Portfolio
            </button>
            <span className={`${merriweatherSans.className} hidden border-l-2 border-slate-300 pl-5 text-lg text-slate-600 sm:flex custom:flex`}>
              Full-Stack Developer
            </span>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-900 hover:text-blue-600 transition-colors"
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className={`${merriweatherSans.className} hidden text-lg lg:flex items-center space-x-8`}>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t lg:hidden">
            <nav className={`${merriweatherSans.className} flex flex-col p-6 space-y-4`}>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-left text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg mt-4 w-fit"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
