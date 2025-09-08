import React from 'react';

const SkillsCompact = () => {
  const skills = [
    { name: 'React', level: 'Advanced', icon: '⚛️', color: 'from-blue-400 to-blue-600', dots: 3, dotColor: 'bg-green-500', badge: 'bg-green-100 text-green-800 border-green-200' },
    { name: 'JavaScript', level: 'Advanced', icon: '🟨', color: 'from-yellow-400 to-yellow-600', dots: 3, dotColor: 'bg-green-500', badge: 'bg-green-100 text-green-800 border-green-200' },
    { name: 'TypeScript', level: 'Intermediate', icon: '🔷', color: 'from-blue-500 to-blue-700', dots: 2, dotColor: 'bg-blue-500', badge: 'bg-blue-100 text-blue-800 border-blue-200' },
    { name: 'Node.js', level: 'Intermediate', icon: '🟢', color: 'from-green-400 to-green-600', dots: 2, dotColor: 'bg-blue-500', badge: 'bg-blue-100 text-blue-800 border-blue-200' },
    { name: 'PostgreSQL', level: 'Basic', icon: '🐘', color: 'from-blue-600 to-blue-800', dots: 1, dotColor: 'bg-orange-500', badge: 'bg-orange-100 text-orange-800 border-orange-200' }
    // ... add rest
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable web applications
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white dark:bg-slate-700 border border-gray-200 dark:border-gray-600 rounded-xl p-4 text-center hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-500 hover:-translate-y-1 transition-all duration-200 group">
              <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`}>
                <span className="text-2xl">{skill.icon}</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{skill.name}</h3>
              <div className="flex justify-center space-x-1 mb-2">
                {Array(3).fill(0).map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i < skill.dots ? skill.dotColor : 'bg-gray-200'}`} />
                ))}
              </div>
              <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium border ${skill.badge}`}>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCompact;
