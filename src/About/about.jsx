import React from 'react';
import './about.css';
import { FaUniversity, FaLaptopCode, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt,  } from "react-icons/fa";

const About = () => {
  return (
    <section id='about'>
        <div className="about-me">
            <h2 className='header'>  About Me</h2>
            <p className='about-text'>
              Hi, I'm Mohammed, a passionate frontend developer with a  foundation in HTML, CSS, JavaScript, and React. 
              I specialize in building responsive, user-friendly web applications.
              Beyond frontend development, I'm also exploring networking (CCNA), continuously expanding my skill set to stay ahead in the tech industry.
              I love solving problems, learning new technologies, and bringing creative ideas to life through code. My goal is to build impactful digital experiences while growing as a developer.
            </p>
        </div>

        <div className="my-detail">
            <div className='my-experience'>
                <FaLaptopCode size={30} className='icon'/>
                <h3 className='detail-text'>Experience</h3>
                <p className='detail-text'>2+ Years</p>
                <p className='detail-text'>Frontend Developer</p>
            </div>
            <div className='my-education'>
                <FaUniversity size={30} className='icon-1'/>
                <h3 className='detail-text'>Education</h3>
                <p className='detail-text'>Federal University of Technology Minna</p>
                <p className='detail-text'>Degree: Information Technology <em>(In Progress)</em></p>
                <p className='detail-text'>Expected Graduation: 2028</p>
            </div>
        </div>

        <div className="skills">
            <h2 className='header'> Skills</h2>
            <div className="skill-list">
                <div className='skilled'><FaHtml5 size={30} color="#E34F26" /> HTML5</div>
                <div className='skilled'><FaCss3Alt size={30} color="#1572B6" /> CSS3</div>
                <div className='skilled'><FaJs size={30} color="#F7DF1E" /> JavaScript</div>
                <div className='skilled'><FaReact size={30} color="#61DAFB" /> React.js</div>      
                <div className='skilled'><FaGitAlt size={30} color="#F05032" /> Git & GitHub</div>
            </div>
        </div>
    </section>
  );
};

export default About;
