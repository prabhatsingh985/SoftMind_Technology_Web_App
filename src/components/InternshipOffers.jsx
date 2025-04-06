import React from "react";
import InternshipCard from "../components/InternshipCard";

const InternshipOffers = () => {
  const internships = [
    {
      id: "1",
      title: "Cloud Computing",
      description: "Cloud Computing (AWS, AZURE, GCP)",
      location: "Delhi",
      duration: "3 Months",
      type: "Unpaid Internship",
      bgColor: "bg-[#FFDFDF]",
    },
    {
      id: "2",
      title: "Web Development",
      description: "MERN Stack Development",
      location: "Remote",
      duration: "6 Months",
      type: "Paid Internship",
      bgColor: "bg-[#DFFFD8]",
    },
    {
      id: "3",
      title: "AI & Machine Learning",
      description: "Deep Learning & Data Science",
      location: "Bangalore",
      duration: "4 Months",
      type: "Unpaid Internship",
      bgColor: "bg-[#D8E4FF]",
    },
    {
      id: "4",
      title: "Cybersecurity",
      description: "Ethical Hacking & Security Analysis",
      location: "Mumbai",
      duration: "5 Months",
      type: "Paid Internship",
      bgColor: "bg-[#FCE4FF]",
    },
  ];

  return (
    <div className="mt-15 px-4 w-full flex flex-col items-center">
      <h1 className="text-black font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-10 leading-tight">
        🚀 Top Internships Offered by Us
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {internships.map((internship) => (
          <div key={internship.id} className="flex justify-center">
            <InternshipCard {...internship} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipOffers;
