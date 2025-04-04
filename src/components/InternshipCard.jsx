import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const InternshipSection = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/apply"); // Navigate to the apply form
  };

  const internships = [
    {
      title: "Web Development Internship",
      description: "Work on real-world projects and enhance your web skills.",
      location: "Remote",
      duration: "3 Months",
      type: "Part-time",
      bgColor: "bg-blue-200",
    },
    {
      title: "Cloud Computing Internship",
      description: "Learn AWS, Azure, and Google Cloud technologies.",
      location: "Hybrid",
      duration: "6 Months",
      type: "Full-time",
      bgColor: "bg-purple-200",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-6 py-10">
      <h1 className="text-3xl font-bold text-center">Available Internships</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {internships.map((internship, index) => (
          <InternshipCard
            key={index}
            title={internship.title}
            description={internship.description}
            location={internship.location}
            duration={internship.duration}
            type={internship.type}
            bgColor={internship.bgColor}
            onApply={handleApplyClick} // Pass function as prop
          />
        ))}
      </div>
    </div>
  );
};

const InternshipCard = ({ title, description, location, duration, type, bgColor, onApply }) => {
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

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-2">
        <button className="bg-white text-black font-bold w-full py-2 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-gray-300 hover:shadow-lg">
          View Details
        </button>
        <button
          onClick={onApply}
          className="bg-black text-white font-bold w-full py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-800 hover:shadow-lg flex justify-center items-center gap-2"
        >
          Apply →
        </button>
      </div>
    </div>
  );
};

export default InternshipSection;
