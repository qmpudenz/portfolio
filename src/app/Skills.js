"use client";

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useLayoutEffect, useRef, useState } from "react";
import Siema from "siema";
import { skills } from "./data";

export default function Skills() {
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
    const filteredSkills = skills.filter(
      (skill) => activeFilter === "all" || skill.category === activeFilter,
    );

    const itemsPerPage = Math.min(filteredSkills.length, 3);

    if (siemaRef.current) {
      siemaRef.current.destroy(true);
    }

    siemaRef.current = new Siema({
      selector: ".skills-slider",
      perPage: itemsPerPage,
      loop: false,
      onChange: function () {
        // Use Siema's onChange callback to update the current slide
        setCurrentSlide(this.currentSlide);
      },
    });

    return () => {
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
      className="flex h-full flex-wrap items-center justify-center bg-black max-sm:items-baseline sm:items-baseline md:items-center"
    >
      <div className="container mx-auto flex h-full flex-col justify-evenly rounded-[45px] bg-transparent px-5 py-5 sm:bg-neutral-900">
        <div className="mb-10 flex flex-col justify-center text-center">
          <div className="flex flex-wrap justify-center">
            <ChipIcon className="mb-4 mr-3 inline-block w-10" />
            <h1 className="title-font mb-4 hidden text-3xl font-medium text-white sm:flex sm:text-4xl">
              Skills &amp; Technologies
            </h1>
            <h1 className="display title-font mb-4 text-4xl font-medium text-white sm:hidden sm:text-4xl">
              Skills &amp; Tech
            </h1>
          </div>

          <p className="sm:text-md mx-auto text-left indent-1 text-[2.25vh] text-sm font-light leading-relaxed lg:w-3/4 xl:w-[60vw] xl:text-2xl">
            Skilled in leveraging tools like Node and React, my experience spans
            from creating bespoke projects like a Mars Weather app (using
            NASA&apos;s JSON data) to crafting unique designs on Editor X for an
            artist&apos;s portfolio. Whether it&apos;s mainstream platforms or
            personal endeavors, I infuse each project with innovation and
            dedication.
          </p>
        </div>
        <div className="filters flex justify-evenly">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentSlide(0); // Reset the slide index to 0
                siemaRef.current.goTo(0); // Ensure Siema also begins at the start
              }}
              className={`filter-button transform rounded-md bg-gray-600 px-3 py-2 transition-transform hover:-translate-y-0.5 hover:bg-gray-700 ${
                activeFilter === filter
                  ? "border-b-2 border-blue-800 bg-blue-600"
                  : ""
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="skills-slider mt-2 flex-wrap" key={activeFilter}>
          {skills
            .filter(
              (skill) =>
                activeFilter === "all" || skill.category === activeFilter,
            )
            .map((skill) => (
              <div key={skill.name} className="p-2">
                <div className="flex h-full flex-col items-center rounded bg-gray-800 p-4">
                  <BadgeCheckIcon className="h-6 w-6 flex-shrink-0 text-sky-300" />
                  <span className="title-font font-sm sm:font-md text-white max-sm:text-sm">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
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
