/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/next-script-for-ga */
import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDown, FaAngleUp, FaArrowRight } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Head from "next/head";
import { Navigation, Pagination } from "swiper/modules";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const accordionData = [
    {
      heading: "Innovation Beyond Imagination",
      content:
        "We embrace bold ideas and a forward-thinking approach, constantly seeking new ways to elevate the living experience beyond what’s currently imagined.",
    },
    {
      heading: "Quality Beyond Compare",
      content:
        "We are committed to delivering exceptional quality in everything we do, from design and construction to resident service, ensuring a level of excellence that surpasses comparison.",
    },
    {
      heading: "Collaboration Beyond Borders",
      content:
        "We believe in the power of teamwork and foster a collaborative environment where diverse perspectives are valued and celebrated, fostering collaboration that transcends borders and limitations.",
    },
    {
      heading: "Customer Focus Beyond Measure",
      content:
        "We put our residents at the heart of everything we do, prioritizing their needs and exceeding their expectations in ways that are beyond measure.",
    },
    // Add more items as needed
  ];

  return (
    <>
      <Head>
        <title>About - Zoya</title>
        <link rel="icon" href="/Fav_Icon.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16635261680"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16635261680');
            `,
          }}
        />
      </Head>

      {/* Banner Section */}
      <section className="w-full h-[50vh] Banner relative Banner_overlay">
        <img src="/AboutBanner.jpg" class="w-full h-full object-cover" />
        <div className="container">
          <h1 className="text-[34px] md:text-[28px] z-[2] text-white absolute bottom-10 xl:bottom-20 px-0 md:px-4 uppercase font-medium md:font-normal">
            ABOUT
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-[60px] lg:py-28 relative">
        <div className="container">
          <div className="flex items-start flex-wrap">
            <div className="w-full lg:w-[50%]">
              <h6 className="text-themeDarkBeige subHeading uppercase">
                OUR STORY
              </h6>
              <p className="text-black font-normal mt-2 pl-28 uppercase subHeading before:hidden mb-12 md:mb-0">
                EXPERIENCE | LEGACY
              </p>
              <h4 className="text-[22px] xl:text-[20px] leading-[1.3] !font-medium mt-5 !mb-0 lg:my-10 xl:mt-12 xl:mb-9">
                <span className="text-themeDarkBeige">
                  {" "}
                  Zoya Developments,{" "}
                </span>
                began its journey driven by a vision of developing modern spaces
                that merge craftsmanship and liveability. In the last 14 years,
                we have set new standards in creating unparalleled living spaces
                and delivering exceptional value for our customers.
              </h4>
              <p className="paragraph font-light text-black my-8 mb-0">
                In 2024, we mark our entry into Dubai. We are excited to bring
                our legacy of excellence and innovation to this vibrant
                ecosystem of growth and prosperity. Dubai’s visionary leadership
                and forwardthinking initiatives have brought it into the global
                spotlight, making it an ideal destination for Zoya Developments
                to expand. With a customer-centric approach at our core, we look
                forward to crafting extraordinary experiences.
              </p>
            </div>
            <div className="w-full lg:w-[50%] pt-[60px] md:pt-0  pl-0 lg:pl-10">
              <video
                src="/AboutContentVideo.mp4"
                autoPlay="true"
                playsinline="true"
                loop="true"
                muted="true"
                class="w-full h-[500px] object-cover"
              ></video>
            </div>
          </div>
        </div>
        <div className="absolute about_img -z-[1] left-0 top-0 bottom-auto md:bottom-0">
          <img
            className="w-full max-w-[100%] md:max-w-[90%] lg:max-w-[65%] xl:max-w-[520px] mx-auto"
            src="/Union.png"
          />
        </div>
      </section>

      {/* Vission Mission Section */}
      <section className="VissionMissionSection">
        <img
          className="absolute top-0 right-0 left-0 bottom-0 w-full h-full !object-cover -z-[20]"
          src="/VissionBackground.png"
        />
        <div className="container">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-[65%]">
              <img
                src="/Vision.png"
                className="w-full h-full object-contain md:object-cover md:h-[350px]"
              />
            </div>
            <div className="w-full lg:w-[35%] mt-10 lg:mt-0">
              <div className="pl-0 lg:pl-10 xl:pl-16 mb-5 xl:mb-10 pr-0 xl:pr-10">
                <h2 className="text-[22px] xl:text-[20px] leading-[1.3] text-white mb-5 xl:mb-8">
                  Vision
                </h2>
                <p className="paragraph font-light text-white">
                  To be a leading developer renowned for crafting transformative
                  spaces that inspire creativity, cultivate well-being, and
                  empower residents to thrive.
                </p>
              </div>
              <div className="pl-0 lg:pl-10 xl:pl-16 pr-0 xl:pr-10">
                <h2 className="text-[22px] xl:text-[20px] leading-[1.3] text-white mb-5 xl:mb-8">
                  Mission
                </h2>
                <p className="paragraph font-light text-white">
                  Go beyond customer expectations by delivering high-quality,
                  stylish, sustainable developments that foster a sense of
                  community and prioritize resident satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farooq Khan Section */}
      <div className="py-[60px] lg:py-20 xl:py-[100px] h-max">
        <div className="container h-full">
          <div className="flex items-center flex-col lg:flex-row gap-0 lg:gap-10 xl:gap-0 h-full ">
            <div className="w-full lg:w-[65%]">
              <div className="mb-5 lg:mb-10 xl:mb-[80px]">
                <h6 className="text-themeDarkBeige subHeading uppercase">
                  MESSAGE FROM THE CHAIRMAN
                </h6>
              </div>
              <img
                src="/Left-Comas-Icon.svg"
                className="w-[85.41px] mb-5 xl:mb-10"
              />
              <p className="text-[20px] xl:text-[20px] leading-[1.3] text-black w-full xl:w-[75%] font-medium md:font-normal mb-5 xl:mb-10">
                We come to Dubai with a sense of purpose and passion. Our
                mission to redefine urban living drives us to push boundaries,
                innovate relentlessly, and exceed expectations.
              </p>
              <p className="paragraph font-light w-full lg:w-[85%] xl:w-[71%] mb-5 xl:mb-8">
                Through thoughtful design, sustainable practices, and a deep
                understanding of our customers’ needs, we aim to not only build
                structures but to craft legacies that that will live on for
                generations.
              </p>
              <div className="">
                <h3 className="text-[#213A6F] text-[16px] xl:text-[20px] leading-[1.3]  w-full xl:w-[95%] font-normal mb-[10px] lg:mb-[7px]">
                  FAROOQ KHAN
                </h3>
                <p className="text-[#A89C6C] paragraph font-light w-full lg:w-[82%] mb-5 lg:mb-0">
                  Chairman and Managing Director, Columbia Group
                </p>
                {/* <div className="w-full lg:w-[15%] flex justify-start md:justify-end">
                  <Link
                    href="https://www.linkedin.com/in/farooq-khan-124085108/"
                    target="_blank"
                    className="bg-[#A89C6C] w-[30px] h-[30px] lg:w-[42px] lg:h-[42px] rounded-[50%] text-center px-2 py-[7px] lg:px-[12px] lg:py-[11px] block hover:bg-[#213A6F] transition-all"
                  >
                    <img src="/Linkedin.svg" className="" />
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="w-full lg:w-[35%] h-[100%]">
              <img
                src="/Farooq-Khan.jpg"
                className="w-full md:w-[60%] lg:w-full mx-auto my-0 object-cover h-full md:h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Approch Section */}
      <div className="approachSection">
        <img
          className="absolute top-0 right-0 left-0 bottom-0 w-full h-full !object-cover -z-[20]"
          src="/Approach-Background.png"
        />
        <div className="container">
          <h6 className="font-normal leading-normal subHeading text-[#A89C6C]">
            OUR APPROCH
          </h6>
          <p className="text-white mt-2 pl-28 subHeading before:hidden">
            Think Different. Deliver Different.
          </p>
          <div className="flex items-start flex-wrap justify-between mb-5 lg:mb-10 xl:mb-14 mt-10 lg:mt-16 xl:mt-20">
            <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-35px)]">
              <div className="flex gap-5 lg:gap-8 items-center">
                <img
                  src="/Elevated-Design.svg"
                  className="w-[40px] lg:w-[50px] mb-5 lg:mb-10"
                />
                <h2 className="text-[16px] xl:text-[20px] leading-[1.3] text-white mb-5 lg:mb-[30px]">
                  Elevated
                  <br />
                  Design
                </h2>
              </div>
              <p className="paragraph font-light text-white">
                We collaborate with top architects and designers to craft
                beautiful, functional spaces that enhance livability for future
                generations.
              </p>
            </div>
            <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-35px)] mt-10 md:mt-0 xl:mt-0">
              <div className="flex gap-5 lg:gap-8 items-center">
                <img
                  src="/Bulb.svg"
                  className="w-[40px] lg:w-[50px] mb-5 lg:mb-10"
                />
                <h2 className="text-[16px] xl:text-[20px] leading-[1.3] text-white mb-5 lg:mb-[30px]">
                  Effortlessly
                  <br />
                  Smart
                </h2>
              </div>
              <p className="paragraph font-light text-white">
                We integrate cutting-edge technology to create smart homes that
                enhance your life with personalized convenience and security.
              </p>
            </div>
            <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-35px)] mt-10 xl:mt-0">
              <div className="flex gap-5 lg:gap-8 items-center">
                <img
                  src="/Exceptional-Investment.svg"
                  className="w-[35px] lg:w-[40px] mb-5 lg:mb-10"
                />
                <h2 className="text-[16px] xl:text-[20px] leading-[1.3] text-white mb-5 lg:mb-[30px]">
                  Exceptional
                  <br />
                  Investment
                </h2>
              </div>
              <p className="paragraph font-light text-white">
                We create spaces that enrich your life today and become future
                assets, focusing on prime locations, growth potential, spacious
                layouts, and integrated outdoor areas.
              </p>
            </div>
            <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-35px)] mt-10 xl:mt-0">
              <div className="flex gap-5 lg:gap-8 items-center">
                <img
                  src="/Sustainable-Development.svg"
                  className="w-[40px] lg:w-[50px] mb-5 lg:mb-10"
                />
                <h2 className="text-[16px] xl:text-[20px] leading-[1.3] text-white mb-5 lg:mb-[30px]">
                  Sustainable
                  <br />
                  Development
                </h2>
              </div>
              <p className="paragraph font-light text-white">
                We lead in sustainable development by recycling construction
                waste and utilizing recycled materials, demonstrating our
                commitment to eco-friendly practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet The Team Section */}
      <div className="bg-white py-[60px] lg:py-20 xl:py-[100px]">
        <div className="container">
          <h6 className="font-normal leading-normal subHeading text-[#A89C6C]">
            MEET THE TEAM
          </h6>
          <p className=" font-normal mt-2 pl-28 subHeading before:hidden  mb-10 xl:mb-[80px]">
            Driven by Passion, United by Purpose
          </p>
          <div className="w-full">
            <div className="relative">
              <div className="flex gap-5 flex-wrap xl:flex-nowrap items-center">
                <div className="w-full xl:w-[35%] pr-0 xl:pr-[75px]">
                  <p className="text-[22px] xl:text-[20px] leading-[1.3] w-full font-medium md:font-normal mb-5 xl:mb-8">
                    At Zoya Developments, we believe our greatest asset is our
                    people.
                  </p>
                  <p className="paragraph font-light w-full mb-5 xl:mb-10">
                    We’ve assembled a team of passionate and dedicated
                    professionals, each with a wealth of experience and a shared
                    commitment to excellence and innovation.
                  </p>
                  <p className="paragraph font-light w-full mb-5 xl:mb-10">
                    At Zoya Developments, we have a visionary leadership team at
                    the helm, guiding our direction and propelling us towards a
                    future of innovation and excellence.
                  </p>
                </div>

                <div className="w-full xl:w-[75%]">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    modules={[Navigation, Pagination]}
                    navigation={{
                      prevEl: ".custom-prev",
                      nextEl: ".custom-next",
                    }}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="w-full">
                        <Link
                          href="#."
                          className="relative teamMember Fast_animate"
                        >
                          <div className="relative">
                            <img
                              src="/Imtiaz.jpeg"
                              className="w-full mb-5 h-[400px] md:h-[300px] lg:h-[350px] xl:h-[390px] object-cover"
                            />
                            <p className="teamParagraph">
                              Mr. Imtiaz, a global citizen with a youthful
                              perspective, brings dynamic energy to Zoya
                              Developments. His international experience fosters
                              innovative ideas and a can-do attitude. A
                              strategic multi-tasker, he drives the company’s
                              expansion and excels in project planning and
                              development. Imtiaz holds a Business
                              Administration degree from Jain-CMS, India, and a
                              Specialized International Marketing Program from
                              the Chartered Institute of Marketing, UK.
                            </p>
                            <div className="teamGradient bg-[#213A6FCC] backdrop-blur-sm w-full h-[115px] absolute bottom-0 transition-all ease-in-out !duration-1000"></div>
                          </div>
                          <div className="relative md:absolute !w-full mt-[-100px] mb-[40px] md:mb-0 md:mt-0 md:top-0 bottom-[10px] px-5 left-0 right-0 flex items-end">
                            <div className="flex items-end justify-between w-full">
                              <div>
                                <h3 className="text-[14px] xl:text-[16px] text-white leading-[19px] xl:leading-[22px] mb-[10px]">
                                  IMTIAZ KHAN
                                </h3>
                                <p className="text-[12px] lg:text-[14px] leading-normal font-light text-[#A89C6C]">
                                  Founder,
                                  <br />
                                  Zoya Developments
                                </p>
                              </div>

                              <div>
                                {/* <Link
                                  href="https://www.linkedin.com/in/farooq-khan-124085108/"
                                  target="_blank"
                                  className="bg-[#A89C6C] w-[30px] h-[30px] border-[#A89C6C] border-[1px] lg:w-[42px] lg:h-[42px] rounded-[50%] text-center px-2 py-[7px] lg:px-[12px] lg:py-[11px] block hover:bg-transparent transition-all"
                                >
                                  <img src="/Linkedin.svg" className="" />
                                </Link> */}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="w-full">
                        <Link
                          href="#."
                          className="relative teamMember Fast_animate"
                        >
                          <div className="relative">
                            <img
                              src="/Zoya.jpeg"
                              className="w-full mb-5 h-[400px] md:h-[300px] lg:h-[350px] xl:h-[390px] object-cover"
                            />
                            <p className="teamParagraph">
                              Zoya Khan, Co-Founder of Zoya Developments,
                              started her real estate career at just 21 with a
                              private residential project. Her evident passion
                              and skill quickly distinguished her in the
                              industry, both in India and internationally.
                              Today, she expertly balances her roles as a
                              visionary entrepreneur, dedicated partner, and
                              loving mother. Her commitment to creativity and
                              innovation continues to propel Zoya Developments
                              to new heights of success.
                            </p>
                            <div className="teamGradient bg-[#213A6FCC] backdrop-blur-sm w-full h-[115px] absolute bottom-0 transition-all ease-in-out !duration-1000"></div>
                          </div>
                          <div className="relative md:absolute !w-full mt-[-100px] mb-[40px] md:mb-0 md:mt-0 md:top-0 bottom-[10px] px-5 left-0 right-0 flex justify-center md:justify-between items-end">
                            <div className="flex items-end justify-between w-full">
                              <div>
                                <h3 className="text-[14px] xl:text-[16px] text-white leading-[19px] xl:leading-[22px] mb-[10px]">
                                  ZOYA KHAN
                                </h3>
                                <p className="text-[12px] lg:text-[14px] leading-normal font-light text-[#A89C6C]">
                                  Co-Founder,
                                  <br />
                                  Zoya Developments
                                </p>
                              </div>

                              <div>
                                {/* <Link
                                  href="https://www.linkedin.com/in/farooq-khan-124085108/"
                                  target="_blank"
                                  className="bg-[#A89C6C] w-[30px] h-[30px] border-[#A89C6C] border-[1px] lg:w-[42px] lg:h-[42px] rounded-[50%] text-center px-2 py-[7px] lg:px-[12px] lg:py-[11px] block hover:bg-transparent transition-all"
                                >
                                  <img src="/Linkedin.svg" className="" />
                                </Link> */}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="w-full">
                        <Link
                          href="#."
                          className="relative teamMember Fast_animate"
                        >
                          <div className="relative">
                            <img
                              src="/Shoaib.jpeg"
                              className="w-full mb-5 h-[400px] md:h-[300px] lg:h-[350px] xl:h-[390px] object-cover"
                            />
                            <p className="teamParagraph">
                              Mr. Shoaib Khan, a future-oriented leader at Zoya
                              Developments, champions customer focus and sound
                              investment decisions. His financial expertise and
                              commitment to continuous learning drive positive
                              change. With a Business Administration degree from
                              Jain-CMS and a Specialized International Practical
                              Finance Program from the UK, Shoaib has shifted
                              Zoya’s focus toward evolving with market needs.
                            </p>
                            <div className="teamGradient bg-[#213A6FCC] backdrop-blur-sm w-full h-[115px] absolute bottom-0 transition-all ease-in-out !duration-1000"></div>
                          </div>
                          <div className="relative md:absolute !w-full mt-[-100px] mb-[50px] md:mb-0 md:mt-0 md:top-0 bottom-[10px] px-5 left-0 right-0 flex justify-center md:justify-between items-end">
                            <div className="flex items-end justify-between w-full">
                              <div>
                                <h3 className="text-[14px] xl:text-[16px] text-white leading-[19px] xl:leading-[22px] mb-[10px]">
                                  SHOAIB KHAN
                                </h3>
                                <p className="text-[12px] lg:text-[14px] leading-normal font-light text-[#A89C6C]">
                                  CEO,
                                  <br />
                                  Zoya Developments
                                </p>
                              </div>

                              <div>
                                {/* <Link
                                  href="https://www.linkedin.com/in/farooq-khan-124085108/"
                                  target="_blank"
                                  className="bg-[#A89C6C] w-[30px] h-[30px] border-[#A89C6C] border-[1px] lg:w-[42px] lg:h-[42px] rounded-[50%] text-center px-2 py-[7px] lg:px-[12px] lg:py-[11px] block hover:bg-transparent transition-all"
                                >
                                  <img src="/Linkedin.svg" className="" />
                                </Link> */}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="w-full">
                        <Link
                          href="#."
                          className="relative teamMember Fast_animate"
                        >
                          <div className="relative">
                            <img
                              src="/Farooq-Khan.jpg"
                              className="w-full mb-5 h-[400px] md:h-[300px] lg:h-[350px] xl:h-[390px] object-cover"
                            />
                            <p className="teamParagraph">
                              Mr. Farooq, a global citizen with a youthful
                              perspective, brings dynamic energy to Zoya
                              Developments. His international experience fosters
                              innovative ideas and a can-do attitude. A
                              strategic multi-tasker, he drives the company’s
                              expansion and excels in project planning and
                              development. Imtiaz holds a Business
                              Administration degree from Jain-CMS, India, and a
                              Specialized International Marketing Program from
                              the Chartered Institute of Marketing, UK.
                            </p>
                            <div className="teamGradient bg-[#213A6FCC] backdrop-blur-sm w-full h-[115px] absolute bottom-0 transition-all ease-in-out !duration-1000"></div>
                          </div>
                          <div className="relative md:absolute !w-full mt-[-100px] mb-[40px] md:mb-0 md:mt-0 md:top-0 bottom-[10px] px-5 left-0 right-0 flex justify-center md:justify-between items-end">
                            <div className="flex items-end justify-between w-full">
                              <div>
                                <h3 className="text-[14px] xl:text-[16px] text-white leading-[19px] xl:leading-[22px] mb-[10px]">
                                  IMTIAZ KHAN
                                </h3>
                                <p className="text-[12px] lg:text-[14px] leading-normal font-light text-[#A89C6C]">
                                  Managing Director
                                  <br />
                                  Zoya Developments
                                </p>
                              </div>

                              <div>
                                {/* <Link
                                  href="https://www.linkedin.com/in/farooq-khan-124085108/"
                                  target="_blank"
                                  className="bg-[#A89C6C] w-[30px] h-[30px] border-[#A89C6C] border-[1px] lg:w-[42px] lg:h-[42px] rounded-[50%] text-center px-2 py-[7px] lg:px-[12px] lg:py-[11px] block hover:bg-transparent transition-all"
                                >
                                  <img src="/Linkedin.svg" className="" />
                                </Link> */}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="container relative bottom-[-110px] block md:hidden">
                    <div className="custom-navigation-wrapper flex  gap-3 md:gap-5 absolute bottom-[80px] md:bottom-[ 40px] !z-50  left-[50%] translate-x-[-50%]">
                      <div className="custom-prev swiper-button-prev cursor-pointer w-[40px] md:w-[60px] h-[40px] md:h-[60px] flex justify-center items-center text-black hover:bg-[#ffffff50] transition-all border border-black rounded-full text-[15px] md:text-[20px]">
                        <FaAngleLeft />
                      </div>
                      <div className="custom-next swiper-button-next cursor-pointer w-[40px] md:w-[60px] h-[40px] md:h-[60px] flex justify-center items-center text-black hover:bg-[#ffffff50] transition-all border border-black rounded-full text-[15px] md:text-[20px]">
                        <FaAngleRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Culture & Values Section */}
      <div className="bg-[#F3F0E7] py-[60px] lg:py-20 xl:py-[100px]">
        <div className="container">
          <h6 className="font-normal leading-normal subHeading text-[#A89C6C]">
            CULTURE & VALUES
          </h6>
          <p className="paragraph text-black font-normal mt-2 pl-28 subHeading before:hidden mb-5 lg:mb-10 xl:mb-16">
            Guiding Principles that Drive Us
          </p>
          <p className="paragraph font-light w-full lg:w-[52%] mb-10 xl:mb-20">
            Our company culture is built on a strong foundation of shared
            values. These values guide our decision- making, foster
            collaboration, and inspire us to push the boundaries of what’s
            possible.
          </p>

          <div className="AccordionRow">
            <div className="w-full md:w-1/2 lg:w-[65%]">
              <img src="/AccordionImage.png" className="AccordionImage" />
            </div>

            <div className="w-full md:w-1/2 lg:w-[35%] mt-5 md:mt-0 pl-0 md:pl-5 lg:pl-10 xl:pl-16">
              {accordionData.map((item, index) => (
                <div key={index} className="accordion">
                  <h5
                    className="Accordionheading"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.heading}
                    <span>
                      {activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                  </h5>
                  <p
                    className={`${activeIndex === index ? "opacity-100 h-[75px] mt-5" : "opacity-0 h-0"} paragraph AccordionParaGraph animate`}
                  >
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
