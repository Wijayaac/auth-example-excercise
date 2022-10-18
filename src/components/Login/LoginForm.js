import debounce from "lodash.debounce";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getUser } from "./LoginForm.handler";

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const redirect = debounce(() => {
    navigate("/");
  }, 2000);

  const handleLogin = async (data) => {
    try {
      let result = await getUser(data);
      localStorage.setItem("user", JSON.stringify(result));

      redirect();

      toast.success("Login Success");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='form-wrapper'>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className='field'>
          <label htmlFor='email'>Your email</label>
          <input
            type='email'
            id='email'
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className='field'>
          <label htmlFor='password'>Your password</label>
          <input
            type='password'
            id='password'
            {...register("password", { required: "Password required" })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
