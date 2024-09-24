import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import Image from "next/image"; // If you're using Next.js

gsap.registerPlugin(Flip);

export default function Shopify() {
  const swiperRef = useRef(null);
  const slidesRef = useRef([]);
  const tl = useRef();

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }

    // Initialize GSAP animation on mount
    tl.current = gsap.timeline();
  }, []);

  const handleSlideChange = () => {
    const currentIndex = swiperRef.current.swiper.activeIndex;

    // Use GSAP Flip for slide content animation
    const state = Flip.getState(slidesRef.current[currentIndex]);

    Flip.from(state, {
      duration: 0.6,
      ease: "power1.inOut",
      absolute: true,
      stagger: 0.1,
    });
  };

  return (
    <section
      id="shopify"
      className="bg-gray-100"
      style={{ minHeight: "calc(100vh - 80px)" }} // Adjust '80px' to your header's height
    >
      <div className="container mx-auto px-4 h-full flex flex-col">
        <h2 className="text-4xl font-extrabold text-center mb-10 mt-10 text-indigo-600">
          Shopify Theme Development Packages
        </h2>
        <div className="flex-grow">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="h-full"
            onSlideChange={handleSlideChange}
          >
            {/* Basic Store Setup Slide */}
            <SwiperSlide>
              <div
                className="p-6 bg-white rounded-lg shadow-lg h-full flex flex-col justify-center items-center"
                ref={(el) => (slidesRef.current[0] = el)}
              >
                {/* Replace with your image */}
                <Image
                  src="/studioart211.png"
                  alt="Basic Store Setup"
                  width={200}
                  height={200}
                  className="mb-6"
                />
                <h3 className="text-3xl font-semibold mb-4 text-indigo-700">
                  Basic Store Setup
                </h3>
                <p className="text-gray-700 mb-4 text-center max-w-md">
                  Ideal for businesses starting their online journey, this package gets your Shopify store up and running with essential features.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 max-w-md">
                  <li>Product setup (up to 50 products)</li>
                  <li>Creation of collections and categories</li>
                  <li>Installation and configuration of a free Shopify theme</li>
                  <li>Setup of payment gateways (e.g., PayPal, Stripe)</li>
                  <li>Basic shipping settings configuration</li>
                  <li>Initial SEO setup (meta titles, descriptions)</li>
                  <li>Email notification setup</li>
                </ul>
                <a
                  href="#contact"
                  className="mt-4 inline-block px-8 py-3 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition duration-300"
                >
                  Contact Us
                </a>
              </div>
            </SwiperSlide>

            {/* Customized Theme Setup Slide */}
            <SwiperSlide>
              <div
                className="p-6 bg-white rounded-lg shadow-lg h-full flex flex-col justify-center items-center"
                ref={(el) => (slidesRef.current[1] = el)}
              >
                {/* Replace with your image */}
                <Image
                  src="/studioart211.png"
                  alt="Customized Theme Setup"
                  width={200}
                  height={200}
                  className="mb-6"
                />
                <h3 className="text-3xl font-semibold mb-4 text-indigo-700">
                  Customized Theme Setup
                </h3>
                <p className="text-gray-700 mb-4 text-center max-w-md">
                  Perfect for businesses looking to enhance their brand identity with a personalized touch on a premium theme.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 max-w-md">
                  <li>Everything in the Basic Store Setup</li>
                  <li>Customization of a premium Shopify theme</li>
                  <li>Tailored color schemes and typography to match your brand</li>
                  <li>Custom homepage design with featured products and banners</li>
                  <li>Integration of social media links and feeds</li>
                  <li>Installation of up to 5 essential Shopify apps</li>
                  <li>Advanced SEO configuration</li>
                  <li>Training session on managing your Shopify store</li>
                </ul>
                <a
                  href="#contact"
                  className="mt-4 inline-block px-8 py-3 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition duration-300"
                >
                  Contact Us
                </a>
              </div>
            </SwiperSlide>

            {/* Custom Theme Development Slide */}
            <SwiperSlide>
              <div
                className="p-6 bg-white rounded-lg shadow-lg h-full flex flex-col justify-center items-center"
                ref={(el) => (slidesRef.current[2] = el)}
              >
                {/* Replace with your image */}
                <Image
                  src="/studioart211.png"
                  alt="Custom Theme Development"
                  width={200}
                  height={200}
                  className="mb-6"
                />
                <h3 className="text-3xl font-semibold mb-4 text-indigo-700">
                  Custom Theme Development
                </h3>
                <p className="text-gray-700 mb-4 text-center max-w-md">
                  Best for businesses seeking a unique online presence with a fully custom-designed theme built from the ground up.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 max-w-md">
                  <li>Everything in the Customized Theme Setup</li>
                  <li>Custom theme design and development from scratch</li>
                  <li>Responsive design optimized for all devices</li>
                  <li>Custom functionalities (e.g., product filters, custom forms)</li>
                  <li>Integration with third-party APIs and services</li>
                  <li>Advanced product options and customizations</li>
                  <li>Performance optimization and speed enhancements</li>
                  <li>Post-launch support and maintenance (up to 3 months)</li>
                </ul>
                <a
                  href="#contact"
                  className="mt-4 inline-block px-8 py-3 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition duration-300"
                >
                  Contact Us
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
