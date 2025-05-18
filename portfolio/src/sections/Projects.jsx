import './Projects.css';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectList = [
    {
      title: "Phonebook Website",
      description: "Contact manager with add, update, filter, and delete features using React Router and localStorage.",
      tech: "React, JavaScript, CSS, React Router, LocalStorage",
      link: "https://ajaysphonebook.netlify.app/"
    },
    {
      title: "Anecdotes Voting Portal",
      description: "Vote and browse programming anecdotes with animated transitions and top-vote logic.",
      tech: "React, JavaScript, React Router, Framer Motion",
      link: "https://ajays-anecdotes.netlify.app/"
    },
    {
      title: "Cafe Website",
      description: "Single-page café site with hero, menu, contact form, and photo gallery built with React and Vite.",
      tech: "React, Vite, JavaScript, CSS, HTML",
      link: "https://ajays-cafe.netlify.app/"
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
