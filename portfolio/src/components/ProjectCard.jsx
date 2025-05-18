import './ProjectCard.css';

const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="tech-stack"><strong>Tech:</strong> {tech}</p>
      <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
        View Project →
      </a>
    </div>
  );
};

export default ProjectCard;
