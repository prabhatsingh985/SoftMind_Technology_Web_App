import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";

const BlogPage = () => {
  const containerStyle = {
    display: "flex",
    maxWidth: "80%",
  };

  const leftSectionStyle = {
    width: "60%",
    padding: "45px",
    marginLeft: "50px",
  };

  const rightSectionStyle = {
    width: "100%",
    padding: "20px",
    paddingLeft: "160px",
  };

  const sidebarStyle = {
    backgroundColor: "#F3F1FF",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "120px",
  };

  const searchBarStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F3F1FF",
    borderRadius: "5px",
    border: "1px solid #ddd",
    marginBottom: "20px",
  };

  const searchInputStyle = {
    flex: 1,
    border: "none",
    outline: "none",
    padding: "5px",
    fontSize: "50px",
  };

  const categoryTitleStyle = {
    fontSize: "80px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const categoryItemStyle = {
    fontSize: "40px",
    margin: "25px 40px",
    cursor: "pointer",
  };

  const topBlogTitleStyle = {
    fontSize: "80px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const topBlogItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "10px",
    fontSize: "40px",
  };

  const blogIndexStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    marginRight: "10px",
  };

  const textContainerStyle = {
    flex: 1,
  };

  const dateStyle = {
    fontSize: "25px",
    color: "gray",
  };

  const titleBoldStyle = {
    fontSize: "40px",
  };

  const headerStyle = {
    background: "linear-gradient(0deg, #6770F3 0%, #8346F8 100%)",
    padding: "30px 110px",
    color: "white",
    fontSize: "75px",
    fontWeight: "bold",
    width: "100%",
  };

  const blogListHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "38px",
    width: "130%",
  };

  const titleStyle = {
    fontSize: "90px",
    fontWeight: "bold",
  };

  const viewAllStyle = {
    fontSize: "40px",
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
    width: "10%",
  };

  const blogItemStyle = {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
    width: "130%",
  };

  const blogImageContainer = {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "5px",
    marginBottom: "10px",
  };

  const blogTextContainer = {
    textAlign: "center",
  };

  return (
    <div>
      <h1 style={headerStyle}>Blogs</h1>

      <div style={containerStyle}>
        <div style={leftSectionStyle}>
          <div style={searchBarStyle}>
            <input type="text" placeholder="Search..." style={searchInputStyle} />
          </div>
          <div style={sidebarStyle}>
            <h3 style={categoryTitleStyle}>Categories</h3>
            <p style={categoryItemStyle}>Cloud Computing</p>
            <p style={categoryItemStyle}>Data Analysis</p>
            <p style={categoryItemStyle}>Oracle Database Development</p>
            <p style={categoryItemStyle}>Python with Data Science</p>
            <p style={categoryItemStyle}>Web development</p>
          </div>

          <div style={sidebarStyle}>
            <h3 style={topBlogTitleStyle}>Top Blog</h3>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} style={topBlogItemStyle}>
                <span style={blogIndexStyle}>{num}</span>
                <div style={textContainerStyle}>
                  <p style={titleBoldStyle}>Exploratory Data Analysis EDA</p>
                  <p style={dateStyle}>13 Nov, 2024</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={rightSectionStyle}>
          <div style={blogListHeaderStyle}>
            <h1 style={titleStyle}>Data Analysis</h1>
            <span style={viewAllStyle}>View all</span>
          </div>

          {[1, 2, 3].map((_, index) => (
            <div key={index} style={blogItemStyle}>
              <div style={blogImageContainer}>
                <img src={blog1} alt="Blog" style={imageStyle} />
                <div style={blogTextContainer}>
                  <p style={dateStyle}>Data Analysis - 13 Nov, 2024</p>
                  <p style={titleBoldStyle}>Exploratory Data Analysis EDA</p>
                </div>
              </div>
              <div style={blogImageContainer}>
                <img src={blog2} alt="Process" style={imageStyle} />
                <div style={blogTextContainer}>
                  <p style={dateStyle}>Data Analysis - 13 Nov, 2024</p>
                  <p style={titleBoldStyle}>Data Cleaning & Processing</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
