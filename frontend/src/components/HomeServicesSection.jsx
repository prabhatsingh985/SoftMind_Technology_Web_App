import React, { useState, useEffect, use } from "react";
import { useNavigate } from "react-router-dom";
import homepageimage10 from "../assets/homepageimage10.png";
import testmolsicons from "../assets/testimolsicons4.png";
import homepageserving1 from "../assets/homepageserving1.jpg";
import homepageserving2 from "../assets/homepageserving2.jpg";
import homepageserving3 from "../assets/homepageserving3.jpg";

export default function HomeServicesSection() {
   const navigate = useNavigate();
  const services = [
    {
      image: homepageserving1,
      icon: testmolsicons,
      title: "Software Development",
    },
    {
      image: homepageserving2,
      icon: testmolsicons,
      title: "Business Intelligence & Analytics",
    },
    {
      image: homepageserving3,
      icon: testmolsicons,
      title: "Business Intelligence & Analytics",
    },
    {
      image: homepageimage10,
      icon: testmolsicons,
      title: "Business Intelligence & Analytics",
    },
  ];

  // Determine if the viewport is mobile-sized
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Header container style
  const headerContainerStyle = {
    textAlign: "center",
    padding: "20px",
    marginTop: "50px",
    width: isMobile ? "90%" : "40%",
    marginLeft: "auto",
    marginRight: "auto",
  };

  // Header text style
  const headerTextStyle = {
    fontSize: isMobile ? "6vw" : "2.5vw", // Larger on mobile, relatively smaller on desktop
    fontWeight: "bold",
    color: "rgb(123, 97, 255)",
    backgroundImage: `linear-gradient(to right, #8C34F8, #6868F0)`,
                        WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
  };

  // Services container style: adjust gap and wrapping based on viewport
  const servicesContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: isMobile ? "20px" : "100px",
    padding: "10px",
  };

  // Individual card style
  const cardStyle = {
    textAlign: "center",
    position: "relative",
    width: isMobile ? "120px" : "176px", // Approximately equivalent to Tailwind's w-44 (~176px)
  };

  // Circular image container: width/height adjust for mobile vs. desktop
  const circularImageContainerStyle = {
    width: isMobile ? "120px" : "176px", // Approximately equivalent to Tailwind's w-44 (~176px)
    height: isMobile ? "120px" : "176px",
    borderRadius: "50%",
    overflow: "hidden",
    margin: "0 auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  // Image style (fits container)
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  // Title style below each image
  const titleStyle = {
    marginTop: "10px",
    fontSize: isMobile ? "1rem" : "1.25rem", // Adjust font size based on viewport
    fontWeight: "bold",
    // padding: "20px",
    // width: "10%",
    cursor: "pointer",

  };
   function ButtonClicked() {
     console.log("Button clicked!");
     navigate('/service');
   }

   const ButtonheaderTextStyle = {
    fontSize: isMobile ? "6vw" : "1.2vw", // Larger on mobile, relatively smaller on desktop
      background: `linear-gradient(to right, #8244F7, #4F8FEC)`,
                        // WebkitBackgroundClip: "text",
                        color: "white",
  border: "none",
  padding: "12px 24px",
  // fontSize: "16px",      // Keep only one fontSize
  fontWeight: "bold",
  borderRadius: "50px",
    cursor: "pointer",
    // WebkitTextFillColor: "transparent",
  };

  const buttonStyle = {
    background: "linear-gradient(to right, #8244F7, #4F8FEC)",
    color: "white",
    border: "none",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "50px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins",

  };

  
  const plusStyle = {
    fontSize: "18px",
  };
  return (
    <div>
      {/* Header */}
      <div style={headerContainerStyle}>
        <h2 style={headerTextStyle}>
          We Are Dedicated To Serve You All Time.
        </h2>
      </div>

      {/* Service Cards */}
      <div style={servicesContainerStyle}>
        {services.map((service, index) => (
          <div key={index} style={cardStyle}>
            <div style={circularImageContainerStyle}>
              <img
                src={service.image}
                alt={service.title}
                style={imageStyle}
              />
            </div>
            <button style={titleStyle} onClick={ButtonClicked}  >{service.title}</button>
          </div>
        ))}
      </div>
      <div style={headerContainerStyle}>
      <button style={ButtonheaderTextStyle} onClick={ButtonClicked}>View more + </button>
      </div>
      {/* <div style={headerContainerStyle}>
       <button style={buttonStyle}>
      View more <span style={plusStyle}>+</span>
    </button>
    </div> */}
    </div>
  );
}
