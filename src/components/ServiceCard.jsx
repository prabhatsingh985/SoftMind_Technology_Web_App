import React from "react";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;
