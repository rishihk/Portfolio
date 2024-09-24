// src/components/Portfolio.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Navigation from './Navigation';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import EducationSection from './EducationSection';
import LeadershipSection from './LeadershipSection';
import ParticleBackground from './ParticleBackground';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'education':
        return <EducationSection />;
      case 'leadership':
        return <LeadershipSection />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Particle Background */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>
  
      {/* Main Content */}
      <div className="relative z-10 flex flex-col flex-grow bg-transparent">
        <Header />
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-grow">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            {renderSection()}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;