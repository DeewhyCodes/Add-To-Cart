import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUpForm = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Signed up successfully", {});
        toggleForm();
        console.log(userCredential);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        toast.error("Unable to sign up", {});
        console.log(error);
      });
  };

  return (
    <div className="signup-container">
      <h2>Create Account</h2>
      <form onSubmit={signUp} className="signup-form ">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="your password"
            required
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      <p>
        Have an account?
        <button className="auth-form-link" onClick={toggleForm}>
          Log In
        </button>
      </p>
    </div>
  );
};

export default SignUpForm;
