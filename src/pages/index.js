import React from "react";
import Head from "next/head";
import { FaChevronRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Index = () => {
  return (
    <>
      <Head>
        <title>Home - Zoya</title>
        <link rel="icon" href="/Fav_Icon.png" />
      </Head>

    <Header/>

      {/* Banner Section */}
      <section className="w-full h-[80vh] lg:h-screen Banner relative">
        <video
          src="/Banner.mp4"
          autoPlay="true"
          playsinline="true"
          loop="true"
          muted="true"
          class="w-full h-full object-cover"
        ></video>
      </section>

      {/* About Section */}
      <section className="lg:!pb-36 py-[60px] pb-[200px] lg:py-28 relative">
        <div className="container">
          <h6 className="text-themeDarkBeige subHeading uppercase mb-14">
            About
          </h6>
          <div className="flex items-start flex-wrap">
            <div className="w-full lg:w-[60%]">
              <p className="paragraph font-light text-black">
                We believe real estate is all about people. From cozy homes to
                mega communities, its founded on human needs, aspirations and
                dreams. Our journey in development is deeply rooted in these
                connections, where each project becomes a medium for human
                expression, inspiration and creativity.
              </p>
              <h4 className="text-[20px] lg:text-[30px] xl:text-[35px] leading-[26.96px] lg:leading-[36.96px] xl:leading-[41.96px] my-5 lg:my-10 xl:mt-12 xl:mb-14">
                Welcome to{" "}
                <span className="text-themeDarkBeige">Zoya Developments,</span>{" "}
                Where people always come first and Where every experience
                contributes to a lasting legacy.
              </h4>
              <Link className="Btn" href="#.">
                Explore
              </Link>
            </div>
            <div className="w-full lg:w-[40%] pt-14 md:pt-0 pl-0 lg:pl-10 xl::pl-24">
              <div className="flex flex-wrap justify-between py-4 items-baseline border-b-2 border-themeDarkBeige">
                <h3 className="text-themeDarkBeige">
                  14 <span className="text-[24px] leading-[1.2]">Years</span>
                </h3>
                <p className="text-lg font-raleway text-black font-light">
                  Development Experience
                </p>
              </div>
              <div className="flex flex-wrap justify-between py-4 items-baseline border-b-2 border-themeDarkBeige">
                <h3 className="text-themeDarkBeige">
                  100,000 <span className="text-[24px] leading-[1.2]">+</span>
                </h3>
                <p className="text-lg font-raleway text-black font-light">
                  Units Delivered
                </p>
              </div>
              <div className="flex flex-wrap justify-between py-4 items-baseline border-b-2 border-themeDarkBeige">
                <h3 className="text-themeDarkBeige">
                  100,000{" "}
                  <span className="text-[24px] leading-[1.2]">Sq.ft</span>
                </h3>
                <p className="text-lg font-raleway text-black font-light">
                  Area Developed
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute about_img w-[380px] md:w-[450px] lg:w-[800px] left-0 mx-auto right-0 lg:left-auto lg:right-10 bottom-0">
          <img className="w-full max-w-[100%] md:max-w-[90%] lg:max-w-[65%] xl:max-w-[520px] mx-auto" src="/White_logo.png" />
        </div>
      </section>

      {/* Portfolio Section Start */}
      <section className="h-[100vh] md:h-screen relative flex items-center justify-center overlay">
        <img class="w-full h-full object-cover" src="/Portfolio.png" />
        <div className="absolute z-10 w-full bottom-[100px]">
          <div className="container">
            {/* <div className="flex flex-wrap md:flex-nowrap gap-7 md:gap-0 justify-between items-end">
              <div className="w-full">
                <p className="text-white text-xl">
                  A collection of apartment residences with maid’s room based in
                  Al Furjan, Dubai.
                </p>
                <div className="flex flex-wrap gap-6 md:gap-10 !mt-10 my-6">
                  <div>
                    <p className="uppercase text-2xl font-medium text-white mb-2">
                      Apartments
                    </p>
                    <p className="text-base text-themeDarkBeige uppercase">
                      Project Type
                    </p>
                  </div>
                  <div>
                    <p className="uppercase text-2xl font-medium text-white mb-2">
                      67
                    </p>
                    <p className="text-base text-themeDarkBeige uppercase">
                      Unit
                    </p>
                  </div>
                  <div>
                    <p className="uppercase text-2xl font-medium text-white mb-2">
                      Al Furjan, Dubai
                    </p>
                    <p className="text-base text-themeDarkBeige uppercase">
                      Location
                    </p>
                  </div>
                  <div>
                    <p className="uppercase text-2xl font-medium text-white mb-2">
                      Q4, 2024
                    </p>
                    <p className="text-base text-themeDarkBeige uppercase">
                      Completion
                    </p>
                  </div>
                </div>
                <h2 className="text-themeSoftPeach font-normal uppercase">
                  PRISTINE
                </h2>
                <p className="text-themeSoftPeach font-semibold uppercase my-6 !mb-0">
                  BY ZOYA developments
                </p>
              </div>
              <a
                href="#."
                className="Arrow_Icon flex h-[70px] w-[70px] items-center justify-center rounded-[50px] border-2 border-white text-[30px] text-white"
              >
                <FaChevronRight />
              </a>
            </div> */}

            <div>
              <h2 className="text-themeSoftPeach font-normal uppercase">
                PRISTINE
              </h2>
              <h2 className="text-[35px] lg:text-[40px] xl:text-[70px] text-white uppercase">
                Coming Soon
              </h2>
            </div>

          </div>
        </div>
      </section>

      {/* Spotlight Section Start */}
      {/* <section className="py-20 spotlightSection bg-white">
        <div className="container">
          <div className="w-full flex flex-wrap gap-6 md:gap-0 justify-between items-center mb-20 md:mb-20 z-10 relative">
            <h4 className=" text-black font-medium">
              <span className="text-themeDarkBeige">ZOYA</span> in The Spotlight
            </h4>
            <a className="Btn" href="#.">
              Explore
            </a>
          </div>
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
      </section> */}

      {/* Regirster Section Start */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-wrap gap-9 md:gap-0 justify-between">
            <div className="w-full md:w-[45%] hide_Br">
              <div className="max-w-full md:max-w-[400px]">
                <h2 className="font-medium mb-3 md:mb-6">
                  <span className="text-themeDarkBeige">Register</span>
                  <br></br> Your Interest
                </h2>
                <p className="paragraph font-medium">
                  For more general enquiries or to simply say hello, reach out
                  to us.
                </p>
              </div>
            </div>
            <div className="w-full md:w-[55%]">
              <form>
                <div className="flex justify-between flex-wrap">
                  <input type="text" name="" placeholder="First Name" />
                  <input type="text" name="" placeholder="Last Name" />
                </div>
                <div className="flex justify-between flex-wrap my-8">
                  <input type="email" name="" placeholder="Email Address" />
                  <input type="text" name="" placeholder="Company name" />
                </div>
                <textarea className="w-full min-h-44 mb-8" placeholder="Type you enquiries here.." />
                <button className="transparentBtn">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Index;
