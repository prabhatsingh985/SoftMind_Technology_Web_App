import React, { useState, useEffect } from "react";
import homepageimage1 from "../assets/homepageimage1.jpg";
import HomepageHerosectionimage2 from "../assets/HomepageHerosectionimage2.jpeg";
import HomepageHerosectionimage3 from "../assets/HomepageHerosectionimage3.jpeg";
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const handleScrollClick = () => {
    window.scrollBy({
      top: 760, // Adjust this value to set how far you want to scroll down
      left: 0,
      behavior: 'smooth' // This ensures a smooth scrolling effect
    });
  };

  const images = [
    homepageimage1,
    HomepageHerosectionimage2,
    HomepageHerosectionimage3,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "90vh",
    }}>
      {/* Background Image */}
      <img
        src={images[currentImageIndex]}
        alt="Hero background"
        style={{
          width: "95%",
          height: "100%",
          display: "block",
          margin: "0 auto",
          objectFit: "cover",
          borderRadius: "20px",
          opacity: "0.9",
          transition: "opacity 0.5s ease-in-out",
        }}
      />

      {/* Dark Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "2.5%",
        right: "2.5%",
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "20px",
      }} />

      {/* Hero Text & CTA */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          width: "80%",
          maxWidth: "800px",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        {/* Main Title */}
        <div
          style={{
            fontSize: "3vw",
            fontWeight: "bold",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
            wordWrap: "break-word",
            fontFamily: "Poppins, sans-serif"
          }}
        >
          Building the Future with Scalable Software Solutions
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "1.5vw",
            marginTop: "10px",
            wordWrap: "break-word",
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
            fontFamily: "Poppins, sans-serif"
          }}
        >
          Tailored Development Services for a Rapidly Evolving World
        </div>

        {/* "Explore More" Button */}
        <button
          style={{
            marginTop: "20px",
            fontSize: "1.2vw",
            borderRadius: "50px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            padding: "15px 30px",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "500",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
          }}
        >
          Explore more
        </button>
      </div>

      {/* Animated Down Arrow */}
      <div style={{
        position: "absolute",
        bottom: "40px",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 20,
      }}>
        <button 
          onClick={handleScrollClick}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
          aria-label="Scroll down"
        >
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            animation: "bounce 2s infinite"
          }}>
            <ChevronDown size={32} color="white" strokeWidth={3} />
            <ChevronDown size={32} color="white" strokeWidth={3} style={{ marginTop: "-24px" }} />
            <ChevronDown size={32} color="white" strokeWidth={3} style={{ marginTop: "-24px" }} />
          </div>
        </button>
      </div>

      {/* Contact Us Button */}
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 30,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 24px",
          borderRadius: "50px",
          border: "none",
          backgroundColor: "#6366f1",
          color: "#fff",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "500",
          boxShadow: "0 2px 6px rgba(99, 102, 241, 0.4)",
          transition: "all 0.3s ease-in-out",
          fontFamily: "Poppins, sans-serif",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(99, 102, 241, 0.6)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 2px 6px rgba(99, 102, 241, 0.4)";
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Contact Us
      </button>

      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-20px);
            }
            60% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;