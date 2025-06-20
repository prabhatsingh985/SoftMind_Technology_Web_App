import React from "react";

// Sample images for avatars (replace with your own images)
import avatar1 from "../assets/avatar1.png";
import hometesti2 from "../assets/hometesti2.png";
import hometesti3 from "../assets/hometesti3.png"; 
import hometesti4 from "../assets/hometesti4.jpg";
import hometesti5 from "../assets/hometesti5.png";
import hometesti6 from "../assets/hometesti6.jpg";


const ClientTestimonials = () => {
  const avatarStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  };

  return (
    <div
      style={{
        fontFamily: 'Poppins',
        padding: "50px 20px",
        textAlign: "center",
        background: "linear-gradient(to right, #ffffff, #f5f5ff)",
      }}
    >
      {/* Main Heading */}
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          // color: "#6a5acd",
          marginBottom: "10px",
          backgroundImage: `linear-gradient(to right, #8C34F8, #528CED)`,
                        WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
        }}
      >
        What are client says <br />
        About us?
      </h2>
      <div
        style={{
          width: "80px",
          height: "4px",
          backgroundColor: "#6a5acd",
          margin: "10px auto",
          borderRadius: "2px",
        }}
      ></div>

      {/* Small Avatars Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        {[avatar1, hometesti2, hometesti3, hometesti4, hometesti5, hometesti6].map(
          (avatar, index) => (
            <div key={index} style={{ width: "60px", height: "60px" }}>
              <img src={avatar} alt="client" style={avatarStyle} />
            </div>
          )
        )}
      </div>

      {/* Center Avatar & Testimonial */}
      <div
        style={{
          marginTop: "40px",
        }}
      >
        {/* Center Avatar (Larger) */}
        {/* <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto",
            border: "4px solid #fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={avatar1}
            alt="center avatar"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div> */}

        {/* Subheading */}
        <h3
          style={{
            marginTop: "20px",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
         Why customers love <br />
          working with us
        </h3>

        {/* Testimonial Text */}
        <p
          style={{
            maxWidth: "600px",
            margin: "20px auto",
            fontSize: "1rem",
            color: "#333",
            lineHeight: "1.6",
          }}
        >
          Without any doubt, I recommend Alkaline Solutions as one of the best
          web design and digital marketing agencies. One of the best agencies
          I’ve come across so far. Wouldn't be hesitant to introduce their work
          to someone else.
        </p>
      </div>
    </div>
  );
};

export default ClientTestimonials;
