import React from "react";
import logo from "../Assets/image/Composit_logo.png";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full bg-[#4b3926]/50 backdrop-blur-md bg-opacity-50 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Logo and Description */}
        <div className="text-center md:text-left mb-6 md:mb-0 w-full md:w-1/3">
          <div className="flex items-center justify-center md:justify-start mb-3">
            <img
              src={logo} // Add the logo path here
              alt="Composit Logo"
              className="w-20 h-20"
            />
            <h2 className="text-xl font-bold ml-2">COMPOSIT</h2>
          </div>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            itaque sapiente possimus odit fugit accusantium, commodi aliquid
            illum voluptatibus qui odio beatae magnam dolorum cupiditate sint
            atque quibusdam dolore vero. Hic nisi quis porro aperiam officiis
            unde illum obcaecati architecto, beatae provident expedita
            temporibus, quia placeat sequi pariatur at sunt?
          </p>
        </div>

        {/* Center Section - Social Media */}
        <div className="text-center mb-6 md:mb-0 w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-[#a95f32]">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="hover:text-[#a95f32]">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="hover:text-[#a95f32]">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
            <a href="#" className="hover:text-[#a95f32]">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Right Section - Contact */}
        <div className="text-center md:text-right w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <div className="text-sm">
            <p>
              <strong>Lorem, ipsum.</strong> <br />
              +91 1235644444 <br />
              tabcde@gmail.com
            </p>
            <p className="mt-4">
              <strong>Lorem, ipsum.</strong> <br />
              5555555555 <br />
              akbdkjfb@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center text-sm bg-[#201304f1] py-4 text-gray-300">
        &copy; {new Date().getFullYear()} COMPOSIT, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
