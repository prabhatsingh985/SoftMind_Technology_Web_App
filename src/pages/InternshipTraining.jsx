import React from "react";
import InternshipSection from "../components/InternshipSection";
import InternshipOffers from "../components/InternshipOffers";
import InternshipCertificate from "../components/InternshipCertificate";

const InternshipTraining = () => {
  return (
    <div className="max-w-[90%] w-full mx-auto mt-20 space-y-10">
      {/* Internship Section */}
      <InternshipSection />

      {/* Internship Offers Section */}
      <InternshipOffers />

      {/* Internship Certificate Section */}
      <InternshipCertificate />
    </div>
  );
};

export default InternshipTraining;