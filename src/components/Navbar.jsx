import React, { useState } from "react";
import "../index.css";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (name) =>
    `nav-link text-lg font-semibold cursor-pointer transition-colors ${
      active === name ? "active" : ""
    }`;

  const handleClick = (name) => {
    setActive(name);
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full h-20 bg-zinc-950 z-150">
        <div className="h-full flex items-center justify-between px-6 md:px-16 text-white">
          
          <div className="logo flex gap-4 items-center">
            {/* HAMBURGER */}
            <button
              className="md:hidden text-white hover:text-emerald-300 text-3xl"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
            {/* LOGO */}
            <a href="#home" className="text-2xl font-extrabold text-emerald-300">
              Portfolio
            </a>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6">
            {["home","about","project","skills","experience","education","contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={linkClass(item)}
                onClick={() => setActive(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* DRAWER */}
        <div
          className={`absolute left-0 top-0 h-full w-64 bg-zinc-900 p-6
          transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* CLOSE BTN */}
          <button
            className="text-white text-2xl mb-6"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          {/* LINKS */}
          <nav className="flex flex-col gap-4">
            {["home","about","project","skills","experience","education","contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`nav-link text-lg font-semibold ${
                  active === item ? "active" : ""
                }`}
                onClick={() => handleClick(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
