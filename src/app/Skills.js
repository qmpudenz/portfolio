import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "./data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black h-[91vh]  flex flex-wrap justify-center items-center"
    >
      <div className="container px-5 py-10 mx-auto bg-neutral-900 rounded-[45px]">
        <div className="text-center mb-10">
          <div className="flex flex-wrap justify-center">
            <ChipIcon className="w-10 inline-block mx-3 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Skills &amp; Technologies
            </h1>
          </div>

          <p className="text-2xl leading-relaxed xl:w-[60vw] lg:w-3/4 mx-auto">
            Skilled in leveraging tools like Node and React, my experience spans
            from creating bespoke projects like a Mars Weather app (using
            NASA&apos;s JSON data) to crafting unique designs on Editor X for an
            artist&apos;s portfolio. Whether it&apos;s mainstream platforms or
            personal endeavors, I infuse each project with innovation and
            dedication.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/3 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-sky-300 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
