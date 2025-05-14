import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>I'm always open to new opportunities, collaborations, or just a friendly chat.</p>
      <p>Email me at: <a href="mailto:ajaysah52@gmail.com">ajaysah52@gmail.com</a></p>

      <div className="contact-links">
        <a href="http://www.linkedin.com/in/ajay-sah-b57ab2252" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/ajay26188" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
