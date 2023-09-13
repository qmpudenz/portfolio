"use client";
import React from "react";
import Siema from "siema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "./data.js";
import Image from "next/image";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  componentDidMount() {
    this.siema = new Siema({
      selector: ".siema",
      duration: 200,
      easing: "ease-out",
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: false,
      rtl: false,
      onInit: () => {},
      onChange: () => {
        this.setState({ activeSlide: this.siema.currentSlide });
      },
    });
    this.forceUpdate();
  }

  prev() {
    if (this.siema) {
      this.siema.prev();
    }
  }

  next() {
    if (this.siema) {
      this.siema.next();
    }
  }

  goToSlide(index) {
    if (this.siema) {
      this.siema.goTo(index);
    }
  }

  renderDots() {
    const slides = this.siema ? this.siema.innerElements : [];
    return (
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 transform space-x-2 rounded bg-black bg-opacity-50 p-2 sm:bottom-10">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => this.goToSlide(index)}
            className={`block h-4 w-4 cursor-pointer rounded-full ${
              this.state.activeSlide === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    );
  }

  renderInfo() {
    const activeProject = projects[this.state.activeSlide];
    return (
      <div
        className="absolute bottom-[6rem] left-1/2 h-auto w-[85vw] -translate-x-1/2 transform rounded-xl bg-black bg-opacity-80 p-4 text-xl sm:w-[60vw]"
        style={{ maxHeight: "50%" }}
        onMouseEnter={() => this.setState({ showInfo: true })}
        onMouseLeave={() => this.setState({ showInfo: false })}
      >
        <h3 className="text-gray-300">{activeProject.subtitle}</h3>
        <h2 className="text-2xl font-bold text-white">{activeProject.title}</h2>
        <p className="py-4 text-sm text-gray-200 sm:flex">
          {activeProject.description}
        </p>
        <div className="mt-4 flex space-x-4 text-sm sm:text-lg">
          {activeProject.github && (
            <a
              href={activeProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              View on Github
            </a>
          )}
          {activeProject.link && (
            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            >
              View Live
            </a>
          )}
        </div>
      </div>
    );
  }

  render() {
    const slidesCount = this.siema ? this.siema.innerElements.length : 0;
    const isAtStart = this.state.activeSlide === 0;
    const isAtEnd = this.state.activeSlide === slidesCount - 1;
    return (
      <div
        id="portfolio"
        className="flex-column relative h-full items-center justify-center overflow-hidden"
      >
        <div>
          <div className="flex flex-wrap justify-center">
            <CodeIcon className="mb-4 mr-4 inline-block w-10" />
            <h1 className="title-font mb-4 text-4xl font-medium text-white sm:text-4xl">
              Previous Work
            </h1>
          </div>

          <p className="mx-auto px-5 pb-8 text-sm font-light leading-relaxed sm:text-xl md:px-20 lg:w-3/4">
            From refining e-commerce websites on platforms like Shopify and
            Editor X, to developing customized code for clients, I&apos;ve
            delivered diverse projects both on and off Upwork, showcasing
            adaptability and dedication.
          </p>
        </div>
        <div className="flex-column relative items-center justify-center overflow-hidden">
          <div className="siema overflow-hidden">
            <div className="flex w-full justify-center">
              <Image
                className="w-[90%] rounded-xl sm:w-[65%]"
                src="/bignoisebeer.png"
                alt="Slide 1"
                width={1000} // Example width, adjust as needed
                height={500} // Example height, adjust as needed
                onMouseEnter={() => this.setState({ showInfo: true })}
                onMouseLeave={() => this.setState({ showInfo: false })}
              />
            </div>
            <div className="flex w-full justify-center">
              <Image
                className="w-[90%] rounded-xl sm:w-[65%]"
                src="/studioart.png"
                alt="Slide 2"
                width={1000}
                height={500}
                onMouseEnter={() => this.setState({ showInfo: true })}
                onMouseLeave={() => this.setState({ showInfo: false })}
              />
            </div>
            <div className="flex w-full justify-center">
              <Image
                className="w-[90%] rounded-xl sm:w-[65%]"
                src="/candlestick.jpeg"
                alt="Slide 3"
                width={1000}
                height={500}
                onMouseEnter={() => this.setState({ showInfo: true })}
                onMouseLeave={() => this.setState({ showInfo: false })}
              />
            </div>
            <div className="flex w-full justify-center">
              <Image
                className="w-[90%] rounded-xl sm:w-[65%]"
                src="/marsweather.png"
                alt="Slide 4"
                width={1000}
                height={500}
                onMouseEnter={() => this.setState({ showInfo: true })}
                onMouseLeave={() => this.setState({ showInfo: false })}
              />
            </div>
            {/* Add as many slides as you need */}
          </div>
          <button
            onClick={isAtStart ? null : this.prev.bind(this)}
            className={`absolute left-[8%] top-1/2 -translate-y-1/2 transform text-2xl md:text-8xl ${
              isAtStart
                ? "cursor-not-allowed text-gray-400"
                : "text-blue-500 hover:text-blue-600 active:text-blue-700"
            }`}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={isAtEnd ? null : this.next.bind(this)}
            className={`absolute right-[8%] top-1/2 -translate-y-1/2 transform text-2xl md:text-8xl ${
              isAtEnd
                ? "cursor-not-allowed text-gray-400"
                : "text-blue-500 hover:text-blue-600 active:text-blue-700"
            }`}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        {this.state.showInfo && this.renderInfo()}
        {this.renderDots()}
      </div>
    );
  }
}

export default Projects;
