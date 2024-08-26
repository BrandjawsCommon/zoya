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
import Header from "../components/Header/Header";
import {
  getAboutsecond,
  getHeader,
  getOurstory,
  getStorybelow,
} from "../libs/contentful/api";
import Footer from "../components/Footer/Footer";

const About = ({ HeaderData, AboutData, AboutDataTwo, AboutDataThird }) => {
  // console.log(AboutDataThird, "AboutDataThird");

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
      heading: `${AboutDataThird.faqonetitle}`,
      content: `${AboutDataThird.faqonedesc}`,
    },
    {
      heading: `${AboutDataThird.faqtwotitle}`,
      content: `${AboutDataThird.faqtwodesc}`,
    },
    {
      heading: `${AboutDataThird.faqthreetitle}`,
      content: `${AboutDataThird.faqthreedesc}`,
    },
    {
      heading: `${AboutDataThird.faqfourtitle}`,
      content: `${AboutDataThird.faqfourdesc}`,
    },
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

      {/* Header */}
      <Header HeaderData={HeaderData} />

      {/* Banner Section Start */}
      <section className="w-full h-[50vh] Banner relative Banner_overlay">
        <img
          src={AboutData.bannermedia.url}
          class="w-full h-full object-cover"
          alt={AboutData.bannermedia.fileName}
        />
        <div className="container">
          <h1 className="text-[34px] md:text-[28px] z-[2] text-white absolute bottom-10 xl:bottom-20 px-0 md:px-4 uppercase font-medium md:font-normal">
            {AboutData.pagename}
          </h1>
        </div>
      </section>

      {/* About Section Start */}
      <section className="py-[60px] lg:py-28 relative">
        <div className="container">
          <div className="flex items-start flex-wrap">
            <div className="w-full lg:w-[50%]">
              <h6 className="text-themeDarkBeige subHeading uppercase">
                {AboutData.storybreadcrumbs}
              </h6>
              <p className="text-black font-normal mt-2 pl-28 uppercase subHeading before:hidden mb-12 md:mb-0">
                {AboutData.storytitle}
              </p>
              <h4 className="text-[22px] xl:text-[20px] leading-[1.3] !font-medium mt-5 !mb-0 lg:my-10 xl:mt-12 xl:mb-9">
                <span className="text-themeDarkBeige">
                  {" "}
                  {AboutData.storyspan}{" "}
                </span>
                {AboutData.storydesone}
              </h4>
              <p className="paragraph font-light text-black my-8 mb-0">
                {AboutData.storydestwo}
              </p>
            </div>
            <div className="w-full lg:w-[50%] pt-[60px] md:pt-0  pl-0 lg:pl-10">
              <video
                src={AboutData.storymedia.url}
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
            src={AboutData.storybg.url}
            alt={AboutData.storybg.fileName}
          />
        </div>
      </section>

      {/* Vission Mission Section */}
      <section className="VissionMissionSection">
        <img
          className="absolute top-0 right-0 left-0 bottom-0 w-full h-full !object-cover -z-[20]"
          src={AboutData.visionbanner.url}
          alt={AboutData.visionbanner.fileName}          
        />
        <div className="container">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-[65%]">
              <img
                src={AboutData.visionmedia.url}
                className="w-full h-full object-contain md:object-cover md:h-[350px]"
                alt={AboutData.visionmedia.fileName}
              />
            </div>
            <div className="w-full lg:w-[35%] mt-10 lg:mt-0">
              <div className="pl-0 lg:pl-10 xl:pl-16 mb-5 xl:mb-10 pr-0 xl:pr-10">
                <h2 className="text-[22px] xl:text-[20px] leading-[1.3] text-white mb-5 xl:mb-8">
                  {AboutData.visionfeaturesCollection.items[0].title}
                </h2>
                <p className="paragraph font-light text-white">
                  {AboutData.visionfeaturesCollection.items[0].link}
                </p>
              </div>
              <div className="pl-0 lg:pl-10 xl:pl-16 pr-0 xl:pr-10">
                <h2 className="text-[22px] xl:text-[20px] leading-[1.3] text-white mb-5 xl:mb-8">
                  {AboutData.visionfeaturesCollection.items[1].title}
                </h2>
                <p className="paragraph font-light text-white">
                  {AboutData.visionfeaturesCollection.items[1].link}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message From Chairman Section Start */}
      <div className="py-[60px] lg:py-20 xl:py-[100px] h-max">
        <div className="container h-full">
          <div className="flex items-center flex-col lg:flex-row gap-0 lg:gap-10 xl:gap-0 h-full ">
            <div className="w-full lg:w-[65%]">
              <div className="mb-5 lg:mb-10 xl:mb-[80px]">
                <h6 className="text-themeDarkBeige subHeading uppercase">
                  {AboutData.chairmanbreadcrumbs}
                </h6>
              </div>
              <img
                src={AboutData.commas.url}
                className="w-[85.41px] mb-5 xl:mb-10"
                alt={AboutData.commas.fileName}
              />
              <p className="text-[20px] xl:text-[20px] leading-[1.3] text-black w-full xl:w-[75%] font-medium md:font-normal mb-5 xl:mb-10">
                {AboutData.cmdescone}
              </p>
              <p className="paragraph font-light w-full lg:w-[85%] xl:w-[71%] mb-5 xl:mb-8">
                {AboutData.cmdesctwo}
              </p>
              <div className="">
                <h3 className="text-[#213A6F] text-[16px] xl:text-[20px] leading-[1.3]  w-full xl:w-[95%] font-normal mb-[10px] lg:mb-[7px]">
                  {AboutData.cmname}
                </h3>
                <p className="text-[#A89C6C] paragraph font-light w-full lg:w-[82%] mb-5 lg:mb-0">
                  {AboutData.cmrank}
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
                src={AboutData.cmimg.url}
                className="w-full md:w-[60%] lg:w-full mx-auto my-0 object-cover h-full md:h-[500px]"
                alt={AboutData.cmimg.fileName}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Approch Section Start */}
      <div className="approachSection">
        <img
          className="absolute top-0 right-0 left-0 bottom-0 w-full h-full !object-cover -z-[20]"
          src={AboutData.approachbanner.url}
          alt={AboutData.approachbanner.fileName}
        />
        <div className="container">
          <h6 className="font-normal leading-normal subHeading text-[#A89C6C]">
            {AboutData.approachbreadcrumbs}
          </h6>
          <p className="text-white mt-2 pl-28 subHeading before:hidden">
            {AboutData.approachdesc}
          </p>
          <div className="flex items-start flex-wrap justify-between mb-5 lg:mb-10 xl:mb-14 mt-10 lg:mt-16 xl:mt-20">
            <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-35px)]">
              <div className="flex gap-5 lg:gap-8 items-center">
                <img
                  src={AboutData.approachoneimg.url}
                  className="w-[40px] lg:w-[50px] mb-5 lg:mb-10"
                  alt={AboutData.approachoneimg.fileName}
                />
                <h2 className="text-[16px] xl:text-[20px] leading-[1.3] text-white mb-5 lg:mb-[30px]">
                  {AboutData.approachonetitle}
                </h2>
              </div>
              <p className="paragraph font-light text-white">
                {AboutData.approachonedesc}
              </p>
            </div>
            <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-35px)] mt-10 md:mt-0 xl:mt-0">
              <div className="flex gap-5 lg:gap-8 items-center">
                <img
                  src={AboutDataTwo.approachtwoimg.url}
                  className="w-[40px] lg:w-[50px] mb-5 lg:mb-10"
                  alt={AboutDataTwo.approachtwoimg.fileName}
                />
                <h2 className="text-[16px] xl:text-[20px] leading-[1.3] text-white mb-5 lg:mb-[30px]">
                  {AboutDataTwo.approachtwotitle}
                </h2>
              </div>
              <p className="paragraph font-light text-white">
                {AboutDataTwo.approachtwodesc}
              </p>
            </div>
            <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-35px)] mt-10 xl:mt-0">
              <div className="flex gap-5 lg:gap-8 items-center">
                <img
                  src={AboutDataTwo.approachthreeimg.url}
                  className="w-[35px] lg:w-[40px] mb-5 lg:mb-10"
                  alt={AboutDataTwo.approachthreeimg.fileName}
                />
                <h2 className="text-[16px] xl:text-[20px] leading-[1.3] text-white mb-5 lg:mb-[30px]">
                  {AboutDataTwo.approachthreetitle}
                </h2>
              </div>
              <p className="paragraph font-light text-white">
                {AboutDataTwo.approachthreedesc}
              </p>
            </div>
            <div className="w-full md:w-[calc(50%-25px)] xl:w-[calc(25%-35px)] mt-10 xl:mt-0">
              <div className="flex gap-5 lg:gap-8 items-center">
                <img
                  src={AboutDataTwo.approachfourimg.url}
                  className="w-[40px] lg:w-[50px] mb-5 lg:mb-10"
                  alt={AboutDataTwo.approachfourimg.fileName}
                />
                <h2 className="text-[16px] xl:text-[20px] leading-[1.3] text-white mb-5 lg:mb-[30px]">
                  {AboutDataTwo.approachfourtitle}
                </h2>
              </div>
              <p className="paragraph font-light text-white">
                {AboutDataTwo.approachfourdesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet The Team Section Start */}
      <div className="bg-white py-[60px] lg:py-20 xl:py-[100px]">
        <div className="container">
          <h6 className="font-normal leading-normal subHeading text-[#A89C6C]">
            {AboutDataTwo.teambreadcrumbs}
          </h6>
          <p className=" font-normal mt-2 pl-28 subHeading before:hidden  mb-10 xl:mb-[80px]">
            {AboutDataTwo.teamtitle}
          </p>
          <div className="w-full">
            <div className="relative">
              <div className="flex gap-5 flex-wrap xl:flex-nowrap items-center">
                <div className="w-full xl:w-[35%] pr-0 xl:pr-[75px]">
                  <p className="text-[22px] xl:text-[20px] leading-[1.3] w-full font-medium md:font-normal mb-5 xl:mb-8">
                    {AboutDataTwo.teamdescone}
                  </p>
                  <p className="paragraph font-light w-full mb-5 xl:mb-10">
                    {AboutDataTwo.teamdesctwo}
                  </p>
                  <p className="paragraph font-light w-full mb-5 xl:mb-10">
                    {AboutDataTwo.teamdescthree}
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
                              src={AboutDataTwo.memoneimg.url}
                              className="w-full mb-5 h-[400px] md:h-[300px] lg:h-[350px] xl:h-[390px] object-cover"
                              alt={AboutDataTwo.memoneimg.fileName}
                            />
                            <p className="teamParagraph">
                              {AboutDataTwo.memonebio}
                            </p>
                            <div className="teamGradient bg-[#213A6FCC] backdrop-blur-sm w-full h-[115px] absolute bottom-0 transition-all ease-in-out !duration-1000"></div>
                          </div>
                          <div className="relative md:absolute !w-full mt-[-100px] mb-[40px] md:mb-0 md:mt-0 md:top-0 bottom-[10px] px-5 left-0 right-0 flex items-end">
                            <div className="flex items-end justify-between w-full">
                              <div>
                                <h3 className="text-[14px] xl:text-[16px] text-white leading-[19px] xl:leading-[22px] mb-[10px]">
                                  {AboutDataTwo.memonename}
                                </h3>
                                <p className="text-[12px] lg:text-[14px] leading-normal font-light text-[#A89C6C]">
                                  {AboutDataTwo.memonerank}
                                  <br />
                                  {AboutData.storyspan}
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
                              src={AboutDataTwo.memtwoimg.url}
                              className="w-full mb-5 h-[400px] md:h-[300px] lg:h-[350px] xl:h-[390px] object-cover"
                              alt={AboutDataTwo.memtwoimg.fileName}
                            />
                            <p className="teamParagraph">
                              {AboutDataTwo.memtwobio}
                            </p>
                            <div className="teamGradient bg-[#213A6FCC] backdrop-blur-sm w-full h-[115px] absolute bottom-0 transition-all ease-in-out !duration-1000"></div>
                          </div>
                          <div className="relative md:absolute !w-full mt-[-100px] mb-[40px] md:mb-0 md:mt-0 md:top-0 bottom-[10px] px-5 left-0 right-0 flex justify-center md:justify-between items-end">
                            <div className="flex items-end justify-between w-full">
                              <div>
                                <h3 className="text-[14px] xl:text-[16px] text-white leading-[19px] xl:leading-[22px] mb-[10px]">
                                  {AboutDataTwo.memtwoname}
                                </h3>
                                <p className="text-[12px] lg:text-[14px] leading-normal font-light text-[#A89C6C]">
                                  {AboutDataTwo.memtworank}
                                  <br />
                                  {AboutData.storyspan}
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
                              src={AboutDataTwo.memthreeimg.url}
                              className="w-full mb-5 h-[400px] md:h-[300px] lg:h-[350px] xl:h-[390px] object-cover"
                              alt={AboutDataTwo.memthreeimg.fileName}
                            />
                            <p className="teamParagraph">
                              {AboutDataThird.memthreebio}
                            </p>
                            <div className="teamGradient bg-[#213A6FCC] backdrop-blur-sm w-full h-[115px] absolute bottom-0 transition-all ease-in-out !duration-1000"></div>
                          </div>
                          <div className="relative md:absolute !w-full mt-[-100px] mb-[50px] md:mb-0 md:mt-0 md:top-0 bottom-[10px] px-5 left-0 right-0 flex justify-center md:justify-between items-end">
                            <div className="flex items-end justify-between w-full">
                              <div>
                                <h3 className="text-[14px] xl:text-[16px] text-white leading-[19px] xl:leading-[22px] mb-[10px]">
                                  {AboutDataTwo.memthreename}
                                </h3>
                                <p className="text-[12px] lg:text-[14px] leading-normal font-light text-[#A89C6C]">
                                  {AboutDataTwo.memthreerank}
                                  <br />
                                  {AboutData.storyspan}
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
                              src={AboutDataThird.memfourimg.url}
                              className="w-full mb-5 h-[400px] md:h-[300px] lg:h-[350px] xl:h-[390px] object-cover"
                              alt={AboutDataThird.memfourimg.fileName}
                            />
                            <p className="teamParagraph">
                              {AboutDataThird.memfourbio}
                            </p>
                            <div className="teamGradient bg-[#213A6FCC] backdrop-blur-sm w-full h-[115px] absolute bottom-0 transition-all ease-in-out !duration-1000"></div>
                          </div>
                          <div className="relative md:absolute !w-full mt-[-100px] mb-[40px] md:mb-0 md:mt-0 md:top-0 bottom-[10px] px-5 left-0 right-0 flex justify-center md:justify-between items-end">
                            <div className="flex items-end justify-between w-full">
                              <div>
                                <h3 className="text-[14px] xl:text-[16px] text-white leading-[19px] xl:leading-[22px] mb-[10px]">
                                  {AboutDataThird.memfourname}
                                </h3>
                                <p className="text-[12px] lg:text-[14px] leading-normal font-light text-[#A89C6C]">
                                  {AboutDataThird.memfourrank}
                                  <br />
                                  {AboutData.storyspan}
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

      {/* Culture & Values Section Start */}
      <div className="bg-[#F3F0E7] py-[60px] lg:py-20 xl:py-[100px]">
        <div className="container">
          <h6 className="font-normal leading-normal subHeading text-[#A89C6C]">
            {AboutDataThird.culturebreadcrumbs}
          </h6>
          <p className="paragraph text-black font-normal mt-2 pl-28 subHeading before:hidden mb-5 lg:mb-10 xl:mb-16">
            {AboutDataThird.culturetitle}
          </p>
          <p className="paragraph font-light w-full lg:w-[52%] mb-10 xl:mb-20">
            {AboutDataThird.culturedesc}
          </p>

          <div className="AccordionRow">
            <div className="w-full md:w-1/2 lg:w-[65%]">
              <img
                src={AboutDataThird.cultureimg.url}
                className="AccordionImage"
                alt={AboutDataThird.cultureimg.fileName}
              />
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

      {/* Footer */}
      <Footer HeaderData={HeaderData} />
    </>
  );
};

export async function getStaticProps() {
  const HeaderData = await getHeader(false);
  const AboutData = await getOurstory(false);
  const AboutDataTwo = await getStorybelow(false);
  const AboutDataThird = await getAboutsecond(false);
  return {
    props: {
      HeaderData: HeaderData || [],
      AboutData: AboutData || [],
      AboutDataTwo: AboutDataTwo || [],
      AboutDataThird: AboutDataThird || [],
    },
    revalidate: 60,
  };
}

export default About;
