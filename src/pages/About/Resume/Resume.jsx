import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">My Background</h2>
      </header>

      <div className="timeline">
  <div className="title-wrapper">
    <div className="icon-box">
      {/* <FaRegBookmark /> */}
      <img 
          src="https://img.icons8.com/?size=100&id=HXY7WjeDDgsq&format=png&color=000000" 
          alt="Location Icon" 
          width="30" 
          height="30" 
        />
    </div>
    <h3 className="h3">Experience</h3>
  </div>
  <ol className="timeline-list">
    <TimelineItem
      title="Intern at Cloud Institution, Bangalore"
      date="May 2023 – August 2023"
      description="Deployed full-stack applications on AWS EC2, managed PostgreSQL on RDS, and set up S3 for storage. Configured VPC, API Gateway, and authored deployment documentation for scalability."
    />
    <TimelineItem
      title="Smart Intern (Virtual Internship)"
      date="May 2023 – August 2023"
      description="Developed an e-commerce website (RedStore) with a user-friendly interface. Used HTML, CSS, and JavaScript to enable easy browsing, booking, and management."
    />
  </ol>
</div>



      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            {/* <FaBookReader /> */}
            <img 
          src="https://img.icons8.com/?size=100&id=w81qhmuAIC2b&format=png&color=000000" 
          alt="Location Icon" 
          width="30" 
          height="30" 
        />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
  <TimelineItem
    title="Bachelor of Technology in Computer Science"
    date="SV College of Engineering | 2020 - 2024"
    description="GPA: 7.89"
  />
  <TimelineItem
    title="Intermediate Education (MPC)"
    date="Narayana Intermediate Colleges | 2017 - 2019"
    description="GPA: 7.7"
  />
  <TimelineItem
    title="Secondary Education"
    date="Siddhartha e-Techno School | 2016 - 2017"
    description="GPA: 9.2"
  />
</ol>

      </div>

      <div className="skill">
  <h3 className="h3 skills-title">My Expertise</h3>

  <div className="skills-category">
  <h4 className="skills-subtitle">Frontend</h4>
  <ul className="skills-list content-card horizontal-list">
    <li className="skill-item">
      <img src="https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000" alt="HTML" />
      <div className="popover">HTML: Hypertext Markup Language</div>
    </li>
    <li className="skill-item">
      <img src="https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000" alt="CSS" />
      <div className="popover">CSS: Cascading Style Sheets</div>
    </li>
    <li className="skill-item">
      <img src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000" alt="JavaScript" />
      <div className="popover">JavaScript: Programming Language</div>
    </li>
    <li className="skill-item">
      <img src="https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000" alt="Bootstrap" />
      <div className="popover">Bootstrap: CSS Framework</div>
    </li>
    <li className="skill-item">
      <img src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000" alt="React" />
      <div className="popover">React: JavaScript Library</div>
    </li>
  </ul>
</div>

<div className="skills-category">
  <h4 className="skills-subtitle">Backend</h4>
  <ul className="skills-list content-card horizontal-list">
    <li className="skill-item">
      <img src="https://img.icons8.com/?size=100&id=PZQVBAxaueDJ&format=png&color=000000" alt="Express.js" />
      <div className="popover">Express.js: Node.js Framework</div>
    </li>
    <li className="skill-item">
      <img src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" alt="Node.js" />
      <div className="popover">Node.js: JavaScript Runtime</div>
    </li>
    <li className="skill-item">
      <img src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" alt="MongoDB" />
      <div className="popover">MongoDB: NoSQL Database</div>
    </li>
  </ul>
</div>

<div className="skills-category">
  <h4 className="skills-subtitle">DevOps</h4>
  <ul className="skills-list content-card horizontal-list">
    <li className="skill-item">
      <img src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000" alt="AWS" />
      <div className="popover">AWS: Amazon Web Services</div>
    </li>
    <li className="skill-item">
      <img src="https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000" alt="Docker" />
      <div className="popover">Docker: Containerization Platform</div>
    </li>
    <li className="skill-item">
      <img src="https://img.icons8.com/?size=100&id=WncR8Bcg5nE9&format=png&color=000000" alt="Terraform" />
      <div className="popover">Terraform: Infrastructure as Code</div>
    </li>
  </ul>
</div>



</div>

    </section>
  );
};

export default Resume;
