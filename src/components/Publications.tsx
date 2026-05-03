import React from 'react';

const Publications: React.FC = () => {
  const publications = [
    {
      title: 'Artificial Intelligence Driven Visualization for Enhanced Waste Management and Air Pollution Control in Smart Cities',
      year: '2025'
    },
    {
      title: 'Smart Assistive Stick with Enhanced Mobility and Independence for the Visually Impaired Using Ultrasonic, GPS, and GSM Technologies',
      year: '2025'
    },
    {
      title: 'Stacked hybrid model approach for crop yield prediction using machine learning techniques for improved accuracy',
      year: '2025'
    },
    {
      title: 'Intelligent Traffic Signal Optimization for Emergency Vehicles Using YOLOv8 and Stacked Machine Learning in Indian Smart Cities',
      year: '2025'
    }
  ];

  return (
    <section id="publications" className="section publications-section">
      <div className="container">
        <h2 className="section-title">Research & Publications</h2>
        <div className="publications-list">
          {publications.map((pub, index) => (
            <div key={index} className="publication-item">
              <div className="publication-number">{index + 1}</div>
              <div className="publication-content">
                <h4>{pub.title}</h4>
                <p className="publication-year">Published in {pub.year}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="publications-link-section">
          <a href="https://ieeexplore.ieee.org/author/495285406146114" target="_blank" rel="noopener noreferrer" className="publications-btn">
            📖 View All Publications on IEEE Xplore
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
