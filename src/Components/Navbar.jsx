import React from "react";
import logo from "../Assets/image/Composit_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 p-1 left-0 w-full bg-[#4b3926] bg-opacity-10 backdrop-blur-lg shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img
            src={logo} // Add the logo path here
            alt="Composit Logo"
            className="w-20 h-20"
          />
          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-100 hover:text-[#c29a66] font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-100 hover:text-[#c29a66] font-medium active:text-[#c29a66]"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-100 hover:text-[#c29a66] font-medium"
            >
              Sponsers
            </a>
            <a
              href="#team"
              className="text-gray-100 hover:text-[#c29a66] font-medium"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-gray-100 hover:text-[#c29a66] font-medium"
            >
              Contact
            </a>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              to={"/signup"}
              className="text-gray-100 hover:text-[#c29a66] font-medium"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-[#fde4ae] hover:text-[#c29a66] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className=" md:hidden hidden bg-[#4b3926] text-center bg-opacity-10 backdrop-blur-lg shadow-2xl rounded-xl"
      >
        <div className="px-2 pt-2 pb-2 space-y-1">
          <a
            href="#home"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#806240]"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#806240]"
          >
            About
          </a>
          <a
            href="#services"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#806240]"
          >
            Sponsers
          </a>
          <a
            href="#team"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#806240]"
          >
            Team
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#806240]"
          >
            Contact
          </a>
          <Link
            to={"/signup"}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#806240]"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
