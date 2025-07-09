import React, { useState } from "react";
import Typical from "react-typical"; // Import react-typical for typing animation
import map from "../assets/contact/map.jpg";

const ContactUs = () => {
  const [hideCursor, setHideCursor] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    tellUs: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // will hold 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      const response = await fetch(
        `https://softmind-technology-web-app.onrender.com/api/send/Contactpagecontact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", tellUs: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-white font-poppins">
      {/* Hero Section */}
      <div className="relative h-[300px] flex flex-col items-center justify-center bg-white text-black text-center px-4">
        <h2 className="m-5 relative z-10 text-3xl md:text-5xl font-extrabold text-purple-700">
          {!hideCursor ? (
            <Typical
              steps={["Contact us", 2000]}
              loop={1}
              wrapper="span"
              onComplete={() => setHideCursor(true)}
            />
          ) : (
            "Contact us"
          )}
        </h2>
        <h1 className="relative z-10 text-4xl md:text-6xl text-black font-extrabold">
          {!hideCursor ? (
            <Typical
              steps={["Get in touch with our Team", 3000]}
              loop={1}
              wrapper="span"
              onComplete={() => setHideCursor(true)}
            />
          ) : (
            "Get in touch with our Team"
          )}
        </h1>
        <p className="relative z-10 text-lg md:text-2xl">
          {!hideCursor ? (
            <Typical
              steps={["Our team will guide you better", 3000]}
              loop={1}
              wrapper="span"
              onComplete={() => setHideCursor(true)}
            />
          ) : (
            "Our team will guide you better"
          )}
        </p>
      </div>

      {/* Map Section */}
      <div className="px-4 md:px-30 py-10 relative w-full">
        <img
          src={map}
          alt="Map"
          className="w-full h-[300px] md:h-screen object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Contact Section */}
      <div className="bg-purple-700 text-white mt-20 py-10">
        <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Get in touch</h2>
            <p className="mt-4 text-sm md:text-base">
              📞 7321063552 <br />
              ✉️ info@softmindtechnologies.com <br />
              📍 Softmind Technologies, New Delhi - 110074
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-gray-100 text-black p-6 md:p-10 rounded-lg shadow-lg">
            <h1 className="text-2xl md:text-4xl font-semibold">
              Contact Information
            </h1>
            <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                placeholder="First Name"
                className="p-2 rounded-lg border border-gray-300 transition-transform duration-300 hover:scale-105 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
                className="p-2 rounded-lg border border-gray-300 transition-transform duration-300 hover:scale-105 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email ID"
                className="p-2 rounded-lg border border-gray-300 transition-transform duration-300 hover:scale-105 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                placeholder="Phone Number"
                className="p-2 rounded-lg border border-gray-300 transition-transform duration-300 hover:scale-105 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
              <input
                name="tellUs"
                value={formData.tellUs}
                onChange={handleChange}
                type="text"
                placeholder="Tell Us"
                className="col-span-1 md:col-span-2 p-2 rounded-lg border border-gray-300 transition-transform duration-300 hover:scale-105 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
              <h2 className="text-lg md:text-2xl font-semibold col-span-1 md:col-span-2">
                What can we help you with?
              </h2>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="col-span-1 md:col-span-2 p-2 rounded-lg border border-gray-300 transition-transform duration-300 hover:scale-105 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="col-span-1 md:col-span-2 bg-black text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:scale-105"
              >
                Submit
              </button>
            </form>

            {status === "success" && (
              <p className="mt-4 text-green-600">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
