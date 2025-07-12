 
import React from "react";
import { Link } from "react-router-dom";
import LinkedIn from "../assets/LinkedIn.png";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";
import YouTube from "../assets/YouTube.png";
import logo1 from "../assets/logo1.png";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-600 to-blue-500 text-white py-6 px-4 shadow-lg w-full">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 max-w-6xl mx-auto gap-4">
        {/* Logo */}
        <img
          src= {logo1}
          alt="Softmind Technologies"
          className="w-24"
        />

        {/* Social Icons */}
        <div className="flex gap-6">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" className="h-8 w-8 hover:opacity-80 cursor-pointer" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook" className="h-8 w-8 hover:opacity-80 cursor-pointer" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook" className="h-8 w-8 hover:opacity-80 cursor-pointer" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={YouTube} alt="YouTube" className="h-8 w-8 hover:opacity-80 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" className="h-8 w-8 hover:opacity-80 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-left max-w-6xl mx-auto">
        <div>
          <h3 className="font-bold mb-3">NAVIGATION</h3>
          <Link to="/" className="block hover:text-gray-300">Home</Link>
          <Link to="/" className="block hover:text-gray-300">About Us</Link>
          <Link to="/" className="block hover:text-gray-300">What We Do</Link>
          <Link to="/" className="block hover:text-gray-300">To The Power of 10</Link>
          <Link to="/" className="block hover:text-gray-300">Donate</Link>
        </div>

        <div>
          <h3 className="font-bold mb-3">WHAT WE DO</h3>
          <Link to="/" className="block hover:text-gray-300">Encouraging Testing</Link>
          <Link to="/" className="block hover:text-gray-300">Strengthening Advocacy</Link>
          <Link to="/" className="block hover:text-gray-300">Sharing Information</Link>
          <Link to="/" className="block hover:text-gray-300">Building Leadership</Link>
          <Link to="/" className="block hover:text-gray-300">Engaging With Global Fun</Link>
          <Link to="/" className="block hover:text-gray-300">Shining a Light</Link>
        </div>

        <div>
          <h3 className="font-bold mb-3">LEGAL</h3>
          <Link to="/" className="block hover:text-gray-300">General Info</Link>
          <Link to="/" className="block hover:text-gray-300">Privacy Policy</Link>
          <Link to="/" className="block hover:text-gray-300">Terms of Service</Link>
        </div>

        <div>
          <h3 className="font-bold mb-3">TALK TO US</h3>
          <a href="mailto:info@softmindtechnologies.com" className="block hover:text-gray-300">
            info@softmindtechnologies.com
          </a>
          <a href="tel:+6623991145" className="block hover:text-gray-300">+66 2399 1145</a>
          <Link to="/" className="block hover:text-gray-300">Contact Us</Link>
          <Link to="/" className="block hover:text-gray-300">Facebook</Link>
          <Link to="/" className="block hover:text-gray-300">LinkedIn</Link>
          <Link to="/" className="block hover:text-gray-300">Twitter</Link>
        </div>
      </div>

      {/* Bottom Copyright */}
      <p className="mt-8 text-xs text-center text-white">
        © 2024 Softmind Technologies. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
