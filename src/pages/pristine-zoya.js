/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";
import Head from "next/head";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { SiAdguard } from "react-icons/si";
import { GrLounge } from "react-icons/gr";
import { GiPostOffice } from "react-icons/gi";
import { PiElevatorLight } from "react-icons/pi";
import { FaDog } from "react-icons/fa6";
import { LuLampCeiling } from "react-icons/lu";
import { FaTableColumns } from "react-icons/fa6";
import { MdOutlineBathroom } from "react-icons/md";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { MdOutlinePool } from "react-icons/md";
import { FaVanShuttle } from "react-icons/fa6";
import { RxCornerTopLeft } from "react-icons/rx";
import { MdOutlineSolarPower } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { MdOutlineBathtub } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { PiSwimmingPoolBold } from "react-icons/pi";
import { TbPlayFootball } from "react-icons/tb";
import { GrYoga } from "react-icons/gr";
import { GiBarbecue } from "react-icons/gi";
import { MdOutlineSportsEsports } from "react-icons/md";
import { MdGolfCourse } from "react-icons/md";
import { GiTheaterCurtains } from "react-icons/gi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { RiArrowRightSLine, RiCloseLine } from "react-icons/ri";
import ContactForm from "../components/ContactForm/ContactForm";
import BrochureForm from "../components/BrochureForm/Brochureform";
import Floorplanform from "../components/FloorplanForm/Floorplanform";
import Registerinterestform from "../components/RegisterInterestForm/Registerinterestform";
import {
  getHeader,
  getHome,
  getPristine,
  getPristineBelow,
} from "../libs/contentful/api";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Pristinezoya = ({
  PristineData,
  PristineBelowData,
  HeaderData,
  HomeData,
}) => {
  // console.log(PristineBelowData, "PristineBelowData");

  const GalleryData = [
    {
      breadcrumbs: `${PristineData.carouselbreadcrumbs}`,
      picture: `${PristineData.carouseloneimg.url}`,
      title: `${PristineData.carouselonetitle}`,
      paginationText: `${PristineData.carouselonepagination}`,
    },
    {
      breadcrumbs: `${PristineData.carouselbreadcrumbs}`,
      picture: `${PristineData.carouseltwoimg.url}`,
      title: `${PristineData.carouseltwotitle}`,
      paginationText: `${PristineData.carouseltwopagination}`,
    },
    {
      breadcrumbs: `${PristineData.carouselbreadcrumbs}`,
      picture: `${PristineData.carouselthreeimg.url}`,
      title: `${PristineData.carouselthreetitle}`,
      paginationText: `${PristineData.carouselthreepagination}`,
    },
    {
      breadcrumbs: `${PristineData.carouselbreadcrumbs}`,
      picture: `${PristineData.carouselfourimg.url}`,
      title: `${PristineData.carouselfourtitle}`,
      paginationText: `${PristineData.carouselfourpagination}`,
    },
  ];

  const [visiblePopups, setVisiblePopups] = useState({
    1: false,
    2: false,
    3: false,
  });

  useEffect(() => {
    const isAnyPopupVisible = Object.values(visiblePopups).some(
      (isVisible) => isVisible
    );
    if (isAnyPopupVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [visiblePopups]);

  const togglePopup = (id) => {
    setVisiblePopups((prevState) => {
      const isVisible = !prevState[id];

      const header = document.querySelector("header");

      if (header) {
        if (isVisible) {
          header.classList.add("belowheader");
        } else {
          header.classList.remove("belowheader");
        }
      }

      return {
        ...prevState,
        [id]: isVisible,
      };
    });
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  const handlePaginationClick = (index) => {
    setActiveSlide(index);
    swiperRef.current.swiper.slideTo(index);
  };

  return (
    <>
      <Head>
        <title>Pristine - Zoya</title>
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

      {/* Header  */}
      <Header HeaderData={HeaderData} />

      {/* Banner Section Start */}
      <section className="w-full h-[100vh] Banner relative">
        <img src={PristineData.banner.url} class="w-full h-full object-cover" alt={PristineData.banner.fileName} />
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-[0.3] md:opacity-[0.5]"></div>
      </section>

      {/* About Project Section Start */}
      <section className="py-[80px] md:py-[60px] lg:py-28 relative">
        <div className="container">
          <div className="flex items-start flex-wrap">
            <div className="w-full lg:w-[50%]">
              <h6 className="text-themeDarkBeige subHeading uppercase mb-14">
                {PristineData.aboutbreadcrumbs}
              </h6>
              <h4 className="text-[22px] md:text-[26px] leading-[1.3] my-5 !mb-0 lg:my-10 xl:mt-12 xl:mb-9">
                {PristineData.abouttitile}
              </h4>
              <p className="paragraph font-light text-black my-8 max-w-[610px]">
                {PristineData.aboutdescone}
              </p>
              <p className="paragraph font-light text-black my-8">
                {PristineData.aboutdesctwo}
              </p>

              <div className="flex flex-wrap gap-6">
                <button
                  className="w-full md:w-max Btn !flex items-center gap-[20px] md:gap-[12px] justify-center"
                  onClick={() => togglePopup(1)}
                >
                  {PristineData.btnonetext}
                  <span>
                    <img src="/gallery.svg" alt="gallery" />
                  </span>
                </button>

                {visiblePopups[1] && (
                  <div className="SectionPopup h-screen fixed top-0 bottom-0 right-0 left-0 z-[99999] flex items-center justify-center px-5">
                    <div className="PopUpCard max-w-[750px] w-full mx-auto rounded-[40px] py-[80px] px-[30px] md:px-[60px] bg-themeSoftPeach relative">
                      <button
                        className="absolute top-8 right-8 text-[30px] text-themeLapisBlue"
                        onClick={() => togglePopup(1)}
                      >
                        <RiCloseLine />
                      </button>
                      <div className="mb-14">
                        <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
                          {PristineData.btnonetext}
                        </h6>
                        <p className=" text-black font-normal pl-28">
                          {PristineData.btnonedesc}
                        </p>
                      </div>
                      <BrochureForm togglePopup={() => togglePopup(1)} />
                    </div>
                  </div>
                )}

                <button
                  className="w-full md:w-max Btn !flex items-center gap-[20px] md:gap-[12px] justify-center"
                  onClick={() => togglePopup(2)}
                >
                  {PristineData.btntwotext}
                  <img src="/floor.svg" alt="floor" />
                </button>

                {visiblePopups[2] && (
                  <div className="SectionPopup h-screen fixed top-0 bottom-0 right-0 left-0 z-[99999] flex items-center justify-center px-5">
                    <div className="PopUpCard max-w-[750px] w-full mx-auto rounded-[40px] py-[80px] px-[30px] md:px-[60px] bg-themeSoftPeach relative">
                      <button
                        className="absolute top-8 right-8 text-[30px] text-themeLapisBlue"
                        onClick={() => togglePopup(2)}
                      >
                        <RiCloseLine />
                      </button>
                      <div className="mb-14">
                        <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
                          {PristineData.btntwotext}
                        </h6>
                        <p className=" text-black font-normal pl-28">
                          {PristineData.btntwodesc}
                        </p>
                      </div>
                      <Floorplanform togglePopup={() => togglePopup(2)} />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full lg:w-[50%] pt-14 md:pt-14 pl-0 lg:pl-10 xl:pl-24">
              <img
                src={PristineData.aboutmedia.url}
                class="w-full h-[500px] object-cover"
                alt={PristineData.aboutmedia.fileName}
              />
            </div>
          </div>
        </div>
        <div className="absolute about_img -z-[1] left-0 top-0 bottom-auto md:bottom-0">
          <img
            className="w-full max-w-[100%] md:max-w-[90%] lg:max-w-[65%] xl:max-w-[520px] mx-auto"
            src={PristineData.aboutbg.url}
            alt={PristineData.aboutbg.fileName}
          />
        </div>
      </section>

      {/* Gallery Section Start */}
      <div className="w-full h-screen relative">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          loop={false}
          spaceBetween={0}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        >
          {GalleryData.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                className="w-full h-screen object-cover"
                src={item.picture}
                alt={item.paginationText}
              />
              <div className="w-full h-full absolute top-0 left-0 overlay">
                <div className="container relative z-50 h-[100%] flex flex-col justify-between py-12">
                  <div className="w-full flex flex-col md:flex-row justify-between gap-10 lg:gap-0">
                    <h6 className="text-themeDarkBeige subHeading uppercase">
                      {item.breadcrumbs}
                    </h6>
                    <div className="flex items-center flex-wrap lg:flex-nowrap gap-3 px-3 py-2 rounded-3xl lg:rounded-full border-2 border-white">
                      {GalleryData.map((item, idx) => (
                        <button
                          key={idx}
                          className={`w-[47%] text-white uppercase px-5 py-2 !text-[12px] xl:text-[14px] leading-normal ${activeSlide === idx ? "bg-blue-800" : ""} hover:bg-blue-800 transition-all ease-in-out rounded-full`}
                          onClick={() => handlePaginationClick(idx)}
                        >
                          {item.paginationText}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="w-[70%] md:w-full">
                      <Link
                        href="#"
                        className="uppercase !bg-themeDarkBeige pointer-events-none text-14 lg:text-18 leading-normal text-white px-4 py-1 rounded-full !font-medium !z-50"
                      >
                        {item.paginationText}
                      </Link>
                      <p className="text-white mt-5 w-full text-14 lg:text-18 xl:text-22 leading-tight">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="container relative pb-[30px] md:pb-0">
          <div className="custom-navigation-wrapper flex flex-col md:flex-row gap-3 md:gap-5 absolute bottom-[80px] md:bottom-[ 40px] !z-50 right-[30px] md:right-[10px]">
            <div className="custom-prev swiper-button-prev cursor-pointer w-[40px] md:w-[60px] h-[40px] md:h-[60px] flex justify-center items-center text-white hover:bg-[#ffffff50] transition-all border border-white rounded-full text-[15px] md:text-[20px]">
              <FaAngleLeft />
            </div>
            <div className="custom-next swiper-button-next cursor-pointer w-[40px] md:w-[60px] h-[40px] md:h-[60px] flex justify-center items-center text-white hover:bg-[#ffffff50] transition-all border border-white rounded-full text-[15px] md:text-[20px]">
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>

      {/* Neighbourhood Section Start */}
      <div className="py-[80px] md:py-[100px] overflow-hidden relative h-max flex">
        <div className="container">
          <div className="flex items-center lg:flex-row flex-col gap-24 lg:gap-10">
            <div className="w-full lg:w-1/2 flex-col flex">
              <div>
                <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
                  {PristineData.neighbourbreadcrumbs}
                </h6>
                <p className=" text-black font-normal pl-16 md:pl-28">
                  {PristineData.neighbourtitle}
                </p>
              </div>

              <p className="text-[14px] md:text-[18px] font-light mt-5 lg:mt-8 mb-5 lg:mb-10 max-w-[350px] md:max-w-[550px]">
                {PristineData.neighbourdesc}
              </p>

              <div className="flex flex-wrap gap-5">
                {PristineData.naerlocationCollection.items.map((loc, index) => {
                  return (
                    <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)]" key={index}>
                      <h3 className="text-[14px] lg:text-[16px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-normal text-[#A89C6C]">
                        {loc.title}
                      </h3>
                      <p className="text-[12px] lg:text-[14px] leading-[18.18px] lg:leading-[20.19px] uppercase font-medium mt-2">
                        {loc.link}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <iframe
              src={PristineData.pristinemap}
              className="absolute right-0 bottom-0 w-[50%] h-[420px] hidden lg:block"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <iframe
              src={PristineData.pristinemap}
              className="block lg:hidden w-[100%] h-[600px]"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Ammenities Setion Start */}
      <div className="bg-white py-[60px] lg:py-20 xl:py-[100px] overflow-hidden h-max">
        <div className="container">
          <div>
            <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
              {PristineData.amenitiesbreadcrumbs}
            </h6>
            <p className=" text-black font-normal pl-16 md:pl-28">
              {PristineData.amenitiestitle}
            </p>
          </div>

          <p className="text-[16px] md:text-[18px] font-light mt-5 lg:mt-8 mb-5 lg:mb-10 max-w-[350px] md:max-w-max">
            {PristineData.amenitiesdesc}
          </p>

          <div className="w-full flex flex-wrap h-max">
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px] ">
              <FaVanShuttle className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige md:max-w-[120px]">
                {PristineData.amenityone}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <FaWifi className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineData.amenitytwo}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <HiOutlineBuildingStorefront className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineData.amenitythree}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <SiAdguard className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineData.amenityfour}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <FaDog className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineData.amenityfive}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <GrLounge className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineData.amenitysix}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <GiPostOffice className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineData.amenityseven}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <PiElevatorLight className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineData.amenityeigth}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <LuLampCeiling className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineData.amenitynine}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <FaTableColumns className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineData.amenityten}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <MdOutlineBathroom className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige md:max-w-[120px]">
                {PristineData.amenityeleven}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <MdOutlineLocalLaundryService className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineData.amenitytwelve}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <GoPeople className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineData.amenitythirteen}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <MdOutlinePool className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineData.amenityfourteen}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <RxCornerTopLeft className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineBelowData.amenityfifteen}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <MdOutlineSolarPower className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineBelowData.amenitysixteen}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <CgGym
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineBelowData.amenityseventeen}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <MdOutlineBathtub
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineBelowData.amenityeigtheen}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <FaSwimmingPool
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineBelowData.amenitynineteen}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <PiSwimmingPoolBold
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineBelowData.amenitytwenty}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <TbPlayFootball
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineBelowData.amenitytwentyone}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <GrYoga
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineBelowData.amenitytwentytwo}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <GiBarbecue
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineBelowData.amenitytwentythree}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <MdOutlineSportsEsports
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineBelowData.amenitytwentyfour}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <MdGolfCourse
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineBelowData.amenitytwentyfive}
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <GiTheaterCurtains
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                {PristineBelowData.amenitytwentysix}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Single Image Section Start */}
      <img
        src={PristineBelowData.bottomimg.url}
        alt={PristineBelowData.bottomimg.fileName}
        className="hidden md:block w-full h-[400px] lg:h-full object-cover object-[-100px] md:object-[-50px] lg:object-left"
      />
      <img
        src={PristineBelowData.bottomimgmbl.url}
        alt={PristineBelowData.bottomimgmbl.fileName}
        className="block md:hidden w-full h-full object-cover md:object-[-50px] lg:object-left"
      />

      {/* Bottom Bar Section */}
      <div className="w-full h-max py-5 bg-themeLapisBlue fixed bottom-0 flex items-center !z-[999]">
        <div className="container flex justify-between items-center flex-nowrap md:flex-wrap gap-0 md:gap-7">
          <div className="flex gap-0 md:gap-7 items-center ">
            <Link href="/pristine-zoya">
              <img
                src={PristineBelowData.pristinelogo.url}
                className="max-w-[100px] lg:max-w-[200px]"
                alt={PristineBelowData.pristinelogo.fileName}
              />
            </Link>

            <p className="max-w-[220px] text-white font-light hidden md:block">
              {PristineBelowData.pristineabout}
            </p>
          </div>

          <div className="flex gap-7 items-center ">
            <div className="hidden lg:block">
              <p className="text-white uppercase font-normal">
                {HomeData.projecttype}
              </p>
              <p className="text-themeDarkBeige uppercase font-medium">
                {HomeData.typevalue}
              </p>
            </div>
            <div className="hidden lg:block">
              <p className="text-white uppercase font-normal">
                {HomeData.prjctunit}
              </p>
              <p className="text-themeDarkBeige uppercase font-medium">
                {HomeData.unitvalue}
              </p>
            </div>
            <div className="hidden lg:block">
              <p className="text-white uppercase font-normal">
                {HomeData.projectlocation}
              </p>
              <p className="text-themeDarkBeige uppercase font-medium">
                {HomeData.locationvalue}
              </p>
            </div>
            <div className="hidden lg:block">
              <p className="text-white uppercase font-normal">
                {HomeData.projecttime}
              </p>
              <p className="text-themeDarkBeige uppercase font-medium">
                {HomeData.timevalue}
              </p>
            </div>
            <button
              onClick={() => togglePopup(3)}
              className="text-white font-medium bg-themeDarkBeige !text-[12px] Btn"
            >
              {PristineBelowData.registerbtn}
            </button>

            {visiblePopups[3] && (
              <div className="SectionPopup h-screen fixed top-0 bottom-0 right-0 left-0 z-[99999] flex items-center justify-center px-5">
                <div className="PopUpCard max-w-[750px] w-full mx-auto rounded-[40px] py-[80px] px-[30px] md:px-[60px] bg-themeSoftPeach relative">
                  <button
                    className="absolute top-8 right-8 text-[28px] text-themeLapisBlue"
                    onClick={() => togglePopup(3)}
                  >
                    <RiCloseLine />
                  </button>
                  <div className="mb-14">
                    <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
                      {PristineBelowData.registerbtn}
                    </h6>
                    <p className=" text-black font-normal pl-28">
                      {PristineBelowData.registerbtndesc}
                    </p>
                  </div>
                  <Registerinterestform togglePopup={() => togglePopup(3)} />
                </div>
              </div>
            )}
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
  const PristineData = await getPristine(false);
  const PristineBelowData = await getPristineBelow(false);
  const HomeData = await getHome(false);
  return {
    props: {
      HeaderData: HeaderData || [],
      PristineData: PristineData || [],
      PristineBelowData: PristineBelowData || [],
      HomeData: HomeData || [],
    },
    revalidate: 60,
  };
}

export default Pristinezoya;
