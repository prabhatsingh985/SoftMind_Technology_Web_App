import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";

const InternshipDetails = () => {
  return (
    <div className="max-w-[90%] w-full mx-auto mt-20 mb-20 space-y-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-black font-extrabold text-5xl sm:text-6xl mb-6 text-left">
        Cloud Computing in 3 months
      </h1>

      <div className="p-8 bg-[#EBEAFF] shadow-lg rounded-xl border border-gray-300 space-y-12" style={{ boxShadow: "0px 3.26px 9.46px 0px #00000040" }}>
        <div className="bg-gray-100 p-6 rounded-lg space-y-6">
          <h2 className="text-2xl font-bold">Cloud Computing</h2>
          <p className="text-lg text-gray-600">Cloud Computing (AWS, AZURE, GCP)</p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-gray-700">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Delhi
            </p>
            <p className="flex items-center gap-2">
              <FaCalendarAlt /> 3 Months
            </p>
            <p className="flex items-center gap-2">
              <FaBriefcase /> Unpaid Internship
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold">Salary</h3>
          <p className="text-lg">Annual CTC: 2.5 LPA to 5.5 LPA</p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Apply By</h3>
          <p className="text-lg">13/02/2024</p>
        </div>

        <div>
          <h3 className="text-xl font-bold">About Us</h3>
          <p className="text-lg text-gray-700">
            Welcome to SoftMind Technologies, where innovation meets expertise!
            Established with a vision to transform aspiring individuals into
            tech-savvy professionals, SoftMind Technologies is a cutting-edge
            institute that brings together a team of experienced and dedicated
            educators. Our mission is to bridge the gap between education and
            industry by offering comprehensive training programs and internships
            in various tech domains.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">About this Internship Program</h3>
          <p className="text-lg text-gray-700">
            Cloud computing internship programs provide students and aspiring
            professionals with the opportunity to gain hands-on experience in
            one of the most rapidly growing technology fields.
          </p>
          <ul className="list-disc pl-5 mt-2 text-lg text-gray-700 space-y-2">
            <li>Service Models</li>
            <li>Deployment Models</li>
            <li>Networking and Content Delivery</li>
            <li>Containers and Orchestration</li>
            <li>Architecture and Virtualization</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">
            Selected intern’s day-to-day responsibilities include:
          </h3>
          <ul className="list-disc pl-5 mt-2 text-lg text-gray-700 space-y-2">
            <li>Building a blog right from scratch</li>
            <li>Understanding cloud concepts and core concepts of different services</li>
            <li>Applying cloud computing concepts to real-world scenarios</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">Skills Required:</h3>
          <ul className="list-disc pl-5 mt-2 text-lg text-gray-700 space-y-2">
            <li>English Proficiency (at least Medium)</li>
            <li>10+2 Education</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">Number of Openings:</h3>
          <p className="text-lg"><b>20</b></p>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetails;
