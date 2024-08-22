import React, { useState, useEffect } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [utmParams, setUtmParams] = useState({});

  useEffect(() => {
    // Capture UTM parameters from the URL
    const params = new URLSearchParams(window.location.search);
    const utms = {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
    };

    // Log UTM parameters to ensure they are captured correctly
    // console.log("Captured UTM parameters:", utms);

    setUtmParams(utms);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    const data = {
      email_id: email,
      ...utmParams, // Include captured UTM parameters in the submission data
    };

    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/4631356/24j8eq4/", // Newsletter Zapier URL
        {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json", // Ensure JSON data format
          // },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Data Sent Successfully!");
      // console.log("Response from server:", result);
      setEmail(""); // Clear email field
      setShowPopup(true);
    } catch (error) {
      console.error("Error submitting email:", error);
      alert("There was an error subscribing. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="footer_Form my-7">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>

      {showPopup && (
        <div className="w-full h-screen pt-[300px] fixed top-0 left-0 !z-50 bg-white">
          <div className="container">
            <h4 className="text-black">Thank you for subscribing!</h4>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-themeLapisBlue text-white mt-5 px-6 py-2 flex items-center gap-3 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;




// import React, { useState } from "react";

// const NewsletterForm = () => {
//   const [email, setEmail] = useState("");
//   const [showPopup, setShowPopup] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!email) {
//       alert("Please enter your email address.");
//       return;
//     }

//     const data = {
//       email_id: email,
//     };

//     try {
//       const response = await fetch(
//         "https://hooks.zapier.com/hooks/catch/4631356/24j8eq4/", // Newsletter Zapier URL
//         {
//           method: "POST",
//         //   headers: {
//         //     "Content-Type": "application/json", // Ensure JSON data format
//         //   },
//           body: JSON.stringify(data),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const result = await response.json();
//       console.log("Response from server:", result);
//       setEmail(""); // Clear email field
//       setShowPopup(true);
//     } catch (error) {
//       console.error("Error submitting email:", error);
//       alert("There was an error subscribing. Please try again.");
//     }
//   };

//   return (
//     <div >
//       <form onSubmit={handleSubmit} className="footer_Form my-7">
//         <input
//           type="email"
//           placeholder="Enter your email address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button type="submit">Subscribe</button>
//       </form>

//       {showPopup && (
//         <div className="w-full h-screen pt-[300px] fixed top-0 left-0 !z-50 bg-white">
//           <div className="container">
//             <h4 className="text-black">Thank you for subscribing!</h4>
//             <button
//               onClick={() => setShowPopup(false)}
//               className="bg-themeLapisBlue text-white mt-5 px-6 py-2 flex items-center gap-3 rounded-full"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewsletterForm;
