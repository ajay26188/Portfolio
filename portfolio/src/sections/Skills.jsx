import './Skills.css';

const Skills = () => {
  const skills = [
    "Python",
    "Java",
    "React",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "HTML",
    "CSS"
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
