/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { FaChevronRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import ContactForm from "../components/ContactForm/ContactForm";
import { RiArrowRightSLine, RiCloseLine } from "react-icons/ri";
import Registerinterestform from "../components/RegisterInterestForm/Registerinterestform";
import Bookviewform from "../components/BookViewing/BookViewForm";
import Salescallform from "../components/SalesCallForm/Salescallform";
import { getHeader, getHome, getMediaCenter } from "../libs/contentful/api";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Index = ({ HomeData, HeaderData, MediacenterData }) => {
  // console.log(HomeData,"HomeData");

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
    setVisiblePopups((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <Head>
        <title>Home - Zoya</title>
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
      <section className="w-full h-screen Banner relative">
        <video
          src={HomeData.banner.url}
          autoPlay="true"
          playsinline="true"
          loop="true"
          muted="true"
          class="w-full h-full object-cover"
        ></video>
      </section>

      {/* About Section Start */}
      <section className="py-[60px] lg:py-28 relative">
        <div className="container">
          <div className="flex items-start flex-wrap">
            <div className="w-full lg:w-[50%]">
              <h6 className="text-themeDarkBeige subHeading uppercase mb-10 md:mb-14">
                {HomeData.abouttop}
              </h6>
              <h4 className="text-[22px] md:text-[26px] leading-[1.3] !font-medium my-5 !mb-0 lg:my-10 xl:mt-12 xl:mb-9">
                {HomeData.welcomestart}
                <span className="text-themeDarkBeige">
                  {" "}
                  {HomeData.welcomemid}{" "}
                </span>
                {HomeData.welcomeend}
              </h4>
              <p className="paragraph font-light text-black my-8">
                {HomeData.aboutpara}
              </p>
              <div className="flex justify-between mb-9 flex-wrap md:flex-nowrap About_Section_Counter">
                <div className="flex flex-wrap justify-between py-4 md:py-0 items-baseline w-full">
                  <h4 className="text-themeDarkBeige md:w-full">
                    {HomeData.yearvalue}
                    <span className="text-[22px] leading-[1.2]">
                      {HomeData.yeartext}
                    </span>
                  </h4>
                  <p className="text-base font-raleway text-black font-light mt-3">
                    {HomeData.yeardetail}
                  </p>
                </div>
                <div className="flex flex-wrap justify-between py-4 md:py-0 items-baseline w-full">
                  <h4 className="text-themeDarkBeige md:w-full">
                    {HomeData.unitsvalue}
                    <span className="text-[22px] leading-[1.2]">
                      {HomeData.unitstext}
                    </span>
                  </h4>
                  <p className="text-base font-raleway text-black font-light mt-3">
                    {HomeData.unitsdetail}
                  </p>
                </div>
                <div className="flex flex-wrap justify-between py-4 md:py-0 items-baseline w-full">
                  <h4 className="text-themeDarkBeige md:w-full">
                    {HomeData.areavalue}
                    <span className="text-[22px] leading-[1.2]">
                      {HomeData.areatext}
                    </span>
                  </h4>
                  <p className="text-base font-raleway text-black font-light mt-3">
                    {HomeData.areadetail}
                  </p>
                </div>
              </div>

              <Link className="Btn" href="/about">
                {HomeData.aboutbtn}
              </Link>
            </div>
            <div className="w-full lg:w-[50%] pt-14 md:pt-14 pl-0 lg:pl-10 xl:pl-24">
              <video
                src={HomeData.aboutvid.url}
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
            src={HomeData.logo.url}
            alt={HomeData.logo.fileName}
          />
        </div>
      </section>

      {/* Portfolio Section Start */}
      <Link href="/pristine-zoya">
        <section className="h-[100vh] md:h-screen relative flex items-center justify-center portfolio_Section">
          <img
            class="w-full h-full object-cover"
            src={HomeData.projectimg.url}
            alt={HomeData.projectimg.fileName}
          />
          <div className="absolute z-10 w-full bottom-[100px]">
            <div className="container relative">
              <div className="absolute Portfolio_Image">
                <img
                  className="w-full h-full object-contain max-w-[250px]"
                  src={HomeData.projectlogo.url}
                  alt={HomeData.projectlogo.fileName}
                />
              </div>
              <div className="flex flex-wrap md:flex-nowrap gap-7 md:gap-0 justify-between items-end Content_Box">
                <div className="w-full">
                  <p className="text-white text-lg">{HomeData.projectdesc}</p>
                  <div className="PortfolioSection flex flex-wrap gap-6 md:gap-10 mt-10 items-center">
                    <div>
                      <p className="uppercase text-lg font-normal text-white mb-2">
                        {HomeData.projecttype}
                      </p>
                      <p className="text-base text-themeDarkBeige uppercase">
                        {HomeData.typevalue}
                      </p>
                    </div>
                    <div>
                      <p className="uppercase text-lg font-normal text-white mb-2">
                        {HomeData.prjctunit}
                      </p>
                      <p className="text-base text-themeDarkBeige uppercase">
                        {HomeData.unitvalue}
                      </p>
                    </div>
                    <div>
                      <p className="uppercase text-lg font-normal text-white mb-2">
                        {HomeData.projectlocation}
                      </p>
                      <p className="text-base text-themeDarkBeige uppercase">
                        {HomeData.locationvalue}
                      </p>
                    </div>
                    <div>
                      <p className="uppercase text-lg font-normal text-white mb-2">
                        {HomeData.projecttime}
                      </p>
                      <p className="text-base text-themeDarkBeige uppercase">
                        {HomeData.timevalue}
                      </p>
                    </div>
                    <div className="Portfolio_Icon w-fit">
                      <a
                        href="#."
                        className="Arrow_Icon flex w-[50px] h-[50px] md:h-[60px] md:w-[60px] items-center justify-center rounded-[50px] border-2 border-white text-[22px] text-white"
                      >
                        <FaChevronRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Link>

      {/* Explore Section Start */}
      <section className="py-20 bg-themeSoftPeach Home_IconBox">
        <div className="container">
          <div className="flex justify-between flex-wrap gap-y-11 xl:gap-0 items-start">
            <div className="iconBox flex gap-5 items-center">
              <div className="BoxContent">
                <h6 className="text-themeDarkBeige lineeffect uppercase mb-2">
                  {HomeData.prjctfeatone}
                </h6>
                <p className="pl-24">{HomeData.prjctfeatonedesc}</p>
              </div>
            </div>

            <div className="PopUp_Box">
              <button
                className="PopupButton"
                href="#."
                onClick={() => togglePopup(1)}
              >
                <div className="iconBox flex gap-5 items-center">
                  <div className="icon">
                    {" "}
                    <img src="/Clock.png" alt="clock" />
                  </div>
                  <div className="BoxContent text-left">
                    <h6 className="arroweffect text-themeDarkBeige mb-2 flex gap-2 items-center Fast_animate">
                      {HomeData.prjctfeattwo} <RiArrowRightSLine />
                    </h6>
                    <p>{HomeData.prjctfeattwodesc}</p>
                  </div>
                </div>
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
                        {HomeData.prjctfeattwo}
                      </h6>
                      <p className=" text-black font-normal pl-28">
                        {HomeData.prjctfeattwodesc}
                      </p>
                    </div>
                    <Bookviewform togglePopup={() => togglePopup(1)} />
                  </div>
                </div>
              )}
            </div>

            <div className="PopUp_Box">
              <button
                className="PopupButton"
                href="#."
                onClick={() => togglePopup(2)}
              >
                <div className="iconBox flex gap-5 items-center">
                  <div className="icon">
                    <img src="/Video.png" alt="video icon" />
                  </div>
                  <div className="BoxContent text-left">
                    <h6 className="arroweffect text-themeDarkBeige mb-2 flex gap-2 items-center Fast_animate">
                      {HomeData.prjctfeatthree} <RiArrowRightSLine />
                    </h6>
                    <p>{HomeData.prjctfeatthreedesc}</p>
                  </div>
                </div>
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
                        {HomeData.prjctfeatthree}
                      </h6>
                      <p className=" text-black font-normal pl-28">
                        {HomeData.prjctfeatthreedesc}
                      </p>
                    </div>
                    <Salescallform togglePopup={() => togglePopup(2)} />
                  </div>
                </div>
              )}
            </div>

            <div className="PopUp_Box">
              <button
                className="PopupButton"
                href="#."
                onClick={() => togglePopup(3)}
              >
                <div className="iconBox flex gap-5 items-center">
                  <div className="icon">
                    <img src="/Account.png" alt="account icon" />
                  </div>
                  <div className="BoxContent text-left">
                    <h6 className="arroweffect text-themeDarkBeige mb-2 flex gap-2 items-center Fast_animate">
                      {HomeData.prjctfeatfour} <RiArrowRightSLine />
                    </h6>
                    <p>{HomeData.prjctfeatfourdesc}</p>
                  </div>
                </div>
              </button>

              {visiblePopups[3] && (
                <div className="SectionPopup h-screen fixed top-0 bottom-0 right-0 left-0 z-[99999] flex items-center justify-center px-5">
                  <div className="PopUpCard max-w-[750px] w-full mx-auto rounded-[40px] py-[80px] px-[30px] md:px-[60px] bg-themeSoftPeach relative">
                    <button
                      className="absolute top-8 right-8 text-[30px] text-themeLapisBlue"
                      onClick={() => togglePopup(3)}
                    >
                      <RiCloseLine />
                    </button>
                    <div className="mb-14">
                      <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
                        {HomeData.prjctfeatfour}
                      </h6>
                      <p className=" text-black font-normal pl-28">
                        {HomeData.prjctfeatfourdesc}
                      </p>
                    </div>
                    <Registerinterestform togglePopup={() => togglePopup(3)} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Section Start */}
      <section className="py-20 spotlightSection bg-white">
        <div className="container">
          <div className="Cta_Section w-full flex flex-wrap gap-6 md:gap-0 justify-between items-center mb-20 md:mb-20 z-10 relative">
            <div>
              <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
                {MediacenterData.title}
              </h6>
              <p className=" text-black font-normal md:pl-28  pl-16">
                {MediacenterData.desc}
              </p>
            </div>
            <Link className="Btn" href="/media-center">
              {MediacenterData.btn}
            </Link>
          </div>
          <div className="w-full">
            <Swiper
              slidesPerView={4}
              loop={false}
              spaceBetween={30}
              breakpoints={{
                290: {
                  slidesPerView: 1.5,
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
              {MediacenterData.allnewsCollection.items.map((item, news) => {
                return (
                  <SwiperSlide key={news}>
                    <Link href={item.newslink} target="_blank">
                      <img
                        className="w-full h-[300px] object-cover"
                        src={item.newsimg.url}
                        alt={item.newsimg.fileName}
                      />
                      <div className="flex justify-between mt-3">
                        <p className="font-light text-sm">{item.newsdate}</p>
                        <p className="font-normal text-sm">{item.newstype}</p>
                      </div>
                      <p className="text-sm font-normal text-black my-4 mb-3">
                        {item.newstitle}
                      </p>
                      <Link
                        className="font-normal text-lg !text-themeDarkBeige animate flex gap-3 items-center"
                        href={item.newslink}
                        target="_blank"
                      >
                        {item.newsbtn}
                        <FaArrowRight />
                      </Link>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Regirster Section Start */}
      <section className="py-20 RegisterMainSection relative overlay">
        <img
          className="absolute top-0 right-0 left-0 bottom-0 w-full h-full object-cover -z-[20]"
          src={HomeData.bottombanner.url}
          alt={HomeData.bottombanner.fileName}
        />
        <div className="container">
          <div className="flex flex-wrap gap-9 md:gap-0 justify-between">
            <div className="w-full md:w-[45%] hide_Br">
              <div className="max-w-full md:max-w-[400px]">
                <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
                  {HomeData.registertext}
                </h6>
                <p className="text-white font-normal pl-28">
                  {HomeData.regsiterdesc}
                </p>
              </div>
            </div>
            <div className="w-full md:w-[55%]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer HeaderData={HeaderData} />
    </>
  );
};

export async function getStaticProps() {
  const HeaderData = await getHeader(false);
  const HomeData = await getHome(false);
  const MediacenterData = await getMediaCenter(false);
  return {
    props: {
      HeaderData: HeaderData || [],
      HomeData: HomeData || [],
      MediacenterData: MediacenterData || [],
    },
    revalidate: 60,
  };
}

export default Index;
