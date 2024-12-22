import React from "react";
import Navbar from "../Components/Navbar";
import ComingSoon from "../Components/ComingSoon";
import Footer from "../Components/Footer";
import TeamCanvas from "../Components/TeamCanvas";

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div>
        <TeamCanvas />
        <div className="absolute inset-0 flex justify-center items-center">
          <ComingSoon />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
