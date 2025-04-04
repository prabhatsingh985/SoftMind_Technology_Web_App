import React from "react";
import { useNavigate } from "react-router-dom";

const InternshipSection = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleApplyClick = () => {
    navigate("/apply"); // Change "/apply" to the actual route of your apply form component
  };

  return (
    <div
      className="relative w-[90%] max-w-[1578px] mx-auto rounded-[44px] px-4 sm:px-6 py-6 sm:py-8 md:px-10 md:py-12 lg:px-14 lg:py-16 shadow-lg flex flex-col md:flex-row items-center md:items-start text-center md:text-left min-h-[300px] sm:min-h-[352px]"
      style={{
        background: "linear-gradient(0deg, #6770F3 0%, #8346F8 100%)",
      }}
    >
      <div className="flex flex-col justify-start gap-4 md:gap-6 w-full max-w-2xl">
        <h1 className="text-white font-montserrat font-[700] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide">
          Internships carefully crafted for you
        </h1>
        <p className="text-white font-montserrat text-sm sm:text-base md:text-lg leading-[140%] tracking-[0.02em] opacity-90">
          Launch your tech career! SoftMind Technologies offers internships in
          web development, cloud, & more.
          <br className="hidden md:block" /> Gain experience, learn from experts, and build your future.
        </p>
        <button
          onClick={handleApplyClick} // Navigate on click
          className="bg-white text-black font-bold text-base sm:text-lg md:text-xl px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 flex items-center justify-center gap-2 sm:gap-3 tracking-wide w-fit mx-auto md:mx-0"
        >
          Apply Now
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold">→</span>
        </button>
      </div>
    </div>
  );
};

export default InternshipSection;
