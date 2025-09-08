import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 'Advanced', category: 'Frontend' },
    { name: 'JavaScript', level: 'Advanced', category: 'Frontend' },
    { name: 'TypeScript', level: 'Intermediate', category: 'Frontend' },
    { name: 'Node.js', level: 'Intermediate', category: 'Backend' },
    { name: 'Express.js', level: 'Intermediate', category: 'Backend' },
    { name: 'MongoDB', level: 'Intermediate', category: 'Database' },
    { name: 'PostgreSQL', level: 'Basic', category: 'Database' },
    { name: 'HTML5', level: 'Advanced', category: 'Frontend' },
    { name: 'CSS3', level: 'Advanced', category: 'Frontend' },
    { name: 'Tailwind CSS', level: 'Advanced', category: 'Frontend' },
    { name: 'Git', level: 'Advanced', category: 'Tools' },
    { name: 'AWS', level: 'Basic', category: 'Cloud' },
  ];

  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            {/* Placeholder circle icon for simplicity */}
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
              <span className="text-lg font-semibold">{skill.name[0]}</span>
            </div>
            <h3 className="font-medium">{skill.name}</h3>
            <p className="text-sm text-gray-500">{skill.level}</p>
            <p className="text-xs text-gray-400">{skill.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
