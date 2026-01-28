import React, { useState } from "react";
import "../index.css";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const linkClass = (name) =>
    `nav-link text-lg font-semibold cursor-pointer ${
      active === name ? "active" : ""
    }`;

  return (
    <div className="header fixed top-0 left-0 w-full h-20 flex items-center justify-between bg-zinc-950 text-white px-16 z-120">
      <a href="#home" className="text-2xl font-bold cursor-default">
        Portfolio
      </a>

      <nav className="navbar flex gap-5 mr-6">
        <a href="#home" className={linkClass("home")} onClick={() => setActive("home")}>Home</a>
        <a href="#about" className={linkClass("about")} onClick={() => setActive("about")}>About</a>
        <a href="#project" className={linkClass("project")} onClick={() => setActive("project")}>Projects</a>
        <a href="#skills" className={linkClass("skills")} onClick={() => setActive("skills")}>Skills</a>
        <a href="#experience" className={linkClass("experience")} onClick={() => setActive("experience")}>Experience</a>
        <a href="#education" className={linkClass("education")} onClick={() => setActive("education")}>Education</a>
        <a href="#contact" className={linkClass("contact")} onClick={() => setActive("contact")}>Contact</a>
      </nav>
    </div>
  );
};

export default Navbar;
