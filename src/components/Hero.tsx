import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="profile-photo-wrapper">
          <img src="/profile.jpg" alt="Lakshmi Narasimman" className="profile-photo" />
        </div>
        <div className="hero-content">
          <h1>LAKSHMI NARASIMMAN PANDURANGAN</h1>
          <p className="title">B.Tech Computer Science Engineer | Data Science & ML Enthusiast</p>
          <p className="subtitle">Passionate about AI, Data Visualization, and Building Intelligent Solutions</p>
          
          <div className="professional-profiles">
            <a href="https://www.linkedin.com/in/lakshmi-narasimman-pandurangan-017731268?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNvpYCn0RRiWnrcG8dFtHAw%3D%3D" target="_blank" rel="noopener noreferrer" className="profile-badge">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://orcid.org/0009-0009-4126-2836" target="_blank" rel="noopener noreferrer" className="profile-badge">
              <i className="fab fa-orcid"></i> ORCID
            </a>
            <a href="https://www.scopus.com/authid/detail.uri?authorId=59935000900" target="_blank" rel="noopener noreferrer" className="profile-badge">
              <i className="fas fa-chart-bar"></i> Scopus
            </a>
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
          <div className="hero-contact">
            <p>📍 Sivakasi, Tamil Nadu | 📧 narasimannarasiman227@gmail.com | 📱 +91 6374031780</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
