import React from "react";
import ServiceCard from "../components/ServiceCard.jsx";
import logo from "../assets/logo.png";
import hero from "../assets/service/hero.jpg";
import bulkCard from "../assets/service/bulk.jpg";
import bulkDetail from "../assets/service/bulk.jpg";
import businessCard from "../assets/service/bintel.jpg";
import businessDetail from "../assets/service/bintel.jpg";
import uiuxCard from "../assets//service/uiux.png";
import uiuxDetail from "../assets/service/uiux.png";
import tdCard from "../assets/service/t&d.jpeg";
import tdDetail from "../assets/service/t&d.jpeg";
import dmsCard from "../assets/service/dms.jpg";
import dmsDetail from "../assets/service/dms.jpg";
import sdCard from "../assets/service/sd.jpeg";
import sdDetail from "../assets/service/sd.jpeg";

const services = [
  { 
    cardTitle: "Software Development", 
    cardDescription: "Custom software solutions tailored to your needs.", 
    serviceTitle: "Software Development", 
    detailDescription: "We provide end-ment services, ensuring high-quality, scalable, and secure solutions for your business.", 
    cardImage: sdCard, 
    detailImage: sdDetail 
  },
  { 
    cardTitle: "Business Intelligence and Analytics", 
    cardDescription: "Transform your data into insights and drive decision-making.", 
    serviceTitle: "Business Intelligence and Analytics", 
    detailDescription: "Our BI and analytics services help you make data-driven decisions by providing actionable insights and advanced reporting.", 
    cardImage: businessCard, 
    detailImage: businessDetail 
  },
  { 
    cardTitle: "Bulk Emailing and Messaging", 
    cardDescription: "Efficient communication solutions for your business.", 
    serviceTitle: "Bulk Emailing and Messaging", 
    detailDescription: "We provide reliable bulk emailing and messaging services to help you reach your audience effectively and efficiently.", 
    cardImage: bulkCard, 
    detailImage: bulkDetail 
  },
  { 
    cardTitle: "User Experience (UX) and User Interface (UI) Design", 
    cardDescription: "Design intuitive and engaging user experiences.", 
    serviceTitle: "User Experience (UX) and User Interface (UI) Design", 
    detailDescription: "Our UX/UI design services focus on creating user-friendly and visually appealing interfaces for your applications.", 
    cardImage: uiuxCard, 
    detailImage: uiuxDetail 
  },
  { 
    cardTitle: "Digital Marketing & SEO Services", 
    cardDescription: "Boost your online presence with effective marketing strategies.", 
    serviceTitle: "Digital Marketing & SEO Services", 
    detailDescription: "We offer comprehensive digital marketing and SEO services to enhance your brand visibility and drive traffic.", 
    cardImage: dmsCard, 
    detailImage: dmsDetail 
  },
  { 
    cardTitle: "Training & Development", 
    cardDescription: "Enhance skills and capabilities with expert training.", 
    serviceTitle: "Training & Development", 
    detailDescription: "Our training programs are designed to upskill your workforce and improve organizational performance.", 
    cardImage: tdCard, 
    detailImage: tdDetail 
  },
];

const ServicesPage = () => {
  const handleCardClick = (index) => {
    const section = document.getElementById(`service-section-${index}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white font-sans">
      <div className="relative h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] flex items-center justify-center bg-white text-gray-900 font-bold px-4 sm:px-6 md:px-8">
        <img 
          src={hero} 
          alt="Services" 
          className="absolute inset-6 sm:inset-8 md:inset-12 w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] h-[calc(100%-3rem)] sm:h-[calc(100%-4rem)] md:h-[calc(100%-6rem)] object-cover rounded-2xl sm:rounded-3xl" 
        />
        <h1 className="absolute bottom-8 sm:bottom-12 md:bottom-16 z-10 drop-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">SERVICES</h1>
      </div>

      <section className="text-center py-8 sm:py-12 md:py-16 bg-gradient-to-b from-blue-500 to-purple-500 text-white">
        <h2 className="text-sm sm:text-base md:text-4xl font-extrabold">Our Services</h2>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-2">Feel the power of Technology Software Service</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6 md:px-20">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="cursor-pointer"
            >
              <ServiceCard 
                title={<h4 className="text-lg sm:text-xl md:text-2xl font-bold text-black text-center mb-2">{service.cardTitle}</h4>} 
                description={<span className="text-base sm:text-lg md:text-xl">{service.cardDescription}</span>} 
                image={service.cardImage} 
                buttonClassName="mt-4 sm:mt-6 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-md transition-transform duration-300 hover:scale-110 hover:bg-purple-700 hover:text-white"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 sm:space-y-10 md:space-y-14 px-4 sm:px-6 md:px-20 py-6 sm:py-10 md:py-14">
        {services.map((service, index) => (
          <div
            id={`service-section-${index}`}
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between shadow-xl rounded-2xl p-4 sm:p-6 md:p-10 overflow-visible 
              ${index % 2 === 0 ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white' : 'bg-white text-black'}
              ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="md:w-1/2 p-4 sm:p-6 md:p-8 text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold">{service.serviceTitle}</h3>
              <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl">{service.detailDescription}</p>
              <button
                className={`mt-4 sm:mt-6 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-md transition-transform duration-300 
                  ${index % 2 === 0 ? 'bg-white text-purple-700' : 'bg-blue-600 text-white'} 
                  hover:scale-110 hover:bg-purple-700 hover:text-white`}
              >
                Get Started
              </button>
            </div>
            <div 
              className={`relative w-36 h-36 sm:w-44 sm:h-44 md:w-[440px] md:h-[440px] rounded-full border-4 sm:border-6 md:border-8 
                ${index % 2 === 0 ? 'border-purple-500' : 'border-white'} 
                transition-transform duration-300 ${index % 2 === 0 ? 'translate-y-[50%] translate-x-[20%]' : ''} 
                hover:border-purple-700`}
              style={{
                clipPath: index % 2 === 0 ? 'inset(0 10% 0 0)' : 'inset(0 0 0 10%)',
                marginBottom: '5rem',
                transform: index % 2 !== 0 ? 'translateX(-20%)' : 'none',
              }}
            >
              <img 
                src={service.detailImage} 
                alt={service.serviceTitle} 
                className="w-full h-full object-cover rounded-full transition-opacity duration-300 hover:opacity-90" 
              />
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default ServicesPage;
