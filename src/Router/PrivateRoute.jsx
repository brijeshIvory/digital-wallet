import { Navigate } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import React from "react";
import Login from "../Components/Login";
import { useEffect } from "react";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  const isAuthenticated = true

  return isAuthenticated ? (
    <Dashboard children={children} />
  ) : (
    <Navigate to="/" />
  );
}

export default PrivateRoute;
