import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "./authContext/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/LoginPage" />;
  }
  return children;
};

export default ProtectedRoute;
