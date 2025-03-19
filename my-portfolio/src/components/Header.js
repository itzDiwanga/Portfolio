import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <a href="#bio">Bio</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
