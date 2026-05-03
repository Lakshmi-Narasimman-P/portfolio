import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Software Development',
      skills: ['OOPS', 'SDLC', 'Software Design Patterns']
    },
    {
      category: 'Programming Languages',
      skills: ['Python', 'SQL']
    },
    {
      category: 'Areas of Interest',
      skills: ['Data Visualization', 'Predictive Analytics', 'Machine Learning', 'AI']
    },
    {
      category: 'Tools & Technologies',
      skills: ['Power BI', 'Tableau', 'Visual Studio Code', 'Scikit-learn', 'TensorFlow']
    },
    {
      category: 'Soft Skills',
      skills: ['Problem-Solving', 'Communication', 'Team Collaboration', 'Leadership', 'Adaptability']
    },
    {
      category: 'Languages',
      skills: ['English', 'Tamil', 'Telugu']
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
