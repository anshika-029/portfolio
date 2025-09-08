import React from "react";

const Hero = () => {
  // Function: scroll smoothly to the "projects" section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="bg-gradient-to-br from-gray-50 to-gray-100 
                 dark:from-slate-900 dark:to-slate-800 
                 py-20 lg:py-32 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* --- Name / Intro --- */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl 
                       font-bold text-gray-900 dark:text-white mb-6"
          >
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {/* 👉 Change to your name */}
              Your Name
            </span>
          </h1>

          {/* --- Short tagline --- */}
          <p
            className="text-xl sm:text-2xl text-gray-600 
                       dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            {/* 👉 Change this to your tagline */}
            Full-Stack Developer crafting modern web experiences with React and
            Node.js
          </p>

          {/* --- Call to Action Buttons --- */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Button 1: Scroll to Projects */}
            <button
              onClick={scrollToProjects}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 
                         dark:bg-blue-500 dark:hover:bg-blue-600 
                         text-white px-8 py-4 rounded-lg text-lg font-medium 
                         transition-all duration-200 transform hover:scale-105 
                         focus:outline-none focus:ring-4 
                         focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              View Projects
            </button>

            {/* Button 2: Resume (opens Google Drive link in new tab) */}
            <a
              href="https://drive.google.com/your-resume-link" // 👉 Replace with your actual drive link
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 
                         dark:bg-gray-700 dark:hover:bg-gray-600 
                         text-gray-900 dark:text-white 
                         px-8 py-4 rounded-lg text-lg font-medium 
                         transition-all duration-200 transform hover:scale-105"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
