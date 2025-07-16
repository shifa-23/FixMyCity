
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import ParticleBackground from '../components/ParticleBackground';

const HomePage = () => {
  return (
    <div className="relative overflow-hidden">
      <ParticleBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
      </motion.div>
    </div>
  );
};

export default HomePage;
