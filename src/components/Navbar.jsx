import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import Service from '../pages/Service'; // Assuming you have a Service component
import Career from '../pages/Career';

export default function Navbar() {
  // Determine if the viewport is mobile-sized
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // State to toggle mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setMenuOpen(false); // Reset menu for desktop view
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navbar container style
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    height: '80px',
    // backgroundColor: 'red',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'relative',
  };

  // Logo style
  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  // Hamburger icon style (only visible on mobile)
  const hamburgerStyle = {
    fontSize: '1.8rem',
    cursor: 'pointer',
    display: isMobile ? 'block' : 'none',
    opacity:"0.8",
  };

  // Navigation list style; on mobile, display as a column with absolute positioning when open
  const navListStyle = {
    listStyle: 'none',
    margin: 0,
    padding: isMobile ? '10px 0' : 0,
    display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '1rem' : '2rem',
    alignItems: 'center',
    backgroundColor: isMobile ? '#f8f8f8' : 'transparent',
    position: isMobile ? 'absolute' : 'static',
    top: isMobile ? '80px' : 'auto',
    left: 0,
    right: 0,
    zIndex: 1000,
  };

  // Link style for all menu items
  const linkStyle = {

    textDecoration: 'none',
    color: 'black',
    padding: '0.5rem 1rem',
    // margin: '0 0.2px',
    textWeight: 'bold',
    fontWeight: 'bold', 
  };
  const linkStyle2 = {

    textDecoration: 'none',
    color: 'black',
    padding: '0.5rem 0rem',
    // margin: '0 0.2px',
    textWeight: 'bold',
    fontWeight: 'bold', 
  };

  return (
    <nav style={navbarStyle}>
      {/* Logo Section */}
      <div style={logoStyle}>
        <Link to="/" style={{ display: 'inline-block' }}>
          <img
            src={logo}
            alt="Logo"
            width={80}
            height={80}
            style={{ objectFit: 'contain' }}
            loading="lazy"
          />
        </Link>
      </div>

      {/* Hamburger Icon (visible on mobile) */}
      <div onClick={() => setMenuOpen(!menuOpen)} style={hamburgerStyle}>
        &#9776;
      </div>

      {/* Menu List */}
      <ul style={navListStyle}>
        <li><Link to="/" style={linkStyle} className="nav-link">Insights</Link></li>
        <li><Link to="/about" style={linkStyle} className="nav-link">Service</Link></li>
        <li><Link to="/training" style={linkStyle2} className="nav-link">Internships &amp; Training</Link></li>
        <li><Link to="/blog" style={linkStyle} className="nav-link">Blogs</Link></li>
        <li><Link to="/Career" style={linkStyle} className="nav-link">Career</Link></li>
        <li><Link to="/contact" style={linkStyle2} className="nav-link">About us</Link></li>
      </ul> 
      <style>{`
        .nav-link:hover {
          color: #6a5acd;
          background-color: rgba(106, 90, 205, 0.1);
          border-radius: 4px;
        }
      `}</style>
    </nav>
  );
}