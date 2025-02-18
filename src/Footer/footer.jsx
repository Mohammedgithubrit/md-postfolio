import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import './footer.css'; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Content */}

        {/* Navigation Links */}
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#project">Projects</a></li>
        </ul>

       
        <p className='footer-copyright' >&copy; {new Date().getFullYear()} Mohammed Yusuf. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
