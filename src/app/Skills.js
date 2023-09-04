import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "./data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex h-[91vh]  flex-wrap items-center justify-center bg-black max-sm:items-baseline sm:items-baseline md:items-center"
    >
      <div className="container mx-auto rounded-[45px] bg-neutral-900 px-5 py-10">
        <div className="mb-10 text-center">
          <div className="flex flex-wrap justify-center">
            <ChipIcon className="mx-3 mb-4 inline-block w-10" />
            <h1 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">
              Skills &amp; Technologies
            </h1>
          </div>

          <p className="sm:text-md mx-auto font-light leading-relaxed lg:w-3/4 xl:w-[60vw] xl:text-2xl">
            Skilled in leveraging tools like Node and React, my experience spans
            from creating bespoke projects like a Mars Weather app (using
            NASA&apos;s JSON data) to crafting unique designs on Editor X for an
            artist&apos;s portfolio. Whether it&apos;s mainstream platforms or
            personal endeavors, I infuse each project with innovation and
            dedication.
          </p>
        </div>
        <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
          {skills.map((skill) => (
            <div key={skill} className="w-1/3 p-2 max-sm:w-1/3">
              <div className="flex h-full items-center rounded bg-gray-800 p-4">
                <BadgeCheckIcon className="mr-4 h-6 w-6 flex-shrink-0 text-sky-300" />
                <span className="title-font font-medium text-white max-sm:text-sm">
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
