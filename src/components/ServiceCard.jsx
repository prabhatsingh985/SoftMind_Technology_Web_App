import React from "react";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center text-center shadow-lg rounded-lg overflow-hidden bg-white p-4 sm:p-6 md:p-8">
      <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 sm:border-4 md:border-6 border-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:rotate-360"
        />
      </div>
      <h3 className="mt-4 text-base sm:text-lg md:text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">{description}</p>
      <button className="mt-4 text-blue-600 font-semibold flex items-center space-x-2 hover:underline hover:text-blue-800 hover:text-xl transition-all duration-300">
        <span>Read More</span>
        <span className="text-lg font-bold">→</span>
      </button>
    </div>
  );
};

export default ServiceCard;
