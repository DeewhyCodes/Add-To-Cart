import React, { useState } from "react";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import "./Auth.css";
import { useSharedContext } from "../../context/SharedAppContex";

const AuthPage = () => {
  const { navigate } = useSharedContext();
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm((prevShowLoginForm) => !prevShowLoginForm);
  };

  return (
    <div className="auth-page">
      <div className="auth-switch">
        <div className="switch-buttons">
          <div
            className={`auth-switch-button ${showLoginForm ? "active" : ""}`}
            onClick={() => setShowLoginForm(true)}
          >
            Login
          </div>
          <div
            className={`auth-switch-button ${!showLoginForm ? "active" : ""}`}
            onClick={() => setShowLoginForm(false)}
          >
            Sign Up
          </div>
        </div>
        {showLoginForm ? (
          <LogInForm toggleForm={toggleForm} navigate={navigate} />
        ) : (
          <SignUpForm toggleForm={toggleForm} navigate={navigate} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
