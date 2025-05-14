// src/sections/Hero.jsx
import './Hero.css';
import resumePDF from '../assets/Ajay Sah_Resume_SoftwareEngineer.pdf'
import degreePDF from '../assets/Degree-certificate-Sah-Ajay.pdf'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <img src="/profile.jpg" alt="Ajay profile" className="hero-image" />

        <div className="hero-content">
          <h1>Hi! I am Ajay.</h1>
          <h2>Full Stack Developer</h2>
          <p>Bachelor of Science, Software and Systems Engineering <br/>Lappeenranta-Lahti University of Technology, Finland</p>

          <div className="hero-buttons">
            <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="cta-button">
              View Resume
            </a>
            <a href={degreePDF} target="_blank" rel="noopener noreferrer" className="cta-button">
              View Degree
            </a>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Hero;
