import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

import { Inter_Tight, Agbalumo, Merriweather_Sans } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

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

  return (
    <header className="static top-0 z-10  text-black md:sticky">
      <div className="container mx-auto flex flex-row flex-wrap items-center justify-between px-[5%] md:flex-row">
        {/* Name OR Links */}
        <div className={`${merriweatherSans.className} flex-grow`}>
          {isMobileMenuOpen ? (
            <nav className="flex-wrap items-center justify-start py-1 text-black md:mr-auto md:border-l md:border-gray-700 md:py-1 md:pl-4">
              <a href="#portfolio" className="mr-5 hover:text-white">
                Portfolio
              </a>
              <a href="#skills" className="mr-5 hover:text-white">
                Skills
              </a>
              <a href="#testimonials" className="mr-5 hover:text-white">
                Testimonials
              </a>
            </nav>
          ) : (
            <div
              className={`${agbalumo.className} title-font flex items-end text-2xl font-light text-black md:mb-0`}
            >
              <a href="#about" className="pr-5 text-2xl font-medium">
                Quinn Pudenz
              </a>
              <a
                className={`${merriweatherSans.className} hidden border-l-2 border-black pl-5 text-xl sm:flex custom:flex`}
              >
                Freelance Developer
              </a>
            </div>
          )}
        </div>

        {/* Menu Icon: Hamburger OR Close(X) */}
        <div className="flex justify-end">
          <a
            href="#"
            className="color-white hover:text-white"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </a>
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="raise mt-4 hidden items-center rounded border-0 bg-sky-400 px-3 py-1 text-base text-black hover:bg-sky-400 focus:outline-none md:mt-0"
        >
          Contact
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
