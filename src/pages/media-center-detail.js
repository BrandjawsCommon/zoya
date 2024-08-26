import React from "react";
import MediaCenterDetails from "../components/MediaCenter/MediaCenterDetails";
import { getHeader } from "../libs/contentful/api";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Head from "next/head";

const mediacenterdetail = ({ HeaderData }) => {
  return (
    <>
      <Head>
        <title>Pristine Detail - Zoya</title>
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
      <div className="w-full h-screen flex justify-center items-center bg-gray-500">
        Coming Soon
      </div>
      {/* <MediaCenterDetails/> */}

      {/* Footer */}
      <Footer HeaderData={HeaderData} />
    </>
  );
};
export async function getStaticProps() {
  const HeaderData = await getHeader(false);
  return {
    props: {
      HeaderData: HeaderData || [],
    },
    revalidate: 60,
  };
}

export default mediacenterdetail;
