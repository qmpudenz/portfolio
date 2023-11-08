
// Projects.js
import React, { useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CodeIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { projects } from "./data.js";
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Projects() {
  const [activeSlide, setActiveSlide] = useState(0);
  const activeProject = projects[activeSlide]; // Get the active project based on the activeSlide state

  const [showInfo, setShowInfo] = useState(false);


    return (
        <div id="portfolio" className="relative flex h-full flex-col items-center justify-center overflow-hidden">
            {/* Project Title and Description */}
            <div className="h-fit">
              <div className="justify-left ml-[5%] mt-2 flex flex-wrap sm:ml-0 sm:items-center sm:justify-center custom:ml-0 custom:items-center custom:justify-center">
                <CodeIcon className="mr-3 inline-block w-[40px] text-black sm:w-[50px] lg:w-[60px]" />
                <h1 className="title-font text-3xl font-medium text-black sm:text-4xl">
                  Previous Work
                </h1>
              </div>

              <p className="mx-auto px-5 pb-2 text-sm font-light leading-relaxed text-black custom:text-lg sm:text-xl md:px-10 lg:w-5/6 md:w-11/12">
                From refining e-commerce websites on platforms like Shopify and
                Editor X, to developing customized code for clients, I&apos;ve
                delivered diverse projects both on and off Upwork, showcasing
                adaptability and dedication.
              </p>
            </div>

            {/* Swiper */}
            <Swiper
                // Swiper parameters
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    // Add more breakpoints if needed
                }}
                className="w-full px-[10%] h-full"
                >
                  {projects.map((project, index) => (
                    <SwiperSlide key={index} className="flex flex-col items-center justify-center">
                      {/* Image Container */}
                      <div className="flex-0 justify-center h-auto w-full md:w-[615px]">
                        <Image
                          className="rounded-xl"
                          src={project.image}
                          alt={project.title}
                          width={500} // Adjust according to your design
                          height={300} // Adjust according to your design
                          layout="responsive" // This will make the image responsive
                        />
                      </div>
                      {/* Project Info */}
                      <div className="flex-0 p-4 h-fit md:mx-10 md:w-[615px]">
                        <h3 className="text-lg text-gray-600">{project.subtitle}</h3>
                        <h2 className="text-2xl font-bold text-black">{project.title}</h2>
                        <p className="mt-2 text-sm md:text-md text-gray-800">
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap space-x-4">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                            >
                              View on Github
                            </a>
                          )}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                            >
                              View Live
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
