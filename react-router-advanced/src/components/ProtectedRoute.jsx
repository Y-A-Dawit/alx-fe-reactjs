import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element }) {
  const isAuthenticated = false; // Replace with real auth check logic

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return element;
}

export default ProtectedRoute;
