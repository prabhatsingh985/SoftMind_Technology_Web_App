import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import success from "../assets/about/success.jpg";
import teamwork from "../assets/about/teamwork.jpg";
import quote from "../assets/about/quaoteimg.jpg";

const AboutUs = () => {
  return (
    <div className="font-poppins bg-gradient-to-b from-white to-purple-100 gap-2">
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="px-4 md:px-0 transition-transform duration-300 hover:scale-105 hover:bg-purple-50">
            <h2 className="text-lg md:text-2xl font-bold text-gray-700 hover:text-purple-700">
              We are Software Development Company.
            </h2>
            <h1
              className="text-3xl md:text-6xl font-extrabold leading-tight mt-4"
              style={{
                background: "linear-gradient(180deg, #8B37F8 0%, #7061F4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              We set out to build <br /> best products for you
            </h1>
            <div className="mt-6 overflow-hidden">
              <img
                src={teamwork}
                alt="Teamwork"
                className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:brightness-105"
              />
            </div>
          </div>
          {/* Right Content */}
          <div className="order-first md:order-none mt-10 md:mt-33 mb-0.5 flex flex-col justify-center px-4 md:px-0 transition-transform duration-300 hover:scale-105 hover:bg-purple-50">
            <p className="text-base md:text-xl font-semibold text-gray-600 hover:text-purple-700 relative top-6 md:top-4">
              We are passionate about creating innovative software solutions that empower businesses 
              to reach their full potential.
            </p>
            <div className="mt-6 md:mt-8 overflow-hidden">
              <img
                src={success}
                alt="Success"
                className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:brightness-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-10 gap-6">
        {/* Left Content */}
        <span className="md:w-1/2 transition-transform duration-300 hover:scale-105 hover:bg-purple-50">
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-3xl md:text-6xl font-extrabold text-purple-700 hover:text-purple-900">About us</h2>
            <img src="/src/assets/Vector 15.png" alt="Arrow" className="w-6 md:w-10 h-6 md:h-10 mt-4 transition-transform duration-300 hover:scale-110" />
          </div>
        </span>
        {/* Right Content */}
        <div className="md:w-1/2">
          <p className="m-4 md:m-10 relative top-2 md:top-10 text-base md:text-2xl font-bold text-gray-700">
            Our mission is simple: to craft software<br /> that makes a difference.
            Whether you're a startup<br /> looking for a robust app to disrupt the
            market, or an established enterprise <br />needing to streamline operations,
            we're here to turn your vision<br /> into reality. We believe in building
            technology that <br />is not just functional but transformative.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-10 gap-10">
        {/* Left Quote */}
        <div className="md:w-1/2 order-last md:order-none transition-transform duration-300 hover:scale-105 hover:bg-purple-50">
          <blockquote className="italic text-xl md:text-4xl font-extrabold text-gray-700 hover:text-purple-700 border-l-4 border-purple-600 pl-4 font-serif">
            "Individually, we are skilled professionals. Together, <br/>we are a powerhouse of innovation and creativity."
          </blockquote>
        </div>
        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center overflow-hidden">
          <img 
            src={quote} 
            alt="quote" 
            className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg transition-transform duration-300 hover:scale-110" 
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-purple-700 text-white py-6 flex flex-col md:flex-row justify-between px-4 md:px-10 text-base md:text-2xl font-bold gap-4 md:gap-0">
        <span className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:text-yellow-300">
          ⭐ Creative people
        </span>
        <span className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:text-yellow-300">
          ⭐ Fast delivery
        </span>
        <span className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:text-yellow-300">
          ⭐ Awesome services
        </span>
      </section>

      {/* Team Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-10 gap-10">
        {/* Left Content */}
        <span className="md:w-1/2 transition-transform duration-300 hover:scale-105 hover:bg-purple-50">
          <div className="flex items-center gap-2">
            <h2 className="text-4xl md:text-6xl font-extrabold text-purple-700 hover:text-purple-900">Let's get to know each other</h2>
            <img src="/src/assets/Vector 15.png" alt="Arrow" className="w-8 md:w-10 h-8 md:h-10 mt-4 transition-transform duration-300 hover:scale-110" />
          </div>
        </span>
        {/* Right Content */}
        <div className="md:w-1/2">
          <p className="mt-4 relative top-0 md:top-5 text-lg md:text-2xl font-bold text-gray-700">
            At Softmind Technologies, our team is our <br/>greatest asset. Comprising skilled developers, creative designers, 
            and dedicated project managers, we work together<br/> to bring innovative software solutions to life. 
            We believe in the power of collaboration and the <br/>unique value each team member contributes. 
            Our diverse skills and shared passion for <br/>technology drive us to exceed expectations on every project. 
            With a culture rooted in creativity <br/>and teamwork, we’re committed to turning your vision into reality.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;