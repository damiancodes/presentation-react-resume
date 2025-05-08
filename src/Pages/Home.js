
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import test5 from '../Images/test5.jpg';
import '../Components/CSS/Home.css';

export const Home = () => {
  return (
    <div className="hero-section">
      <div className="overlay">
        <h1>Brendan Johnson</h1>
        <h2>I am a freelancer</h2>

       
        
        <div className="social-icons">
          <FontAwesomeIcon icon={faHouse} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
        </div>
        
        <p>Connect with me on social media!</p>
      </div>
    </div>
  );
};
export default Home;