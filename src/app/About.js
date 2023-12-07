import React, { useEffect } from "react";

import {
  Montserrat,
  Agbalumo,
  Open_Sans,
  Merriweather_Sans,
} from "next/font/google";
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
});

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
  useEffect(() => {
    const handleMouseMove = (event) => {
      const eyes = document.querySelectorAll(".eye");

      eyes.forEach((eye) => {
        // Calculate the bounds of the eye
        const rect = eye.getBoundingClientRect();

        // Get the center position of the eye
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        // Get the mouse position
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Calculate the angle and distance from the eye to the mouse
        const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
        const distance = Math.min(
          eye.offsetWidth / 4,
          Math.hypot(mouseX - eyeCenterX, mouseY - eyeCenterY),
        );

        // Calculate the new position for the pupil
        const pupilX = distance * Math.cos(angle);
        const pupilY = distance * Math.sin(angle);

        // Move the pupil
        const pupil = eye.querySelector(".pupil");
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      });
    };

    // Attach the event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Return a cleanup function to remove the event listener when the component unmounts
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="h-full ">
      <section id="about" className=" flex h-full flex-col items-center">
        <div className=" py-auto align-center container mx-5 flex h-[97.5%] w-auto flex-col items-center justify-center rounded-br-[45px] rounded-tl-[45px] border-8 border-rose-600 bg-gradient-to-r from-red-500 to-rose-500 px-4 sm:px-10 sm:pb-2 md:mx-10 md:flex-row md:px-2">
          <div className=" flex h-[95%] flex-col items-center justify-evenly text-left md:items-center">
            <div className="align-center flex h-1/2 flex-col justify-evenly sm:h-auto sm:flex-row">
              <h1
                className={`${agbalumo.className} title-font mw-auto flex items-center text-center text-4xl font-medium text-white sm:w-[60%] sm:max-w-[60%] sm:text-6xl md:w-full md:max-w-full md:text-[5.25rem] lg:px-10 lg:text-8xl xl:px-[12%] xl:text-8xl custom:mx-2 custom:text-5xl`}
              >
                Let&apos;s bring your ideas to life.
              </h1>

              <div className="flex items-center justify-center md:hidden">
                <div
                  className="image-container flex justify-center"
                  style={{ position: "relative" }}
                >
                  <div
                    className="eyes-container"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "100px",
                      height: "100px",
                    }}
                  >
                    <div
                      className="eye"
                      style={{ position: "absolute", left: "20%", top: "20%" }}
                    >
                      <div className="pupil" id="leftPupil"></div>
                    </div>
                    <div
                      className="eye"
                      style={{ position: "absolute", right: "20%", top: "20%" }}
                    >
                      <div className="pupil" id="rightPupil"></div>
                    </div>
                  </div>
                  <div className="flex w-[25vh] justify-center md:hidden">
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
            </div>

            <div className="flex h-1/2 flex-row items-center justify-evenly sm:h-auto">
              <div className="my-2 flex h-fit flex-col justify-center rounded-bl-3xl rounded-tr-3xl border-8 border-orange-500 bg-white px-[5%] py-2 sm:py-5 md:w-[60%] xl:py-5 custom:py-2">
                <p
                  className={`${meriweatherSans.className} clampOne text-md mb-2 font-light leading-relaxed text-black sm:mb-3  sm:text-xl md:text-xl lg:text-xl xl:text-2xl custom:text-lg`}
                >
                  Hi! I&apos;m a freelance developer based out of Kansas City,
                  passionate about building beautiful, functional websites and
                  applications.
                </p>
                <p
                  className={`${meriweatherSans.className} clampOne md:text-md text-md mt-2 font-light italic leading-relaxed text-black sm:mt-3 sm:text-xl md:text-xl lg:text-xl xl:text-2xl custom:text-lg`}
                >
                  I specialize in React, Next.js, and Node.js, but I&apos;m
                  always learning new technologies and frameworks.
                </p>
              </div>

              <div className="hidden items-center md:flex">
                <div
                  className="image-container"
                  style={{ position: "relative" }}
                >
                  <div
                    className="eyes-container"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "125px",
                      height: "125px",
                    }}
                  >
                    <div
                      className="eye"
                      style={{ position: "absolute", left: "20%", top: "20%" }}
                    >
                      <div className="pupil" id="leftPupil"></div>
                    </div>
                    <div
                      className="eye"
                      style={{ position: "absolute", right: "20%", top: "20%" }}
                    >
                      <div className="pupil" id="rightPupil"></div>
                    </div>
                  </div>
                  <Image
                    className="rounded object-cover object-center"
                    alt="hero"
                    src="/avataaars.png"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>

            <div
              className={`${meriweatherSans.className} flex w-full flex-col justify-center sm:flex-row`}
            >
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className=" text-md hidden rounded border-0 bg-white px-6 py-2 text-black hover:bg-sky-400 focus:outline-none sm:inline-flex md:text-lg  xl:text-2xl custom:inline-flex"
                >
                  Reach Out
                </a>
                <a
                  href="#projects"
                  className="text-md ml-4 hidden rounded border-0 bg-black px-6 py-2 text-white hover:bg-neutral-700 focus:outline-none sm:inline-flex  md:text-lg xl:text-2xl custom:inline-flex"
                >
                  See My Past Work
                </a>
              </div>
            </div>
          </div>
          <div className="hidden w-5/6 justify-center sm:w-1/3 md:w-[40%]">
            <div
              className="eyes-container"
              style={{ position: "relative", width: "120px", height: "115px" }}
            >
              <div className="eye">
                <div className="pupil" id="leftPupil"></div>
              </div>
              <div className="eye">
                <div className="pupil" id="rightPupil"></div>
              </div>
            </div>

            <Image
              className="xl:display max-md:hidden rounded object-cover object-center"
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
