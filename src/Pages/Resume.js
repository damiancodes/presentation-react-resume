import React from 'react';
import '../Components/CSS/Resume.css';

const Resume = () => (
  <div className="resume-section">
    <div className="resume-header text-center">
      <h1>Domian Wabwire</h1>
      <h2>Full Stack Developer</h2>
      <div className="contact-info">
        <span>0044, Westlands, Nairobi, Kenya</span> | <span>(254) 700532551</span><br/>
        <span>damianbwire88@gmail.com</span> | <a href="www.linkedin.com/in/damian-wabwire-85b929186">LinkedIn</a> | <a href="https://github.com/damiancodes">GitHub</a>
      </div>
    </div>
    <div className="resume-main">
      <div className="resume-left">
        <section className="resume-section-block">
          <h3>PROFESSIONAL SUMMARY</h3>
          <p>A proactive B.Sc. Computer Science graduate with over three years of experience in software development specializing in Django, Python, React.js, Cloud infrastructure (AWS, Docker) and business intelligence. Skilled in applying technical expertise across tech, sales, and data-driven environments, eager to leverage knowledge to tackle complex challenges with efficiency and integrity.</p>
        </section>
        <section className="resume-section-block">
          <h3>TECHNICAL EXPERTISE</h3>
          <ul>
            <li><strong>Programming Languages:</strong> Python | JavaScript | Kotlin</li>
            <li><strong>Database Technologies:</strong> PostgreSQL | MongoDB | Redis | MySQL | SQL</li>
            <li><strong>Frameworks & Technologies:</strong> Django | React.js | Vue.js | jQuery | RESTful APIs | Firebase | Docker | Git | AWS | GitHub Actions | FastApi</li>
            <li><strong>Other Technical Skills:</strong> System Design | Relational Database Architecture | Unit & Functional Testing | CI/CD Workflows</li>
            <li><strong>Professional Skills:</strong> Team Leadership | Technical Communication | Critical Thinking | Problem-Solving | Project Management | Agile Methodologies</li>
          </ul>
        </section>
        <section className="resume-section-block">
          <h3>EDUCATION & CERTIFICATIONS</h3>
          <ul>
            <li><strong>Academic Education</strong><br/>Bachelor of Science in Computer Science<br/>Kibabii University | 08/2017-03/2022</li>
            <li><strong>Professional Development</strong><br/>MIT Full Stack Development - Emobilis Training Centre<br/>React.js - Ubunifu College<br/>ProDev Back-End Web Development - ALX Africa<br/>React.js - Powerlearnprojectafrica Scholarship</li>
            <li><strong>Technical Certifications</strong><br/>Cyber Ops<br/>DevNet Coursework<br/>Google Project Management<br/>Google IT Support<br/>Technical Support Fundamentals<br/>Introduction to Cybersecurity<br/>Linux Unhatched</li>
          </ul>
        </section>
      </div>
      <div className="resume-right">
        <section className="resume-section-block">
          <h3>PROFESSIONAL EXPERIENCE</h3>
          <div className="job-block">
            <h4>Software Developer</h4>
            <span className="job-meta">Tajilabs Kenya | 07/2023--Seasonal Freelance | Nairobi, Kenya</span>
            <ul>
              <li>Collaborative Development: Worked with distributed teams to design and deploy scalable software solutions</li>
              <li>Full-Stack Implementation: Leveraged Python/Django, React.js, Vue.js, PostgreSQL, Redis, Docker, and GitHub Actions to build robust applications</li>
              <li>API Development: Built and integrated RESTful APIs to facilitate seamless communication between frontend and backend services</li>
              <li>Technical Troubleshooting: Debugged issues and engaged with developer communities to drive continuous improvements</li>
              <li>Code Review & Quality Control: Reviewed code contributions, ensuring adherence to best practices and maintainability</li>
              <li>DevOps Implementation: Introduced Docker workflows to streamline team operations and improve development efficiency.</li>
            </ul>
          </div>
          <div className="job-block">
            <h4>Machine Learning Associate</h4>
            <span className="job-meta">Digital Divide Data | 04/2024--01/2025 | Nairobi, Kenya</span>
            <ul>
              <li>Data Processing & Annotation: Collected, processed, and annotated large-scale conversational datasets to enhance AI agent interactions in chatbots and NPC systems</li>
              <li>NLP Engineering: Fine-tuned NLP models to improve natural language understanding (NLU) and context-aware responses</li>
              <li>Prompt Engineering: Designed and optimized techniques to refine LLM outputs, improving engagement and coherence</li>
              <li>Data Pipeline Development: Built and maintained pipelines for training and evaluating AI agents, leveraging big data frameworks for scalable model development</li>
              <li>Model Optimization: Fine-tuned models to handle diverse conversational scenarios, improving NPC dialogue generation and human-like interaction</li>
              <li>Conversational AI Training: Developed comprehensive training protocols for conversational AI systems</li>
            </ul>
          </div>
          <div className="job-block">
            <h4>Graduate Trainee</h4>
            <span className="job-meta">ICT Authority | 12/2022--12/2023 | Nairobi, Kenya</span>
            <ul>
              <li>Network Monitoring: Utilized ImasterNCE, Nagvis, and Nagios for comprehensive network monitoring, elevating SLA compliance</li>
              <li>Project Management: Led network updates for public Wi-Fi projects, improving documentation and enhancing project timelines</li>
              <li>Technical Leadership: Spearheaded NOC report updates, surveys, and mapping for public Wi-Fi projects, improving completion rates</li>
              <li>Capacity Building: Led training for NOC projects (NOFBI 1, NOFBI 2, NOFBI 2E, CCP, OGN), enhancing team expertise</li>
              <li>Technical Proficiency: Applied network monitoring tools (Wireshark, SolarWinds) and implemented network security best practices</li>
            </ul>
          </div>
        </section>
        <section className="resume-section-block">
          <h3>PROJECT PORTFOLIO</h3>
          <div className="project-block">
            <h4>Python/Django Projects</h4>
            <ul>
              <li><strong>Cloudlink Developers SAAS (Jan--Apr 2025):</strong> Built a SaaS web system to manage client projects and payments using Django, PostgreSQL, and Docker. Implemented dashboards, email alerts, and automated invoicing functionality</li>
              <li><strong>Employee Management System (Feb--Mar 2025):</strong> Developed a comprehensive tool to manage employee records, performance metrics, and shift tracking. Implemented role-based access control and reporting dashboards</li>
              <li><strong>Surgisel Limited (Mar--May 2024):</strong> Created an inventory and order processing web application for a medical supplier. Implemented RESTful APIs for seamless integration with third-party systems</li>
            </ul>
            <h4>React.js Projects</h4>
            <ul>
              <li><strong>Hotel Booking System (May--Aug 2024):</strong> Built a React-based UI for clients to reserve rooms, order food, and view nearby attractions. Implemented responsive design and secure payment processing</li>
              <li><strong>Dirokenya E-commerce Platform (Oct--Dec 2024):</strong> Designed a modern frontend for a handmade jewelry store using React.js. Implemented secure checkout flows and advanced product filtering capabilities</li>
              <li><strong>E-Learning Platform (Oct--Nov 2024):</strong> Developed a responsive frontend to manage courses and student interactions. Implemented video streaming integration and progress tracking</li>
            </ul>
            <h4>Android Projects</h4>
            <ul>
              <li><strong>M-Joba App (2025 -- Ongoing):</strong> Developing an Android app connecting Nairobi-based service providers with clients. Implementing booking systems, M-Pesa payment integration, and real-time service tracking</li>
              <li><strong>MyMall App (In Progress):</strong> Building a lightweight mobile marketplace for listing and buying products. Implementing user authentication, product search, and notification systems</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default Resume;