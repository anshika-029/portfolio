// Project data structure with featured projects
export const projects = [
  {
    id: 1,
    slug: 'web-ui',
    title: 'Web UI',
    shortDescription: 'Responsive website with interactive components built using React.js',
    fullDescription: 'Built a responsive static website using React.js, improving navigation speed and usability across devices and screen sizes. Developed 6 interactive components, enhancing user engagement and site interactivity. Applied component-based architecture and responsive design principles, delivering a polished, user-friendly interface.',
    technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Media Queries'],
    demoUrl: 'https://biznivate-xtsx.vercel.app/',
    githubUrl: 'https://github.com/anshika-029/Biznivate', 
    image: '/projects/web-ui-preview.jpg', // Replace with project screenshot path
    featured: true
  },
  {
    id: 2,
    slug: 'trimurl',
    title: 'TrimURL',
    shortDescription: 'Full-stack URL shortener with Next.js, Node.js, Express, and MongoDB',
    fullDescription: 'Built a full-stack URL shortener enabling users to create and manage 100+ links in real-time. Implemented REST APIs and optimized performance for cross-device responsiveness and accessibility. Deployed on Vercel with Git version control, gaining experience in full-stack development and API integration.',
    technologies: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'REST API', 'HTML', 'Tailwind CSS'],
    demoUrl: 'https://trim-url-wy4d.vercel.app/',
    githubUrl: 'https://github.com/anshika-029/TrimURL',
    image: '/projects/trimurl-preview.jpg',
    featured: true
  },
  {
    id: 3,
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    shortDescription: 'Responsive personal portfolio using React.js and Tailwind CSS',
    fullDescription: 'Built a responsive personal portfolio showcasing projects, skills, and contact information. Applied component-based architecture, routing, and responsive design principles to deliver a clean, user-friendly interface. Implemented featured projects and mini-projects gallery providing live demos and GitHub links for all applications.',
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML', 'CSS', 'React Router'],
    demoUrl: 'https://your-portfolio-demo-link.com', // Replace with actual link
    githubUrl: 'https://github.com/anshika-029/portfolio', // Replace with GitHub repo
    image: '/projects/portfolio-preview.jpg',
    featured: true
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
