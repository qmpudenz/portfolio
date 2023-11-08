"use client";

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useLayoutEffect, useRef, useState } from "react";
import Siema from "siema";
import { skills } from "./data";

export default function Skills() {
  const categoryColors = {
    web: "bg-green-500",
    design: "bg-orange-500",
    tools: "bg-blue-500",
    backend: "bg-red-500",
    // ... add other categories and colors as needed
  };

  const siemaRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0); // State to track current slide

  function nextSlide() {
    siemaRef.current.next();
  }

  function prevSlide() {
    siemaRef.current.prev();
  }

  useLayoutEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      let perPage;
      if (screenWidth < 640) {
        perPage = 1;
      } else if (screenWidth >= 640 && screenWidth < 768) {
        perPage = 2;
      } else if (screenWidth >= 768) {
        perPage = 4;
      }

      if (siemaRef.current) {
        siemaRef.current.destroy(true);
      }

      siemaRef.current = new Siema({
        selector: ".skills-slider",
        perPage: perPage,
        loop: false,
        onChange: function () {
          setCurrentSlide(this.currentSlide);
        },
      });
    }

    // Initial setup
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (siemaRef.current) {
        siemaRef.current.destroy(true);
      }
    };
  }, [activeFilter, skills]);

  // Calculate the number of dots based on the filtered skills list
  const filteredSkillsCount = skills.filter(
    (skill) => activeFilter === "all" || skill.category === activeFilter,
  ).length;

  const filters = ["all", "web", "design", "tools", "backend"]; // example categories

  // Calculate the number of dots
  const dotsCount = Math.ceil(filteredSkillsCount / 3);

  return (
    <section
      id="skills"
      className="max-sm:items-baseline flex h-full flex-wrap items-center justify-center bg-white sm:items-baseline md:items-center"
    >
      <div className="container mx-auto flex h-full flex-col justify-between rounded-[45px] bg-transparent px-5 pb-5">
        <div className="mb-10 flex flex-col justify-center text-center">
          <div className="justify-left flex flex-wrap sm:ml-0 sm:items-center sm:justify-center custom:ml-0 custom:items-center custom:justify-center">
            <ChipIcon className="mr-3 inline-block w-[40px] text-black sm:w-[50px] lg:w-[60px]" />
            <h1 className="title-font hidden text-3xl font-medium text-black sm:flex sm:text-4xl">
              Skills &amp; Technologies
            </h1>
            <h1 className="display title-font text-3xl font-medium text-black sm:hidden sm:text-4xl">
              Skills &amp; Tech
            </h1>
          </div>

          <p className="text-md mx-auto py-5 text-left indent-0 font-light leading-relaxed text-black sm:indent-8 sm:text-xl md:px-5 lg:text-2xl custom:indent-5 custom:text-lg">
            Skilled in leveraging tools like Node and React, my experience spans
            from creating bespoke projects like a Mars Weather app (using
            NASA&apos;s JSON data) to crafting unique designs on Editor X for an
            artist&apos;s portfolio. Whether it&apos;s mainstream platforms or
            personal endeavors, I infuse each project with innovation and
            dedication.
          </p>
        </div>
        <div className="filters relative left-1/4 flex justify-evenly sm:w-1/2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentSlide(0); // Reset the slide index to 0
                siemaRef.current.goTo(0); // Ensure Siema also begins at the start
              }}
              className={`filter-button transform rounded-md px-3 py-2 transition-transform hover:-translate-y-0.5 ${
                activeFilter === filter ? "border-b-2 border-blue-800" : ""
              } ${categoryColors[filter] || "bg-gray-600"} hover:${
                categoryColors[filter]
                  ? categoryColors[filter].replace("bg-", "bg-darken-")
                  : "bg-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className=" grid grid-rows-2">
          <div
            className="skills-slider mt-2 grid grid-cols-1 flex-wrap gap-4 md:grid-cols-2 lg:grid-cols-4"
            key={activeFilter}
          >
            {skills
              .filter(
                (skill) =>
                  activeFilter === "all" || skill.category === activeFilter,
              )
              .map((skill) => (
                <div key={skill.name} className="p-2">
                  <div
                    className={`flex h-full flex-col items-center rounded p-4 ${
                      categoryColors[skill.category] || "bg-gray-800"
                    }`}
                  >
                    <BadgeCheckIcon className="h-6 w-6 flex-shrink-0 text-white" />
                    <span className="title-font font-sm sm:font-md max-sm:text-sm text-white">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="t-[4vh] relative flex items-center justify-between">
          <button
            className="left-0 z-10 w-[40px] rounded-full bg-gray-800 p-2 hover:bg-gray-700"
            onClick={prevSlide}
          >
            &#8592; {/* Left Arrow Unicode */}
          </button>
          <button
            className="right-0 z-10 w-[40px] rounded-full bg-gray-800 p-2 hover:bg-gray-700"
            onClick={nextSlide}
          >
            &#8594; {/* Right Arrow Unicode */}
          </button>
        </div>

        {/* Dots */}
        <div className="mt-4 flex justify-center space-x-2">
          {Array.from({ length: filteredSkillsCount }).map((_, index) => {
            let bgColor = "bg-gray-400"; // default color
            if (index === currentSlide) {
              bgColor = "bg-blue-600"; // current dot color
            } else if (
              index === currentSlide + 1 ||
              index === currentSlide + 2
            ) {
              bgColor = "bg-blue-400"; // next two dots color
            }

            return (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${bgColor}`}
              ></span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
