import React from "react";

const InternshipCertificate = () => {
  return (
    <div className="relative mt-10 w-full flex flex-col items-center py-16 px-4 sm:px-6">
      <h1 className="text-gray-900 font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        Get Your Internship Certificate
      </h1>
      <div className="mt-6 flex flex-col items-center w-full max-w-[800px] rounded-[20px] shadow-2xl px-6 py-6 sm:px-10 sm:py-10 border border-gray-300 bg-white">
        {/* Ensuring text is centered */}
        <h2 className="text-gray-700 font-sans font-medium text-lg sm:text-xl text-center mb-4 flex justify-center items-center">
          Enter your Intern ID below to download your verified certificate
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          <input
            type="text"
            placeholder="Enter your Intern ID"
            className="w-full px-4 py-3 border border-gray-400 rounded-full text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm bg-gray-100"
          />
          <button
            className="text-white font-semibold px-6 sm:px-12 py-3 rounded-full shadow-lg transition w-full md:w-auto"
            style={{ background: "linear-gradient(0deg, #6770F3 0%, #8346F8 100%)" }}
          >
            Get
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternshipCertificate;
