import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import './contact.css'; // Import CSS file

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get in Touch</h2>
        <p>Feel free to reach out if you want to work together or have any questions!</p>

        {/* Contact Info */}
        <div className="contact-info">
          <a href="mailto:yourname@email.com" className="email-box">
            <FaEnvelope className="email-icon" />
            <span style={{fontSize: "1rem"}}>yusufmd2255@email.com</span>
          </a>

          {/* Social Links */}
          <div className="social-icons">
            
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
