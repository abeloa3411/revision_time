import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cats from "./components/cats";
import Exams from "./components/exams";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Signup from "./components/signup";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/cats" element={<Cats />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
