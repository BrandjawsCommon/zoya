import React from "react";
import { FaChevronRight } from "react-icons/fa";

import { FaArrowRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Head from "next/head";

const mediacenterdetail = () => {
  return (
    <>
      <Head>
        <title>Media Center Detail - Zoya</title>
        <link rel="icon" href="/Fav_Icon.png" />
      </Head>
      {/* Banner Section Start */}
      <section className="w-full h-[70vh] Banner relative Banner_overlay">
        <img src="/Detail_Banner.png" class="w-full h-full object-cover"></img>
        <div className="container">
          <div className="breadcrumbs z-[2] absolute bottom-10 xl:bottom-20 flex gap-4 items-center flex-wrap">
            <Link href="/">Home</Link>
            <FaChevronRight />
            <Link href="/media-center">Media Center</Link>
            <FaChevronRight />
            <p className="opacity-50">Lorem ipsum dolor sit amet..</p>
          </div>
        </div>
      </section>

      {/* Detail Section Start */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="flex flex-wrap gap-6 items-center">
            <p className="font-normal text-base">REAL ESTATE</p>
            <p className="font-light text-base">29 May, 2024</p>
          </div>
          <div>
            <h5 className="!font-medium text-[24px] leading-[1.3] md:font-normal mt-7 md:mb-16 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h5>
            <p className="text-black font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex flex-wrap justify-between my-8 flex-col-reverse md:flex-row gap-9 md:gap-0">
              <div className="w-full md:w-1/2 flex flex-col justify-between pr-0 md:pr-9">
                <p className="text-black font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="text-black font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img className="w-full h-full" src="/Detail-Inner.png" />
              </div>
            </div>
            <p className="text-black font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Press Release */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h6 className="text-themeDarkBeige subHeading uppercase mb-11">
            Recent MEDIA
          </h6>
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
                    <p className="font-normal text-sm">REAL ESTATE</p>
                  </div>
                  <p className="paragraph font-normal text-black my-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor..
                  </p>
                  <a
                    className="font-normal text-lg !text-themeDarkBeige animate flex gap-3 items-center"
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
                    <p className="font-normal text-sm">REAL ESTATE</p>
                  </div>
                  <p className="text-lg font-normal text-black my-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor..
                  </p>
                  <a
                    className="font-normal text-lg !text-themeDarkBeige animate flex gap-3 items-center"
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
                    <p className="font-normal text-sm">REAL ESTATE</p>
                  </div>
                  <p className="text-lg font-normal text-black my-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor..
                  </p>
                  <a
                    className="font-normal text-lg !text-themeDarkBeige animate flex gap-3 items-center"
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
                    <p className="font-normal text-sm">REAL ESTATE</p>
                  </div>
                  <p className="text-lg font-normal text-black my-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor..
                  </p>
                  <a
                    className="font-normal text-lg !text-themeDarkBeige animate flex gap-3 items-center"
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
                    <p className="font-normal text-sm">REAL ESTATE</p>
                  </div>
                  <p className="text-lg font-normal text-black my-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor..
                  </p>
                  <a
                    className="font-normal text-lg !text-themeDarkBeige animate flex gap-3 items-center"
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
                    <p className="font-normal text-sm">REAL ESTATE</p>
                  </div>
                  <p className="text-lg font-normal text-black my-4 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor..
                  </p>
                  <a
                    className="font-normal text-lg !text-themeDarkBeige animate flex gap-3 items-center"
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

export default mediacenterdetail;
