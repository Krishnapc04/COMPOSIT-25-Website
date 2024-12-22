import React from "react";

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#222] z-50">
      <div className="relative w-[150px] h-[150px] mx-auto my-0 top-1/2 translate-y-[-50%] rounded-full border-4 border-transparent border-t-[#9370DB] animate-spin">
        <div className="absolute top-[5px] left-[5px] right-[5px] bottom-[5px] rounded-full border-4 border-transparent border-t-[#BA55D3] animate-spin-slow"></div>
        <div className="absolute top-[15px] left-[15px] right-[15px] bottom-[15px] rounded-full border-4 border-transparent border-t-[#FF00FF] animate-spin-fast"></div>
      </div>
    </div>
  );
};

export default Preloader;
