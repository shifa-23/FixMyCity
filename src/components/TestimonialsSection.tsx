
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials = [
    {
      name: 'Sahil',
      role: 'Student',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUgbJFcx16VK49Mg4nytGQzLvK85fVRRGwQ&s',
      content: 'FixMyCity transformed our neighborhood streetlight with city officials. Issues that used to take months are now resolved in weeks.',
      rating: 4
    },
    {
      name: 'Ansh',
      role: 'Farmer',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUgbJFcx16VK49Mg4nytGQzLvK85fVRRGwQ&s',
      content: 'I reported broken wire , which was just in front of my house and very dangerous for kids.',
      rating: 5
    },
    {
      name: 'Anaya',
      role: 'Resident & Mother',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUgbJFcx16VK49Mg4nytGQzLvK85fVRRGwQ&s',
      content: 'As a parent, I love how this platform helps keep our community safe.',
      rating: 5
    }
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
            DEMO: <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
           People will share their Real stories by using FixMyCity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
              className="relative p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-400/30" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-white/20 mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-white/70">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
