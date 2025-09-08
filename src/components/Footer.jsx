import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700 py-6 transition-colors mt-12">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Anshika Sharma
        </h3>

        {/* Social Links with Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0 text-2xl">
          <a
            href="https://github.com/anshika-029"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anshika-sharma-5718832a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:anshi369sharma@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
