import React from "react";
import { useAuthContext } from "./authContext/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { email, password, handleEmailChange, handlePasswordChange, setUser } =
    useAuthContext();

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("clicked");
    setUser(true);
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
