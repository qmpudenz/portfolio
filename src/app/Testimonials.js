import React, { useEffect, useState } from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import Siema from "siema";

export default function Testimonials() {
  // State to store the siema instance
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    // Function to update perPage based on screen size
    const updatePerPage = () => {
      const isMdScreen = window.matchMedia("(min-width: 768px)").matches;
      return isMdScreen ? 2 : 1; // 2 items per page for md screens and above, 1 for smaller screens
    };

    const siemaOptions = {
      selector: ".siema-slider",
      duration: 200,
      easing: "ease-out",
      perPage: updatePerPage(),
      startIndex: 0,
      draggable: true,
      threshold: 20,
      loop: true,
    };

    // Initialize Siema with options
    const siemaInstance = new Siema(siemaOptions);
    setSlider(siemaInstance);

    // Event listener for resizing
    const handleResize = () => {
      const newPerPage = updatePerPage();
      if (siemaInstance.perPage !== newPerPage) {
        siemaInstance.config.perPage = newPerPage;
        siemaInstance.goTo(0); // Optional: Reset to first slide on resize
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      siemaInstance.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Make sure to add a cleanup phase for the state if you're going to remove the component from DOM
  useEffect(() => {
    return () => {
      if (slider) {
        slider.destroy();
      }
    };
  }, [slider]);

  return (
    <section
      id="testimonials"
      className="flex h-full flex-col justify-center bg-white"
    >
      <div className="">
        <div className="h-auto">
          <div className="justify-left ml-[5%] mt-2 flex flex-wrap sm:ml-0 sm:items-center sm:justify-center">
            <UsersIcon className="mr-3 inline-block w-[4%] text-black" />
            <h1 className="title-font align-center flex text-3xl font-medium text-black sm:text-4xl">
              Client Testimonials
            </h1>
          </div>

          <div className="justify-left ml-[5%] flex items-center text-black sm:ml-0 sm:justify-center">
            <div className="flex h-[30px] w-[30px] items-center justify-evenly rounded-full border-[1px] border-black">
              <FontAwesomeIcon icon={faCrown} className="text-lg " />
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
              <div key={testimonial.id} className="w-full md:w-5/6">
                <div className="mb-4 flex h-[95%] flex-col justify-between rounded bg-gradient-to-r from-rose-500 to-red-500 p-4">
                  <div>
                    <TerminalIcon className="block w-8 text-white" />
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
                        <span className="text-xl font-extralight uppercase text-white">
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
          <h4 className="mt-auto italic text-black">Swipe for more.</h4>
        </div>
      </div>
    </section>
  );
}
