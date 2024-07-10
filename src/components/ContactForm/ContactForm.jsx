import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const ContactForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url !== "undefined") {
        window.location = url;
      }
    };    gtag("event", "conversion", {
      send_to: "AW-16635261680/_89qCLnSn8EZEPDlp_w9",
      event_callback: callback,
    });
    return false;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const user_id = formData.get("user_id");
    const email = formData.get("email");
    const eventField = formData.get("event");

    if (!name || !user_id || !email || !eventField) {
      alert("All fields are required. Please fill out the entire form.");
      return;
    }

    gtag_report_conversion();

    const data = {
      event: eventField,
      user_id: user_id,
      name: name,
      email: email,
    };

    // console.log("Sending data:", data);

    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/4631356/235wrbm/",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log("Response from server:", result);
      event.target.reset();
      setShowPopup(true); 
    } catch (error) {
      console.error("Error sending data:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between flex-wrap">
          <input
            placeholder="Name"
            type="text"
            id="name"
            name="name"
          />
          <input
            placeholder="Phone"
            type="number"
            id="user_id"
            name="user_id"
          />
        </div>
        <div className="flex justify-between flex-wrap my-8">
          <input
            placeholder="Email"
            type="email"
            id="email"
            name="email"
          />
          <input
            placeholder="Message"
            type="text"
            id="event"
            name="event"
          />
        </div>
        <input type="submit" value="Submit" className="transparentBtn" />
      </form>

      {showPopup && (
        <div className="w-full h-screen pt-[300px] fixed top-0 left-0 z-10 bg-white">
          <div className="container">
            <h4 className="text-black">Thank you for submitting the form.</h4>
            <button onClick={() => setShowPopup(false)} className="bg-themeLapisBlue text-white mt-5 px-6 py-2 flex items-center gap-3 rounded-full">
              <FaArrowLeft />
              Back to form
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
