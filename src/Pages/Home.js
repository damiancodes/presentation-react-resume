import React from 'react'

import Navbar from '../Components/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


export const Contact = () => {
    return (
      <div>
            <Navbar />
          <h1>Brendan Johnson</h1>
          <h2>Iam a freelancer</h2>

          <FontAwesomeIcon icon={faHouse} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />

          <p>Connect with me on social media!</p>


      </div>
    )
  }
  export default Contact