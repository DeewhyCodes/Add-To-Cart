import React from "react";
import LoginPage from "./LogInForm";
import SignUpPage from "./SignUpForm";
import AuthDetails from "./AuthDetails";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <LoginPage />
      <SignUpPage />
      <AuthDetails />
    </div>
  );
};

export default AuthPage;
