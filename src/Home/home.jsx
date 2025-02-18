import React from 'react'
import { useState } from 'react';
import './home.css';
import { BiMenuAltRight } from "react-icons/bi";
import {  FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";


const home = () => {

  const [menuOpened, setMenuOpened] = useState(false);
  
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? "0" : "-100%",  }; 
    }
  }
  return (
    <section id='home'>
        <div className="header-home">
            <p className="logo">Md Yusuf</p>

            <nav className='h-menu' style={getMenuStyles(menuOpened)}>
              <a href="#about" onClick={() => setMenuOpened(false)}>About</a>
              <a href="#services" onClick={() => setMenuOpened(false)}>Services</a>
              <a href="#project" onClick={() => setMenuOpened(false)}>Projects</a>
              <a href="#contact" onClick={() => setMenuOpened(false)}>Contact</a>
            </nav>
     

        </div>
        
        <div className="menu-icon" 
     onClick={(e) => {
       e.stopPropagation(); // Prevent OutsideClickHandler from closing it
       setMenuOpened(prev => !prev);
     }}>
  <BiMenuAltRight size={30} />
</div>

        <div className="hero">
        <div className="avatar">
        <motion.div 
                className="flexCenter hero-right"
                initial={{ x: "50rem", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, type: "spring" }}
                >
          <img src="./avatar.webp" alt="photo" className='image' />
          </motion.div>

        </div>

        <div className="left">
        <motion.p 
                initial={{ y: "30rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, type: "spring" }}
                >
          <p>Hello i'm <br /><span>Mohammed Yusuf</span> <br /> a frontend developer</p>
          <button className="cv" onClick={() => window.open('/cv.pdf', '_blank')}>  CV</button>

          <button className='contact-me'><a href="#contact">Contact me</a></button>

             <div className="social-icons">
                      
                      <a href="https://www.linkedin.com/in/motexyusuf/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                      </a>
                      <a href="https://x.com/YusufMo68264270" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                      </a>
                    </div>
                </motion.p>

        </div>
        
        </div>
      
    </section>
  )
}

export default home