import React from "react";
import homepageimage2 from "../assets/homepageimage2.png";
import homepageimage3 from "../assets/homepageimage3.png";

export default function HomeResponsiveSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto py-12">
      {/* Left Image */}
      <div className="w-4/5 sm:w-3/5 lg:w-1/2">
        <img
          src={homepageimage2}
          alt="Feature illustration"
          className="w-full h-auto rounded-2xl object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 uppercase leading-tight">
          We Offer Custom Software Development Service For Any Needs
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="mt-6 w-full">
          <img
            src={homepageimage3}
            alt="Workflow illustration"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
