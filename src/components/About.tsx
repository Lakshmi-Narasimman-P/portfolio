import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a recent graduate in B.Tech Computer Science and Engineering with a strong academic foundation and consistent performance. 
              Passionate about learning, innovation, and applying knowledge to solve real-world challenges.
            </p>
            <p>
              Experienced in working on academic projects and internships that enhanced critical thinking and adaptability. 
              Known for being a quick learner, effective communicator, and collaborative team player.
            </p>
          </div>
          
          <div className="education-box">
            <h3>Education</h3>
            <div className="education-item">
              <h4>B.Tech in Computer Science and Engineering</h4>
              <p className="institution">Kalasalingam Academy of Research and Education</p>
              <p className="details">Srivilliputhur | Sep 2022 – May 2026</p>
              <p className="cgpa"><strong>CGPA: 8.09/10.0</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
