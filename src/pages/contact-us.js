/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import ContactForm from "../components/ContactForm/ContactForm";
import { getConnect, getHeader } from "../libs/contentful/api";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const contact = ({ ContactData, HeaderData }) => {
  // console.log(ContactData, "ContactData");

  return (
    <>
      <Head>
        <title>Contact Us - Zoya</title>
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

      {/* Banner Section Start  */}
      <section className="Connect_page w-full h-[70vh] Banner relative Banner_overlay">
        <img
          src={ContactData.contactbg.url}
          className="w-full h-full object-cover"
          alt="Contact Banner"
          onError={(e) => {
            e.target.src = "/c-banner.jpeg";
          }}
        />

        <div className="container">
          <h1 className="!text-[34px] md:text-[28px] z-[2] text-white absolute bottom-10 xl:bottom-20 px-0 md:px-4 uppercase font-normal">
            {ContactData.connecttitle}
          </h1>
        </div>
      </section>

      {/* Get In Touch Section Start */}
      <section className="Connect_page py-20 md:py-32">
        <div className="container">
          <div className="form_Section flex flex-wrap gap-10 md:gap-0">
            <div className="Inner_Section w-[40%] flex flex-col justify-between gap-20 md:gap-0">
              <div>
                <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
                  {ContactData.enquirytitle}
                </h6>
                <p className=" text-black font-normal pl-16 md:pl-28">
                  {ContactData.querydesc}
                </p>
              </div>
              <div className="flex justify-between flex-wrap gap-14 xl:gap-0">
                <div className="Contact_Icons">
                  <h6 className="text-black font-normal mb-8">
                    {ContactData.saletitle}
                  </h6>
                  <div className="flex gap-4 items-center">
                    <FaRegEnvelope />
                    <Link
                      className="font-normal hover:text-themeDarkBeige Fast_animate w-[80%]"
                      href={`mailto:${ContactData.salesmail}`}
                    >
                      {ContactData.salesmail}
                    </Link>
                  </div>
                  <div className="flex gap-4 items-center my-3">
                    <FiPhone />
                    <Link
                      className="font-normal hover:text-themeDarkBeige Fast_animate w-[80%]"
                      href={`tel:${ContactData.slaescontact}`}
                    >
                      {ContactData.slaescontact}
                    </Link>
                  </div>
                  <div className="flex gap-4 items-center">
                    <IoLocationOutline />

                    <Link
                      className="font-normal hover:text-themeDarkBeige Fast_animate w-[80%]"
                      href="https://maps.app.goo.gl/5Uf6FGqw1jzFDe7u8?g_st=iw"
                      target="_blank"
                    >
                      {ContactData.salesaddress}
                    </Link>
                  </div>
                </div>
                <div className="Contact_Icons">
                  <h6 className="text-black font-normal mb-8">
                    {ContactData.othertitle}
                  </h6>
                  <div className="flex gap-4 items-center mb-3">
                    <FaRegEnvelope />
                    <Link
                      className="font-normal hover:text-themeDarkBeige Fast_animate"
                      href={`mailto:${ContactData.othermail}`}
                    >
                      {ContactData.othermail}
                    </Link>
                  </div>
                  <div className="flex gap-4 items-center">
                    <FiPhone />
                    <Link
                      className="font-normal hover:text-themeDarkBeige Fast_animate"
                      href={`tel:${ContactData.othercontact}`}
                    >
                      {ContactData.othercontact}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="Inner_Section w-[60%] pl-0 md:pl-10 lg:pl-20 xl:pl-36">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Start */}
      <div className="map_Section bg-themeSoftPeach pb-24">
        <div className="container">
          <div className="mb-9">
            <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
              {ContactData.addressbreadcrumbs}
            </h6>
            <p className=" text-black font-normal pl-16 md:pl-28">
              {ContactData.adressdesc}
            </p>
          </div>
          <iframe
            className="w-full h-[400px]"
            src={ContactData.mapurl}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <Footer HeaderData={HeaderData} />
    </>
  );
};

export async function getStaticProps() {
  const ContactData = await getConnect(false);
  const HeaderData = await getHeader(false);
  return {
    props: {
      ContactData: ContactData || [],
      HeaderData: HeaderData || [],
    },
    revalidate: 60,
  };
}

export default contact;
