import React from "react";

const InternshipCertificate = () => {
  return (
    <div className="relative w-[90%] max-w-[1578px] mx-auto mt-16 mb-5 py-16 px-4 sm:px-6 bg-gradient-to-br from-indigo-100 via-white to-purple-100 overflow-hidden rounded-[44px] shadow-xl">
      {/* Blurred Circles for Background Design */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-300 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-indigo-400 rounded-full blur-2xl opacity-30 z-0" />

      <div className="relative z-10 w-full flex flex-col items-center text-center max-w-[800px] mx-auto">
        <h1 className="text-gray-900 font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Get Your Internship Certificate
        </h1>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl max-w-2xl">
          Enter your unique Intern ID to download your verified certificate.
        </p>

        <div className="mt-10 w-full flex justify-center">
          <div className="w-full sm:w-[75%] flex flex-col sm:flex-row justify-end gap-4">
            <input
              type="text"
              placeholder="e.g. INT2024XYZ"
              className="w-full sm:w-[65%] px-5 py-3 text-base sm:text-lg rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white transition-all duration-200"
            />
            <button
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 hover:shadow-lg transition duration-300"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipCertificate;
