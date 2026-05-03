import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm an AI assistant. Ask me anything about Lakshmi's profile, projects, skills, or experience!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const knowledgeBase: { [key: string]: string } = {
    // About
    'who is lakshmi': "Lakshmi Narasimman is a B.Tech Computer Science and Engineering graduate from Kalasalingam Academy of Research and Education with a CGPA of 8.09/10.0. Passionate about AI, data visualization, and machine learning!",
    'background': "Lakshmi Narasimman Pandurangan graduated in May 2026 from Kalasalingam Academy of Research and Education with a B.Tech in Computer Science and Engineering. Located in Sivakasi, Tamil Nadu.",
    'education': "B.Tech in Computer Science and Engineering from Kalasalingam Academy of Research and Education (Sep 2022 – May 2026) with CGPA: 8.09/10.0",
    
    // Projects
    'projects': "NARASIMMAN  has worked on 2 major projects: 1) AI-Powered Disease Prediction System using Hybrid ML Model, 2) Smart Assistive Stick with IoT for visually impaired users.",
    'disease prediction': "AI-Powered Disease Prediction System using Hybrid ML Model - Developed a comprehensive ML pipeline for multi-disease prediction with model stacking, combining top-performing models with Logistic Regression meta-learner using Scikit-learn.",
    'assistive stick': "Smart Assistive Stick with Enhanced Mobility - An IoT-based smart stick featuring obstacle detection, GPS navigation, emergency alerts, and real-time feedback through buzzer/vibration for visually impaired users.",
    
    // Skills
    'skills': "Skills include: Python, SQL, OOPS, SDLC, Data Visualization, Predictive Analytics, Machine Learning, Power BI, Tableau, Scikit-learn, and strong soft skills like problem-solving and communication.",
    'programming languages': "Python and SQL",
    'tools': "Power BI, Tableau, Visual Studio Code, Scikit-learn, TensorFlow",
    'interests': "Data Visualization, Predictive Analytics, Machine Learning, and AI",
    
    // Experience
    'experience': "Data Analyst Intern at Jupiter Brothers Data Science Pvt Ltd (May 2024 - June 2024) - Completed an industrial project involving data analytics and ML model implementation.",
    'internship': "Data Analyst Intern at Jupiter Brothers Data Science Pvt Ltd from May to June 2024, working on data analytics and machine learning projects.",
    
    // Publications
    'publications': "4 publications including: AI Driven Visualization for Waste Management, Smart Assistive Stick, Crop Yield Prediction using ML, and Traffic Signal Optimization using YOLOv8.",
    'research': "Research includes AI visualization for smart cities, IoT for visually impaired, ML for agriculture, and intelligent traffic systems.",
    
    // Certifications
    'certifications': "Python for Data Science (NPTEL-IIT), Database Management System (Codechef), TCS iON Career Edge, and Design and Analysis of Algorithms (Codechef)",
    
    // Contact
    'contact': "Email: narasimannarasiman227@gmail.com, Phone: +91 6374031780, Location: Sivakasi, Tamil Nadu",
    'linkedin': "https://www.linkedin.com/in/lakshmi-narasimman-pandurangan-017731268?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNvpYCn0RRiWnrcG8dFtHAw%3D%3D",
    'orcid': "https://orcid.org/0009-0009-4126-2836",
    'scopus': "https://www.scopus.com/authid/detail.uri?authorId=59935000900",
    
    // General
    'hello': "Hello! How can I help you learn more about Lakshmi?",
    'hi': "Hi there! Ask me about Lakshmi's projects, skills, experience, or anything else!",
    'help': "I can help you with: projects, skills, experience, education, publications, certifications, or contact information. Just ask!",
    'what can you do': "I can answer questions about Lakshmi's background, projects, skills, experience, publications, and more!",
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase().trim();
    
    // Check for exact or partial matches
    for (const [key, response] of Object.entries(knowledgeBase)) {
      if (lowerMessage.includes(key.toLowerCase())) {
        return response;
      }
    }
    
    // Default response
    return "That's a great question! You can ask me about Lakshmi's projects, skills, experience, education, publications, or contact information. What would you like to know?";
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>🤖 AI Assistant</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-content">
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="chatbot-input"
            />
            <button 
              onClick={handleSendMessage}
              className="send-btn"
              disabled={inputValue.trim() === ''}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
        title="AI Assistant"
      >
        {isOpen ? '✕' : '💬'}
      </button>
    </>
  );
};

export default Chatbot;
