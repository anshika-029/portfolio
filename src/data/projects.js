// Project data structure with featured projects
export const projects = [
  {
    id: 1,
    slug: 'web-ui',
    title: 'Web UI',
    shortDescription: 'Responsive website with interactive components built using React.js',
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
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML', 'CSS', 'React Router'],
    demoUrl: 'https://your-portfolio-demo-link.com', // Replace with actual link
    githubUrl: 'https://github.com/anshika-029/portfolio', // Replace with GitHub repo
    image: '/projects/portfolio-preview.jpg',
    featured: true
  },
  {
    id: 4,
    slug: 'api-routes',
    title: 'API Routes',
    oneLineDescription: 'Fetch and display post details from a public API using dynamic routes',
    technologies: ['React', 'React Router', 'API', 'CSS3'],
    category: 'mini',
    demoUrl: 'https://react-showcase-hw54.vercel.app/',
    githubUrl: 'https://github.com/anshika-029/react-showcase/tree/main/apiroutes',
    image: '/projects/api-routes-preview.jpg',
    featured: false,
  },
  {
    id: 4,
    slug: 'pagination',
    title: 'Pagination',
    shortDescription: 'Client-side pagination for product listings with responsive design',
    oneLineDescription: 'React app demonstrating responsive pagination controls',
    technologies: ['React', 'CSS3', 'Pagination'],
    category: 'mini',
    demoUrl: 'https://react-showcase-gtvh.vercel.app/',
    githubUrl: 'https://github.com/anshika-029/react-showcase/tree/main/pagination',
    image: '/projects/pagination-preview.jpg',
    featured: false,
  },
  {
    id: 5,
    slug: 'searchbar',
    title: 'Searchbar',
    oneLineDescription: 'React app with live search filtering functionality',
    technologies: ['React', 'CSS3', 'Search'],
    category: 'mini',
    demoUrl: 'https://react-showcase-75ug.vercel.app/',
    githubUrl: 'https://github.com/anshika-029/react-showcase/tree/main/searchbar',
    image: '/projects/searchbar-preview.jpg',
    featured: false,
  },
  {
    id: 6,
    slug: 'filteration',
    title: 'Filteration',
    oneLineDescription: 'React app demonstrating real-time data filtering by category',
    technologies: ['React', 'CSS3', 'Filter'],
    category: 'mini',
    demoUrl: 'https://react-showcase-24ek.vercel.app/',
    githubUrl: 'https://github.com/anshika-029/react-showcase/tree/main/filteration',
    image: '/projects/filteration-preview.jpg',
    featured: false,
  },
  {
    id: 7,
    slug: 'form-handling',
    title: 'Form Handling',
    oneLineDescription: 'Minimal React app showcasing form handling with validation',
    technologies: ['React', 'CSS3', 'Forms'],
    category: 'mini',
    demoUrl: 'https://react-showcase-1qce.vercel.app/',
    githubUrl: 'https://github.com/anshika-029/react-showcase/tree/main/formhandling',
    image: '/projects/form-handling-preview.jpg',
    featured: false,
  },
  {
    id: 8,
    slug: 'todo-app',
    title: 'Todo App',
    oneLineDescription: 'Classic React todo app with light/dark mode support',
    technologies: ['React', 'CSS3', 'Local Storage'],
    category: 'mini',
    demoUrl: 'https://react-showcase-r5xc.vercel.app/',
    githubUrl: 'https://github.com/anshika-029/react-showcase/tree/main/todo',
    image: '/projects/todo-preview.jpg',
    featured: false,
  },
  {
    id: 9,
    slug: 'counter-toggle',
    title: 'Counter Toggle',
    oneLineDescription: 'React counter app demonstrating state management',
    technologies: ['React', 'CSS3'],
    category: 'mini',
    demoUrl: 'https://react-showcase-xi.vercel.app/',
    githubUrl: 'https://github.com/anshika-029/react-showcase/tree/main/countertoggle',
    image: '/projects/counter-toggle-preview.jpg',
    featured: false,
  },
];


// Featured projects for homepage
export const featuredProjects = projects.filter(project => project.featured);

// Mini projects for gallery
export const miniProjects = projects.filter(project => project.category === 'mini');

export default projects;
