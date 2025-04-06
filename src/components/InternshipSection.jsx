import React from "react";
import InternshipIllustration from "../assets/undraw_designer_efwz.svg";

const InternshipSection = () => {
  return (
    <div
      className="relative w-[90%] max-w-[1578px] mx-auto rounded-[44px] px-6 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-14 lg:py-20 shadow-xl flex flex-col md:flex-row items-center md:items-start bg-gradient-to-br from-[#5B6EF5] to-[#8B46FA]"
    >
      {/* Left Content */}
      <div className="flex flex-col justify-start gap-6 w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-white font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-wide">
          Internships carefully crafted for you
        </h1>

        <p className="text-white font-montserrat text-base sm:text-lg md:text-xl leading-relaxed tracking-[0.015em] opacity-90">
          Launch your tech career with SoftMind Technologies. We offer
          internships in web development, cloud computing, AI, and more.
          <br className="hidden md:block" />
          Gain hands-on experience, learn from industry experts, and build a
          future you’re proud of.
        </p>

        <button className="group bg-white text-black font-semibold text-lg md:text-xl px-6 md:px-10 py-3 md:py-4 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-fit mx-auto md:mx-0 flex items-center gap-3">
          Apply Now
          <span className="text-2xl md:text-3xl font-extrabold group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </div>

      {/* Right Image */}
      <div className="hidden md:flex w-full md:w-1/2 justify-center mt-10 md:mt-0">
        <img
          src={InternshipIllustration}
          alt="Internship Illustration"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default InternshipSection;
