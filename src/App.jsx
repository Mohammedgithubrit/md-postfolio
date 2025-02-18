import React from 'react';
import Home from './Home/home.jsx'; 
import About from './About/about.jsx';
import Services from './Services/services.jsx';
import Projects from './Project/project.jsx';
import Contact from './Contact/contact.jsx';
import Footer from './Footer/footer.jsx';
const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
