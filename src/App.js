import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import ChatbotPage from './components/ChatbotPage';
import TranslatorPage from './components/TranslatorPage';
import FaqPage from './components/FaqPage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/translator" element={<TranslatorPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
