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
    <header className="static top-0 z-10 bg-gradient-to-t from-black/80 via-black/90 to-black md:sticky">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-4 md:flex-row">
        <div className={caprasimo.className}>
          <div className="title-font font-medium text-white md:mb-0">
            <a href="#about" className="text-2xl">
              Quinn Pudenz
            </a>
          </div>
        </div>
        <nav className="lex hidden flex-wrap items-center justify-center text-white md:ml-4	md:mr-auto md:border-l md:border-gray-700 md:py-1 md:pl-4">
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
          className="raise mt-4 inline-flex hidden items-center rounded border-0 bg-sky-400 px-3 py-1 text-base text-black hover:bg-sky-400 focus:outline-none md:mt-0"
        >
          Contact
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
