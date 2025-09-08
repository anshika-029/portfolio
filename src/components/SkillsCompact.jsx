import React from 'react';

const SkillsCompact = () => {
  const skillSections = [
    {
      category: "Frontend",
      skills: [
        { name: 'React', level: 'Advanced', icon: '⚛️', color: 'from-blue-400 to-blue-600', dots: 3, dotColor: 'bg-green-500', badge: 'bg-green-100 text-green-800 border-green-200' },
        { name: 'Next.js', level: 'Intermediate', icon: '🖥️', color: 'from-gray-400 to-gray-600', dots: 2, dotColor: 'bg-blue-500', badge: 'bg-blue-100 text-blue-800 border-blue-200' },
        { name: 'JavaScript', level: 'Advanced', icon: '🟨', color: 'from-yellow-400 to-yellow-600', dots: 3, dotColor: 'bg-green-500', badge: 'bg-green-100 text-green-800 border-green-200' },
        { name: 'HTML5', level: 'Advanced', icon: '🌐', color: 'from-orange-400 to-orange-600', dots: 3, dotColor: 'bg-green-500', badge: 'bg-green-100 text-green-800 border-green-200' },
        { name: 'CSS3', level: 'Advanced', icon: '🎨', color: 'from-blue-300 to-blue-500', dots: 3, dotColor: 'bg-green-500', badge: 'bg-green-100 text-green-800 border-green-200' },
        { name: 'Tailwind CSS', level: 'Advanced', icon: '💨', color: 'from-teal-400 to-teal-600', dots: 3, dotColor: 'bg-green-500', badge: 'bg-green-100 text-green-800 border-green-200' },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: 'Node.js', level: 'Intermediate', icon: '🟢', color: 'from-green-400 to-green-600', dots: 2, dotColor: 'bg-blue-500', badge: 'bg-blue-100 text-blue-800 border-blue-200' },
        { name: 'Express.js', level: 'Intermediate', icon: '⚡', color: 'from-gray-400 to-gray-600', dots: 2, dotColor: 'bg-blue-500', badge: 'bg-blue-100 text-blue-800 border-blue-200' },
        { name: 'REST APIs', level: 'Intermediate', icon: '🔗', color: 'from-purple-400 to-purple-600', dots: 2, dotColor: 'bg-blue-500', badge: 'bg-blue-100 text-blue-800 border-blue-200' },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: 'MongoDB', level: 'Intermediate', icon: '🍃', color: 'from-green-500 to-green-700', dots: 2, dotColor: 'bg-blue-500', badge: 'bg-blue-100 text-blue-800 border-blue-200' }
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: 'Git', level: 'Intermediate', icon: '📦', color: 'from-orange-400 to-orange-600', dots: 2, dotColor: 'bg-blue-500', badge: 'bg-blue-100 text-blue-800 border-blue-200' },
        { name: 'GitHub', level: 'Intermediate', icon: '🐙', color: 'from-orange-400 to-orange-600', dots: 2, dotColor: 'bg-blue-500', badge: 'bg-blue-100 text-blue-800 border-blue-200' },
        { name: 'Postman', level: 'Intermediate', icon: '📬', color: 'from-orange-400 to-orange-600', dots: 2, dotColor: 'bg-blue-500', badge: 'bg-blue-100 text-blue-800 border-blue-200' },
        { name: 'Vercel', level: 'Intermediate', icon: '⚡', color: 'from-purple-400 to-purple-600', dots: 2, dotColor: 'bg-blue-500', badge: 'bg-blue-100 text-blue-800 border-blue-200' },
      ],
    },
  ];

  return (
    <section id='skills' className="py-16 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-3 sm:px-5 lg:px-7">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable web applications
          </p>
        </div>

        {skillSections.map((section) => (
          <div key={section.category} className="mb-10">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">{section.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {section.skills.map((skill) => (
                <div key={skill.name} className="bg-white dark:bg-slate-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-center hover:shadow-md hover:border-gray-300 dark:hover:border-gray-500 hover:-translate-y-0.5 transition-all duration-200 group">
                  <div className={`w-10 h-10 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-transform duration-200`}>
                    <span className="text-xl">{skill.icon}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-xs mb-1">{skill.name}</h4>
                  <div className="flex justify-center space-x-1 mb-1">
                    {Array(3).fill(0).map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i < skill.dots ? skill.dotColor : 'bg-gray-200'}`} />
                    ))}
                  </div>
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium border ${skill.badge}`}>{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsCompact;
