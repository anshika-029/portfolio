import React from "react";

const About = () => {
  // 👉 Skills list (easy to add/remove)
  const skills = [
    "Modern React applications with hooks and context",
    "Responsive web designs using Tailwind CSS",
    "RESTful APIs with Node.js and Express",
    "Database management with MongoDB and PostgreSQL",
    "Version control and collaboration with Git",
    "Deployment and hosting on Vercel, Netlify, and AWS",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Section Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        {/* --- Content Grid (2 columns on large screens) --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* --- Left Column: Bio --- */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Who I Am
            </h3>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                {/* 👉 Change this text to your own story */}
                I’m a full-stack developer passionate about creating responsive, interactive web applications. During my internships, I’ve built projects using React, Next.js, Tailwind CSS, Node.js, and MongoDB, focusing on clean design, smooth user experience, and real-time data integration.
              </p>
              <p>
                I enjoy turning complex problems into practical, efficient solutions that users love.
              </p>
            </div>
          </div>

          {/* --- Right Column: Skills --- */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              What I Build
            </h3>
            <ul className="space-y-3">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  {/* Checkmark Icon */}
                  <svg
                    className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Optional: Quick Stats (experience, projects, techs) --- */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">9+</div>
            <div className="text-gray-600 dark:text-gray-400">
              Months Experience
            </div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">
              Technologies Mastered
            </div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
            <div className="text-gray-600 dark:text-gray-400">
              Internships Completed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
