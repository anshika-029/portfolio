import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import SkillsCompact from '../components/SkillsCompact';
import FeaturedProjects from '../components/FeaturedProjects';
import MiniProjectsGallery from '../components/MiniProjectsGallery';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <SkillsCompact />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Mini Projects Gallery */}
      <MiniProjectsGallery />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Home;
