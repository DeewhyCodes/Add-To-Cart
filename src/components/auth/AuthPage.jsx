import React, { useState } from "react";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import { useSharedContext } from "../../context/SharedAppContex";

const AuthPage = () => {
  const { navigate } = useSharedContext();
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm((prevShowLoginForm) => !prevShowLoginForm);
  };

  return (
    <div className="auth-page">
      {showLoginForm ? (
        <LogInForm toggleForm={toggleForm} navigate={navigate} />
      ) : (
        <SignUpForm toggleForm={toggleForm} navigate={navigate} />
      )}
    </div>
  );
};

export default AuthPage;
