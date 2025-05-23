import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/skills">Projects</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;