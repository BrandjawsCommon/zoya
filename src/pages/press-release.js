import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Head from "next/head";

const pressRelease = () => {
  return (
    <>
    <Head>
        <title>Press Release - Zoya</title>
        <link rel="icon" href="/Fav_Icon.png" />
      </Head>
      {/* Banner Section */}

      <section className="w-full h-[70vh] Banner relative Banner_overlay">
        <video
          src="/Press_Banner.mp4"
          autoPlay="true"
          playsinline="true"
          loop="true"
          muted="true"
          class="w-full h-full object-cover"
        ></video>
        <div className="container">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[120px] z-[2] text-white absolute bottom-10 xl:bottom-20 px-0 md:px-4 uppercase font-medium">
            Press Release
          </h1>
        </div>
      </section>

      {/* Spotlight Section Start */}
      <section className="py-32 spotlightSection">
        <div className="container">
          <div className="w-full">
            <Swiper
              slidesPerView={4}
              loop={false}
              spaceBetween={30}
              breakpoints={{
                290: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                980: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <img className="w-full" src="/Slide1.png" />
                  <div className="flex justify-between mt-3">
                    <p className="font-light text-sm">29 May, 2024</p>
                    <p className="font-medium text-sm">REAL ESTATE</p>
                  </div>
                  <p className="paragraph font-medium text-black my-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor..
                  </p>
                  <a
                    className="font-medium text-lg !text-themeDarkBeige animate flex gap-3 items-center"
                    href="#."
                  >
                    Read more <FaArrowRight />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img className="w-full" src="/Slide2.png" />
                  <div className="flex justify-between mt-3">
                    <p className="font-light text-sm">29 May, 2024</p>
                    <p className="font-medium text-sm">REAL ESTATE</p>
                  </div>
                  <p className="text-lg font-medium text-black my-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor..
                  </p>
                  <a
                    className="font-medium text-lg !text-themeDarkBeige animate flex gap-3 items-center"
                    href="#."
                  >
                    Read more <FaArrowRight />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img className="w-full" src="/Slide3.png" />
                  <div className="flex justify-between mt-3">
                    <p className="font-light text-sm">29 May, 2024</p>
                    <p className="font-medium text-sm">REAL ESTATE</p>
                  </div>
                  <p className="text-lg font-medium text-black my-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor..
                  </p>
                  <a
                    className="font-medium text-lg !text-themeDarkBeige animate flex gap-3 items-center"
                    href="#."
                  >
                    Read more <FaArrowRight />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img className="w-full" src="/Slide4.png" />
                  <div className="flex justify-between mt-3">
                    <p className="font-light text-sm">29 May, 2024</p>
                    <p className="font-medium text-sm">REAL ESTATE</p>
                  </div>
                  <p className="text-lg font-medium text-black my-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor..
                  </p>
                  <a
                    className="font-medium text-lg !text-themeDarkBeige animate flex gap-3 items-center"
                    href="#."
                  >
                    Read more <FaArrowRight />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img className="w-full" src="/Slide1.png" />
                  <div className="flex justify-between mt-3">
                    <p className="font-light text-sm">29 May, 2024</p>
                    <p className="font-medium text-sm">REAL ESTATE</p>
                  </div>
                  <p className="text-lg font-medium text-black my-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor..
                  </p>
                  <a
                    className="font-medium text-lg !text-themeDarkBeige animate flex gap-3 items-center"
                    href="#."
                  >
                    Read more <FaArrowRight />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img className="w-full" src="/Slide2.png" />
                  <div className="flex justify-between mt-3">
                    <p className="font-light text-sm">29 May, 2024</p>
                    <p className="font-medium text-sm">REAL ESTATE</p>
                  </div>
                  <p className="text-lg font-medium text-black my-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor..
                  </p>
                  <a
                    className="font-medium text-lg !text-themeDarkBeige animate flex gap-3 items-center"
                    href="#."
                  >
                    Read more <FaArrowRight />
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default pressRelease;
