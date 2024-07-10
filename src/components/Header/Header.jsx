import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active);
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
      if (window.scrollY > 0) {
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

  return (
    <>
      <header className="py-5 z-20 fixed top-0 left-0 right-0 w-full bg-themeSoftPeach">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="logo">
              <Link href="/">
                <img className="w-full max-w-[133px]" src="/Zoya_Logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="navigation">
              <ul className="gap-6 items-center hidden md:flex">
                <li>
                  <Link
                    className={`${currentRoute === "/" ? "!text-themeDarkBeige" : ""}`}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${currentRoute === "/our-story" ? "!text-themeDarkBeige" : ""}`}
                    href="/our-story"
                  >
                    our Story
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className={`${currentRoute === "/project-detail-page" ? "!text-themeDarkBeige" : ""}`}
                    href="#."
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${currentRoute === "/press-release" ? "!text-themeDarkBeige" : ""}`}
                    href="#."
                  >
                    Press Release
                  </Link>
                </li> */}
                <li>
                  <Link
                    className={`Btn ${currentRoute === "/connect" ? "!text-themeDarkBeige" : ""} `}
                    href="/connect"
                  >
                    Connect
                  </Link>
                </li>
              </ul>
              <div className="Menu_Button Mobile_Menu block md:hidden">
                <button
                  id="nav-toggle"
                  className={`Btn ${active ? "active" : ""}`}
                  onClick={toggleClass}
                >
                  <span></span>
                </button>

                <div
                  className={`Main-Menu h-screen w-full bg-themeSoftPeach fixed -z-[2] left-0 right-0 animate ${active ? "bottom-0" : "-bottom-[200%]"}`}
                >
                  <div className="container flex flex-col flex-wrap justify-between h-full">
                    <ul className="flex flex-wrap flex-col lg:flex-row gap-6 items-end lg:items-center">
                      <li>
                        <Link
                          className={`${currentRoute === "/" ? "!text-themeDarkBeige" : ""}`}
                          href="/"
                        >
                          Home
                        </Link>
                      </li>

                      <li onClick={toggleClass}>
                        <Link
                          href="/our-story"
                          className={`${currentRoute === "/our-story" ? "!text-themeDarkBeige" : ""}`}
                        >
                          our Story
                        </Link>
                      </li>
                      {/* <li onClick={toggleClass}>
                        <Link
                          href="#."
                          className={`${currentRoute === "/project-detail-page" ? "!text-themeDarkBeige" : ""}`}
                        >
                          Projects
                        </Link>
                      </li>
                      <li onClick={toggleClass}>
                        <Link
                          href="#."
                          className={`${currentRoute === "/press-release" ? "!text-themeDarkBeige" : ""}`}
                        >
                          Press Release
                        </Link>
                      </li> */}
                      <li onClick={toggleClass}>
                        <Link className="Btn" href="/connect">
                          Connect
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`fixed ${active ? "z-0" : "z-[999]"}`}>
        {/* Side Bar Three Icons  */}

        <div className="fixed right-5 top-[50%]">
          <div className="flex flex-col gap-3 xl:gap-6 Icons Fixed_Icons">
            <div className="">
              <Link href="#.">
                <FaWhatsapp />
              </Link>
            </div>
            <div className="">
              <Link href="#.">
                <FaPhoneVolume />
              </Link>
            </div>
            <div className="">
              <Link href="#.">
                <FaRegMessage />
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Up Icon */}
        {/* {showIcon && (
          <div className="Icons fixed bottom-5 right-5">
            <Link className="!bg-transparent" href="#">
              <FaArrowUp />
            </Link>
          </div>
        )} */}
        <div className="Icons w-[50px] h-[50px] md:w-auto md:h-auto fixed bottom-5 right-5 bg-transparent">
          <Link href="#" className="">
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
