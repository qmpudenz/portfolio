import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Caprasimo } from "next/font/google";

const caprasimo = Caprasimo({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <header className="bg-gradient-to-t from-black/80 via-black/90 to-black sticky md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className={caprasimo.className}>
          <div className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="#about" className="ml-3 text-2xl">
              Quinn Pudenz
            </a>
          </div>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-white justify-center">
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
        <a
          href="#contact"
          className="raise text-black inline-flex items-center bg-sky-400 border-0 py-1 px-3 focus:outline-none hover:bg-sky-400 rounded text-base mt-4 md:mt-0"
        >
          Contact
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
