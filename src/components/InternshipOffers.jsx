import React from "react";
import InternshipCard from "../components/InternshipCard";

const InternshipOffers = () => {
  return (
    <div className="mt-10 w-full flex flex-col items-center px-4">
      <h1 className="text-black font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-6">
        Top Internships Offered by Us
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1578px] justify-center">
        <div className="flex justify-center">
          <InternshipCard
            title="Cloud Computing"
            description="Cloud Computing (AWS, AZURE, GCP)"
            location="Delhi"
            duration="3 Months"
            type="Unpaid Internship"
            bgColor="bg-[#FFDFDF]"
          />
        </div>
        <div className="flex justify-center">
          <InternshipCard
            title="Web Development"
            description="MERN Stack Development"
            location="Remote"
            duration="6 Months"
            type="Paid Internship"
            bgColor="bg-[#DFFFD8]"
          />
        </div>
        <div className="flex justify-center">
          <InternshipCard
            title="AI & Machine Learning"
            description="Deep Learning & Data Science"
            location="Bangalore"
            duration="4 Months"
            type="Unpaid Internship"
            bgColor="bg-[#D8E4FF]"
          />
        </div>
        <div className="flex justify-center">
          <InternshipCard
            title="Cybersecurity"
            description="Ethical Hacking & Security Analysis"
            location="Mumbai"
            duration="5 Months"
            type="Paid Internship"
            bgColor="bg-[#FCE4FF]"
          />
        </div>
      </div>
    </div>
  );
};

export default InternshipOffers;
