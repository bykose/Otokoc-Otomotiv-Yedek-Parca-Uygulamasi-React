import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./pages/auth/SignUp/index";
import SignIn from "./pages/auth/SignIn/index";
import "./App.css";
import Home from "./pages/home/index";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="kutu">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<SignUp />} />
          <Route path="login" element={<SignIn />} />
        </Routes>
      </div>
    </div>
  );
}


function About() {
  return (
    <>
    </>
  );
}
export default App;
