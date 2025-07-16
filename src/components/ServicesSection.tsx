
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Trash2, Construction, Droplets, TreePine, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      icon: Lightbulb,
      title: 'Street Lighting',
      description: 'Report broken or malfunctioning street lights to improve safety',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Trash2,
      title: 'Waste Management',
      description: 'Issues with garbage collection, overflowing bins, and littering',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Construction,
      title: 'Road Infrastructure',
      description: 'Potholes, damaged pavements, and road maintenance issues',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Droplets,
      title: 'Water & Drainage',
      description: 'Water leaks, drainage problems, and flooding concerns',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: TreePine,
      title: 'Parks & Green Spaces',
      description: 'Maintenance of parks, trees, and public green areas',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Wrench,
      title: 'Public Utilities',
      description: 'General maintenance and repair of public infrastructure',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What You Can <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Report</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            From infrastructure issues to environmental concerns, we help you report and track 
            a wide range of city problems for faster resolution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
              }}
              className="group relative p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors">
                {service.description}
              </p>

              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link to="/complaint">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              Start Reporting Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
