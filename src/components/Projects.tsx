import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI-Powered Disease Prediction System Using Hybrid ML Model',
      description: 'Developed a comprehensive machine learning pipeline for multi-disease prediction, including data preprocessing, model training, hyperparameter tuning, and performance evaluation.',
      highlights: [
        'Implemented model stacking combining top-performing models with Logistic Regression meta-learner',
        'Enhanced prediction accuracy through advanced feature engineering',
        'Deployed using Streamlit for interactive user interface'
      ],
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit', 'Matplotlib', 'Seaborn']
    },
    {
      title: 'Smart Assistive Stick with Enhanced Mobility and Independence for Visually Impaired',
      description: 'Developed an IoT-based smart stick with obstacle detection, GPS navigation, and emergency alert features.',
      highlights: [
        'Real-time obstacle detection using ultrasonic sensors',
        'GPS navigation for enhanced navigation',
        'Emergency alert system with location sharing',
        'Buzzer/vibration feedback for user guidance'
      ],
      tech: ['Arduino UNO', 'Ultrasonic Sensors', 'GPS', 'Bluetooth', 'IoT', 'GSM']
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-highlights">
                <h4>Key Contributions:</h4>
                <ul>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="tech-stack">
                <h4>Tech Stack:</h4>
                <div className="tech-tags">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
