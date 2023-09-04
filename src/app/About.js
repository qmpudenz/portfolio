import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
});

export default function About() {
  return (
    <main className={montserrat.className}>
      <section id="about" className="flex flex-col items-center">
        <div className="py-auto align-center container mx-10 flex w-auto flex-col items-center justify-center rounded-t-[45px] bg-neutral-900 px-10 pb-20  max-md:mx-5 max-md:h-[77vh] md:h-[88vh] md:flex-row lg:h-[88vh]">
          <div className=" flex flex-col items-center text-left md:w-1/2 md:items-start lg:flex-grow">
            <div className="align-center flex">
              <h1 className="title-font text-left font-medium text-white max-md:text-4xl sm:w-1/2 sm:text-5xl md:w-full md:text-5xl lg:text-5xl xl:text-7xl">
                <br className="flex font-medium" />
                Let&apos;s bring your ideas to life.
              </h1>
              <div className="flex items-center justify-center md:hidden md:w-1/2">
                <div className="w-5/6 md:hidden md:w-1/2">
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
            <p className="sm:text-m mb-4 mt-8 leading-relaxed text-white md:text-lg lg:text-xl xl:text-2xl">
              I&apos;m a freelance developer based out of Kansas City,
              passionate about building beautiful, functional websites and
              applications.
            </p>
            <p className="md:text-md mb-8 mt-4 font-extralight leading-relaxed text-white lg:text-lg xl:text-xl">
              I specialize in React, Next.js, and Node.js, but I&apos;m always
              learning new technologies and frameworks.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex rounded border-0 bg-white px-6 py-2 text-lg text-black hover:bg-sky-400 focus:outline-none"
              >
                Reach Out
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex rounded border-0 bg-black px-6 py-2 text-lg text-white hover:bg-neutral-700 focus:outline-none"
              >
                See My Past Work
              </a>
            </div>
          </div>
          <div className="flex w-5/6 justify-center sm:w-1/4 md:w-1/2">
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
