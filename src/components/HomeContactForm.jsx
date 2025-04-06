import React from "react";

export default function HomeContactForm() {
  return (
    <div className="bg-purple-700 text-white mt-20 py-10 rounded-3xl m-2">
      <div className="container mx-auto px-10 grid grid-cols-1 [@media(min-width:700px)]:grid-cols-2 gap-10">

        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in touch with our support team
          </h2>
          <h6 className="text-base md:text-lg font-light">
            Please fill up the form for more enquiries
          </h6>
          <p className="mt-4 md:mt-110  text-base mt-4 pt-0">
            📞 7391265552 <br />
            ✉ info@softmindtechnologies.com <br />
            📍 Softmind Technologies, New Delhi - 110074
          </p>
        </div>
        {/* Right Section */}
        <div className="bg-gray-100 text-black p-6 md:p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold">Apply Now</h2>
          <h3 className="text-xl md:text-2xl font-semibold mt-2">
            Contact Information
          </h3>
          <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-2 rounded-lg border border-gray-300"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-2 rounded-lg border border-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email ID"
              className="p-2 rounded-lg border border-gray-300"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-2 rounded-lg border border-gray-300"
            />
            <input
              type="text"
              placeholder="Position"
              className="col-span-1 md:col-span-2 p-2 rounded-lg border border-gray-300"
            />
            <input
              type="text"
              placeholder="CV (URL)"
              className="col-span-1 md:col-span-2 p-2 rounded-lg border border-gray-300"
            />
            <textarea
              placeholder="Message"
              className="col-span-1 md:col-span-2 p-2 rounded-lg border border-gray-300"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="col-span-1 md:col-span-2 bg-black text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
