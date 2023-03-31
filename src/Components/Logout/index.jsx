import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./index.scss";

function Logout() {
  const navigation = useNavigate();
  useEffect(() => {
    navigation("/", { replace: true });
  }, []);
  return <div className="logout_page"></div>;
}

export default Logout;
