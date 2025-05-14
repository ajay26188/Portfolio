import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Ajay Sah</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
