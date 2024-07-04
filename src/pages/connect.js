import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const connect = () => {
  return (
    <>
      <Head>
        <title>Connect - Zoya</title>
        <link rel="icon" href="/Fav_Icon.png" />
      </Head>
      <Header/>
      <section className="Connect_page py-32 pb-20">
        <div className="container">
          <h1 className="uppercase !text-[40px] lg:!text-[60px] xl:text-[100px] leading-[1.3] text-themeDarkBeige font-medium">
            Connect With Us
          </h1>
          <div className="form_Section pt-10 xl:pt-20 flex flex-wrap gap-10 md:gap-0">
            <div className="Inner_Section w-[40%] flex flex-col justify-between gap-20 md:gap-0">
              <div>
                <h5 className="text-black font-medium mb-5">
                  For General Enquiries
                </h5>
                <p className="text-base text-black font-medium">
                  For more general enquiries or to simply say hello, reach out
                  to us.
                </p>
              </div>
              <div className="flex justify-between flex-wrap gap-5 xl:gap-0">
                <div>
                  <h6 className="text-black font-medium mb-3">Sales Enquiry</h6>
                  <div className="flex gap-4 items-center mb-2">
                    <FaRegEnvelope />
                    <Link
                      className="font-medium hover:text-themeDarkBeige Fast_animate"
                      href="mailto:Info@zoyadevelopments.ae"
                    >
                      Info@zoyadevelopments.ae
                    </Link>
                  </div>
                  <div className="flex gap-4 items-center">
                    <FiPhone />
                    <Link
                      className="font-medium hover:text-themeDarkBeige Fast_animate"
                      href="tel:+97145534816"
                    >
                      +97145534816
                    </Link>
                  </div>
                </div>
                <div>
                  <h6 className="text-black font-medium mb-3">
                    Other Inquiries
                  </h6>
                  <div className="flex gap-4 items-center mb-2">
                    <FaRegEnvelope />
                    <Link
                      className="font-medium hover:text-themeDarkBeige Fast_animate"
                      href="mailto:Info@zoyadevelopments.ae"
                    >
                      Info@zoyadevelopments.ae
                    </Link>
                  </div>
                  <div className="flex gap-4 items-center">
                    <FiPhone />
                    <Link
                      className="font-medium hover:text-themeDarkBeige Fast_animate"
                      href="tel:+97145534816"
                    >
                      +97145534816
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="Inner_Section w-[60%] pl-0 md:pl-10 lg:pl-20 xl:pl-36">
              <form>
                <div className="flex justify-between flex-wrap">
                  <input type="text" name="" placeholder="First Name" />
                  <input type="text" name="" placeholder="Last Name" />
                </div>
                <div className="flex justify-between flex-wrap my-8">
                  <input type="email" name="" placeholder="Email Address" />
                  <input type="text" name="" placeholder="Company name" />
                </div>
                <textarea
                  className="w-full min-h-44 mb-8"
                  placeholder="Type you enquiries here.."
                />
                <button className="transparentBtn">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="map_Section bg-themeLapisBlue">
      <iframe className="w-full h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5192163473293!2d55.279624899999995!3d25.185706999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f683045cdac7f%3A0x3e7ab93219dae54b!2sBay%20Square%20Building%203!5e0!3m2!1sen!2s!4v1720014075787!5m2!1sen!2s"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        {/* <img className="w-full h-full" src="/map.png" /> */}
      </div>
      <Footer/>
    </>

  );
};

export default connect;
