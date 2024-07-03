import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="footer py-16 bg-themeLapisBlue">
      <div className="container">
        <div className="flex Footer_upper gap-8">
          <div className="Logo_Section w-[33%] pr-16">
            <Link href="/">
              <img className="w-[150px] object-contain" src="/White_logo.png" />
            </Link>
            <p className="text-lg text-white font-light my-8">
              Welcome to Zoya Developments, Where people always come first and
              Where every experience contributes to a lasting legacy.
            </p>
            <div className="Icons">
              <ul className="flex flex-wrap gap-5">
                <li>
                  <Link href="#.">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link href="#.">
                    <PiInstagramLogoFill />
                  </Link>
                </li>
                <li>
                  <Link href="#.">
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_Block Footer_Menu w-[14%]">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/our-story">Our Story</Link>
              </li>
              <li>
                <Link href="#.">Project</Link>
              </li>
              <li>
                <Link href="#.">Press Release</Link>
              </li>
              <li>
                <Link href="/connect">Connect</Link>
              </li>
            </ul>
          </div>
          <div className="footer_Block w-[26%]">
            <p className="text-white font-medium text-xl">
              If you’d like to talk,
            </p>
            <p className="text-white font-medium text-xl break-words">
              email us at{" "}
              <Link
                className="hover:text-themeDarkBeige Fast_animate"
                href="Info@zoyadevelopments.ae"
              >
                Info@zoyadevelopments.ae
              </Link>
            </p>
            <p className="text-white font-medium text-xl">
              {" "}
              or calls on{" "}
              <Link
                className="hover:text-themeDarkBeige Fast_animate"
                href="tel:+97145534816"
              >
                +97145534816
              </Link>
              <br />
              Address : P02, P03, Building 3, Bay Square, Business Bay, Dubai,
              United Arab Emirates.
            </p>
          </div>
          <div className="footer_Block Newsletter w-[35%]">
            <p className="text-lg text-white font-light">
              Join our newsletter to keep up to date with us!
            </p>
            <div className="footer_Form">
              <input type="text" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="BottomBar mt-12 md:mt-20 flex justify-between flex-wrap gap-7 md:gap-0">
          <div>
            <ul className="flex gap-8">
              <li>
                <Link
                  className="text-white font-medium text-base hover:text-themeDarkBeige Fast_animate"
                  href="#."
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-medium text-base hover:text-themeDarkBeige Fast_animate"
                  href="#."
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <p className="text-white font-medium text-base font-raleway">
            Copyright © 2024, ZOYA. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
