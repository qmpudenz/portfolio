// Projects.js
import React, { useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CodeIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { projects } from "./data.js";
import Image from "next/image";
import { Merriweather_Sans } from "next/font/google";

const merriweatherSans = Merriweather_Sans({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
  style: ["italic"],
});

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/grid"; // Import Swiper grid styles

export default function Projects() {
  const [activeSlide, setActiveSlide] = useState(0);
  const activeProject = projects[activeSlide]; // Get the active project based on the activeSlide state

  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      id="portfolio"
      className="relative flex h-full flex-col items-center justify-center overflow-hidden"
    >
      {/* Project Title and Description */}
      <div className="h-fit">
        <div className="justify-left flex flex-wrap sm:ml-0 sm:items-center sm:justify-center custom:ml-0 custom:items-center custom:justify-center">
          <CodeIcon className="mr-3 inline-block w-[40px] text-black sm:w-[50px] lg:w-[60px]" />
          <div
            className={`${merriweatherSans.className} text-3xl text-black sm:text-5xl`}
          >
            <h1 className="title-font text-black">Previous Work</h1>
          </div>
        </div>

        <p className="mx-auto hidden px-5 pb-2 text-sm font-light leading-relaxed text-black sm:text-xl md:w-11/12 md:px-10 lg:w-5/6 custom:text-lg">
          From refining e-commerce websites on platforms like Shopify and Editor
          X, to developing customized code for clients, I&apos;ve delivered
          diverse projects both on and off Upwork, showcasing adaptability and
          dedication.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
        spaceBetween={50}
        slidesPerView={1}
        grid={{
          rows: 2, // Default layout with 1 row
        }}
        navigation
        scrollbar={{ draggable: true }}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        breakpoints={{
          350: {
            slidesPerView: 1,
            grid: {
              rows: 2, // On smaller screens, display 2 rows
            },
          },
          640: {
            slidesPerView: 1,
            grid: {
              rows: 1, // Revert to single row for larger screens
            },
          },
          // Add more breakpoints if needed
        }}
        className="projects-slider h-full w-full px-[10%]"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className=" flex h-fit flex-col items-center justify-center rounded-xl shadow-[0_35px_15px_-25px_rgba(0,0,0,0.7)]"
          >
            {/* Image Container */}
            <div className="flex-0 h-auto w-full justify-center ">
              <Image
                className="rounded-t-xl"
                src={project.image}
                alt={project.title}
                width={500} // Adjust according to your design
                height={300} // Adjust according to your design
                layout="responsive" // This will make the image responsive
              />
            </div>
            {/* Project Info */}
            <div className="flex-0 flex h-fit w-full flex-row justify-between rounded-b-xl bg-black/90 p-4 md:mx-10">
              <div>
                <h3 className="text-lg text-white">{project.subtitle}</h3>
                <h2 className="text-2xl font-bold text-white">
                  {project.title}
                </h2>
              </div>

              <p className=" hidden text-sm text-gray-800">
                {project.description}
              </p>
              <p className="hidden justify-center sm:hidden custom:hidden">
                Click here to learn more
              </p>
              <div className="flex items-center space-x-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded bg-green-600 px-2 py-1 font-bold text-black hover:bg-green-500 hover:shadow-[0px_0px_20px_-5px_#48BB78]"
                  >
                    LIVE
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full hover:bg-[#3182CE] hover:shadow-[0px_0px_20px_-5px_#4299E1]"
                  >
                    <Image
                      className="max-sm:display rounded object-cover object-center"
                      alt="hero"
                      src="/ghlogo.png"
                      width={40} // Adjust this width based on your design requirements
                      height={40} // Adjust this height based on your design requirements
                    />
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
