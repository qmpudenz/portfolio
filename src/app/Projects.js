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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black bg-opacity-50 p-2 rounded">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => this.goToSlide(index)}
            className={`block w-4 h-4 rounded-full cursor-pointer ${
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
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 w-2/3 p-4 h-auto rounded-xl text-2xl"
        style={{ maxHeight: "33.3%" }}
        onMouseEnter={() => this.setState({ showInfo: true })}
        onMouseLeave={() => this.setState({ showInfo: false })}
      >
        <h3 className="text-gray-300">{activeProject.subtitle}</h3>
        <h2 className="text-white font-bold text-4xl">{activeProject.title}</h2>
        <p className="text-gray-200 text-l py-4">{activeProject.description}</p>
        <div className="flex space-x-4 mt-4">
          {activeProject.github && (
            <a
              href={activeProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View on Github
            </a>
          )}
          {activeProject.link && (
            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
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
        className="relative flex-column items-center justify-center overflow-hidden"
      >
        <div>
          <div className="flex flex-wrap justify-center">
            <CodeIcon className="mx-4 inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Previous Work
            </h1>
          </div>

          <p className="lg:w-3/4 mx-auto leading-relaxed text-xl font-light pb-8 px-20">
            From refining e-commerce websites on platforms like Shopify and
            Editor X, to developing customized code for clients, I&apos;ve
            delivered diverse projects both on and off Upwork, showcasing
            adaptability and dedication.
          </p>
        </div>
        <div className="relative flex-column items-center justify-center overflow-hidden">
          <div className="siema overflow-hidden">
            <div className="flex justify-center w-full">
              <Image
                className="w-3/4 rounded-xl"
                src="/bignoisebeer.png"
                alt="Slide 1"
                width={1000} // Example width, adjust as needed
                height={500} // Example height, adjust as needed
                onMouseEnter={() => this.setState({ showInfo: true })}
                onMouseLeave={() => this.setState({ showInfo: false })}
              />
            </div>
            <div className="flex justify-center w-full">
              <Image
                className="w-3/4 rounded-xl"
                src="/studioart.png"
                alt="Slide 2"
                width={1000}
                height={500}
                onMouseEnter={() => this.setState({ showInfo: true })}
                onMouseLeave={() => this.setState({ showInfo: false })}
              />
            </div>
            <div className="flex justify-center w-full">
              <Image
                className="w-3/4 rounded-xl"
                src="/candlestick.jpeg"
                alt="Slide 3"
                width={1000}
                height={500}
                onMouseEnter={() => this.setState({ showInfo: true })}
                onMouseLeave={() => this.setState({ showInfo: false })}
              />
            </div>
            <div className="flex justify-center w-full">
              <Image
                className="w-3/4 rounded-xl"
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
            className={`absolute top-1/2 transform -translate-y-1/2 left-[5%] text-8xl ${
              isAtStart
                ? "text-gray-400 cursor-not-allowed"
                : "text-blue-500 hover:text-blue-600 active:text-blue-700"
            }`}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={isAtEnd ? null : this.next.bind(this)}
            className={`absolute top-1/2 transform -translate-y-1/2 right-[5%] text-8xl ${
              isAtEnd
                ? "text-gray-400 cursor-not-allowed"
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
