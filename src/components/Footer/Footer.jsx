import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer py-16 bg-themeLapisBlue">
      <div className="container">
        <div className="flex Footer_upper gap-8">
          <div className="Logo_Section w-[33%] pr-16">
            <a href="/">
              <img className="w-[150px] object-contain" src="/White_logo.png" />
            </a>
            <p className="text-lg text-white font-light my-8">
              Welcome to Zoya Developments, Where people always come first and
              Where every experience contributes to a lasting legacy.
            </p>
            <div className="Icons">
              <ul className="flex flex-wrap gap-5">
                <li>
                  <a href="#.">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <PiInstagramLogoFill />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_Block Footer_Menu w-[14%]">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">Our Story</a>
              </li>
              <li>
                <a href="#.">Project</a>
              </li>
              <li>
                <a href="#.">Press Release</a>
              </li>
              <li>
                <a href="/connect_with_us">Connect</a>
              </li>
            </ul>
          </div>
          <div className="footer_Block w-[26%]">
            <p className="text-white font-medium text-xl">
              If you’d like to talk,
            </p>
            <p className="text-white font-medium text-xl">
              email us at{" "}
              <a
                className="hover:text-themeDarkBeige Fast_animate"
                href="mailto:support@zoya.com"
              >
                support@zoya.com
              </a>
            </p>
            <p className="text-white font-medium text-xl">
              {" "}
              or calls on{" "}
              <a
                className="hover:text-themeDarkBeige Fast_animate"
                href="tel:+971 9876543210"
              >
                +971 9876543210
              </a>
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
                <a
                  className="text-white font-medium text-base hover:text-themeDarkBeige Fast_animate"
                  href="#."
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  className="text-white font-medium text-base hover:text-themeDarkBeige Fast_animate"
                  href="#."
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <p className="text-white font-medium text-base font-raleway">Copyright © 2024, ZOYA. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
