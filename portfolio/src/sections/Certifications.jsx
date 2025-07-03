import './Certifications.css';

const certifications = [
  {
    title: "Full Stack Open",
    provider: "University of Helsinki",
    link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/202c57402819f1752362a7577069b394",
  },
  {
    title: "TypeScript for Full Stack",
    provider: "University of Helsinki",
    link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/aba229b830592994fa4366617690d522",
  },
  {
    title: "GraphQL",
    provider: "University of Helsinki",
    link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/f69fae89bb738d1680ea33b3ce4653b6",
  },
];

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <h2>Certifications</h2>
      <div className="certification-grid">
        {certifications.map((cert, index) => (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
            key={index}
          >
            <h3>{cert.title}</h3>
            <p>{cert.provider}</p>
            <span>View Certificate →</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications