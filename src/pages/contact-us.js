/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import ContactForm from "../components/ContactForm/ContactForm";

const contact = () => {
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
      <section className="Connect_page w-full h-[70vh] Banner relative Banner_overlay">
        {/* <img
          src="/contact_Banner.png"
          className="w-full h-full object-cover"
          alt="Contact Banner" 
        /> */}
        <img
          src="/c-banner.jpeg"
          className="w-full h-full object-cover"
          alt="Contact Banner"
          onError={(e) => {
            e.target.src = "/c-banner.jpeg";
          }}
        />

        <div className="container">
          <h1 className="!text-[34px] md:text-[28px] z-[2] text-white absolute bottom-10 xl:bottom-20 px-0 md:px-4 uppercase font-normal">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="Connect_page py-20 md:py-32">
        <div className="container">
          <div className="form_Section flex flex-wrap gap-10 md:gap-0">
            <div className="Inner_Section w-[40%] flex flex-col justify-between gap-20 md:gap-0">
              <div>
                <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
                  Get in touch with us
                </h6>
                <p className=" text-black font-normal pl-16 md:pl-28">
                  For more general enquiries <br /> or to simply say hello,
                  reach out to us.
                </p>
              </div>
              <div className="flex justify-between flex-wrap gap-14 xl:gap-0">
                <div className="Contact_Icons">
                  <h6 className="text-black font-normal mb-8">Sales Enquiry</h6>
                  <div className="flex gap-4 items-center">
                    <FaRegEnvelope />
                    <Link
                      className="font-normal hover:text-themeDarkBeige Fast_animate w-[80%]"
                      href="mailto:sales@zoya.ae"
                    >
                      sales@zoya.ae
                    </Link>
                  </div>
                  <div className="flex gap-4 items-center my-3">
                    <FiPhone />
                    <Link
                      className="font-normal hover:text-themeDarkBeige Fast_animate w-[80%]"
                      href="tel:+9719876543210"
                    >
                      +971 9876543210
                    </Link>
                  </div>
                  <div className="flex gap-4 items-center">
                    <IoLocationOutline />

                    <Link
                      className="font-normal hover:text-themeDarkBeige Fast_animate w-[80%]"
                      href="https://maps.app.goo.gl/5Uf6FGqw1jzFDe7u8?g_st=iw"
                      target="_blank"
                    >
                      P02, P03, Building 3, Bay Square, Business Bay, Dubai,
                      UAE.
                    </Link>
                  </div>
                </div>
                <div className="Contact_Icons">
                  <h6 className="text-black font-normal mb-8">
                    Other Inquiries
                  </h6>
                  <div className="flex gap-4 items-center mb-3">
                    <FaRegEnvelope />
                    <Link
                      className="font-normal hover:text-themeDarkBeige Fast_animate"
                      href="mailto:Info@zoyadevelopments.ae"
                    >
                      Info@zoyadevelopments.ae
                    </Link>
                  </div>
                  <div className="flex gap-4 items-center">
                    <FiPhone />
                    <Link
                      className="font-normal hover:text-themeDarkBeige Fast_animate"
                      href="tel:+97145534816"
                    >
                      +97145534816
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
      <div className="map_Section bg-themeSoftPeach pb-24">
        <div className="container">
          <div className="mb-9">
            <h6 className="text-themeDarkBeige subHeading uppercase mb-2">
              ADDRESS
            </h6>
            <p className=" text-black font-normal pl-16 md:pl-28">Head Office</p>
          </div>
          <iframe
            className="w-full h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5192163473293!2d55.279624899999995!3d25.185706999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f683045cdac7f%3A0x3e7ab93219dae54b!2sBay%20Square%20Building%203!5e0!3m2!1sen!2s!4v1720014075787!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default contact;