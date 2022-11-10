import React from "react";
import Courses from "../components/courses";
import Hero from "../components/hero";
import Info from "../components/info";
import Navbar from "../components/Navbar";
import Newsletter from "../components/newsletter";
import Sidebar from "../components/sidebar";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Info />
      <Courses />
      <Newsletter />
    </>
  );
};

export default Landing;
