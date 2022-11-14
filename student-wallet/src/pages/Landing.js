import React from "react";
import BlogSection from "../components/blog";
import Courses from "../components/courses";
import Feedback from "../components/feedback";
import Find from "../components/find";
import Footer from "../components/footer";
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
      <Find />
      <Feedback />
      <BlogSection />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Landing;
