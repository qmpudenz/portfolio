import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  return (
    <section id="testimonials" className="flex h-full justify-center">
      <div className="container mx-auto flex h-full flex-col justify-center px-5 text-center">
        <div className="h-[55%]">
          <div className="flex flex-wrap justify-center">
            <UsersIcon className="inline-block w-10" />
            <h1 className="title-font pl-3 text-3xl font-medium text-white sm:text-4xl">
              Client Testimonials
            </h1>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex h-[30px] w-[30px] items-center justify-evenly rounded-full border-[1px] border-white">
              <FontAwesomeIcon icon={faCrown} className="color-white text-lg" />
            </div>

            <h2 className="p-4 text-lg font-thin">
              100% Success Rate on Upwork
            </h2>
          </div>
        </div>

        <div className="mt-2 flex h-[85%] flex-wrap">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full md:w-1/2">
              <div className="mb-4 flex h-[95%] flex-col justify-between rounded bg-neutral-900 p-4">
                <div>
                  <TerminalIcon className="block w-8 text-gray-500" />
                </div>
                <div>
                  <p className="h-[15vh] overflow-scroll text-lg font-light leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>

                <div>
                  <div className="inline-flex items-center">
                    <span className="flex flex-grow flex-col pl-4">
                      <span className="title-font text-2xl font-medium text-white">
                        {testimonial.name}
                      </span>
                      <span className="text-xl font-extralight uppercase text-gray-500">
                        {testimonial.company}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
