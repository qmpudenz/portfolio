import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
});

export default function About() {
  return (
    <main className="h-full">
      <section id="about" className="flex h-full flex-col items-center">
        <div className="py-auto align-center container mx-10 flex h-[97.5%] w-auto flex-col items-center justify-center rounded-t-[45px] bg-neutral-900 px-5 max-md:mx-5 sm:pb-20 md:flex-row">
          <div className=" flex h-[95%] flex-col items-center justify-evenly text-left md:w-1/2 md:items-start lg:flex-grow">
            <div className="align-center flex flex-col justify-end sm:flex-row">
              <h1 className="title-font w-[75vw] text-center text-3xl font-medium text-white sm:w-1/2 sm:text-left sm:text-3xl md:w-full md:text-5xl lg:text-5xl xl:text-7xl">
                Let&apos;s bring your ideas to life.
              </h1>
              <div className="flex items-center justify-center md:hidden md:w-1/2">
                <div className="mt-2 w-[24vh] md:hidden md:w-1/2">
                  <Image
                    className="max-sm:display rounded object-cover object-center md:hidden"
                    alt="hero"
                    src="/avataaars.png"
                    width={300} // Adjust this width based on your design requirements
                    height={300} // Adjust this height based on your design requirements
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="sm:text-md text-md mb-1 leading-relaxed text-white md:text-lg lg:text-xl xl:text-2xl">
                I&apos;m a freelance developer based out of Kansas City,
                passionate about building beautiful, functional websites and
                applications.
              </p>
              <p className="md:text-md text-md font-extralight leading-relaxed text-white lg:text-lg xl:text-xl">
                I specialize in React, Next.js, and Node.js, but I&apos;m always
                learning new technologies and frameworks.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <a
                href="#contact"
                className=" text-md inline-flex rounded border-0 bg-white px-6 py-2 text-black hover:bg-sky-400  focus:outline-none md:text-lg"
              >
                Reach Out
              </a>
              <a
                href="#projects"
                className="text-md ml-4 hidden rounded border-0 bg-black px-6 py-2 text-white hover:bg-neutral-700  focus:outline-none sm:inline-flex md:text-lg"
              >
                See My Past Work
              </a>
            </div>
          </div>
          <div className="flex w-5/6 justify-center sm:w-1/4 md:w-1/2 lg:w-5/6">
            <Image
              className="xl:display rounded object-cover object-center max-md:hidden"
              alt="hero"
              src="/avataaars.png"
              width={400} // Adjust this width based on your design requirements
              height={400} // Adjust this height based on your design requirements
            />
          </div>
        </div>
      </section>
    </main>
  );
}
