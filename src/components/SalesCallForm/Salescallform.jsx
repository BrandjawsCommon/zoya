// import React, { useState, useEffect } from "react";
// import { FaArrowLeft } from "react-icons/fa6";

// const Salescallform = ({ togglePopup }) => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [utmParams, setUtmParams] = useState({});

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const utms = {
//       utm_source: params.get("utm_source") || "",
//       utm_medium: params.get("utm_medium") || "",
//       utm_campaign: params.get("utm_campaign") || "",
//       utm_term: params.get("utm_term") || "",
//       utm_content: params.get("utm_content") || "",
//     };

//     setUtmParams(utms);
//   }, []);

//   function gtag_report_conversion(url) {
//     var callback = function () {
//       if (typeof url !== "undefined") {
//         window.location = url;
//       }
//     };
//     gtag("event", "conversion", {
//       send_to: "AW-16635261680/_89qCLnSn8EZEPDlp_w9",
//       event_callback: callback,
//     });
//     return false;
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const first_name = formData.get("first_name").trim();
//     const last_name = formData.get("last_name").trim();
//     const email_id = formData.get("email_id").trim();
//     const company_name = formData.get("company_name").trim();
//     const message = formData.get("message").trim();

//     if (!first_name || !last_name || !email_id || !company_name || !message) {
//       alert("All fields are required. Please fill out the entire form.");
//       return;
//     }

//     gtag_report_conversion();

//     const data = {
//       first_name,
//       last_name,
//       email_id,
//       company_name,
//       message,
//       ...utmParams,
//     };

//     try {
//       const response = await fetch(
//         "https://hooks.zapier.com/hooks/catch/4631356/26mka49/",
//         {
//           method: "POST",
//           body: JSON.stringify(data),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const result = await response.json();
//       console.log("Data Sent Successfully!");
//       event.target.reset();
//       setShowPopup(true);
//     } catch (error) {
//       console.error("Error sending data:", error);
//       alert("There was an error submitting the form. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="flex justify-between flex-wrap">
//           <input
//             placeholder="First Name"
//             type="text"
//             id="first_name"
//             name="first_name"
//           />
//           <input
//             placeholder="Last Name"
//             type="text"
//             id="last_name"
//             name="last_name"
//           />
//         </div>
//         <div className="flex justify-between flex-wrap my-8">
//           <input
//             placeholder="Email Address"
//             type="email"
//             id="email_id"
//             name="email_id"
//           />
//           <input
//             placeholder="Company Name"
//             type="text"
//             id="company_name"
//             name="company_name"
//           />
//         </div>
//         <textarea
//           id="message"
//           name="message"
//           className="w-full min-h-44 mb-8"
//           placeholder="Type your enquiries here.."
//         />
//         <button
//           className="transparentBtn cursor-pointer w-full md:w-fit"
//           type="submit"
//         >
//           Send
//         </button>
//       </form>

//       {showPopup && (
//         <div className="w-full h-screen pt-[300px] fixed top-0 left-0 !z-50 bg-white">
//           <div className="container">
//             <h4 className="text-black">Thank you for submitting the form.</h4>
//             <button
//               onClick={togglePopup}
//               className="bg-themeLapisBlue text-white mt-5 px-6 py-2 flex items-center gap-3 rounded-full"
//             >
//               <FaArrowLeft />
//               Back to form
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Salescallform;

import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Salescallform = ({ togglePopup }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [utmParams, setUtmParams] = useState({});
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utms = {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
    };

    setUtmParams(utms);
  }, []);

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url !== "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-16635261680/_89qCLnSn8EZEPDlp_w9",
      event_callback: callback,
    });
    return false;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const first_name = formData.get("first_name").trim();
    const last_name = formData.get("last_name").trim();
    const phone_id = formData.get("phone_id").trim();
    const company_name = formData.get("company_name").trim();
    const email_id = formData.get("email_id").trim();
    const message = formData.get("message").trim();

    if (
      !first_name ||
      !last_name ||
      !phone_id ||
      !company_name ||
      !email_id ||
      !message
    ) {
      alert("All fields are required. Please fill out the entire form.");
      return;
    }

    gtag_report_conversion();

    const data = {
      first_name,
      last_name,
      phone_id,
      company_name,
      email_id,
      message,
      ...utmParams,
    };

    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/4631356/26mka49/",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Data Sent Successfully!");
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
            placeholder="First Name"
            type="text"
            id="first_name"
            name="first_name"
          />
          <input
            placeholder="Last Name"
            type="text"
            id="last_name"
            name="last_name"
          />
        </div>
        <div className="flex justify-between flex-wrap my-8">
          <div className="phoneField">
            <PhoneInput
              country={"us"}
              value={phone}
              inputProps={{
                name: "phone_id",
                required: true,
                autoFocus: true,
              }}
            />
          </div>
          <input
            placeholder="Company Name"
            type="text"
            id="company_name"
            name="company_name"
          />
        </div>
        <input
          className="mb-8 w-full"
          placeholder="Email Address"
          type="email"
          id="email_id"
          name="email_id"
        />
        <textarea
          id="message"
          name="message"
          className="w-full min-h-44 mb-8"
          placeholder="Type your enquiries here.."
        />
        <button
          className="transparentBtn cursor-pointer w-full md:w-fit"
          type="submit"
        >
          Send
        </button>
      </form>

      {showPopup && (
        <div className="w-full h-screen pt-[300px] fixed top-0 left-0 !z-50 bg-white">
          <div className="container">
            <h4 className="text-black">Thank you for submitting the form.</h4>
            <button
              onClick={togglePopup}
              className="bg-themeLapisBlue text-white mt-5 px-6 py-2 flex items-center gap-3 rounded-full"
            >
              <FaArrowLeft />
              Back to form
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Salescallform;
