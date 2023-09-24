import React, { useEffect } from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import Siema from "siema";

export default function Testimonials() {
  useEffect(() => {
    const slider = new Siema({
      selector: ".siema-slider",
      duration: 200,
      easing: "ease-out",
      perPage: 1, // Change this if you want more than one item per slide
      startIndex: 0,
      draggable: true,
      threshold: 20,
      loop: true, // This makes it loop around when it reaches the end
    });

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <section id="testimonials" className="flex h-full flex-col justify-center">
      <div className="">
        <div className="h-auto">
          <div className="justify-left ml-[5%] mt-2 flex flex-wrap">
            <UsersIcon className="mr-[2.5%] inline-block w-[10%]" />
            <h1 className="title-font text-3xl font-medium text-white sm:text-4xl">
              Client Testimonials
            </h1>
          </div>

          <div className="justify-left ml-[5%] flex items-center">
            <div className="flex h-[30px] w-[30px] items-center justify-evenly rounded-full border-[1px] border-white">
              <FontAwesomeIcon icon={faCrown} className="color-white text-lg" />
            </div>

            <h2 className="p-4 text-lg font-thin">
              100% Success Rate on Upwork
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex h-full flex-col px-5 text-center">
        <div className="mt-2 flex h-[85%] flex-wrap">
          <div className="siema-slider">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full md:w-1/2">
                <div className="mb-4 flex h-[95%] flex-col justify-between rounded bg-neutral-900 p-4">
                  <div>
                    <TerminalIcon className="block w-8 text-gray-500" />
                  </div>
                  <div>
                    <p className="mb-2 h-auto max-h-[40vh] overflow-scroll text-left text-lg font-light leading-relaxed">
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
        <div>
          <h4 className="mt-2 italic">Swipe for more.</h4>
        </div>
      </div>
    </section>
  );
}
