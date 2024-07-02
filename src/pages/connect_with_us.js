import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const connect_with_us = () => {
  return (
    <>
    <Header/>
      <section className="Connect_page py-32 pb-20">
        <div className="container">
          <h1 className="uppercase text-[100px] leading-[1.3] text-themeDarkBeige font-medium">
            Connect With Us
          </h1>
          <div className="form_Section pt-20 flex flex-wrap gap-20 md:gap-0">
            <div className="Inner_Section w-[40%] flex flex-col justify-between gap-24 md:gap-0">
              <div>
                <h5 className="text-black font-medium mb-5">
                  For General Enquiries
                </h5>
                <p className="text-base text-black font-medium">
                  For more general enquiries or to simply say hello, reach out
                  to us.
                </p>
              </div>
              <div className="flex justify-between flex-wrap gap-10 md:gap-0">
                <div>
                  <h6 className="text-black font-medium mb-3">Sales Enquiry</h6>
                  <div className="flex gap-4 items-center mb-2">
                    <FaRegEnvelope />
                    <a className="font-medium hover:text-themeDarkBeige Fast_animate" href="mailto:sales@zoya.ae">sales@zoya.ae</a>
                  </div>
                  <div className="flex gap-4 items-center">
                    <FiPhone />
                    <a className="font-medium hover:text-themeDarkBeige Fast_animate" href="tel:+971 9876543210">+971 9876543210</a>
                  </div>
                </div>
                <div>
                  <h6 className="text-black font-medium mb-3">
                    Other Inquiries
                  </h6>
                  <div className="flex gap-4 items-center mb-2">
                    <FaRegEnvelope />
                    <a className="font-medium hover:text-themeDarkBeige Fast_animate" href="mailto:support@zoya.ae">support@zoya.ae</a>
                  </div>
                  <div className="flex gap-4 items-center">
                    <FiPhone />
                    <a className="font-medium hover:text-themeDarkBeige Fast_animate" href="tel:+971 9876543210">+971 9876543210</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="Inner_Section w-[60%] pl-36">
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
        <img className="w-full h-full" src="/map.png" />
      </div>
      <Footer/>
    </>
  );
};

export default connect_with_us;
