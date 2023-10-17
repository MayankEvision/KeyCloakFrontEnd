import React, { useState } from "react";
import "../App.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import authLogin from "../Services/auth-Login";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await authLogin.login(username, password);

      if (response) {

        console.log("success>>>>>>>>>>>>")
        window.location.href = '/AdminPage';
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred while logging in", error);
    }
  };

  return (
    <div style={{
      backgroundImage:"url(bg.jpg)"
    }} className="LoginBackground">  
      
    <div className="login-form">
      <h2 className="login-formh2" >Evision Software Solutions </h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="Login-Input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="Login-Input"
              required
            />
            <button
              className="Password-Eye"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <br />

        <button className="Login-Submit-Button" type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default LoginForm;
