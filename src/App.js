import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Contact from "./components/contact/Contact";
import Project from "./components/Project/Project";
import Resume from "./components/resume/Resume";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
    <Navbar />
  <div className="max-w-screen-xl mx-auto">
    <Banner />
    <Features />
    <Project />
    <Resume />
    <Contact />
<Footer />
        </div>
    </div>
  );
}

export default App;
