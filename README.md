# Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a clean design with sections for showcasing projects, skills, and professional information.

## ✨ Features

### Core Sections
- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **About Section** - Personal bio, skills overview, and key metrics
- **Skills Section** - Technology stack with proficiency indicators
- **Featured Projects** - Detailed showcase of main projects with metrics
- **Mini Projects Gallery** - Filterable grid of smaller projects
- **Contact Section** - Working contact form with EmailJS integration
- **Resume Download** - Direct PDF download functionality

### Interactive Features
- **Responsive Design** - Mobile-first approach with clean breakpoints
- **Project Filtering** - Search and filter mini projects by technology
- **Smooth Navigation** - Sticky header with scroll-to-section links
- **Project Detail Pages** - Individual pages for each project with routing
- **Contact Form** - Functional form with validation and status feedback
- **Loading States** - Smooth UX with loading indicators

### Technical Highlights
- **React Router** - Client-side routing for project detail pages
- **Tailwind CSS** - Utility-first styling with custom components
- **EmailJS Integration** - Contact form without backend requirements
- **Performance Optimized** - Efficient rendering with React hooks
- **Accessibility Ready** - Semantic HTML and ARIA attributes

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5174`

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── vite.svg
│   └── Resume.pdf          # Your resume file
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Footer.jsx      # Site footer
│   │   ├── Hero.jsx        # Landing section
│   │   ├── About.jsx       # About/bio section
│   │   ├── SkillsCompact.jsx # Skills display
│   │   ├── FeaturedProjects.jsx # Main projects
│   │   ├── MiniProjectsGallery.jsx # Project grid
│   │   ├── Contact.jsx     # Contact form
│   │   └── ResumeButton.jsx # Resume download
│   ├── pages/
│   │   ├── Home.jsx        # Main landing page
│   │   ├── ProjectPage.jsx # Individual project pages
│   │   └── NotFound.jsx    # 404 error page
│   ├── data/
│   │   └── projects.js     # Project data
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Customization

### 1. Personal Information
Update the following files with your information:

**Contact Details** (`src/components/Contact.jsx`):
```javascript
// Update email, LinkedIn, and GitHub links
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a>
<a href="https://github.com/yourusername">github.com/yourusername</a>
```

**Header** (`src/components/Header.jsx`):
```javascript
// Update your name
<Link to="/" className="text-xl font-bold text-gray-900">
  Your Name
</Link>
```

### 2. Project Data
Edit `src/data/projects.js` to add your projects:

```javascript
export const featuredProjects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Brief description of your project...",
    technologies: ["React", "Node.js", "MongoDB"],
    // ... more fields
  }
];
```

### 3. Skills Section
Update `src/components/SkillsCompact.jsx`:

```javascript
const skills = [
  { name: "Your Technology", level: "Advanced", icon: "🚀" },
  // ... add your skills
];
```

### 4. About Section
Modify `src/components/About.jsx` with your bio and experience.

### 5. Resume
Replace `public/Resume.pdf` with your actual resume file.

## 📧 Email Setup (EmailJS)

The contact form uses EmailJS for sending messages. Follow these steps:

1. **Create EmailJS Account**: Sign up at [emailjs.com](https://emailjs.com)

2. **Setup Email Service**: Configure your email provider

3. **Create Template**: Set up email template with form variables

4. **Update Credentials**: Replace in `src/components/Contact.jsx`:
   ```javascript
   const result = await emailjs.sendForm(
     'YOUR_SERVICE_ID',    // Your EmailJS service ID
     'YOUR_TEMPLATE_ID',   // Your EmailJS template ID
     form.current,
     'YOUR_PUBLIC_KEY'     // Your EmailJS public key
   );
   ```

See `EMAILJS_SETUP.md` for detailed instructions.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

All components adapt seamlessly across devices.

## 🔧 Build & Deployment

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Deployment Options
- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag and drop `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **AWS S3**: Upload `dist` folder to S3 bucket

## 🎯 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: Optimized with Vite and tree-shaking
- **Loading Speed**: Fast initial load with code splitting
- **Images**: Optimized assets and lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Demo**: [your-portfolio-url.com]
- **GitHub**: [github.com/yourusername/portfolio]
- **LinkedIn**: [linkedin.com/in/yourprofile]

---

Built with React, Vite, and Tailwind CSS+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
