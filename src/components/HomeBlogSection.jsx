import React, { useState, useEffect } from "react";
import homeblogimage1 from "../assets/homeblogimage1.jpg";
import homepageimage10 from "../assets/homepageimage10.png";
import homeblogimage2 from "../assets/homeblogimage2.jpg";
import homeblogimage3 from "../assets/homeblogimage3.jpg";
import homeblogimage4 from "../assets/homeblogimage4.jpg";
import homeblogimage5 from "../assets/homeblogimage5.jpg";

const blogs = [
        {
          image: homeblogimage1,
          title: "How to Build a Scalable Application up to 1 Million Users on AWS",
        },
        {
          image: homeblogimage2,
          title: "How to Build a Scalable Application up to 1 Million Users on AWS",
        },
        {
          image: homeblogimage3,
          title: "How to Build a Scalable Application up to 1 Million Users on AWS",
        },
        {
          image: homeblogimage4,
          title: "How to Build a Scalable Application up to 1 Million Users on AWS",
        },
        {
          image: homeblogimage5,
          title: "How to Build a Scalable Application up to 1 Million Users on AWS",
        },
      ];
      

export default function HomeBlogSection() {
  // Responsive state: true if viewport width is less than 768px
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Container for the header
  const headerContainerStyle = {
    // fontFamily: 'Inter',
    
    textAlign: "center",
    padding: "50px",
    background: "linear-gradient(to right, #ffffff, #f5f5ff)",
  };

  const headerTextStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#6a5acd",
    backgroundImage: `linear-gradient(to right, #883BF8, #5884EF)`,
                        WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
  };

  // Container for the blog section
  const blogsContainerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: isMobile ? "95%" : "80%",
    margin: "50px auto",
  };

  // Styles for the Main Blog Card
  const mainBlogStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    width: isMobile ? "100%" : "60%",
    alignItems: isMobile ? "center" : "flex-start",
    textAlign: isMobile ? "center" : "left",
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    marginBottom: isMobile ? "20px" : "0",
  };

  const mainBlogImageStyle = {
    width: isMobile ? "100%" : "50%",
    height: isMobile ? "auto" : "470px",
    borderRadius: "10px",
  };

  const mainBlogTextStyle = {
    marginLeft: isMobile ? "0" : "20px",
    marginTop: isMobile ? "20px" : "0",
  };

  const mainBlogTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const mainBlogLinkStyle = {
    color: "#6a5acd",
    fontWeight: "bold",
    textDecoration: "none",
    marginTop: "10px",
    display: "inline-block",
    fontSize: "1.2rem",
  };

  // Styles for the Small Blog Cards Grid
  const smallBlogsGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
    gap: "20px",
    width: isMobile ? "95%" : "35%",
  };

  const smallBlogCardStyle = {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const smallBlogImageStyle = {
    width: "100%",
    borderRadius: "10px",
    height: isMobile ? "auto" : "90px",
    objectFit: "cover",
  };

  const smallBlogTitleStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "10px",
  };

  const smallBlogLinkStyle = {
    color: "#6a5acd",
    fontWeight: "bold",
    textDecoration: "none",
    marginTop: "5px",
    display: "inline-block",
  };

  return (
    <div style={headerContainerStyle}>
      <h2 style={headerTextStyle}>
        Our <span style={{ textDecoration: "underline" }}>Blogs</span>
      </h2>

      <div style={blogsContainerStyle}>
        {/* Main Blog Card */}
        <div style={mainBlogStyle}>
          <img
            src={blogs[0].image}
            alt="Main Blog"
            style={mainBlogImageStyle}
          />
          <div style={mainBlogTextStyle}>
            <h3 style={mainBlogTitleStyle}>{blogs[0].title}</h3>
            <a href="/" style={mainBlogLinkStyle}>
              Read More →
            </a>
          </div>
        </div>

        {/* Small Blog Cards Grid */}
        <div style={smallBlogsGridStyle}>
          {blogs.slice(1).map((blog, index) => (
            <div key={index} style={smallBlogCardStyle}>
              <img
                src={blog.image}
                alt="Blog"
                style={smallBlogImageStyle}
              />
              <h4 style={smallBlogTitleStyle}>{blog.title}</h4>
              <a href="/" style={smallBlogLinkStyle}>
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
