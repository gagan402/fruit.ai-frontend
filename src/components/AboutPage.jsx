import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom, #d7d0f5, #90e4e9)', 
      padding: '20px' 
    }}>
      <div style={{ 
        background: '#fff', 
        borderRadius: '25px', 
        padding: '30px', 
        textAlign: 'center', 
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
        maxWidth: '400px' 
      }}>
        <h1 style={{ fontSize: '28px', margin: '0 0 20px 0' }}>Fruit.Ai</h1>
        <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
          Whether you're looking to discover new fruits, understand their nutritional values, 
          or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. 
          We provide personalized fruit recommendations tailored to your health needs, making 
          it easier for you to integrate the best fruits into your daily routine.
        </p>
        <button style={{ 
          marginTop: '20px', 
          padding: '10px 20px', 
          backgroundColor: '#000', 
          color: '#fff', 
          borderRadius: '30px', 
          border: 'none', 
          cursor: 'pointer', 
          fontSize: '16px' 
        }}>
          ABOUT
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
