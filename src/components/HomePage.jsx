import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h2 className="title">Fruit.Ai</h2>
      <p className="subtitle">"Be Healthy!"</p>
      <div className="button-grid">
        <Link to="/chatbot" className="grid-button chat">Chat.</Link>
        <Link  className="grid-button a1"></Link>
        <Link  className="grid-button a2"></Link>
        
        <Link to="/translator" className="grid-button translator">
          <i className="fa fa-language"></i>
        </Link>

        <Link to="/faqs" className="grid-button faqs">FAQs</Link>
        <Link to="/about" className="grid-button about">About</Link>
      </div>
      <div>

      
      <i className="fa-solid fa-circle" style={{color: "#fff", fontSize: "9px", margin : "2rem 0.5rem 0 1rem"}} />
    <i className="fa-solid fa-circle" style={{color: "#fff", fontSize: "9px", margin : "2rem 0.5rem 0 1rem"}} />
    <i className="fa-solid fa-circle" style={{color: "#fff", fontSize: "9px", margin : "2rem 0.5rem 0 1rem"}} />
    </div>
    </div>
  );
};

export default HomePage;
