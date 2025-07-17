
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: '10,000+', label: 'Issues Resolved', suffix: '' },
    { number: '25,000+', label: 'Active Citizens', suffix: '' },
    { number: '150+', label: 'Partner Cities', suffix: '' },
    { number: '98%', label: 'Satisfaction Rate', suffix: '' }
  ];

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Impact by <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Numbers</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Real results from real communities. See how FixMyCity is making a difference 
            in cities around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-white/80 text-lg font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-white/20"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Join the Movement</h3>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              Be part of a growing community that's actively shaping the future of urban living. 
              Every report contributes to building smarter, more responsive cities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
