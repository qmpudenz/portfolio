import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-wrap justify-center">
          <UsersIcon className="w-10 inline-block" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white pl-3">
            Client Testimonials
          </h1>
        </div>

        <div className="flex justify-center items-center mt-4">
          <div className="border-2 rounded-full w-fit border-white p-2">
            <FontAwesomeIcon icon={faCrown} className="color-white text-2xl" />
          </div>

          <h2 className="p-4 text-3xl font-thin">
            100% Success Rate on Upwork
          </h2>
        </div>

        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4 md:w-1/2 w-full">
              <div className="h-auto bg-neutral-900 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6 text-lg font-light">
                  {testimonial.quote}
                </p>
                <div className="inline-flex items-center">
                  {/* <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  /> */}
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font text-2xl font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-2xl font-extralight uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
