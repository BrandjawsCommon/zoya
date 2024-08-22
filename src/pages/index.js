/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { FaChevronRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ContactForm from "../components/ContactForm/ContactForm";
import { RiArrowRightSLine, RiCloseLine } from "react-icons/ri";
import Registerinterestform from "../components/RegisterInterestForm/Registerinterestform";
import Bookviewform from "../components/BookViewing/BookViewForm";
import Salescallform from "../components/SalesCallForm/Salescallform";

const newsData = [
  {
    picture:
      "https://www.arabianbusiness.com/cloud/2024/07/08/zoya-developments-Dubai-real-estate.jpg",
    title:
      "Dubai real estate: India’s Zoya Developments announces $545m UAE investment plan",
    date: "09th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.arabianbusiness.com/industries/real-estate/dubai-real-estate-indias-zoya-developments-announces-545m-uae-investment-plan",
  },
  {
    picture:
      "https://image.khaleejtimes.com/?uuid=e4f03625-e3e3-5e18-a131-1fccca3d5b54&function=fit&type=preview&source=false&q=75&maxsize=1500&scaleup=0",
    title: "Indian realtor plans Dh2 billion investments in Dubai",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.khaleejtimes.com/business/realty/indian-realtor-plans-dh2-billion-investments-in-dubai",
  },
  {
    picture:
      "https://gulftoday.ae/-/media/gulf-today/images/articles/news/2024/7/5/zoya-developments.ashx?h=450&iar=0&w=750&hash=5C4B62F9AA2FE4F95DE282611DBB0B12",
    title:
      "Indian developer enters into Dubai market, plans over Dhs2b investment",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://gulftoday.ae/business/2024/07/05/indian-developer-enters-into-dubai-market-plans-over-dhs2b-investment",
  },
  {
    picture:
      "https://cdn.gccbusinessnews.com/wp-content/uploads/2024/07/05185033/Zoya-Developments-enters-UAE.jpg",
    title: "Indian real estate firm Zoya Developments enters UAE",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.gccbusinessnews.com/india-based-zoya-developments-in-uae/",
  },
  {
    picture:
      "https://cdn.gccbusinessnews.com/wp-content/uploads/2024/07/05185033/Zoya-Developments-enters-UAE.jpg",
    title:
      "Zoya Developments Makes Landmark Entry into Dubai with Investment of over AED2 billion allocated for the next 3 years",
    date: "07th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.gccbusinessnews.com/india-based-zoya-developments-in-uae/",
  },
  {
    picture:
      "https://www.constructionweekonline.com/cloud/2024/07/08/Soon-to-be-unveiled.jpg",
    title: "Indian developer enters Dubai market, plans AED2bn investment",
    date: "08th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.constructionweekonline.com/projects-tenders/indian-developer-enters-dubai-market-plans-aed2bn-investment",
  },
  {
    picture:
      "https://wp-constructionweekproperty.s3-accelerate.amazonaws.com/cloud/2024/07/05/Soon-to-be-unveiled.jpg",
    title:
      "Indian developer Zoya Developments makes its Dubai debut with $544 million investment",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://property.constructionweekonline.com/indian-developer-zoya-developments-makes-its-dubai-debut-with-544-million-investment/",
  },
  {
    picture:
      "https://www.alkhaleej.ae/sites/default/files/styles/d10_standard/public/2024-07/6155057.jpeg.webp?h=d1ee6398&itok=PXr9XeEJ",
    title:
      "Sustainability and technology are the most important pillars of modern homes",
    date: "",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.alkhaleej.ae/2024-07-10/%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AF%D8%A7%D9%85%D8%A9-%D9%88%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A7%D8%AA-%D8%A3%D9%87%D9%85-%D8%A3%D8%B1%D9%83%D8%A7%D9%86-%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B2%D9%84-%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%D8%A9/%D9%85%D8%AD%D8%B7%D8%A7%D8%AA/%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA",
  },
  {
    picture:
      "https://globaltrendmonitor.com/wp-content/uploads/2024/07/Soon-to-be-unveiled1-696x596.jpg",
    title:
      "Zoya Developments Makes Landmark Entry into Dubai with Investment of over AED 2 Billion allocated for the next 3 years",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://globaltrendmonitor.com/zoya-developments-makes-landmark-entry-into-dubai-with-investment-of-over-aed-2-billion-allocated-for-the-next-3-years/",
  },
  {
    picture:
      "https://asianewstrends.com/wp-content/uploads/2024/07/soon-to-be-unveiled1.jpg?w=723",
    title:
      "Zoya Developments Makes Landmark Entry into Dubai with Investment of over AED 2 Billion allocated for the next 3 years",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://asianewstrends.com/2024/07/05/zoya-developments-makes-landmark-entry-into-dubai-with-investment-of-over-aed-2-billion-allocated-for-the-next-3-years/",
  },
  {
    picture:
      "https://www.bizpreneurme.com/wp-content/uploads/2024/07/L-R-Shoiab-Zoya-Imtiaz1.jpg",
    title:
      "Zoya Developments Makes Landmark Entry into Dubai with Investment of over AED 2 Billion allocated for the next 3 years",
    date: "",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.bizpreneurme.com/zoya-developments-makes-landmark-entry-into-dubai-with-investment-of-over-aed-2-billion-allocated-for-the-next-3-years/",
  },
  {
    picture:
      "https://arabdaily.ae/wp-content/uploads/2024/07/L-R-Imtiaz-Zoya-Shoiab-Khan.jpg",
    title:
      "Zoya developments makes landmark entry into dubai with investment of over AED 2 billion allocated for the next 3 years",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://arabdaily.ae/zoya-developments-makes-landmark-entry-into-dubai-with-investment-of-over-aed-2-billion-allocated-for-the-next-3-years/",
  },
  {
    picture:
      "https://thebrewnews.com/wp-content/uploads/2024/07/L-R-Shoiab-Zoya-Imtiaz-Zoya-Developments-Real-Estate-Dubai.webp",
    title: "Indian developer announces landmark entry into Dubai real estate",
    date: "07th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://thebrewnews.com/brew-circle/indian-developer-announces-landmark-entry-into-dubai-real-estate/",
  },
  {
    picture: "https://menafn.com/updates/pr/2024-07/05/KT_b43f8image_story.jpg",
    title: "Indian Realtor Plans Dh2 Billion Investments In Dubai",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.propertynews.ae/uae/an-indian-realtor-plans-to-invest-dh2-billion-in-dubai/",
  },
  {
    picture:
      "https://static.zawya.com/view/acePublic/alias/contentid/ZmRiOWE3N2EtM2M0ZS00/0/l-rimtiaz-zoya-shoiabkhan-jpg.webp?f=3%3A2&q=0.75&w=640",
    title:
      "Zoya Developments makes landmark entry into Dubai with investment of over AED 2bln allocated for the next 3 years",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.zawya.com/en/press-release/companies-news/zoya-developments-makes-landmark-entry-into-dubai-with-investment-of-over-aed-2bln-allocated-for-the-next-3-years-jur7u4w0",
  },
  {
    picture:
      "https://i0.wp.com/mid-east.info/wp-content/uploads/2024/07/Soon-to-be-unveiled.jpg?fit=1000%2C857&ssl=1",
    title:
      "Zoya Developments Makes Landmark Entry into Dubai with Investment of over AED 2 Billion allocated for the next 3 years",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://mid-east.info/zoya-developments-makes-landmark-entry-into-dubai-with-investment-of-over-aed-2-billion-allocated-for-the-next-3-years/",
  },
  {
    picture:
      "https://www.tradearabia.com/source/2024/07/05/zoya3.jpg?07:04:30pm",
    title: "Zoya Developments enters UAE, to invest $540m over 3 years",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.tradearabia.com/news/CONS_423866.html",
  },
  {
    picture:
      "https://dubainewsweek.com/wp-content/uploads/2024/07/Zoya-Developments.webp",
    title:
      "Indian developer enters UAE real estate market with over Dhs2 billion investment",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://dubainewsweek.com/indian-developer-enters-uae-real-estate-market-with-over-dhs2-billion-investment/",
  },
  {
    picture:
      "https://i0.wp.com/mid-east.info/wp-content/uploads/2024/07/Soon-to-be-unveiled.jpg?fit=1000%2C857&ssl=1",
    title:
      "Indian Developer Sets Sights on Dubai with Multi-Billion Dirham Investment",
    date: "05th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://menews247.com/zoya-developments-makes-landmark-entry-into-dubai/",
  },
  {
    picture:
      "https://uaenews247.com/wp-content/uploads/2024/07/soon-to-be-unveiled1.jpg?w=1000",
    title: "Zoya developments makes landmark entry into dubai",
    date: "06th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://www.1arabia.com/2024/07/indian-developer-sets-sights-on-dubai.html?m=1",
  },
  {
    picture:
      "https://uaenews247.com/wp-content/uploads/2024/07/soon-to-be-unveiled1.jpg?w=1000",
    title: "India’s Zoya Developments to invest AED 2bn in Dubai",
    date: "08th July, 2024",
    category: "REAL ESTATE",
    button: "Read more",
    link: "https://english.mubasher.info/news/4310879/India-s-Zoya-Developments-to-invest-AED-2bn-in-Dubai",
  },
];

const Index = () => {
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

      {/* Banner Section */}
      <section className="w-full h-screen Banner relative">
        <video
          src="/ZoyaBanner.mp4"
          autoPlay="true"
          playsinline="true"
          loop="true"
          muted="true"
          class="w-full h-full object-cover"
        ></video>
      </section>

      {/* About Section */}
      <section className="py-[60px] lg:py-28 relative">
        <div className="container">
          <div className="flex items-start flex-wrap">
            <div className="w-full lg:w-[50%]">
              <h6 className="text-themeDarkBeige subHeading uppercase mb-10 md:mb-14">
                About
              </h6>
              <h4 className="text-[22px] md:text-[26px] leading-[1.3] !font-medium my-5 !mb-0 lg:my-10 xl:mt-12 xl:mb-9">
                Welcome to
                <span className="text-themeDarkBeige">
                  {" "}
                  Zoya Developments,{" "}
                </span>
                Where people always come first and Where every experience
                contributes to a lasting legacy.
              </h4>
              <p className="paragraph font-light text-black my-8">
                We believe real estate is all about people. From cozy homes to
                mega communities, its founded on human needs, aspirations and
                dreams. Our journey in development is deeply rooted in these
                connections, where each project becomes a medium for human
                expression, inspiration and creativity.
              </p>
              <div className="flex justify-between mb-9 flex-wrap md:flex-nowrap About_Section_Counter">
                <div className="flex flex-wrap justify-between py-4 md:py-0 items-baseline w-full">
                  <h4 className="text-themeDarkBeige md:w-full">
                    14 <span className="text-[22px] leading-[1.2]">Years</span>
                  </h4>
                  <p className="text-base font-raleway text-black font-light mt-3">
                    Development Experience
                  </p>
                </div>
                <div className="flex flex-wrap justify-between py-4 md:py-0 items-baseline w-full">
                  <h4 className="text-themeDarkBeige md:w-full">
                    100,000 <span className="text-[22px] leading-[1.2]">+</span>
                  </h4>
                  <p className="text-base font-raleway text-black font-light mt-3">
                    Units Delivered
                  </p>
                </div>
                <div className="flex flex-wrap justify-between py-4 md:py-0 items-baseline w-full">
                  <h4 className="text-themeDarkBeige md:w-full">
                    2,000,000
                    <span className="text-[22px] leading-[1.2]">Sq.ft</span>
                  </h4>
                  <p className="text-base font-raleway text-black font-light mt-3">
                    Area Developed
                  </p>
                </div>
              </div>

              <Link className="Btn" href="/about">
                Explore
              </Link>
            </div>
            <div className="w-full lg:w-[50%] pt-14 md:pt-14 pl-0 lg:pl-10 xl:pl-24">
              <video
                src="/Zoya-About.mp4"
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

      {/* Portfolio Section Start */}
      <Link href="/pristine-zoya">
        <section className="h-[100vh] md:h-screen relative flex items-center justify-center portfolio_Section">
          <img class="w-full h-full object-cover" src="/Zoya.png" />
          <div className="absolute z-10 w-full bottom-[100px]">
            <div className="container relative">
              <div className="absolute Portfolio_Image">
                <img
                  className="w-full h-full object-contain max-w-[250px]"
                  src="/Pristine.svg"
                />
              </div>
              <div className="flex flex-wrap md:flex-nowrap gap-7 md:gap-0 justify-between items-end Content_Box">
                <div className="w-full">
                  <p className="text-white text-lg">
                    A collection of apartment residences with maid’s room based
                    in Al Furjan, Dubai.
                  </p>
                  <div className="PortfolioSection flex flex-wrap gap-6 md:gap-10 mt-10 items-center">
                    <div>
                      <p className="uppercase text-lg font-normal text-white mb-2">
                        Apartments
                      </p>
                      <p className="text-base text-themeDarkBeige uppercase">
                        Project Type
                      </p>
                    </div>
                    <div>
                      <p className="uppercase text-lg font-normal text-white mb-2">
                        67
                      </p>
                      <p className="text-base text-themeDarkBeige uppercase">
                        Unit
                      </p>
                    </div>
                    <div>
                      <p className="uppercase text-lg font-normal text-white mb-2">
                        Al Furjan, Dubai
                      </p>
                      <p className="text-base text-themeDarkBeige uppercase">
                        Location
                      </p>
                    </div>
                    <div>
                      <p className="uppercase text-lg font-normal text-white mb-2">
                        Q4, 2024
                      </p>
                      <p className="text-base text-themeDarkBeige uppercase">
                        Completion
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
              {/* <div className="icon"></div> */}
              <div className="BoxContent">
                <h6 className="text-themeDarkBeige lineeffect uppercase mb-2">
                  EXPLORE
                </h6>
                <p className="pl-24">Pristine by Zoya Developements</p>
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
                    <img src="/Clock.png" />
                  </div>
                  <div className="BoxContent text-left">
                    <h6 className="arroweffect text-themeDarkBeige mb-2 flex gap-2 items-center Fast_animate">
                      Book a Viewing <RiArrowRightSLine />
                    </h6>
                    <p>Schedule a visit to our show apartment</p>
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
                        BOOK A VIEWING
                      </h6>
                      <p className=" text-black font-normal pl-28">
                        Schedule a visit to our show apartment
                      </p>
                    </div>
                    <Bookviewform togglePopup={() => togglePopup(1)} />
                    {/* <Registerinterestform togglePopup={() => togglePopup(1)} /> */}
                    {/* <ContactForm /> */}
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
                    <img src="/Video.png" />
                  </div>
                  <div className="BoxContent text-left">
                    <h6 className="arroweffect text-themeDarkBeige mb-2 flex gap-2 items-center Fast_animate">
                      Sales Video Call <RiArrowRightSLine />
                    </h6>
                    <p>Talk to one of our sales experts</p>
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
                        SALES VIDEO CALL
                      </h6>
                      <p className=" text-black font-normal pl-28">
                        Talk to one of our sales experts
                      </p>
                    </div>
                    <Salescallform togglePopup={() => togglePopup(2)} />
                    {/* <Registerinterestform togglePopup={() => togglePopup(2)} /> */}
                    {/* <ContactForm /> */}
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
                    <img src="/Account.png" />
                  </div>
                  <div className="BoxContent text-left">
                    <h6 className="arroweffect text-themeDarkBeige mb-2 flex gap-2 items-center Fast_animate">
                      Register Your Interest <RiArrowRightSLine />
                    </h6>
                    <p>Register your interest in our properties</p>
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
                        Register Your Interest
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
      </section>

      {/* Spotlight Section Start */}
      <section className="py-20 spotlightSection bg-white">
        <div className="container">
          <div className="Cta_Section w-full flex flex-wrap gap-6 md:gap-0 justify-between items-center mb-20 md:mb-20 z-10 relative">
            <div>
              <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
                MEDIA CENTER
              </h6>
              <p className=" text-black font-normal md:pl-28  pl-16">
                Zoya in the spotlight
              </p>
            </div>
            <Link className="Btn" href="/media-center">
              Explore
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
              {newsData.map((item, news) => {
                return (
                  <SwiperSlide>
                    <Link href={item.link} target="_blank">
                      <img
                        className="w-full h-[300px] object-cover"
                        src={item.picture}
                      />
                      <div className="flex justify-between mt-3">
                        <p className="font-light text-sm">{item.date}</p>
                        <p className="font-normal text-sm">{item.category}</p>
                      </div>
                      <p className="text-sm font-normal text-black my-4 mb-3">
                        {item.title}
                      </p>
                      <Link
                        className="font-normal text-lg !text-themeDarkBeige animate flex gap-3 items-center"
                        href={item.link}
                        target="_blank"
                      >
                        {item.button}
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
          src="/Zoya-bottomBanner.png"
        />
        <div className="container">
          <div className="flex flex-wrap gap-9 md:gap-0 justify-between">
            <div className="w-full md:w-[45%] hide_Br">
              <div className="max-w-full md:max-w-[400px]">
                <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
                  REGISTER
                </h6>
                <p className=" text-white font-normal pl-28">
                  For more general enquiries <br /> or to simply say hello,
                  reach out to us.
                </p>
              </div>
            </div>
            <div className="w-full md:w-[55%]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
