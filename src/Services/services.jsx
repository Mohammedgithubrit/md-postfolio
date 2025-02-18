import { FaCode, FaMobileAlt, FaChartLine, FaPaintBrush , FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import './services.css'

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    icon: <FaCode size={50} />,
    shortDesc: "Building fast, responsive, and SEO-friendly websites.",
    longDesc: "I create fully responsive, performance-optimized websites using HTML, CSS, JavaScript, and React. Ensuring best practices for SEO, mobile-friendliness, and security.",
  },
  {
    id: 2,
    title: "Frontend Development",
    icon: <FaMobileAlt size={50} />,
    shortDesc: "Creating interactive UI using React & modern frameworks.",
    longDesc: "I specialize in building smooth, interactive UIs using React, Tailwind CSS, and Styled Components. Focused on maintainable and scalable code.",
  },
  {
    id: 3,
    title: "Website Optimization",
    icon: <FaChartLine size={50} />,
    shortDesc: "Boosting performance, speed, and accessibility.",
    longDesc: "Optimizing page speed, reducing load times, and implementing best SEO practices to improve search rankings and user experience.",
  },
  {
    id: 4,
    title: "UI/UX Assistance",
    icon: <FaPaintBrush size={50} />,
    shortDesc: "Turning designs into fully functional web applications.",
    longDesc: "Converting Figma, Adobe XD, and Sketch designs into responsive and interactive web pages with pixel-perfect accuracy.",
  }
];

const Services = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="services" id="services">
      <h2 className="header"> 💼 Services</h2>
      <div className="services-list">
        {servicesData.map((service) => (
          <motion.div 
            key={service.id} 
            className="service"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: service.id * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setExpanded(expanded === service.id ? null : service.id)}
          >
            <motion.div 
              whileHover={{ rotate: 20 }}
              className="icon"
            >
              {service.icon}
            </motion.div>
            <h3>{service.title}</h3>
            <p>{service.shortDesc}</p>
            {expanded === service.id && (
              <motion.p 
                className="details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {service.longDesc}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
