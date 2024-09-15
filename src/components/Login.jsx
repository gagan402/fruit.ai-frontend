import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Login.css'; 

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === 'admin' && password === 'password') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };
 

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="hyhy">Login</h2>
        <p>
          By signing in you are agreeing to our <a href="#terms" className='term'>Terms and privacy policy</a>
        </p>
        <div className="login-register-links">
          <a href="#login" className="active-link">Login</a>
          <a href="#register">Register</a>
        </div>

        <div className="input-group">
          <i className="fas fa-envelope"></i>
          <input
          type="text"
          placeholder="Email Address"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        
        </div>
        <div className="underline"></div>

        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
            onClick={() => setShowPassword(!showPassword)} // Toggle visibility
            style={{ cursor: 'pointer' }}
          ></i>
        </div>
        <div className="underline"></div>


        <div className="options">
          <label>
            <input type="checkbox" /> Remember password
          </label>
          <a href="#forgot-password">Forgot password</a>
        </div>

        <button type="submit" className="login-btn">Login</button>

        <p>or connect with</p>

        <div className="social-login">
        
    <button className="social-button">
        <i className="fa-brands fa-facebook" style={{color: "rgb(36, 32, 145)",fontSize:"40px"}}></i>
    </button>
    <button className="social-button">
        <i className="fa-brands fa-square-instagram" style={{color: "rgb(36, 32, 145)", fontSize: "40px"}} ></i>
    </button>
    <button className="social-button">
        <i className="fa-brands fa-pinterest" style={{color: "red", fontSize: "40px"}}></i>
    </button>
    <button className="social-button">
        <i className="fa-brands fa-linkedin" style={{color: "#185ed8", fontSize: "40px"}} ></i>
    </button>

        </div>

       
      </form>
    </div>
  );
};

export default Login;
