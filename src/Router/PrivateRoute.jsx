import { Navigate } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import React from "react";
import Login from "../Components/Login";

function PrivateRoute({ children }) {
  const isAuthenticated = false;
  return isAuthenticated ? (
    <Dashboard children={children} />
  ) : (
    <Navigate to="/" />
  );
}

export default PrivateRoute;
