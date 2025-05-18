import './Skills.css';

const Skills = () => {
  const frontendSkills = [
    "React.js", "HTML5", "CSS3", "JavaScript", "Vite", "Framer Motion"
  ];

  const backendSkills = [
    "Node.js", "Express.js", "Java", "Python", "MongoDB", "MySQL", "REST APIs"
  ];

  const toolsSkills = [
    "Git", "GitHub", "Postman", "Netlify", "Render"
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-columns">
        <div className="skills-category">
          <h3>Frontend</h3>
          <div className="skills-grid">
            {frontendSkills.map((skill, index) => (
              <div className="skill-card" key={index}>{skill}</div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Backend & DB</h3>
          <div className="skills-grid">
            {backendSkills.map((skill, index) => (
              <div className="skill-card" key={index}>{skill}</div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Tools & Platforms</h3>
          <div className="skills-grid">
            {toolsSkills.map((skill, index) => (
              <div className="skill-card" key={index}>{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
