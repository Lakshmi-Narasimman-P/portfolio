import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Data Analyst Intern',
      company: 'Jupiter Brothers Data Science Pvt Ltd',
      duration: 'May 2024 - June 2024',
      description: 'Completed an industrial project involving data analytics and machine learning model implementation, applying Python to derive data-driven insights for real-world use cases.'
    }
  ];

  const certifications = [
    { title: 'PYTHON FOR DATA SCIENCE', issuer: 'NPTEL – IIT', date: 'Jan–Feb 2024', duration: '4-week course' },
    { title: 'DATABASE MANAGEMENT SYSTEM', issuer: 'Codechef', date: 'Apr 2024' },
    { title: 'TCS iON Career Edge: Young Professional', issuer: 'TCS', date: 'May 2025' },
    { title: 'DESIGN AND ANALYSIS OF ALGORITHMS', issuer: 'Codechef', date: 'Apr 2025' }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Experience & Certifications</h2>
        
        <div className="experience-content">
          <div className="experience-box">
            <h3>Internship Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="exp-header">
                  <h4>{exp.role}</h4>
                  <p className="exp-date">{exp.duration}</p>
                </div>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-description">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="certifications-box">
            <h3>Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <div className="cert-icon">✓</div>
                  <h4>{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  {cert.duration && <p className="cert-duration">{cert.duration}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
