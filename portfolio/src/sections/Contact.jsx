import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p>
          I'm always open to new opportunities, collaborations, or just a friendly chat about tech and development.
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:ajaysah52@gmail.com">ajaysah52@gmail.com</a>
        </p>

        <div className="contact-links">
          <a href="https://www.linkedin.com/in/ajay-sah-b57ab2252" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/ajay26188" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
