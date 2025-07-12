import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import homepageimage1 from '../assets/homepageimage1.jpg';
import homepageimage2 from '../assets/HomepageHerosectionimage2.jpeg';
import homepageimage3 from '../assets/HomepageHerosectionimage3.jpeg';

const images = [homepageimage1, homepageimage2, homepageimage3];

const HeroSection = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent(idx => (idx + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    // Scroll down by one viewport height
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background with dark overlay */}
      <div
        className="absolute inset-0 rounded-lg bg-center bg-cover transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${images[current]})`,
          filter: 'brightness(50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-2 max-w-5xl">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight">
          Building the Future with Scalable Software Solutions
        </h1>
        <p className="mt-4 text-white text-base sm:text-lg md:text-xl">
          Tailored Development Services for a Rapidly Evolving World
        </p>
        <button
          onClick={scrollToContent}
          className="mt-6 inline-block bg-white text-black font-medium text-sm sm:text-base py-2 px-6 rounded-full shadow-md transform hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          Explore More
        </button>
      </div>
      

      {/* Scroll Arrow */}
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
          onClick={scrollToContent}
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
        onClick={() => navigate('/contact')}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white flex items-center gap-2 py-2 px-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
          />
        </svg>
        Contact Us
      </button>
    </section>
  );
};

export default HeroSection;
