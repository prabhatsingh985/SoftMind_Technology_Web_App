import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const InternshipCard = ({ id, title, description, location, duration, type, bgColor }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`rounded-2xl p-6 w-[300px] shadow-md hover:shadow-xl transition-shadow duration-300 ${bgColor} flex flex-col justify-between min-h-[460px] transform hover:scale-105 hover:-translate-y-1 transition-transform`}
    >
      {/* Header */}
      <div>
        <div className="w-14 h-14 bg-white bg-opacity-40 rounded-full flex items-center justify-center mb-5">
          <FaBriefcase className="text-black text-2xl" />
        </div>

        <h2 className="text-black font-semibold text-xl mb-1">{title}</h2>
        <p className="text-gray-700 text-sm leading-snug">{description}</p>

        <div className="mt-4 space-y-2 text-sm text-black font-medium">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-600" /> {location}
          </p>
          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-gray-600" /> {duration}
          </p>
          <p className="flex items-center gap-2">
            <FaBriefcase className="text-gray-600" /> {type}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-2">
        <button
          onClick={() => navigate(`/details/${id}`)}
          className="bg-white text-black font-semibold w-full py-2 rounded-full shadow-sm hover:bg-gray-200 transition duration-200"
        >
          View Details
        </button>
        <button onClick={() => navigate('/apply-form')} className="bg-black text-white font-semibold w-full py-2 rounded-full hover:bg-gray-900 transition duration-200">
          Apply →
        </button>
      </div>
    </div>
  );
};

export default InternshipCard;
