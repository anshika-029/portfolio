import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          Your Name
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>

          {/* Theme + Resume */}
          {/* <ThemeToggle /> */}
          <a
            href="https://drive.google.com/your-resume-link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
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
          <a href="#about" className="mobile-link" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#skills" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
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
