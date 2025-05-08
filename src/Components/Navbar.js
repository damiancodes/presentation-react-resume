
import React from 'react';
import { Link } from 'react-router-dom';
import '././CSS/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">
          MY-RESUME
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;