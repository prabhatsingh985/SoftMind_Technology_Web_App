import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";

const InternshipCard = ({ title, description, location, duration, type, bgColor }) => {
  return (
    <div className={`rounded-[20px] p-6 w-[300px] shadow-lg ${bgColor}`}>
      {/* Icon */}
      <div className="w-14 h-14 bg-white bg-opacity-30 rounded-full flex items-center justify-center mb-4">
        <FaBriefcase className="text-black text-2xl" />
      </div>

      {/* Title & Description */}
      <h2 className="text-black font-bold text-xl">{title}</h2>
      <p className="text-gray-700 text-sm">{description}</p>

      {/* Details */}
      <div className="mt-4 space-y-2 text-black">
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt /> {location}
        </p>
        <p className="flex items-center gap-2">
          <FaCalendarAlt /> {duration}
        </p>
        <p className="flex items-center gap-2">
          <FaBriefcase /> {type}
        </p>
      </div>

      {/* Buttons (Stacked Vertically) */}
      <div className="mt-6 flex flex-col gap-2">
        <button className="bg-white text-black font-bold w-full py-2 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-gray-300 hover:shadow-lg">
          View Details
        </button>
        <button className="bg-black text-white font-bold w-full py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-800 hover:shadow-lg flex justify-center items-center gap-2">
          Apply →
        </button>
      </div>
    </div>
  );
};

export default InternshipCard;
