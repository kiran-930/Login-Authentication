import React, { useState } from 'react'
import axios from "axios";
import "../App.css";
import { Navigate, useNavigate } from 'react-router-dom';


// URL of the backend API endpoint
const API_URL = "http://hawk.ecogo.co.in/api/v1/login";

function Login() {
  const navigate= useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request with credentials using axios
      const response = await axios.post(
        API_URL,
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Assuming response is successful, handle success
      setSuccessMessage("Login successful!");
      localStorage.setItem('token',response.data.access_token)
      navigate('/home')
      setErrorMessage("");

      // If the API returns a token, you might store it for future requests
      // localStorage.setItem("token", response.data.token);

    } catch (error) {
      // Check if error response is available to provide more details
      if (error.response) {
        setErrorMessage(error.response.data.message || "Login failed");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
      setSuccessMessage("");
    }
  };

  return (
    <>
    <div className="App">
      <div className="login-container">
        <h2>Login</h2>
        {errorMessage && <div className="error">{errorMessage}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div></>
  )
}

export default Login










