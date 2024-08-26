/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import Header from "../components/Header/Header";
import Head from "next/head";
import { getHeader, getMediaCenter } from "../libs/contentful/api";
import Footer from "../components/Footer/Footer";

const mediaCenter = ({ MediacenterData, HeaderData }) => {
  // console.log(MediacenterData,"MediacenterData");

  return (
    <>
      <Head>
        <title>Media Center - Zoya</title>
        <link rel="icon" href="/Fav_Icon.png" />
      </Head>

      {/* Header */}
      <Header HeaderData={HeaderData} />

      {/* Banner Section Start */}
      <section className="w-full h-[50vh] Banner relative Banner_overlay">
        <video
          src={MediacenterData.bannervideo.url}
          autoPlay="true"
          playsinline="true"
          loop="true"
          muted="true"
          class="w-full h-full object-cover"
        ></video>
        <div className="container">
          <h1 className="text-[34px] md:text-[28px] z-[2] text-white absolute bottom-10 xl:bottom-20 px-0 md:px-4 uppercase font-medium md:font-normal">
            {MediacenterData.title}
          </h1>
        </div>
      </section>

      {/* News Section Start */}
      <section className="py-20 !pb-14 spotlightSection bg-themeSoftPeach">
        <div className="container">
          <div className="w-full Media_Cards flex-wrap gap-y-5">
            {MediacenterData.allnewsCollection.items.map((item, news) => {
              return (
                <Link
                  className="MediaCard"
                  href={item.newslink}
                  target="_blank"
                  key={news}
                >
                  <img
                    className="w-full h-[300px] object-cover"
                    src={item.newsimg.url}
                    alt={item.newsimg.fileName}
                  />
                  <div className="flex justify-between mt-3">
                    <p className="font-light text-xs">{item.newsdate}</p>
                    <p className="font-normal text-xs">{item.newstype}</p>
                  </div>
                  <p className="text-xs font-normal text-black my-4 mb-3">
                    {item.newstitle}
                  </p>
                  <Link
                    className="font-normal text-base !text-themeDarkBeige animate flex gap-3 items-center"
                    href={item.newslink}
                    target="_blank"
                  >
                    {item.newsbtn}
                    <FaArrowRight />
                  </Link>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* <p dangerouslySetInnerHTML={{ __html: MediacenterData.testfield.json.content[0].content[0].value }}></p> */}
      
      {/* Footer */}
      <Footer HeaderData={HeaderData} />
    </>
  );
};

export async function getStaticProps() {
  const MediacenterData = await getMediaCenter(false);
  const HeaderData = await getHeader(false);
  return {
    props: {
      MediacenterData: MediacenterData || [],
      HeaderData: HeaderData || [],
    },
    revalidate: 60,
  };
}

export default mediaCenter;
