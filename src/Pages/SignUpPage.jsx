import React from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <>
      <div className="text-left p-5 m-2">
        <Link to={"/"} className="text-white">
          Home
        </Link>
      </div>
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "",
        }}
      >
        <div className="w-[420px] bg-white bg-opacity-10 border-2 border-white border-opacity-20 backdrop-blur-md shadow-md text-white p-8 rounded-lg">
          <form action="">
            <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

            {/* Full Name */}
            <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-user absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

            {/* Email */}
            <div className="relative w-full h-12 mb-8">
              <input
                type="email"
                placeholder="Email"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

            {/* Password */}
            <div className="relative w-full h-12 mb-8">
              <input
                type="password"
                placeholder="Password"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-lock-alt absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

            {/* Confirm Password */}
            <div className="relative w-full h-12 mb-6">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-lock-alt absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full h-12 bg-white text-gray-800 font-semibold rounded-full shadow-md hover:bg-opacity-10 hover:text-white transition duration-300"
            >
              Sign Up
            </button>

            {/* Login Link */}
            <div className="text-sm text-center mt-6">
              <p>
                Already have an account? <br />
                <Link
                  to={"/login"}
                  className="font-semibold text-lg hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
