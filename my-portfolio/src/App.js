import React from "react";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Header />
      <Bio />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
