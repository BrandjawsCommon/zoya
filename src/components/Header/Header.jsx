import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { VscTriangleUp } from "react-icons/vsc";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleUp, FaArrowRight } from "react-icons/fa6";

const Header = () => {
  const [active, setActive] = useState(false);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const accordionData = [
    {
      heading: "Properties",
      content: "Pristine by Zoya",
    },
  ];
  const toggleClass = () => {
    setActive(!active);
    setIsWhiteLogoVisible(!isWhiteLogoVisible);
  };

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  const currentRoute = usePathname();

  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isWhiteLogoVisible, setIsWhiteLogoVisible] = useState(false);

  return (
    <>
      <header
        // ${currentRoute === "/" ? "" : "bg-themeSoftPeach"}
        className={`header py-5 z-[99999] fixed top-0 left-0 right-0 w-full animate ${showIcon ? "bg-themeLapisBlue" : ""}`}
      >
        <div className="container">
          <div className="flex justify-between items-center flex-row-reverse md:flex-row">
            <div className="navigation w-full max-w-[400px] hidden md:block">
              <ul className="gap-6 items-center hidden md:flex">
                <li>
                  <Link
                    // ${currentRoute === "/about" ? "!text-themeDarkBeige" : ""}  ${currentRoute === "/" ? "!text-white hover:!text-themeDarkBeige" : "!text-themeLapisBlue hover:!text-themeDarkBeige"}
                    className={` ${showIcon ? "text-white hover:text-themeDarkBeige" : "!text-white hover:!text-themeDarkBeige"}`}
                    href="/about"
                  >
                    About
                  </Link>
                </li>

                <li className="DropDownHover relative">
                  <Link
                    // ${currentRoute === "" ? "!text-themeDarkBeige" : ""}
                    // ${currentRoute === "/" ? "!text-white hover:!text-themeDarkBeige" : "!text-themeLapisBlue hover:!text-themeDarkBeige"}
                    href="#."
                    className={` ${showIcon ? "text-white hover:text-themeDarkBeige" : "!text-white hover:!text-themeDarkBeige"}
                       properties`}
                  >
                    Properties
                    <span>
                      <FaAngleDown />
                    </span>
                  </Link>
                  <div className="dropdown">
                    <ul>
                      <li>
                        <Link
                          className={` ${currentRoute === "/about" ? "!text-themeDarkBeige" : ""}  ${currentRoute === "/" ? "!text-themeLapisBlue hover:!text-themeDarkBeige" : "!text-themeLapisBlue hover:!text-themeDarkBeige"}`}
                          href="/pristine-zoya"
                        >
                          Pristine by Zoya
                        </Link>
                        {/* <FaAngleRight /> */}
                      </li>
                    </ul>
                    <VscTriangleUp className="angleup" />
                  </div>
                </li>

                <li>
                  <Link
                    // ${currentRoute === "/media-center" ? "!text-themeDarkBeige" : ""}
                    // ${currentRoute === "/" ? "!text-white hover:!text-themeDarkBeige" : "!text-themeLapisBlue hover:!text-themeDarkBeige"}
                    className={`
                      ${showIcon ? "text-white hover:text-themeDarkBeige" : "!text-white hover:!text-themeDarkBeige"}
                      `}
                    href="/media-center"
                  >
                    Media Center
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[30%] md:hidden block"></div>
            <div className="logo">
              <Link href="/">
                {!isWhiteLogoVisible && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="w-full max-w-[133px] animate"
                    src={showIcon ? "/White_logo.png " : "/Zoya_Logo.png"}
                    alt="Logo"
                  />
                )}
                {isWhiteLogoVisible && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="w-full max-w-[133px]"
                    src="/White_logo.png"
                    alt="Logo"
                    onClick={toggleClass}
                  />
                )}
              </Link>
            </div>
            <div className="navigation w-full max-w-full md:max-w-[400px]">
              <ul className="gap-6 items-center hidden md:flex justify-end">
                <li>
                  {/* ${currentRoute === "/contact-us" ? "!text-themeDarkBeige" : ""}  
                ${currentRoute === "/" ? "!text-white hover:!text-themeDarkBeige" : "!text-themeLapisBlue hover:!text-themeDarkBeige"} */}
                  <Link
                    className={` ${showIcon ? "text-white hover:text-themeDarkBeige" : "!text-white hover:!text-themeDarkBeige"}
                    `}
                    href="/contact-us"
                  >
                    Contact Us
                  </Link>
                </li>

                <li className={`social_icons flex gap-5`}>
                  <Link
                    // ${currentRoute === "/" ? "!text-white hover:!text-themeDarkBeige" : "!text-themeLapisBlue hover:!text-themeDarkBeige"}
                    className={` ${showIcon ? "text-white hover:text-themeDarkBeige" : "!text-white hover:!text-themeDarkBeige"}
                      `}
                    href="https://www.facebook.com/zoya.developments"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    // ${currentRoute === "/" ? "!text-white hover:!text-themeDarkBeige" : "!text-themeLapisBlue hover:!text-themeDarkBeige"}
                    className={` ${showIcon ? "text-white hover:text-themeDarkBeige" : "!text-white hover:!text-themeDarkBeige"}
                    `}
                    href="https://www.instagram.com/zoya.developments/"
                    target="_blank"
                  >
                    <BiLogoInstagramAlt />
                  </Link>
                  <Link
                    // ${currentRoute === "/" ? "!text-white hover:!text-themeDarkBeige" : "!text-themeLapisBlue hover:!text-themeDarkBeige"}
                    className={` ${showIcon ? "text-white hover:text-themeDarkBeige" : "!text-white hover:!text-themeDarkBeige"}
                      `}
                    href="https://www.linkedin.com/company/zoya-developments/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>

              <div className="Menu_Button Mobile_Menu md:hidden flex">
                <button
                  id="nav-toggle"
                  className={`brgr-btn ${active ? "active" : ""}`}
                  onClick={toggleClass}
                >
                  <span></span>
                </button>

                {/* <button
                  id="nav-toggle"
                  className={`brgr-btn ${active ? "active" : ""}`}
                  onClick={toggleClass}
                >
                  <span></span>
                </button> */}

                <div
                  className={`Main-Menu h-screen w-[85%] bg-[#00000044] backdrop-blur-xl fixed -z-[2] top-0  Menu_Animate ${active ? "left-0" : "left-[-100%]"}`}
                >
                  <div className="container flex flex-col flex-wrap justify-between h-full">
                    <ul className="flex flex-wrap flex-col lg:flex-row gap-9 items-start lg:items-center">
                      <li className="text-themeDarkBeige font-medium">Menu</li>
                      <li onClick={toggleClass}>
                        <Link
                          className={`${currentRoute === "/about" ? "!text-themeDarkBeige" : ""}`}
                          href="/about"
                        >
                          About
                        </Link>
                      </li>

                      {accordionData.map((item, index) => (
                        <React.Fragment key={index}>
                          <li>
                            <Link
                              href=""
                              onClick={() => toggleAccordion(index)}
                              className={`flex items-center gap-6 
                                ${currentRoute === "/pristine-zoya" || activeIndex === index ? "!text-themeDarkBeige" : ""}`}
                            >
                              {item.heading}
                              <span>
                                {activeIndex === index ? (
                                  <FaAngleUp />
                                ) : (
                                  <FaAngleDown />
                                )}
                              </span>
                            </Link>
                            <li
                              onClick={toggleClass}
                              className={`pl-[40px] transition-all duration-300 ease-in-out  ${
                                activeIndex === index
                                  ? "opacity-100 visible h-[30px]"
                                  : "opacity-0 invisible h-[0px]"
                              }`}
                            >
                              <Link
                                href="/pristine-zoya"
                                className={`!normal-case  ${
                                  activeIndex === index
                                    ? "mt-[40px]"
                                    : "mt-[0px]"
                                } 
                                flex gap-6 items-center paragraph AccordionParaGraph animate ${
                                  currentRoute === "/pristine-zoya"
                                    ? "!text-themeDarkBeige"
                                    : ""
                                }`}
                              >
                                {item.content}
                                <span>
                                  <FaAngleRight />
                                </span>
                              </Link>
                            </li>
                          </li>
                        </React.Fragment>
                      ))}

                      {/* <li className="DropDownHover">
                        <Link
                          href="#."
                          className={` ${showIcon ? "text-white hover:text-themeDarkBeige" : "!text-white hover:!text-themeDarkBeige"}
                       properties`}
                        >
                          Properties
                          <span>
                            <FaAngleDown />
                          </span>
                        </Link>
                        <div className="dropdown relative">
                          <ul>
                            <li>
                              <Link
                                className={` flex items-center gap-4 md:block ${currentRoute === "/about" ? "!text-themeDarkBeige" : ""}  ${currentRoute === "/" ? "md:!text-themeLapisBlue !text-white md:hover:!text-themeDarkBeige" : "md:!text-themeLapisBlue !text-white md:hover:!text-themeDarkBeige"}`}
                                href="/pristine-zoya"
                              >
                                Pristine by Zoya
                                <span className="text-white">
                                  <FaAngleRight className="text-white" />
                                </span>
                              </Link>
                            </li>
                          </ul>
                          <VscTriangleUp className="angleup md:block hidden" />
                        </div>
                      </li> */}

                      <li onClick={toggleClass}>
                        <Link href="/media-center">Media Center</Link>
                      </li>
                      <li onClick={toggleClass}>
                        <Link
                          className={`${currentRoute === "/contact-us" ? "!text-themeDarkBeige" : ""}`}
                          href="/contact-us"
                        >
                          Contact Us
                        </Link>
                      </li>
                      <div className="social_icons flex gap-5 text-white">
                        <Link href="https://www.facebook.com/zoya.developments" target="_blank">
                          <FaFacebookF />
                        </Link>
                        <Link href="https://www.instagram.com/zoya.developments/" target="_blank">
                          <BiLogoInstagramAlt />
                        </Link>
                        <Link href="https://www.linkedin.com/company/zoya-developments/" target="_blank">
                          <FaLinkedinIn />
                        </Link>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ${active ? "z-0" : "z-[999]"} */}
      <div className={`fixed z-[999]`}>
        <div className="fixed Side_fixed_icons p-3 pr-1 right-0 top-[38%]">
          <div className="flex flex-col gap-3 xl:gap-6 Icons Fixed_Icons">
            {/* <div className="">
              <Link href="#.">
                <FaWhatsapp />
              </Link>
            </div> */}
            <div className="">
              <Link href="tel:8009692">
                <FaPhoneVolume />
              </Link>
            </div>
            <div className="">
              <Link href="mailto:info@zoyadevelopments.ae">
                <FaRegMessage />
              </Link>
            </div>
          </div>
        </div>
        <div className="Icons hidden md:block w-[50px] h-[50px] md:w-auto md:h-auto fixed bottom-5 right-5 bg-transparent">
          <Link href="#" className="">
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
