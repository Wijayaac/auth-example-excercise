import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/Login";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthenticatedUser();
  }, []);

  const checkAuthenticatedUser = () => {
    let user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  };
  return (
    <div className='page-login'>
      <h1>Hello, Welcome Back</h1>

      <LoginForm />
    </div>
  );
};

export default Login;
