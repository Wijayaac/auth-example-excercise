import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Authenticated = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthenticatedUser();
  }, []);

  const checkAuthenticatedUser = () => {
    let user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  };
  return children;
};

export default Authenticated;
