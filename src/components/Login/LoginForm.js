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
          <label htmlFor='username'>Your username</label>
          <input
            type='text'
            id='username'
            {...register("username", { required: "Email is required" })}
          />
          {errors.username && <span>{errors.username.message}</span>}
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
