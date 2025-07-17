
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Heart, Zap, Globe } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">FixMyCity</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing how citizens connect with their communities. Our platform bridges 
            the gap between residents and local authorities, creating smarter, more responsive cities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                To empower every citizen with the tools they need to actively participate in building 
                better communities. We believe that when people have a voice, cities become more livable, 
                sustainable, and inclusive for everyone.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Target, title: 'Precision', desc: 'Accurate issue tracking and resolution' },
                { icon: Heart, title: 'Community', desc: 'Building stronger neighborhoods together' },
                { icon: Zap, title: 'Speed', desc: 'Rapid response and efficient solutions' },
                { icon: Globe, title: 'Impact', desc: 'Creating positive change at scale' },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20"
                >
                  <value.icon className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="text-white font-semibold mb-1">{value.title}</h4>
                  <p className="text-white/70 text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
                  alt="Modern city community"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h4 className="text-2xl font-bold text-white mb-4">Building Tomorrow's Cities</h4>
                <p className="text-white/80 leading-relaxed">
                  Every report matters. Every voice counts. Together, we're creating the smart, 
                  responsive cities of the future where technology serves humanity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
