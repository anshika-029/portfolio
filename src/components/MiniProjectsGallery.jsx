import React from 'react';
import { miniProjects } from '../data/projects';

const MiniProjectsGallery = () => {
  return (
    <section id="mini-projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Mini Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of small projects demonstrating various skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {miniProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden border border-gray-200"
            >
              {/* Project Image */}
              <div className="relative h-40 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                Screenshot
              </div>

              {/* Project Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2 text-sm line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed line-clamp-2">
                  {project.oneLineDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-medium border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-xs font-medium text-center transition-colors"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-3 py-2 rounded text-xs font-medium text-center transition-colors"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniProjectsGallery;
