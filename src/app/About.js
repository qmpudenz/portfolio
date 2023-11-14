import React from "react";
import { Montserrat, Agbalumo, Open_Sans, Merriweather_Sans } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
  weight: "variable",
});

const open_sans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: "variable",
})

const agbalumo = Agbalumo({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

const meriweatherSans = Merriweather_Sans({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function About() {
  return (
    <main className="h-full ">
      <section id="about" className=" flex h-full flex-col items-center">
        <div className=" py-auto align-center container mx-5 flex h-[97.5%] w-auto flex-col items-center justify-center rounded-tl-[45px] rounded-br-[45px] bg-gradient-to-r from-red-500 to-rose-500 px-4 sm:px-10 sm:pb-2 md:mx-10 md:flex-row md:px-2 border-rose-600 border-8">
          <div className=" flex h-[95%] flex-col items-center justify-evenly text-left md:items-center">
            <div className="align-center flex h-1/2 flex-col justify-evenly sm:h-auto sm:flex-row">
      
              <h1 className={`${agbalumo.className} title-font mw-auto flex items-center text-center text-4xl custom:text-5xl custom:mx-2 font-medium text-white sm:w-[60%] sm:max-w-[60%] sm:text-6xl md:w-full md:max-w-full md:text-[5.25rem] lg:text-8xl lg:px-10 xl:text-8xl xl:px-[12%]`}>
                Let&apos;s bring your ideas to life.
              </h1>

              <div className="flex items-center justify-center md:hidden">
                <div className="w-[25vh] flex justify-center md:hidden">
                  <Image
                    className="max-sm:display rounded object-cover object-center md:hidden"
                    alt="hero"
                    src="/avataaars.png"
                    width={200} // Adjust this width based on your design requirements
                    height={200} // Adjust this height based on your design requirements
                  />
                </div>
              </div>
            </div>

            <div className="flex h-1/2 flex-row justify-evenly sm:h-auto items-center">
              <div className="flex flex-col justify-center md:w-[60%] bg-white rounded-tr-3xl h-fit rounded-bl-3xl px-[5%] py-2 custom:py-2 sm:py-5 my-2 xl:py-5 border-orange-500 border-8">
              <p className={`${meriweatherSans.className} clampOne custom:text-lg mb-2 text-black font-light text-md leading-relaxed  sm:mb-3 sm:text-xl md:text-xl lg:text-xl xl:text-2xl`}>
                  Hi! I&apos;m a freelance developer based out of Kansas City,
                  passionate about building beautiful, functional websites and
                  applications.
                </p>
                <p className={`${meriweatherSans.className} clampOne md:text-md custom:text-lg mt-2 sm:mt-3 italic text-md font-light leading-relaxed text-black sm:text-xl md:text-xl lg:text-xl xl:text-2xl`}>
                  I specialize in React, Next.js, and Node.js, but I&apos;m
                  always learning new technologies and frameworks.
                </p>
              </div>

              <div className="hidden md:flex items-center">
                <Image
                  className="max-sm:display rounded object-cover object-center md:w-[250px] xl:w-[275px] h-fit "
                  alt="hero"
                  src="/avataaars.png"
                  width={300} // Adjust this width based on your design requirements
                  height={300} // Adjust this height based on your design requirements
                />
              </div>
            </div>

            <div className={`${meriweatherSans.className} flex w-full flex-col justify-center sm:flex-row`}>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className=" text-md hidden rounded border-0 bg-white px-6 py-2 text-black hover:bg-sky-400 focus:outline-none custom:inline-flex sm:inline-flex  md:text-lg xl:text-2xl"
                >
                  Reach Out
                </a>
                <a
                  href="#projects"
                  className="text-md ml-4 hidden rounded border-0 bg-black px-6 py-2 text-white hover:bg-neutral-700 focus:outline-none custom:inline-flex  sm:inline-flex md:text-lg xl:text-2xl"
                >
                  See My Past Work
                </a>
              </div>
            </div>
          </div>
          <div className="hidden w-5/6 justify-center sm:w-1/3 md:w-[40%]">
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
