import React from "react";
import "@fontsource/poppins";

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4">
      <h1 className="text-6xl sm:text-5xl md:text-8xl font-bold text-gold uppercase text-center relative">
        <div className="sp-container">
          <span>c</span>
          <span>o</span>
          <span>m</span>
          <span>i</span>
          <span>n</span>
          <span>g </span>
          <span>s</span>
          <span>o</span>
          <span>o</span>
          <span>n</span>
        </div>
      </h1>

      {/* Add inline style animations */}
      <style>
        {`


.sp-container span {
            animation: scaleFade 6s ease-in-out infinite,flicker 1.5s infinite alternate;
            transform-origin: center;
            opacity: 0;
            transform: scale(0);
          }

          .sp-container span:nth-child(1) {
            animation-delay: 0.1s;
          }
          .sp-container span:nth-child(2) {
            animation-delay: 0.3s;
          }
          .sp-container span:nth-child(3) {
            animation-delay: 0.5s;
          }
          .sp-container span:nth-child(4) {
            animation-delay: 0.7s;
          }
          .sp-container span:nth-child(5) {
            animation-delay: 0.9s;
          }
          .sp-container span:nth-child(6) {
            animation-delay: 1.1s;
          }
          .sp-container span:nth-child(7) {
            animation-delay: 1.3s;
          }
          .sp-container span:nth-child(8) {
            animation-delay: 1.5s;
          }
          .sp-container span:nth-child(9) {
            animation-delay: 1.7s;
          }
          .sp-container span:nth-child(10) {
            animation-delay: 1.9s;
          }



      

          @keyframes flicker {
            0% { text-shadow: 0 0 5px #a95f32, 0 0 20px #a95f32, 0 0 30px #a95f32; }
            50% { text-shadow: 0 0 20px #a95f32, 0 0 30px #a95f32, 0 0 40px #a95f32; }
            100% { text-shadow: 0 0 15px #a95f32, 0 0 25px #a95f32, 0 0 35px #a95f32; }
          }
          @keyframes blurFadeIn {
            0% {
              opacity: 0;
              text-shadow: 0px 0px 40px #fff;
              -webkit-transform: scale(1.3);
            }
            50% {
              opacity: 0.5;
              text-shadow: 0px 0px 10px #fff;
              -webkit-transform: scale(1.1);
            }
            100% {
              opacity: 1;
              text-shadow: 0px 0px 1px #fff;
              -webkit-transform: scale(1);
            }
          }
      
            @keyframes fadeInOut {
            0%, 80% {
              opacity: 0;
              transform: translateY(10px);
            }
            20%, 60% {
              opacity: 1;
              transform: translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateY(-10px);
            }
          }
             @keyframes scaleFade {
            0% {
              opacity: 0;
              transform: scale(0.5) translateZ(-20px);
            }
            30% {
              opacity: 1;
              transform: scale(1) translateZ(0);
            }
            70% {
              opacity: 1;
              transform: scale(1) translateZ(0);
            }
            100% {
              opacity: 0;
              transform: scale(0.5) translateZ(-20px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ComingSoon;
