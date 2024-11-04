import React, { useState } from "react";
import image from "../../assets/signup.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/thunk/AuthThunk";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginAPI = import.meta.env.VITE_LOGIN_API;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.isLoading);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const credentials = {
      username: username,
      password: password,
    };
    dispatch(login({ credentials }));
  };
  if (isLoading) navigate("/");
  return (
    <div className="bg-slate-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src={image}
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" name="remember" className="text-blue-500" />
            <label htmlFor="remember" className="text-gray-600 ml-2">
              Remember Me
            </label>
          </div>
          <div className="mb-6 text-blue-500">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-blue-500 text-center">
          <a href="#" className="hover:underline">
            Sign up Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
