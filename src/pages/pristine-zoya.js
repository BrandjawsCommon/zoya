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

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { RiArrowRightSLine, RiCloseLine } from "react-icons/ri";
import ContactForm from "../components/ContactForm/ContactForm";
import BrochureForm from "../components/BrochureForm/Brochureform";
import Floorplanform from "../components/FloorplanForm/Floorplanform";
import Registerinterestform from "../components/RegisterInterestForm/Registerinterestform";

const AmmenitiesData = [
  {
    picture: "/health-club.svg",
    title: "Health Club",
  },
  {
    picture: "/Sauna.svg",
    title: "Sauna for Him & Her",
  },
  {
    picture: "/Swimming.svg",
    title: "Swimming Pool",
  },
  {
    picture: "/Outdoor.svg",
    title: "Outdoor Poolside Cinema",
  },
  {
    picture: "/Play-Area.svg",
    title: "Kids Play Area",
  },
  {
    picture: "/health-club.svg",
    title: "Health club",
  },
  {
    picture: "/BBQ.svg",
    title: "Barbeque Area",
  },
  {
    picture: "/Room.svg",
    title: "Recreation Room",
  },
  {
    picture: "/Outdoor.svg",
    title: "Outdoor Poolside Cinema",
  },
  {
    picture: "/Room.svg",
    title: "Recreation Room",
  },
  {
    picture: "/Yoga.svg",
    title: "Outdoor Yoga",
  },
  {
    picture: "/BBQ.svg",
    title: "Barbeque Area",
  },
  {
    picture: "/Room.svg",
    title: "Recreation Room",
  },
  {
    picture: "/Room.svg",
    title: "Recreation Room",
  },
  {
    picture: "/Room.svg",
    title: "Recreation Room",
  },
  {
    picture: "/Yoga.svg",
    title: "Outdoor Yoga",
  },
  {
    picture: "/BBQ.svg",
    title: "Barbeque Area",
  },
  {
    picture: "/Room.svg",
    title: "Recreation Room",
  },
  {
    picture: "/Room.svg",
    title: "Recreation Room",
  },
  {
    picture: "/Room.svg",
    title: "Recreation Room",
  },
];

const GalleryData = [
  {
    breadcrumbs: "gallery",
    picture: "/Gallery-Image.jpg",
    tag: "interior",
    title:
      "An exclusive collection of podium residences with a private pool and garden.",
    paginationText: "Apartments",
  },
  {
    breadcrumbs: "gallery",
    picture: "/Gallery-Image.jpg",
    tag: "interior",
    title:
      "An exclusive collection of podium residences with a private pool and garden.",
    paginationText: "Amenities",
  },
  {
    breadcrumbs: "gallery",
    picture: "/Gallery-Image.jpg",
    tag: "interior",
    title:
      "An exclusive collection of podium residences with a private pool and garden.",
    paginationText: "Interiors",
  },
  {
    breadcrumbs: "gallery",
    picture: "/Gallery-Image.jpg",
    tag: "interior",
    title:
      "An exclusive collection of podium residences with a private pool and garden.",
    paginationText: "Exteriors",
  },
];

const Pristinezoya = () => {
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

  // const togglePopup = (id) => {
  //   setVisiblePopups((prevState) => ({
  //     ...prevState,
  //     [id]: !prevState[id],
  //   }));
  // };

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

      {/* Banner Section */}
      <section className="w-full h-[100vh] Banner relative">
        <img src="/Zoya.png" class="w-full h-full object-cover" />
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-[0.3] md:opacity-[0.5]"></div>
      </section>

      {/* About Section */}
      <section className="py-[80px] md:py-[60px] lg:py-28 relative">
        <div className="container">
          <div className="flex items-start flex-wrap">
            <div className="w-full lg:w-[50%]">
              <h6 className="text-themeDarkBeige subHeading uppercase mb-14">
                ABOUT THE PROJECT
              </h6>
              <h4 className="text-[22px] md:text-[26px] leading-[1.3] my-5 !mb-0 lg:my-10 xl:mt-12 xl:mb-9">
                IMAGINE A HOME <br /> AS ORIGINAL AS YOU ARE.
              </h4>
              <p className="paragraph font-light text-black my-8 max-w-[610px]">
                Imagine a home where serenity meets space; where every day feels
                like a fresh start. A place within a flourishing greenscape. A
                life away from city’s chaos, and yet close to everything you
                want. A nest for those who crave a blank canvas for their
                dreams. This could be yours. Welcome to a place designed for
                effortless living and endless possibilities.
              </p>
              <p className="paragraph font-light text-black my-8">
                An exclusive collection of 1 & 2 Bedroom aprtments with unique 3
                bedroom podium residences with a private pool.
              </p>

              <div className="flex flex-wrap gap-6">
                <button
                  className="w-full md:w-max Btn !flex items-center gap-[20px] md:gap-[12px] justify-center"
                  onClick={() => togglePopup(1)}
                >
                  Download Brochure
                  <span>
                    <img src="/gallery.svg" alt="" />
                  </span>
                </button>

                {visiblePopups[1] && (
                  <div className="SectionPopup h-screen fixed top-0 bottom-0 right-0 left-0 z-[99999] flex items-center justify-center px-5">
                    <div className="max-w-[750px] w-full mx-auto rounded-[40px] py-[80px] px-[30px] md:px-[60px] bg-themeSoftPeach relative">
                      <button
                        className="absolute top-8 right-8 text-[30px] text-themeLapisBlue"
                        onClick={() => togglePopup(1)}
                      >
                        <RiCloseLine />
                      </button>
                      <div className="mb-14">
                        <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
                          Download Brochure
                        </h6>
                        <p className=" text-black font-normal pl-28">
                          Fill in your details to download brochure
                        </p>
                      </div>
                      <BrochureForm togglePopup={() => togglePopup(1)} />
                      {/* <ContactForm /> */}
                    </div>
                  </div>
                )}

                <button
                  className="w-full md:w-max Btn !flex items-center gap-[20px] md:gap-[12px] justify-center"
                  onClick={() => togglePopup(2)}
                >
                  Download Floorplan <img src="/floor.svg" alt="" />
                </button>

                {visiblePopups[2] && (
                  <div className="SectionPopup h-screen fixed top-0 bottom-0 right-0 left-0 z-[99999] flex items-center justify-center px-5">
                    <div className="max-w-[750px] w-full mx-auto rounded-[40px] py-[80px] px-[30px] md:px-[60px] bg-themeSoftPeach relative">
                      <button
                        className="absolute top-8 right-8 text-[30px] text-themeLapisBlue"
                        onClick={() => togglePopup(2)}
                      >
                        <RiCloseLine />
                      </button>
                      <div className="mb-14">
                        <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
                          Download Floorplan
                        </h6>
                        <p className=" text-black font-normal pl-28">
                          Fill in your details to download floorplan
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
                src="/Description.jpg"
                class="w-full h-[500px] object-cover"
              />
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
                alt=""
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

      {/* Neighbourhood Section */}
      <div className="py-[80px] md:py-[100px] overflow-hidden relative h-max flex">
        <div className="container">
          <div className="flex items-center lg:flex-row flex-col gap-24 lg:gap-10">
            <div className="w-full lg:w-1/2 flex-col flex">
              <div>
                <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
                  Neighbourhood
                </h6>
                <p className=" text-black font-normal pl-16 md:pl-28">
                  The place to be.
                </p>
              </div>

              <p className="text-[14px] md:text-[18px] font-light mt-5 lg:mt-8 mb-5 lg:mb-10 max-w-[350px] md:max-w-[550px]">
                Pristine is woven in Al Furjan’s fabric and is minutes away from
                major landmarks of Dubai.
              </p>

              <div className="flex flex-wrap gap-5">
                <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)]">
                  <h3 className="text-[14px] lg:text-[16px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-normal text-[#A89C6C]">
                    03 mins.
                  </h3>
                  <p className="text-[12px] lg:text-[14px] leading-[18.18px] lg:leading-[20.19px] uppercase font-medium mt-2">
                    Al Furjan metro station
                  </p>
                </div>
                <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)]">
                  <h3 className="text-[14px] lg:text-[16px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-normal text-[#A89C6C]">
                    04 mins.
                  </h3>
                  <p className="text-[12px] lg:text-[14px] leading-[18.18px] lg:leading-[20.19px] uppercase font-medium mt-2">
                    IBN BATTUTA mall
                  </p>
                </div>
                <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)]">
                  <h3 className="text-[14px] lg:text-[16px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-normal text-[#A89C6C]">
                    15 mins.
                  </h3>
                  <p className="text-[12px] lg:text-[14px] leading-[18.18px] lg:leading-[20.19px] uppercase font-medium mt-2">
                    The beach JBr
                  </p>
                </div>
                <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] mt-0">
                  <h3 className="text-[14px] lg:text-[16px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-normal text-[#A89C6C]">
                    18 mins.
                  </h3>
                  <p className="text-[12px] lg:text-[14px] leading-[18.18px] lg:leading-[20.19px] uppercase font-medium mt-2">
                    Palm jumeirah
                  </p>
                </div>
                <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] mt-0">
                  <h3 className="text-[14px] lg:text-[16px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-normal text-[#A89C6C]">
                    28 mins.
                  </h3>
                  <p className="text-[12px] lg:text-[14px] leading-[18.18px] lg:leading-[20.19px] uppercase font-medium mt-2">
                    downtown dubai
                  </p>
                </div>
                <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] mt-0">
                  <h3 className="text-[14px] lg:text-[15px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-normal text-[#A89C6C]">
                    30 mins.
                  </h3>
                  <p className="text-[12px] lg:text-[14px] leading-[18.18px] lg:leading-[20.19px] uppercase font-medium mt-2">
                    al maktoum airport
                  </p>
                </div>
                <div className="w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] mt-0">
                  <h3 className="text-[12px] lg:text-[16px] leading-[20.18px] lg:leading-[24.19px] xl:leading-[28.18px] font-normal text-[#A89C6C]">
                    30 mins.
                  </h3>
                  <p className="text-[12px] lg:text-[14px] leading-[18.18px] lg:leading-[20.19px] uppercase font-medium mt-2">
                    Dubai international airport
                  </p>
                </div>
              </div>
            </div>

            {/* <Link className="NeighbourhoodSection w-full lg:w-1/2 hidden md:flex" target="_blank" href="https://www.google.com/maps/place/Prestine+By+Zoya/@25.0208409,55.1544494,1022m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3e5f6d002ac787e7:0xef8939b9a40cd36e!8m2!3d25.0208409!4d55.1544494!16s%2Fg%2F11w2c_ylg_?entry=ttu">
            </Link> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4448.624219603155!2d55.1544494!3d25.0208409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d002ac787e7%3A0xef8939b9a40cd36e!2sPrestine%20By%20Zoya!5e1!3m2!1sen!2s!4v1723809469142!5m2!1sen!2s"
              className="absolute right-0 bottom-0 w-[50%] h-[420px] hidden lg:block"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <Link
              className="cursor-pointer w-full lg:w-1/2 block lg:hidden"
              target="_blank"
              href="https://www.google.com/maps/place/Prestine+By+Zoya/@25.0208409,55.1544494,1022m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3e5f6d002ac787e7:0xef8939b9a40cd36e!8m2!3d25.0208409!4d55.1544494!16s%2Fg%2F11w2c_ylg_?entry=ttu"
            >
              {/* <img
                src="/mobile-map.png"
                className="w-full"
              /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4448.624219603155!2d55.1544494!3d25.0208409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d002ac787e7%3A0xef8939b9a40cd36e!2sPrestine%20By%20Zoya!5e1!3m2!1sen!2s!4v1723809469142!5m2!1sen!2s"
                className="w-[100%] h-[600px]"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Link>
          </div>
        </div>
      </div>

      {/* RoofTop Setion */}
      <div className="bg-white py-[60px] lg:py-20 xl:py-[100px] overflow-hidden h-max">
        <div className="container">
          <div>
            <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
              AMENITIES
            </h6>
            <p className=" text-black font-normal pl-16 md:pl-28">
              Time to unwind
            </p>
          </div>

          <p className="text-[16px] md:text-[18px] font-light mt-5 lg:mt-8 mb-5 lg:mb-10 max-w-[350px] md:max-w-max">
            Find your fix from a bouquet of rooftop amenities at Pristine, where
            there’s something for everyone.
          </p>

          {/* {AmmenitiesData.map((item, i) => {
              return (
                <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px] ">
                  <img src={item.picture} className="w-full max-w-[30px]" />
                  <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                    {item.title}
                  </p>
                </div>
              );
            })} */}
          <div className="w-full flex flex-wrap h-max">
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px] ">
              <FaVanShuttle className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Shuttle Service <br /> (to and from the metro station)
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <FaWifi className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Wifi-enabled <br /> common areas
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <HiOutlineBuildingStorefront className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Retail Outlets
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <SiAdguard className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                24*7 Security
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <FaDog className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Pet Friendly
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <GrLounge className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Grand Lobby
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <GiPostOffice className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Residents Lounge
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <PiElevatorLight className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                3 High Speed <br /> Elevators
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <LuLampCeiling className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                3.3 M <br /> Ceiling Heights
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <FaTableColumns className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Efficient <br /> floor plans
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <MdOutlineBathroom className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Ensuite for all <br /> Rooms + powder <br /> Room
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <MdOutlineLocalLaundryService className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Separate <br /> laundry <br /> room
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <GoPeople className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Low-density <br /> building
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <MdOutlinePool className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Private Pool
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <RxCornerTopLeft className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Corner Plot
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <MdOutlineSolarPower className="text-themeDarkBeige text-2xl" />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Solar Power <br /> Powerred
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <CgGym
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Panoramic Gym
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <MdOutlineBathtub
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Sauna for <br /> Him & Her
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <FaSwimmingPool
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Adult Swimming <br /> Pool
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <PiSwimmingPoolBold
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Kids Swimming <br /> Pool
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <TbPlayFootball
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Outdoor Yoga
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <GrYoga
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Kids Play <br /> Area
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <GiBarbecue
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Barbeque
                <br /> Area
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <MdOutlineSportsEsports
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Sports Room
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <MdGolfCourse
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Mini Golf <br /> Course
              </p>
            </div>
            <div className="w-[50%] md:w-[33%] lg:w-[25%] flex flex-row gap-3 md:gap-4 items-center py-[20px]">
              <GiTheaterCurtains
                MdOutlineSolarPower
                className="text-themeDarkBeige text-2xl"
              />
              <p className="text-[14px] leading-[18.18px] font-medium text-themeDarkBeige">
                Outdoor Poolside <br /> Cinema
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Single Image */}
      <img
        src="/Single-Image.jpg"
        className="hidden md:block w-full h-[400px] lg:h-full object-cover object-[-100px] md:object-[-50px] lg:object-left"
      />

      <img
        src="/swim-mbl.png"
        className="block md:hidden w-full h-full object-cover md:object-[-50px] lg:object-left"
      />

      {/* Bottom Bar Section */}
      <div className="w-full h-max py-5 bg-themeLapisBlue fixed bottom-0 flex items-center !z-[999]">
        <div className="container flex justify-between items-center flex-nowrap md:flex-wrap gap-0 md:gap-7">
          <div className="flex gap-0 md:gap-7 items-center ">
            <Link href="/pristine-zoya">
              <img
                src="/pristine-logo.png"
                className="max-w-[100px] lg:max-w-[200px]"
                alt=""
              />
            </Link>

            <p className="max-w-[220px] text-white font-light hidden md:block">
              A collection of apartment residences with maid’s room based in Al
              Furjan, Dubai.
            </p>
          </div>

          <div className="flex gap-7 items-center ">
            <div className="hidden lg:block">
              <p className="text-white uppercase font-normal">Apartments</p>
              <p className="text-themeDarkBeige uppercase font-medium">
                Project Type
              </p>
            </div>
            <div className="hidden lg:block">
              <p className="text-white uppercase font-normal">67</p>
              <p className="text-themeDarkBeige uppercase font-medium">Units</p>
            </div>
            <div className="hidden lg:block">
              <p className="text-white uppercase font-normal">
                Al Furjan, Dubai
              </p>
              <p className="text-themeDarkBeige uppercase font-medium">
                Location
              </p>
            </div>
            <div className="hidden lg:block">
              <p className="text-white uppercase font-normal">Q4, 2024</p>
              <p className="text-themeDarkBeige uppercase font-medium">
                Completion
              </p>
            </div>
            <button
              onClick={() => togglePopup(3)}
              className="text-white font-medium bg-themeDarkBeige !text-[12px] Btn"
            >
              Register Your Interest
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
                      register your interest
                    </h6>
                    <p className=" text-black font-normal pl-28">
                      Register your interest in our properties
                    </p>
                  </div>
                  <Registerinterestform togglePopup={() => togglePopup(3)} />
                  {/* <ContactForm /> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pristinezoya;
