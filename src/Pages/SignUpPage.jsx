import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BaseUrl from "../../const"
import axios from "axios"; // Axios for API calls


const SignupForm = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    phone:"",
    gender:"",
    city:"",
    state:"",
    collegeName:"",
    collegeId:"",
    department:"",
    referal:"",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate(); // React Router hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   // Handle form submission
   const handleSubmit = async (e) => {
    e.preventDefault();


    // if (password !== confirmPassword) {
    //   setError("Passwords do not match.");
    //   return;
    // }

    try {
      const response = await fetch(`${BaseUrl}/api/user/register`, {
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
        setSuccess("User created successfully.");
        console.log("user created successfully", data)
        localStorage.setItem('userData', JSON.stringify(data)); // Save to local storage
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };



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
          <form action="" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

            {/* Full Name */}
            <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-user absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

            {/* Email */}
            <div className="relative w-full h-12 mb-8">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

            {/* Password */}
            <div className="relative w-full h-12 mb-8">
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

             {/* Phone */}
             <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone no."
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

             {/* Gender */}
             <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Gender"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

             {/* CollegeName */}
             <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                placeholder="College Name"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

             {/* CollegeId */}
             <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="collegeId"
                value={formData.collegeId}
                onChange={handleChange}
                placeholder="College ID"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

             {/* Department */}
             <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Department"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

             {/* City */}
             <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="city"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

             {/* State */}
             <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>

             {/* Referal */}
             <div className="relative w-full h-12 mb-8">
              <input
                type="text"
                name="referal"
                value={formData.referal}
                onChange={handleChange}
                placeholder="Referal"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>



            {/* Confirm Password */}
            {/* <div className="relative w-full h-12 mb-6">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full h-full bg-transparent text-white text-base pl-5 pr-10 py-3 border-2 border-white border-opacity-20 rounded-full focus:outline-none placeholder-white"
              />
              <i className="bx bxs-lock-alt absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div> */}

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
