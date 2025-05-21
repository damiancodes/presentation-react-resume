import React, { use, useRef, useState } from 'react';
import '../Components/CSS/About.css';
import test4 from '../Images/test4.jpg';

const About = () => {
  const [savings, setSavings] = useState(1000);
  const [username, setUsername] = useState("Damian Wabwire");
  const [age, setAge] = useState(25);
  const [email, setEmail] = useState("damianbwire88@gmail.com");

  const firstname = "Damian";
  const lastname = "Wabwire";
  const fullName = `${firstname} ${lastname}`;

  const increaseSavings = () => {
    setSavings(savings + 1000);
  };

  const hello = () => {
    alert("Hello, welcome!");
    console.log("Hello, welcome!");
  };

  const stats = [
    { number: 232, label: 'Happy Clients' },
    { number: 521, label: 'Projects' },
    { number: 1463, label: 'Hours Of Support' },
    { number: 15, label: 'Hard Workers' }


  ];

  //new 

  const nameInput = useRef();
  const phoneInput = useRef();

  const [nameOutput, setnameOutput] = useState();

  function submitForm() {

    //get data from input

    const theUserName = nameInput.current.value;
    const thePhoneNumber = phoneInput.current.value;

    console.log(theUserName, thePhoneNumber);
    if (theUserName === "" || thePhoneNumber === "") {
      alert("Please fill in all fields");
    }
    else {
      setnameOutput(theUserName + " " + thePhoneNumber);
    
    }
  }

  const skills = [
    { skill: 'RESTFUL API', percentage: '80%' },
    { skill: 'DJANGO REST FRAMEWORK', percentage: '80%' },
    { skill: 'DJANGO', percentage: '98%' },
    { skill: 'PYTHON', percentage: '97%' },
    { skill: 'REST API', percentage: '85%' },
    { skill: 'CSS', percentage: '90%' },
    { skill: 'JAVASCRIPT', percentage: '75%' },
    { skill: 'REACT', percentage: '85%' },
    { skill: 'NODE JS', percentage: '80%' },
    { skill: 'EXPRESS JS', percentage: '80%' },
    { skill: 'MONGODB', percentage: '70%' },
    { skill: 'MYSQL', percentage: '90%' },
    { skill: 'GITHUB', percentage: '90%' },
    { skill: 'BOOTSTRAP', percentage: '90%' },
    { skill: 'JQUERY', percentage: '80%' },
    { skill: 'FIREBASE', percentage: '80%' },
  ];

  return (
    <section className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            Comfortable designing layouts from scratch or converting Figma wireframes into working web pages.
            Familiar with JavaScript ES6+, component-based development, and integrating frontend logic with backend APIs using Axios or Fetch.
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={test4} alt="About Profile" />
          </div>

          <h1>{username}</h1>
          <button onClick={increaseSavings}>Increase Savings</button>
          <p>Current Savings: ${savings}</p>

          <button onClick={hello}>Click Me</button>


          <input type='text' ref={nameInput} placeholder='enter your name'/> <br />
          <input type='text' ref={phoneInput} placeholder='enter your phone number'/> <br />
          <button onClick={submitForm}>Submit</button>
          <h1>{nameOutput}</h1>

          <div className="about-details">
            <h3>Python/React Developer &amp; Full Stack Developer</h3>
            <p className="italic-text">Build solutions.</p>

            <div className="details-grid">
              <div className="detail-col">
                <ul>
                  <li><strong>Website:</strong> www.clouddevs.com</li>
                  <li><strong>Phone:</strong> +254700532551</li>
                  <li><strong>City:</strong> Nairobi, Kenya</li>
                </ul>
              </div>
              <div className="detail-col">
                <ul>
                  <li><strong>Age:</strong> {age}</li>
                  <li><strong>Degree:</strong> Master</li>
                  <li><strong>Email:</strong> {email}</li>
                  <li><strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>

            <p className="description">
              Wrote reusable serializers and viewsets to keep the backend clean and maintainable, while also implementing pagination and filtering where needed.
            </p>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="skills-section">
          <h3>Skills</h3>
          <p>
            Built the backend for an E-commerce platform (E-commerce-website-React-and-Django on GitHub), where I used DRF to create secure, scalable APIs for product management, user registration, and order processing.
            Integrated M-Pesa API for handling real-time mobile payments, and used Google Maps API in another project to implement geolocation-based features.
            Applied SQLite during development and transitioned to PostgreSQL in production setups for data reliability and performance.
            Used Docker for containerizing the backend services, making development, testing, and team collaboration more efficient.
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-header">
                  <span>{skill.skill}</span>
                  <span>{skill.percentage}</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: skill.percentage }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
