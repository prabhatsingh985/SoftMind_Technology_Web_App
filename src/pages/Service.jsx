import React from "react";
import ServiceCard from "../components/ServiceCard.jsx";
import logo from "../assets/logo.png";
import hero from "../assets/hero.webp";
import bulk from "../assets/bulk.png";
import Businessint from "../assets/bintel.png";
import Navbar from "../components/Navbar.jsx"
import uiux from "../assets/uiux.png";
import td from "../assets/t&d.jpeg";
import dms from "../assets/dms.jpg";
import sd from "../assets/sd.jpeg";







const ServicesPage = () => {
  const services = [
    {
      title: "Bulk Emailing & Messaging",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cardImage: bulk,
      detailImage: bulk,
    },
    {
      title: "Business Intelligence",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cardImage: Businessint,
      detailImage: Businessint,
    },
    {
      title: "UX UI Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cardImage: uiux,
      detailImage:uiux,
    },
    {
      title: "Training and Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cardImage: td,
      detailImage: td,
    },
    {
      title: "Digital Marketing & SEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cardImage: dms,
      detailImage: dms,
    },
    {
      title: "Software Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cardImage: sd,
      detailImage: sd,
    },
  ];

  return (
    <div className="bg-white font-sans">
      {/* Navbar */}
     

      {/* Hero Section */}
      <section className="relative">
        <img
          src={hero}
          alt="Hero"
          className="w-full h-96 object-cover"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
          SERVICES
        </h1>
      </section>

      {/* Services Overview */}
      <section className="text-center py-16 bg-gradient-to-b from-blue-500 to-purple-500 text-white">
        <h2 className="text-xl font-semibold">Our Services</h2>
        <h3 className="text-3xl font-bold mt-2">
          Feel the power of Technology Software Service
        </h3>

        <div className="grid grid-cols-3 gap-6 mt-10 px-20">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} image={service.cardImage} />
          ))}
        </div>
      </section>

      {/* Service Details */}
{/* Service Details */}
<section className="py-16">
  <div className="max-w-5xl mx-auto space-y-16 px-4">
    {services.map((service, index) => (
      <div key={index} className="flex flex-col md:flex-row items-center md:relative">
        {/* Image Container with negative margin to overlap text container */}
        <div
          className={`w-full md:w-1/2 ${
            index % 2 === 0
              ? "md:order-1 md:mr-[-50px]"
              : "md:order-2 md:ml-[-50px]"
          }`}
        >
          <img
            src={service.detailImage}
            alt={service.title}
            className="w-80 h-80 rounded-full border-8 border-purple-500 shadow-2xl drop-shadow-[20px_0px_20px_rgba(0,0,0,0.4)] object-cover mx-auto"
          />
        </div>
        {/* Text Container with gradient background */}
        <div
          className={`w-full md:w-1/2 mt-6 md:mt-0 p-8 rounded-lg shadow-md relative z-10 ${
            index % 2 === 0
              ? "md:order-2 bg-gradient-to-r from-purple-500 to-white"
              : "md:order-1 bg-gradient-to-l from-purple-500 to-white"
          }`}
        >
          <h3 className="text-3xl font-bold">{service.title}</h3>
          <p className="text-gray-600 mt-3">{service.description}</p>
          <button className="mt-5 bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600">
            Get Started
          </button>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <div className="text-lg font-bold">Softmind</div>
        <p className="text-gray-400 mt-2">&copy; 2025 Softmind. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
