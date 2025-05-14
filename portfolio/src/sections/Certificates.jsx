import './Certificates.css';

const Certificates = () => {
  const certs = [
    {
      title: 'Frontend Developer Certificate',
      image: '/cert1.jpg', // place this in `public/` folder
      link: 'https://certificate-link.com',
    },
    {
      title: 'React Basics – Coursera',
      image: '/cert2.jpg',
      link: 'https://certificate-link.com',
    },
    // Add more certificates here
  ];

  return (
    <section className="certificates" id="certificates">
      <h2>Certificates</h2>
      <div className="cert-grid">
        {certs.map((cert, index) => (
          <a href={cert.link} target="_blank" rel="noreferrer" key={index} className="cert-card" data-aos="fade-up">
            <img src={cert.image} alt={cert.title} />
            <p>{cert.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
