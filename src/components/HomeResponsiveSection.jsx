import React, { useState, useEffect } from "react";
import homepageimage2 from "../assets/homepageimage2.png";
import homepageimage3 from "../assets/homepageimage3.png";

export default function HomeResponsiveSection() {
  // Track if the viewport is mobile-sized
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Outer container: row layout on desktop, column on mobile
  const containerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    gap: isMobile ? "20px" : "120px",
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 90px",
  };

  // Left image (homepageimage2)
  const image1Style = {
    // width: isMobile ? "80%" : "30%",
    // height: isMobile ? "auto" : "60vh",
    // display: "block",
    // margin: isMobile ? "20px auto" : "50px auto",
    // borderRadius: "20px",
    // objectFit: "cover",
    width: isMobile ? "80%" : "50%",       // Use one value based on isMobile
  height: isMobile ? "auto" : "80vh",
  display: isMobile ? "block" : "flex",
  margin: isMobile ? "20px auto" : "5px auto",
  borderRadius: "20px",
  objectFit: "cover",
  position: "relative",
  alignItems: "center",                // Use camelCase
  justifyContent: "center",            // Use camelCase
  backgroundSize: "cover",             // Use camelCase
  backgroundPosition: "center",        // Use camelCase
  color: "white",

  };

  // Right container for text and second image
  const rightContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: isMobile ? "center" : "flex-start",
    width: isMobile ? "90%" : "50%",
  };

  // Text container style
  const textContainerStyle = {
    textAlign: isMobile ? "center" : "left",
    padding: isMobile ? "0 10px" : "0",
  };

  // Title style
  const titleStyle = {
    fontSize: isMobile ? "4vw" : "2vw", // Responsive font size
    fontWeight: "bold",
    color: "#8B37F8",
    textTransform: "uppercase",
    lineHeight: "1.2",
    marginBottom: "10px",
    marginTop: isMobile ? "0px" : "20px",
     fontFamily: "Poppins"
  };

  // Description style
  const descriptionStyle = {
    fontSize: isMobile ? "2.5vw" : "1vw",
    color: "rgb(102, 102, 102)",
    lineHeight: "1.5",
  };

  // Second image (homepageimage3)
  const image2Style = {
    width: isMobile ? "80%" : "100%",
    height: isMobile ? "auto" : "60vh",
    display: "block",
    margin: isMobile ? "20px auto" : "20px 0",
    borderRadius: "20px",
    objectFit: "cover",
  };

  return (
    <div style={containerStyle}>
      <img src={homepageimage2} alt="homepageimage2" style={image1Style} />
      <div style={rightContainerStyle}>
        <div style={textContainerStyle}>
          <div style={titleStyle}>
            We Our Custom Software Development Service For Any Needs
          </div>
          <p style={descriptionStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div>
          <img src={homepageimage3} alt="homepageimage3" style={image2Style} />
        </div>
      </div>
    </div>
  );
}
