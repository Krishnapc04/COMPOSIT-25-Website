import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignupForm from "./Pages/SignUpPage";
import LoginForm from "./Pages/LoginPage";
import Preloader from "./Components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && <Preloader />}
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/Login" element={<LoginForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
