import React from 'react';
import Navbar from '../components/Navbar';
import homepageimage1 from "../assets/homepageimage1.jpg";
import HeroSection from '../components/HeroSection';
import homepageimage2 from "../assets/homepageimage2.png";  
import homepageimage3 from "../assets/homepageimage3.png";
import homepageimage4 from "../assets/homepageimage4.png";
import homepageimage5 from "../assets/homepageimage5.png";  
import homepageimage6 from "../assets/homepageimage6.png";  
import HomeResponsiveSection from '../components/HomeResponsiveSection';
import HomeServicesSection from '../components/HomeServicesSection';
// import Slider from "react-slick";   
// import "slick-carousel/slick/slick.css";
import HomeContactForm from '../components/HomeContactForm';
// import "slick-carousel/slick/slick-theme.css";
import testmolsicons from "../assets/testimolsicons4.png";
import homepageimage7 from "../assets/homepageimage7.png";
import homepageimage8 from "../assets/homepageimage8.png";
import homepageimage9 from "../assets/homepageimage9.png";
import homepageimage10 from "../assets/homepageimage10.png";
import HomeBlogSection from '../components/HomeBlogSection';
import HomeClientTestimonials from '../components/HomeClientTestimonials';
// import { services } from "../data/services"; // Ensure this path is correct 
// import { testimonials } from "../data/testimonials"; // Ensure this path is correct 
// import { blogs } from "../data/blogs"; // Ensure this path is correct   
// import "slick-carousel/slick/slick.css";    
// import "slick-carousel/slick/slick-theme.css";  

const Homepage = () => {
    

      
     const services = [
        {
          image: homepageimage10,
          icon: testmolsicons,
          title: "Software Development",
        },
        {
          image: homepageimage10,
          icon: testmolsicons,
          title: "Business Intelligence & Analytics",
        },
        {
          image: homepageimage10,
          icon: testmolsicons,
          title: "Business Intelligence & Analytics",
        },
        {
          image: homepageimage10,
          icon: testmolsicons,
          title: "Business Intelligence & Analytics",
        },
      ];

      const testimonials = [
        {
          img: homepageimage10,
          name: "John Doe",
          role: "Software Engineer",
          text: "This company helped us transform our digital presence with cutting-edge software solutions.",
        },
        {
          img: homepageimage10,
          name: "Jane Smith",
          role: "UX Designer",
          text: "Their design team delivered a seamless user experience. Highly recommended!",
        },
        {
          img: homepageimage10,
          name: "Robert Brown",
          role: "Marketing Head",
          text: "Their SEO services boosted our rankings dramatically within months!",
        },
        {
            img: homepageimage10,
            name: "John Doe",
            role: "Software Engineer",
            text: "This company helped us transform our digital presence with cutting-edge software solutions.",
          },
      ];
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show 4 items at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
      
    return (

        <div>
            {/* <Navbar/> */}
            {/* Homepage content */}
            <HeroSection></HeroSection>
            {/* <!-- Hero 1 - Bootstrap Brain Component --> */}
{/* <section class="bsb-hero-1 px-3 ml-10 mr-10 mt-1 rounded-3xl bsb-overlay bsb-hover-pull" style={{ backgroundImage: `url(${homepageimage1})` }}>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 text-center text-white">
        <h2 class="display-3 fw-bold mb-3">Art of Design</h2>
        <p class="lead mb-5">Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn bsb-btn-xl btn-light gap-3">Free Consultation</button>
          <button type="button" class="btn bsb-btn-xl btn-outline-light">Buy Credits</button>
        </div>
      </div>
    </div>
  </div>
</section> */}


            {/* Responsive Secion */}
            <HomeResponsiveSection></HomeResponsiveSection>
            
                


                 {/* Visitors Section */}
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                background: "#8247F8", // Gradient background
                color: "white",
                padding: "20px",
                borderRadius: "25px",
                maxWidth: "80%",
                margin: "auto",
                
            }}>
                {[
                    { number: "23+", label: "No. of visitor" },
                    { number: "45+", label: "No. of Project" },
                    { number: "45+", label: "Active Clients" },
                    { number: "45+", label: "Experts" }
                ].map((item, index) => (
                    <div key={index} style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "2.5vw", fontWeight: "bold" }}>{item.number}</div>
                        <div style={{ fontSize: "1.5vw", fontWeight: "bold" }}>{item.label}</div>
                    </div>
                ))}
            </div>


            {/* Why choose us section */}
            <div>
                <div style={{ textAlign: "center", padding: "20px", marginTop: "50px" }}>
                    <h2 style={{
                        fontSize: "2.5vw",
                        fontWeight: "bold",
                        backgroundImage: `linear-gradient(to right, #8C34F8, #6868F0)`,
                        WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
                        // Purple text color
                        // backgroundColor: "black",
                    }}>
                        Why choose us ?
                    </h2>

                    <p style={{
                        fontSize: "1vw",
                        color: "#000000", // Dark grey text
                        maxWidth: "800px",
                        margin: "auto",
                        lineHeight: "1.5"
                    }}>
                        An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber
                        who fixes your pipes; that’s what they are supposed to do. Many IT firms struggle.
                    </p>
                </div>



                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    padding: "20px",
                    backgroundImage: `linear-gradient(to right, #AF00FF, #40A1E7)`,
                        WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
                }}>
                    {[
                        {
                            icon: homepageimage4, // Ensure this is correctly imported
                            title: "Customized Solutions",
                            text: "We understand that every business is unique. We tailor our services to meet your specific needs, ensuring that the solutions we develop align perfectly with your goals and requirements."
                        },
                        {
                            icon: homepageimage5, // Replace with actual imported image
                            title: "Quality & Reliability",
                            text: "We are committed to delivering high-quality software that is robust, reliable, and scalable. Our rigorous testing and quality assurance processes ensure that you receive a product that performs flawlessly."
                        },
                        {
                            icon: homepageimage6, // Replace with actual imported image
                            title: "Comprehensive Support",
                            text: "Our partnership doesn’t end with the delivery of the software. We offer ongoing support and maintenance to ensure that your systems continue to operate smoothly and efficiently."
                        }
                    ].map((item, index) => (
                        <div key={index} style={{
                            textAlign: "center",
                            background: "white",
                            borderRadius: "15px",
                            border: "2px solid rgb(200, 180, 255)",
                            padding: "30px",
                            maxWidth: "300px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center", // Center content including image
                            color:"#AF00FF"
                        }}>
                            <img
                                src={item.icon}
                                alt={item.title}
                                style={{
                                    width: "60px",
                                    height: "60px",
                                    marginBottom: "15px" // More spacing between image and title
                                }}
                            />
                            <h3 style={{
                                color: "rgb(123, 97, 255)",
                                fontSize: "1.5vw",
                                fontWeight: "bold",
                                marginBottom: "10px" // Space between title and text
                            }}>
                                {item.title}
                            </h3>
                            <p style={{
                                color: "#858585",
                                fontSize: "1vw",
                                lineHeight: "1.5"
                            }}>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>



            <HomeServicesSection/>


            {/* What Client says about us seciton */}
            <HomeClientTestimonials></HomeClientTestimonials>
            {/* <div 
            style={{ maxWidth: "80%", margin: "auto", textAlign: "center", padding: "20px" }}>
      <h2 style={{ marginBottom: "60px", marginTop:"20px", color: "#6b4eff", fontSize: "2.5vw",
                    fontWeight: "bold", }}>What Our Clients Say Abous us </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={{ padding: "20px", textAlign: "center" }}>
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
                border: "4px solid #6b4eff",
              }}
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <h4 style={{ marginTop: "10px", color: "#333" }}>{testimonial.name}</h4>
            <p style={{ fontStyle: "italic", color: "#777" }}>{testimonial.role}</p>
            <p style={{ fontSize: "14px", color: "#555" }}>"{testimonial.text}"</p>
          </div>
 ))}
      </Slider>
                </div> */}











        {/* Blog Section */}
        <HomeBlogSection></HomeBlogSection>
            




        {/* Contact Form */}
        <HomeContactForm></HomeContactForm>


        {/* Contact Section */}
       
     {/* Contact Section */}
    





        </div>
    );
};

export default Homepage;