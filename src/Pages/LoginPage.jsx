import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import TeamCanvas from "../Components/TeamCanvas";
import BaseUrl from "../../const"

const LoginForm = () => {

 const [formData, setFormData] = useState({
    email:"",
    password:"",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BaseUrl}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
        body: JSON.stringify(formData),
      });
      // console.log(formData)
      const data = await response.json();
  
      // console.log("Response:", data);
      if (response.ok) {
        console.log("user created successfully", data)
        navigate('/')
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <TeamCanvas />
      <div className="text-left p-5 m-2">
        <Link to={"/"} className="text-white">
          Home
        </Link>
      </div>
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center absolute inset-0"
        style={{
          backgroundImage: "",
        }}
      >
        <div className="w-[420px] bg-white bg-opacity-10 border-2 border-white border-opacity-20 backdrop-blur-md shadow-md text-white p-8 rounded-lg">
          <form action="" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

            <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-user absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

            <div className="relative w-full h-12 mb-6">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-lock-alt absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-white text-gray-800 font-semibold rounded-full shadow-md hover:bg-opacity-10 hover:text-white transition duration-300"
            >
              Login
            </button>

            <div className="text-sm text-center mt-6">
              <p>
                Don't have an account? <br />
                <Link
                  to={"/signup"}
                  className="font-semibold text-lg hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
