import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";

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

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Base styles
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    height: '80px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'relative',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const hamburgerStyle = {
    fontSize: '1.8rem',
    cursor: 'pointer',
    display: isMobile ? 'block' : 'none',
    opacity: "0.8",
  };

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

  // Base link style for menu items
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    padding: '0.5rem 1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, color 0.3s',
  };

  // Variant for links with different padding
  const linkStyle2 = {
    ...linkStyle,
    padding: '0.5rem 0rem',
  };

  // Active style (applied when route is active)
  const activeStyle = {
    color: '#6a5acd',
    backgroundColor: 'rgba(106, 90, 205, 0.1)',
    borderRadius: '4px',
  };

  // Handle link click: if mobile, close the hamburger menu.
  const handleLinkClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <nav style={navbarStyle}>
      {/* Logo Section */}
      <div style={logoStyle}>
        <NavLink to="/" style={{ display: 'inline-block' }} onClick={handleLinkClick}>
          <img
            src={logo}
            alt="Logo"
            width={80}
            height={80}
            style={{ objectFit: 'contain' }}
            loading="lazy"
          />
        </NavLink>
      </div>

      {/* Hamburger Icon (visible on mobile) */}
      <div onClick={toggleMenu} style={hamburgerStyle}>
        &#9776;
      </div>

      {/* Menu List */}
      <ul style={navListStyle}>
        <li>
          <NavLink
            to="/insight"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
            onClick={handleLinkClick}
            className="nav-link"
          >
            Insights
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
            onClick={handleLinkClick}
            className="nav-link"
          >
            Service
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/training"
            style={({ isActive }) =>
              isActive ? { ...linkStyle2, ...activeStyle } : linkStyle2
            }
            onClick={handleLinkClick}
            className="nav-link"
          >
            Internships &amp; Training
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
            onClick={handleLinkClick}
            className="nav-link"
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Career"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
            onClick={handleLinkClick}
            className="nav-link"
          >
            Career
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AboutUs"
            style={({ isActive }) =>
              isActive ? { ...linkStyle2, ...activeStyle } : linkStyle2
            }
            onClick={handleLinkClick}
            className="nav-link"
          >
            About us
          </NavLink>
        </li>
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
