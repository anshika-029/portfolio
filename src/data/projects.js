// Project data structure with featured projects
export const projects = [
  {
    id: 1,
    slug: 'trimurl',
    title: 'TrimURL',
    shortDescription: 'URL shortener with user history and analytics (React + Node/Express + MongoDB)',
    fullDescription: 'A comprehensive URL shortening service that transforms long URLs into clean, shareable links while providing detailed analytics and user management. Designed to compete with services like bit.ly with enhanced performance and user experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Chart.js'],
    category: 'featured',
    demoUrl: 'https://trimurl-demo.vercel.app',
    githubUrl: 'https://github.com/yourusername/trimurl',
    image: '/projects/trimurl-preview.jpg',
    featured: true,
    highlights: [
      '🎯 Problem: Long URLs are unwieldy to share and impossible to track',
      '⚡ Solution: Built full-stack service with instant shortening and real-time analytics',
      '🛠️ Implementation: RESTful API with React dashboard and MongoDB for data persistence'
    ],
    metrics: {
      users: '500+',
      urlsShortened: '10K+',
      performance: '99.9% uptime'
    }
  },
  {
    id: 2,
    slug: 'taskflow-dashboard',
    title: 'TaskFlow',
    shortDescription: 'Project management dashboard with drag-and-drop boards and real-time collaboration (React + TypeScript + Socket.io)',
    fullDescription: 'An intuitive project management dashboard featuring drag-and-drop Kanban boards, real-time team collaboration, and comprehensive project tracking. Built with modern React patterns and designed for seamless team workflows.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Socket.io', 'Node.js', 'PostgreSQL'],
    category: 'featured',
    demoUrl: 'https://taskflow-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/taskflow-dashboard',
    image: '/projects/taskflow-preview.jpg',
    featured: true,
    highlights: [
      '🎯 Problem: Teams struggle with fragmented project management tools',
      '⚡ Solution: Created unified dashboard with drag-and-drop boards and live updates',
      '🛠️ Implementation: TypeScript for type safety, Socket.io for real-time features'
    ],
    metrics: {
      tasks: '1000+',
      teams: '50+',
      satisfaction: '4.8/5 rating'
    }
  },
  {
    id: 3,
    slug: 'weather-app',
    title: 'Weather Forecast App',
    shortDescription: 'Real-time weather tracking with location detection and 7-day forecasts',
    oneLineDescription: 'Get accurate weather forecasts with automatic location detection',
    techTag: 'React',
    fullDescription: 'A responsive weather application providing real-time weather data and 7-day forecasts with location-based services.',
    technologies: ['React', 'Weather API', 'CSS3', 'Geolocation'],
    filterTags: ['React', 'API', 'CSS'],
    category: 'mini',
    demoUrl: 'https://weather-app-demo.vercel.app',
    githubUrl: 'https://github.com/yourusername/weather-app',
    image: '/projects/weather-preview.jpg',
    featured: false,
    highlights: [
      'Real-time weather data integration',
      'Location-based weather detection', 
      'Responsive design for all devices'
    ]
  },
  {
    id: 4,
    slug: 'expense-tracker',
    title: 'Personal Expense Tracker',
    shortDescription: 'Track expenses and manage budgets with interactive charts',
    oneLineDescription: 'Manage personal finances with visual budget tracking and expense analytics',
    techTag: 'React',
    fullDescription: 'A personal finance application for tracking expenses and managing budgets with interactive charts and analytics.',
    technologies: ['React', 'Chart.js', 'Local Storage', 'CSS3'],
    filterTags: ['React', 'CSS', 'Charts'],
    category: 'mini',
    demoUrl: 'https://expense-tracker-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/expense-tracker',
    image: '/projects/expense-preview.jpg',
    featured: false,
    highlights: [
      'Interactive expense visualization',
      'Budget tracking and alerts',
      'Data export functionality'
    ]
  },
  {
    id: 5,
    slug: 'recipe-finder',
    title: 'Recipe Finder',
    shortDescription: 'Find recipes based on your available ingredients',
    oneLineDescription: 'Discover delicious recipes using ingredients you already have at home',
    techTag: 'API',
    fullDescription: 'A recipe discovery app that helps users find recipes based on available ingredients with nutritional information.',
    technologies: ['React', 'Recipe API', 'CSS3', 'React Router'],
    filterTags: ['React', 'API', 'CSS'],
    category: 'mini',
    demoUrl: 'https://recipe-finder-demo.vercel.app',
    githubUrl: 'https://github.com/yourusername/recipe-finder',
    image: '/projects/recipe-preview.jpg',
    featured: false,
    highlights: [
      'Ingredient-based recipe search',
      'Nutritional information display',
      'Favorite recipes management'
    ]
  },
  {
    id: 6,
    slug: 'todo-app',
    title: 'Smart Todo App',
    shortDescription: 'Organize tasks with smart priority and deadline features',
    oneLineDescription: 'Advanced task management with drag-and-drop and priority sorting',
    techTag: 'TypeScript',
    fullDescription: 'A feature-rich todo application with drag-and-drop functionality, priority levels, and deadline management.',
    technologies: ['React', 'TypeScript', 'Local Storage', 'CSS3'],
    filterTags: ['React', 'TypeScript', 'CSS'],
    category: 'mini',
    demoUrl: 'https://smart-todo-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/smart-todo',
    image: '/projects/todo-preview.jpg',
    featured: false,
    highlights: [
      'Drag and drop task organization',
      'Priority and deadline management',
      'Progress tracking dashboard'
    ]
  },
  {
    id: 7,
    slug: 'movie-search',
    title: 'Movie Search Engine',
    shortDescription: 'Search and explore movies with detailed information',
    oneLineDescription: 'Discover movies with ratings, trailers, and cast information',
    techTag: 'API',
    fullDescription: 'A movie discovery application using TMDB API to search, filter, and display detailed movie information.',
    technologies: ['React', 'TMDB API', 'Tailwind CSS', 'React Router'],
    filterTags: ['React', 'API', 'Tailwind'],
    category: 'mini',
    demoUrl: 'https://movie-search-demo.vercel.app',
    githubUrl: 'https://github.com/yourusername/movie-search',
    image: '/projects/movie-preview.jpg',
    featured: false,
    highlights: [
      'TMDB API integration',
      'Advanced search and filtering',
      'Responsive movie grid layout'
    ]
  },
  {
    id: 8,
    slug: 'color-palette',
    title: 'Color Palette Generator',
    shortDescription: 'Create and save stunning color palettes for design',
    oneLineDescription: 'Generate beautiful color schemes with harmony rules and export options',
    techTag: 'CSS',
    fullDescription: 'A design tool for generating, customizing, and exporting color palettes with various harmony rules.',
    technologies: ['React', 'Color API', 'CSS3', 'Canvas API'],
    filterTags: ['React', 'CSS', 'API'],
    category: 'mini',
    demoUrl: 'https://color-palette-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/color-palette',
    image: '/projects/color-preview.jpg',
    featured: false,
    highlights: [
      'Multiple color harmony algorithms',
      'Export palettes in various formats',
      'Real-time color preview'
    ]
  },
  {
    id: 9,
    slug: 'markdown-editor',
    title: 'Live Markdown Editor',
    shortDescription: 'Write and preview markdown with live synchronization',
    oneLineDescription: 'Real-time markdown editor with syntax highlighting and export features',
    techTag: 'React',
    fullDescription: 'A split-pane markdown editor with live preview, syntax highlighting, and export functionality.',
    technologies: ['React', 'Marked.js', 'CSS3', 'CodeMirror'],
    filterTags: ['React', 'CSS', 'Tools'],
    category: 'mini',
    demoUrl: 'https://markdown-editor-demo.vercel.app',
    githubUrl: 'https://github.com/yourusername/markdown-editor',
    image: '/projects/markdown-preview.jpg',
    featured: false,
    highlights: [
      'Live markdown preview',
      'Syntax highlighting',
      'Export to HTML/PDF'
    ]
  },
  {
    id: 10,
    slug: 'quiz-app',
    title: 'Interactive Quiz App',
    shortDescription: 'Challenge yourself with trivia across multiple categories',
    oneLineDescription: 'Timed trivia quiz with scoring, categories, and leaderboard tracking',
    techTag: 'API',
    fullDescription: 'An engaging quiz application with multiple categories, timed questions, and score tracking.',
    technologies: ['React', 'Trivia API', 'CSS3', 'Local Storage'],
    filterTags: ['React', 'API', 'CSS'],
    category: 'mini',
    demoUrl: 'https://quiz-app-demo.netlify.app',
    githubUrl: 'https://github.com/yourusername/quiz-app',
    image: '/projects/quiz-preview.jpg',
    featured: false,
    highlights: [
      'Multiple quiz categories',
      'Timed questions and scoring',
      'Progress tracking and leaderboard'
    ]
  }
];

// Featured projects for homepage
export const featuredProjects = projects.filter(project => project.featured);

// Mini projects for gallery
export const miniProjects = projects.filter(project => project.category === 'mini');

export default projects;
