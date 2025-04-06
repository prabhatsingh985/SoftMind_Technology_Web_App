// New HeroSection (Before changing) :- 
import React from "react";
import homepageimage1 from "../assets/homepageimage1.jpg";

const HeroSection = () => {
  return (
    <div style={{ position: "relative" }}>
      {/* Background Image */}
      <img
        src={homepageimage1}
        alt="homepageimage1"
        style={{
          width: "95%",
          height: "80vh",
          display: "block",
          margin: "2px auto",
          objectFit: "cover",
          borderRadius: "20px",
          opacity: "0.9",
        }}
      />

      {/* Hero Text & CTA */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          width: "80%",
          maxWidth: "8000px",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        {/* Main Title */}
        <div
          style={{
            fontSize: "4vw", // Responsive font size
            fontWeight: "bold",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
            wordWrap: "break-word",
            fontFamily: "Poppins"
          }}
        >
          Building the Future with Scalable Software Solutions
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "1.5vw", // Responsive font size
            marginTop: "10px",
            wordWrap: "break-word",
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
             fontFamily: "Poppins"
          }}
        >
          Tailored Development Services for a Rapidly Evolving World
        </div>

        {/* "Explore More" Button */}
        <button
          style={{
            marginTop: "20px",
            fontSize: "1.2vw", // Responsive font size
            borderRadius: "50px",
            backgroundColor: "white",
            color: "black",
            border: "4px solid white",
            padding: "10px 20px",
            cursor: "pointer",
            transition: "0.3s ease-in-out",
            fontFamily: "Poppins",
          }}
        >
          Explore more
        </button>
      </div>

      {/* Contact Us Button - fixed at bottom-right */}
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          padding: "1vw 2vw", // Scales with viewport width
          borderRadius: "50px",
          border: "none",
          backgroundColor: "#6a5acd",
          color: "#fff",
          fontSize: "1vw", // Responsive font size
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <span style={{ marginRight: "0.5vw" }}>📞</span>
        Contact Us
      </button>
    </div>
  );
};

export default HeroSection;
