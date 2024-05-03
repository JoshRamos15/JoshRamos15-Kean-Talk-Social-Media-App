import React, { useState } from 'react';
import './Login.css'; // Path to your CSS file for styling the login form

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your login logic here
    // For example, call an API to authenticate the user
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="login-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Log In</button>
        <div className="login-footer">
          <a href="/forgot-password">Forgot Password?</a>
          <a href="/register">Create an Account</a>
        </div>
      </form>
    </div>
  );
};

export default Login;