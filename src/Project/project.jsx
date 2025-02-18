import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import './project.css'
const projectsData = [
  {
    id: 1,
    title: "Real Estate Website",
    image: "./estate.jpg",
    description: "A modern real estate platform with property listings and a search feature.",
    demo: "https://md-estate-website.netlify.app/",
  },
  {
    id: 2,
    title: "Music Player App",
    image: "./music.jpg",
    description: "A modern music player with play, pause, and playlist management features.",
    demo: "https://motex-music-player.netlify.app/",
  },
  // {
  //   id: 3,
  //   title: "Weather App",
  //   description: "A weather forecasting app using OpenWeather API.",
  //   demo: "https://yourweatherapp.com",
  // },
];

const Projects = () => {
  return (
    <section className="projects" id="project">
      <h2 className="header">🚀 My Projects</h2>
      <div className="projects-list">
        {projectsData.map((project) => (
          <motion.div 
            key={project.id} 
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt size={22} /> Live Demo
              </a>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
