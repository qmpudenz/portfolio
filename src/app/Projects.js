import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "./data";

export default function Projects() {
  return (
    <section id="projects" className="text-white bg-black body-font h-[91vh]">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 bg-black">
        <div className="flex flex-col w-full mb-10">
          <div className="flex flex-wrap justify-center">
            <CodeIcon className="mx-4 inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Previous Work
            </h1>
          </div>

          <p className="lg:w-3/4 mx-auto leading-relaxed text-base text-xl font-light">
            From refining e-commerce websites on platforms like Shopify and
            Editor X, to developing customized code for clients, I've delivered
            diverse projects both on and off Upwork, showcasing adaptability and
            dedication.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
