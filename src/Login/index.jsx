import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../assets/PollFirstLogo/PollFirstLogo.png'
import { Outlet, useNavigate } from 'react-router-dom'; 

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    navigate('/User/dashboard');
    

  };

  return (
    <div className="flex md:flex-row flex-col-reverse">
    <div className=" w-full bg-[rgba(255, 255, 255, 0.2)] md:p-20 p-1 h-screen">
    <div className="lg:w-[60%] w-full md:mt-20 mt-24 lg:p-5 p-2 bg-white rounded-[15px] border-solid border-2 md:mx-auto mx-0 ">
      <div className="text-center mb-3">
        <img className="hero-logo   text-center mx-auto" src={Logo} width="150" alt="Logo" />
      </div>
      {errorMsg && <div className="text-red-500">{errorMsg}</div>}
      
      {/* Form handling by React Hook Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="user py-6  md:px-5 px-2 ">
        <div className="form-group mb-4">
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", { 
              required: "Email is required", 
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format"
              }
            })}
            className="form-control form-control-user w-full p-2 rounded-md border border-gray-300"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        
        <div className="form-group mb-4">
          <input
            type="password"
            placeholder="Password"
            {...register("password", { 
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
            className="form-control form-control-user w-full p-2 rounded-md border border-gray-300"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        
        <div className="form-group mb-4 flex items-center">
          <input
            type="checkbox"
            {...register("remember_me")}
            className="mr-2"
          />
          <label className="custom-control-label" htmlFor="remember_me">
            Remember Me
          </label>
        </div>
        
        <div className="form-group">
          <input
            type="submit"
            value="Login"
            className="btn btn-primary btn-user btn-block w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
          />
        </div>
      </form>
      
      <hr />
    </div>
    </div>
    {/* <video width="500" controls  autoplay loop >
     <source src={Politicalgif} type="video/mp4"></source></video> */}
       
    </div>
  );
};

export default Login;
