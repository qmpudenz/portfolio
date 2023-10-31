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
        <div className="py-auto align-center container mx-5 flex h-[97.5%] w-auto flex-col items-center justify-center rounded-t-[45px] bg-gradient-to-r from-red-500 to-rose-500 px-8 sm:px-10 sm:pb-2 md:mx-5 md:flex-row md:px-10">
          <div className=" flex h-[95%] flex-col items-center justify-evenly text-left md:items-center">
            <div className="align-center flex h-1/2 flex-col justify-evenly sm:h-auto sm:flex-row">
              <h1 className="title-font mw-auto flex items-center text-center text-4xl font-medium text-white sm:w-1/2 sm:max-w-[50%] sm:text-left sm:text-5xl md:w-full md:max-w-full md:text-5xl lg:text-7xl">
                Let&apos;s bring your ideas to life.
              </h1>

              <div className="flex items-center justify-center md:hidden">
                <div className="w-[25vh] md:hidden">
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

            <div className="flex h-1/2 flex-row justify-evenly sm:h-auto">
              <div className="flex flex-col justify-evenly md:w-[60%]">
                <p className="custom:text-2xl mb-2 text-xl font-light leading-relaxed text-white sm:mb-3 sm:text-2xl lg:text-3xl xl:text-3xl">
                  Hi! I&apos;m a freelance developer based out of Kansas City,
                  passionate about building beautiful, functional websites and
                  applications.
                </p>
                <p className="md:text-md custom:text-2xl text-xl font-extralight leading-relaxed text-white sm:text-2xl lg:text-3xl xl:text-3xl">
                  I specialize in React, Next.js, and Node.js, but I&apos;m
                  always learning new technologies and frameworks.
                </p>
              </div>

              <div className="hidden md:flex">
                <Image
                  className="max-sm:display rounded object-cover object-center"
                  alt="hero"
                  src="/avataaars.png"
                  width={300} // Adjust this width based on your design requirements
                  height={300} // Adjust this height based on your design requirements
                />
              </div>
            </div>

            <div className="flex w-full flex-col justify-center sm:flex-row">
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className=" text-md hidden rounded border-0 bg-white px-6 py-2 text-black hover:bg-sky-400 focus:outline-none sm:inline-flex  md:text-lg xl:text-2xl"
                >
                  Reach Out
                </a>
                <a
                  href="#projects"
                  className="text-md ml-4 hidden rounded border-0 bg-black px-6 py-2 text-white hover:bg-neutral-700 focus:outline-none  sm:inline-flex md:text-lg xl:text-2xl"
                >
                  See My Past Work
                </a>
              </div>
            </div>
          </div>
          <div className="hidden w-5/6 justify-center sm:w-1/3 md:w-[50%]">
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
