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

  return (
    <header className="relative top-0 z-20 text-black md:sticky">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-[5%] md:flex-row">
        {/* Toggle Between Logo/Name and Mobile Menu */}
        {isMobileMenuOpen ? (
          <nav className="flex flex-grow text-xl underline-offset-4">
            <a href="#portfolio" className="block p-2 hover:underline">
              Portfolio
            </a>
            <a href="#skills" className="block p-2 hover:underline">
              Skills
            </a>
            <a href="#testimonials" className="block p-2 hover:underline">
              Testimonials
            </a>
          </nav>
        ) : (
          <div className={`${merriweatherSans.className} flex-grow`}>
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
          </div>
        )}

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <a href="#" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden text-xl underline-offset-4 md:flex md:items-center md:justify-end">
          <a href="#portfolio" className="mr-5 hover:underline">
            Portfolio
          </a>
          <a href="#skills" className="mr-5 hover:underline">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:underline">
            Testimonials
          </a>
        </nav>

        {/* Contact Button */}
        <a
          href="#contact"
          className="raise mt-4 hidden items-center rounded bg-sky-400 px-3 py-1 text-base hover:bg-sky-600"
        >
          Contact <ArrowRightIcon className="ml-1 h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
