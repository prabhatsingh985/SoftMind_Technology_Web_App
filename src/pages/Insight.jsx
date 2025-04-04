import React from "react";
import pgb from "../assets/pgb.png";
import pg2 from "../assets/pg2.png";

const Insight = () => {
  return (
    <div className="px-6 py-10">
      {/* Hero Section */}
      <div className="relative text-center mb-10 min-h-[300px] flex flex-col items-center justify-center">
        {/* Image */}
        <img
          src={pgb}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover rounded-lg" // Added border radius
        />

        {/* Text Content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white">Insights</h1>
          <p className="mt-4 text-lg text-gray-300">
            Explore the latest trends, innovations, and expert opinions in the world of technology.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full md:w-[90%]">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none placeholder-black placeholder:font-semibold"
            style={{ backgroundColor: "#DFD8FD" }} // Updated background color
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            🔍 {/* Search icon */}
          </span>
        </div>
      </div>

      {/* Articles Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-white p-4 rounded-lg shadow-lg max-w-[90%] mx-auto"
          >
            <img
              src={pg2}
              alt="Article Thumbnail"
              className="w-full h-48 object-cover rounded-lg" // Added border radius
            />
            <h2 className="text-xl font-semibold mt-4">
              How to Build a Scalable Application up to 1 Million Users on AWS
            </h2>
            <a href="#" className="text-purple-600 font-medium mt-2 inline-block">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insight;
