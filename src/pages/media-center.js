/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Header from "../components/Header/Header";
import Head from "next/head";

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

const mediaCenter = () => {
  return (
    <>
      <Head>
        <title>Media Center - Zoya</title>
        <link rel="icon" href="/Fav_Icon.png" />
      </Head>
      {/* Banner Section */}

      <section className="w-full h-[50vh] Banner relative Banner_overlay">
        <video
          src="/Press_Banner.mp4"
          autoPlay="true"
          playsinline="true"
          loop="true"
          muted="true"
          class="w-full h-full object-cover"
        ></video>
        <div className="container">
          <h1 className="text-[34px] md:text-[28px] z-[2] text-white absolute bottom-10 xl:bottom-20 px-0 md:px-4 uppercase font-medium md:font-normal">
            Media Center
          </h1>
        </div>
      </section>


      <section className="py-20 !pb-14 spotlightSection bg-themeSoftPeach">
        <div className="container">
          <div className="w-full Media_Cards flex-wrap gap-y-5">
            {/* <Swiper
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
            </Swiper> */}

            {newsData.map((item, news) => {
              return (
                <Link className="MediaCard" href={item.link} target="_blank">
                  <img
                    className="w-full h-[300px] object-cover"
                    src={item.picture}
                  />
                  <div className="flex justify-between mt-3">
                    <p className="font-light text-xs">{item.date}</p>
                    <p className="font-normal text-xs">{item.category}</p>
                  </div>
                  <p className="text-xs font-normal text-black my-4 mb-3">
                    {item.title}
                  </p>
                  <Link
                    className="font-normal text-base !text-themeDarkBeige animate flex gap-3 items-center"
                    href={item.link}
                    target="_blank"
                  >
                    {item.button}
                    <FaArrowRight />
                  </Link>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default mediaCenter;
