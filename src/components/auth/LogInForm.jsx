import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LogInForm = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (userCredential.user) {
          toast.success("Logged in successfully", {});
          console.log("Logged in successfully:", userCredential);
          navigate("/Products");
          setEmail("");
          setPassword("");
        }
      })
      .catch((error) => {
        toast.error("Error logging in", { error });
        console.log("Error logging in:", error);
      });
  };

  return (
    <div className="login-container">
      <h2>Log In to your Account</h2>
      <form onSubmit={Login} className="login-form">
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
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
      <p>
        Don't have an account?
        <button className="auth-form-link" onClick={toggleForm}>
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default LogInForm;
