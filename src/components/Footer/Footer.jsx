import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";
import NewsletterForm from "../NewsletterForm/Newsletterform";

const Footer = () => {
  return (
    <section className="footer py-16 pb-0 bg-themeLapisBlue">
      <div className="container">
        <div className="flex Footer_upper gap-8">
          <div className="Logo_Section w-[33%] pr-16">
            <Link href="/">
              {/* <img
                className="w-[150px] object-contain"
                src="/White_logo.png"
                alt="Logo"
              /> */}
              <Image
                src="/White_logo.png"
                alt="Logo"
                width={150}
                height={150}
              />
            </Link>
            <p className="text-sm text-white font-light my-8">
              Welcome to Zoya Developments, Where people always come first and
              Where every experience contributes to a lasting legacy.
            </p>
            <Link
              className="text-white font-normal text-base hover:text-themeDarkBeige Fast_animate"
              href="#."
            >
              Privacy Policy
            </Link>
          </div>
          <div className="footer_Block Footer_Menu w-[14%]">
            <h4 className="text-white font-medium uppercase text-lg mb-4">
              Quick Links
            </h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/pristine-zoya">Properties</Link>
              </li>
              <li>
                <Link href="/media-center">Media Center</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer_Block w-[26%] flex flex-col gap-[10px] md:gap-[14px] pr-16">
            <h4 className="text-white font-medium uppercase text-lg mb-4">
              Contact Us
            </h4>
            <p className="text-white font-normal text-base flex items-start gap-2">
              <span className="text-themeDarkBeige hover:text-white Fast_animate cursor-pointer">
                <IoMailOutline />
              </span>

              <Link
                className="hover:text-themeDarkBeige Fast_animate mt-[-4px]"
                href="mailto:Info@zoyadevelopments.ae"
                target="_blank"
              >
                Info@zoyadevelopments.ae
              </Link>
            </p>
            <p className="text-white font-normal text-base flex items-center gap-2">
              <span className="text-themeDarkBeige hover:text-white Fast_animate cursor-pointer">
                <MdOutlineLocalPhone />
              </span>
              <Link
                className="hover:text-themeDarkBeige Fast_animate"
                href="tel:+97145534816"
              >
                +97145534816
              </Link>
            </p>
            <p className="text-white font-normal text-base flex items-start gap-2">
              <span className="text-themeDarkBeige hover:text-white Fast_animate cursor-pointer">
                <IoLocationOutline />
              </span>

              <Link
                className="hover:text-themeDarkBeige Fast_animate mt-0 md:mt-[-4px]"
                href="https://maps.app.goo.gl/5Uf6FGqw1jzFDe7u8?g_st=iw"
                target="_blank"
              >
                P02, P03, Building 3, Bay Square, Business Bay, Dubai, United Arab Emirates.
                <br />
                P.0 Box: 117993
              </Link>
            </p>
          </div>
          <div className="footer_Block Newsletter w-[35%]">
            <h4 className="text-white font-medium uppercase text-lg mb-4">
              Subscribe to our newsletter
            </h4>
            <p className="text-base text-white font-light">
              Join our newsletter to keep up to date with us!
            </p>
            <NewsletterForm/>
            {/* <div className="footer_Form my-7">
              <input type="text" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </div> */}

            <div className="Icons">
              <ul className="flex flex-wrap gap-5">
                <li>
                  <Link
                    href="https://www.facebook.com/zoya.developments"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/zoya.developments/"
                    target="_blank"
                  >
                    <PiInstagramLogoFill />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/zoya-developments/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="BottomBar bg-themeSoftPeach py-5 mt-12 md:mt-20 flex justify-between flex-wrap gap-7 md:gap-0">
        <div className="container">
          <p className="text-themeLapisBlue font-normal text-base font-raleway text-center">
            Copyright © 2024,{" "}
            <Link
              href="/"
              className="text-themeLapisBlue font-normal text-base font-raleway text-center"
            >
              {" "}
              ZOYA.
            </Link>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
