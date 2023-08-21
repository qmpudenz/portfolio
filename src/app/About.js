import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
});

export default function About() {
  return (
    <main className={montserrat.className}>
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-neutral-900  rounded-t-[45px] h-[91vh]">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-7xl font-medium text-white">
              <br className="hidden lg:inline-block font-medium" />
              Let's bring your ideas to life.
            </h1>
            <p className="mb-4 leading-relaxed text-2xl mt-8 text-white">
              I'm a freelance developer based out of Kansas City, passionate
              about building beautiful, functional websites and applications.
            </p>
            <p className="mb-8 leading-relaxed text-xl mt-4 font-extralight text-white">
              I specialize in React, Next.js, and Node.js, but I'm always
              learning new technologies and frameworks.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg"
              >
                Reach Out
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-neutral-700 rounded text-lg"
              >
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover w-5/6 object-center rounded"
              alt="hero"
              src="./avataaars.png"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
