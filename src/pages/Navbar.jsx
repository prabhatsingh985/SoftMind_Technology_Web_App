import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpg";


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
    backgroundColor: '#f8f8f8',
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
        <li><Link to="/" style={linkStyle}>Insights</Link></li>
        <li><Link to="/about" style={linkStyle}>Service</Link></li>
        <li><Link to="/training" style={linkStyle}>Internships &amp; Training</Link></li>
        <li><Link to="/contact" style={linkStyle}>Blogs</Link></li>
        <li><Link to="/Career" style={linkStyle}>Career</Link></li>
        <li><Link to="/contact" style={linkStyle}>About us</Link></li>
      </ul> 
    </nav>
  );
}