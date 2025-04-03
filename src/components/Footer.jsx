import React from "react";
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-600 to-blue-500 text-white p-6 md:p-12 text-center shadow-lg w-full flex flex-col items-center">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-5/6 mb-6">
        <div className="w-36">
          <img
            src="/src/assets/logo1.png"
            alt="Softmind Technologies"
            className="w-full"
          />
        </div>
        <div className="flex gap-6 pt-4 md:pt-0 md:pr-32">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-10 w-10" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="h-10 w-10" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="h-10 w-10" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-10 w-10" />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-5/6 text-lg text-left">
        <div>
          <h3 className="font-bold mb-2">NAVIGATION</h3>
          <Link to="/" className="block">Home</Link>
          <Link to="/" className="block">About Us</Link>
          <Link to="/" className="block">What We Do</Link>
          <Link to="/" className="block">To The Power of 10</Link>
          <Link to="/" className="block">Donate</Link>
        </div>
        <div>
          <h3 className="font-bold mb-2">WHAT WE DO</h3>
          <Link to="/" className="block">Encouraging Testing</Link>
          <Link to="/" className="block">Strengthening Advocacy</Link>
          <Link to="/" className="block">Sharing Information</Link>
          <Link to="/" className="block">Building Leadership</Link>
          <Link to="/" className="block">Engaging With Global Fun</Link>
          <Link to="/" className="block">Shining a Light</Link>
        </div>
        <div>
          <h3 className="font-bold mb-2">LEGAL</h3>
          <Link to="/" className="block">General Info</Link>
          <Link to="/" className="block">Privacy Policy</Link>
          <Link to="/" className="block">Terms of Service</Link>
        </div>
        <div>
          <h3 className="font-bold mb-2">TALK TO US</h3>
          <a href="mailto:info@softmindtechnologies.com" className="block">info@softmindtechnologies.com</a>
          <a href="tel:+6623991145" className="block">+66 2399 1145</a>
          <Link to="/" className="block">Contact Us</Link>
          <Link to="/" className="block">Facebook</Link>
          <Link to="/" className="block">LinkedIn</Link>
          <Link to="/" className="block">Twitter</Link>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-xl">© 2024 Softmind Technologies. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
