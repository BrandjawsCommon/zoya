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

const Footer = ({ HeaderData }) => {
  // console.log(HeaderData, "HeaderData");

  return (
    <section className="footer py-16 pb-0 bg-themeLapisBlue">
      <div className="container">
        <div className="flex Footer_upper gap-8">
          <div className="Logo_Section w-[33%] pr-16">
            <Link href="/">
              <img
                className="w-[150px] object-contain"
                src={HeaderData.whitelogo.url}
                alt="Logo"
              />
            </Link>
            <p className="text-sm text-white font-light my-8">
              {HeaderData.abouttext}
            </p>
            <Link
              className="text-white font-normal text-base hover:text-themeDarkBeige Fast_animate"
              href="#."
            >
              {HeaderData.privacytext}
            </Link>
          </div>
          <div className="footer_Block Footer_Menu w-[14%]">
            <h4 className="text-white font-medium uppercase text-lg mb-4">
              {HeaderData.quicklinks}
            </h4>
            <ul>
              <li>
                <Link href="/">{HeaderData.hometext}</Link>
              </li>
              <li>
                <Link href="/about">{HeaderData.storytext}</Link>
              </li>
              <li>
                <Link href="/pristine-zoya">{HeaderData.property}</Link>
              </li>
              <li>
                <Link href="/media-center">{HeaderData.media}</Link>
              </li>
              <li>
                <Link href="/contact-us">{HeaderData.connecttext}</Link>
              </li>
            </ul>
          </div>
          <div className="footer_Block w-[26%] flex flex-col gap-[10px] md:gap-[14px] pr-16">
            <h4 className="text-white font-medium uppercase text-lg mb-4">
              {HeaderData.connecttext}
            </h4>
            <p className="text-white font-normal text-base flex items-start gap-2">
              <span className="text-themeDarkBeige hover:text-white Fast_animate cursor-pointer">
                <IoMailOutline />
              </span>

              <Link
                className="hover:text-themeDarkBeige Fast_animate mt-[-4px]"
                href={`mailto:${HeaderData.mail}`}
                target="_blank"
              >
                {HeaderData.mail}
              </Link>
            </p>
            <p className="text-white font-normal text-base flex items-center gap-2">
              <span className="text-themeDarkBeige hover:text-white Fast_animate cursor-pointer">
                <MdOutlineLocalPhone />
              </span>
              <Link
                className="hover:text-themeDarkBeige Fast_animate"
                href={`tel:${HeaderData.contact}`}
              >
                {HeaderData.contact}
              </Link>
            </p>
            <p className="text-white font-normal text-base flex items-start gap-2">
              <span className="text-themeDarkBeige hover:text-white Fast_animate cursor-pointer">
                <IoLocationOutline />
              </span>

              <Link
                className="hover:text-themeDarkBeige Fast_animate mt-0 md:mt-[-4px]"
                href={`${HeaderData.maplink}`}
                target="_blank"
              > 
                {HeaderData.location}
              </Link>
            </p>
          </div>
          <div className="footer_Block Newsletter w-[35%]">
            <h4 className="text-white font-medium uppercase text-lg mb-4">
            {HeaderData.newslettertitle}
            </h4>
            <p className="text-base text-white font-light">
            {HeaderData.newslettertext}
            </p>
            <NewsletterForm />

            <div className="Icons">
              <ul className="flex flex-wrap gap-5">
                <li>
                  <Link
                    href={HeaderData.socialsCollection.items[0].link}
                    target="_blank"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link
                    href={HeaderData.socialsCollection.items[1].link}
                    target="_blank"
                  >
                    <PiInstagramLogoFill />
                  </Link>
                </li>
                <li>
                  <Link
                    href={HeaderData.socialsCollection.items[2].link}
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
            {HeaderData.crtext}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
