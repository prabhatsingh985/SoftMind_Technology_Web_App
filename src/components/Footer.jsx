import React from "react";
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import LinkedIn from "../assets/LinkedIn.png";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";
import YouTube from "../assets/YouTube.png";
import logo1 from "../assets/logo1.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="top-section">
        <div className="logo">
          <img src={logo1} alt="Softmind Technologies" />
        </div>
        <div className="social-icons">
          <img src={LinkedIn} alt="LinkedIn" height="40" />
          <img src={Facebook} alt="Facebook" height="40" />
          <img src={YouTube} alt="YouTube" height="40" />
          <img src={Instagram} alt="Instagram" height="40" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="column">
          <h3>NAVIGATION</h3>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">What We Do</a>
          <a href="/">To The Power of 10</a>
          <a href="/">Donate</a>
        </div>
        <div className="column">
          <h3>WHAT WE DO</h3>
          <a href="/">Encouraging Testing</a>
          <a href="/">Strengthening Advocacy</a>
          <a href="/">Sharing Information</a>
          <a href="/">Building Leadership</a>
          <a href="/">Engaging With Global Fun</a>
          <a href="/">Shining a Light</a>
        </div>
        <div className="column">
          <h3>LEGAL</h3>
          <a href="/">General Info</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </div>
        <div className="column">
          <h3>TALK TO US</h3>
          <a href="mailto:info@softmindtechnologies.com">
            info@softmindtechnologies.com
          </a>
          <a href="tel:+6623991145">+66 2399 1145</a>
          <a href="/">Contact Us</a>
          <a href="/">Facebook</a>
          <a href="/">LinkedIn</a>
          <a href="/">Twitter</a>
        </div>
      </div>

      {/* Copyright */}
      <p className="copyright">
        © 2024 Softmind Technologies. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;