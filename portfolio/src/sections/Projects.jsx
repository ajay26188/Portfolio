import './Projects.css';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectList = [
    {
      title: "Personal Portfolio",
      description: "This site you're on! Built with React and CSS.",
      tech: "React, Vite, CSS",
      link: "#"
    },
    {
      title: "To-Do List App",
      description: "A simple CRUD to-do app with persistent storage.",
      tech: "React, LocalStorage",
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Fetches real-time weather data from OpenWeatherMap API.",
      tech: "React, Fetch API, CSS",
      link: "#"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
