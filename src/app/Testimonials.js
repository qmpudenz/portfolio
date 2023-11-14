// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Merriweather_Sans } from "next/font/google";

const merriweatherSans = Merriweather_Sans({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
  style: "italic",
});

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { testimonials } from "./data";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

import './globals.css';

export default function Testimonials() {
    return (
        <section id="testimonials" className="flex h-full flex-col items-center justify-center ">
         <div className="">
    <div className="h-auto">
    <div className="justify-left  mt-2 flex flex-wrap sm:ml-0 sm:items-center sm:justify-center custom:ml-0 custom:items-center custom:justify-center">
        <UsersIcon className="mr-3 inline-block w-[40px] text-xl text-black sm:w-[50px] lg:w-[60px]" />
        <h1 className={`${merriweatherSans.className} text-3xl text-black sm:text-5xl`}>
          Client Testimonials
        </h1>
      </div>
    
      <div className="justify-left  flex items-center text-black sm:ml-0 sm:items-center sm:justify-center custom:ml-0 custom:items-center custom:justify-center">
        <div className="flex h-[30px] w-[30px] items-center justify-evenly rounded-full border-[1px] border-black">
          <FontAwesomeIcon icon={faCrown} className="text-lg " />
        </div>
    
        <h2 className="p-4 text-lg sm:text-xl md:text-2xl font-thin">
          100% Success Rate on Upwork
        </h2>
      </div>
    </div>
    </div>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        1000: {
          slidesPerView: 2,
        },
      }}
      className='h-full w-full px-[10%]'
    >
             {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}><div className="w-full">
                <div className="rounded bg-gradient-to-r from-rose-500 to-red-500 p-4">
                  <div>
                      <TerminalIcon className="block w-8 text-white" />
                  </div>
                  <div>
                    <p className="mb-2 h-auto max-h-[50vh] overflow-scroll text-left text-lg font-light leading-relaxed">
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
        </SwiperSlide>
        ))}
      ...
    </Swiper>
    </section>
  );
};