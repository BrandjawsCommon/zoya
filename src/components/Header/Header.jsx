import Link from "next/link";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active);
  };
  return (
    <>
      <header className="py-5 z-20 fixed top-0 left-0 right-0 w-full bg-themeSoftPeach">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="logo">
              <Link href="/">
                <img className="w-32" src="/Zoya_Logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="navigation">
              <ul className="gap-6 items-center hidden md:flex">
                <li>
                  <Link className="!text-themeDarkBeige" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about">our Story</Link>
                </li>
                <li>
                  <Link href="#.">Projects</Link>
                </li>
                <li>
                  <Link href="#.">Press Release</Link>
                </li>
                <li>
                  <Link className="Btn" href="/connect_with_us">
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
                  className={`Main-Menu h-screen w-full bg-themeSoftPeach fixed -z-[2] left-0 right-0 animate ${active ? "bottom-0" : "-bottom-full"}`}
                >
                  <div className="container flex flex-col flex-wrap justify-between h-full">
                    <ul className="flex flex-wrap flex-col lg:flex-row gap-6 items-end lg:items-center">
                      <li>
                        <Link className="!text-themeDarkBeige" href="/">
                          Home
                        </Link>
                      </li>

                      <li onClick={toggleClass}>
                        <Link href="/about">our Story</Link>
                      </li>
                      <li
                      onClick={toggleClass}
                      >
                        <Link href="#.">Projects</Link>
                      </li>
                      <li
                      onClick={toggleClass}
                      >
                        <Link href="#.">Press Release</Link>
                      </li>
                      <li>
                        <Link className="Btn" href="/connect_with_us">
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

        <div className="Icons">
          <a className=" fixed bottom-5 right-5" href="#">
            <FaArrowUp />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
