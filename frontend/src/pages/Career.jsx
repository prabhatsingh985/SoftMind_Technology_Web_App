import React from "react";
import isp from "../assets/career/isp.jpg";
import lg1 from "../assets/career/lg1.png";
import HomeContactForm from "../components/HomeContactForm";

const Career = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 sm:py-24 sm:px-6 lg:py-32 lg:px-8">
        <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#6770F3] to-[#8346F8] leading-tight tracking-[5%] text-5xl sm:text-6xl md:text-7xl lg:text-[185.93px]">
          Join Our Team
        </h1>
        <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-[#6770F3]">
          Build the Future with Us!
        </h2>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl">
          At Softmind Technologies, we’re more than just a technology company—we’re innovators,
          problem-solvers, and builders of cutting-edge solutions. If you’re passionate about
          technology and looking for an environment that fosters growth, creativity, and
          collaboration, you’ve come to the right place!
        </p>
      </section>

      {/* Image Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-12 flex justify-center">
        <img
          src={isp}
          alt="Team Collaboration"
          className="max-w-full h-auto rounded-2xl shadow-lg object-cover"
        />
      </section>

      {/* Career Opportunities Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#6770F3] to-[#8346F8] text-center">
          Career Opportunities
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-purple-100 p-6 rounded-xl shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3">
                <img src={lg1} alt="Logo" className="w-10 h-10" />
                <h3 className="text-lg sm:text-xl font-bold">Cloud Computing</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Cloud Computing (AWS, Azure, GCP)
              </p>
              <p className="mt-4 text-gray-800 text-sm sm:text-base">
                📍 Delhi <br />⏳ 3 Months <br />💼 Unpaid Internship
              </p>
            </div>
            <button className="mt-6 bg-black text-white px-4 py-2 rounded-lg self-start hover:bg-gray-800 transition">
              Apply →
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-100 p-6 rounded-xl shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3">
                <img src={lg1} alt="Logo" className="w-10 h-10" />
                <h3 className="text-lg sm:text-xl font-bold">Web Development</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Frontend & Backend Development
              </p>
              <p className="mt-4 text-gray-800 text-sm sm:text-base">
                📍 Bangalore <br />⏳ 6 Months <br />💼 Paid Internship
              </p>
            </div>
            <button className="mt-6 bg-black text-white px-4 py-2 rounded-lg self-start hover:bg-gray-800 transition">
              Apply →
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-pink-100 p-6 rounded-xl shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3">
                <img src={lg1} alt="Logo" className="w-10 h-10" />
                <h3 className="text-lg sm:text-xl font-bold">Data Science</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Machine Learning & AI
              </p>
              <p className="mt-4 text-gray-800 text-sm sm:text-base">
                📍 Hyderabad <br />⏳ 4 Months <br />💼 Paid Internship
              </p>
            </div>
            <button className="mt-6 bg-black text-white px-4 py-2 rounded-lg self-start hover:bg-gray-800 transition">
              Apply →
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <HomeContactForm />
      </section>
    </div>
  );
};

export default Career;
