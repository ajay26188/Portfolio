import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import resumePDF from '../assets/AjaySah_Resume.pdf';
import degreePDF from '../assets/Degree-certificate-Sah-Ajay.pdf';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <img src="/profile.jpg" alt="Ajay profile" className="hero-image" />

        <div className="hero-content">
          <h1>Hi, I'm Ajay.</h1>
          <h2>Junior Full Stack Developer | React, Node.js, MongoDB, Java, Python, MySQL</h2>
          <p>
            A passionate Software Engineering graduate from LUT University, Finland.<br />
            I specialize in building dynamic, responsive web applications using modern technologies.<br />
            Actively seeking junior-level opportunities to contribute and grow in collaborative development teams.
          </p>

          <div className="hero-buttons">
            <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="cta-button">
              View Resume
            </a>
            <a href={degreePDF} target="_blank" rel="noopener noreferrer" className="cta-button">
              View Degree
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/ajay26188" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ajay-sah-b57ab2252" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:ajaysah52@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
