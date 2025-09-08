import React, { useState } from "react";
import { href, Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // close mobile menu if open
  };

  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">

        {/* Logo */}
        <Link to="/"
          className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer"
          onClick={() => scrollToSection("top")}
        >
          Anshika Sharma
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="nav-link" onClick={() => scrollToSection("about")}>About</button>
          <button className="nav-link" onClick={() => scrollToSection("skills")}>Skills</button>
          <button className="nav-link" onClick={() => scrollToSection("projects")}>Projects</button>
          <button className="nav-link" onClick={() => scrollToSection("contact")}>Contact</button>

          {/* Resume */}
          <a 
            href="https://drive.google.com/your-resume-link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-blue-950 p-2 border-2 rounded-2xl hover:bg-blue-700"
          >
            View Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300 p-2"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 px-4 py-4 space-y-3">
          <button className="mobile-link w-full text-left" onClick={() => scrollToSection("about")}>About</button>
          <button className="mobile-link w-full text-left" onClick={() => scrollToSection("skills")}>Skills</button>
          <button className="mobile-link w-full text-left" onClick={() => scrollToSection("projects")}>Projects</button>
          <button className="mobile-link w-full text-left" onClick={() => scrollToSection("contact")}>Contact</button>
          <a
            href="https://drive.google.com/your-resume-link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary block text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            View Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
