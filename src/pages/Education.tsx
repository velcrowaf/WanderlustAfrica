import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Globe2, Users, Brain, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Education() {
  const programs = [
    {
      title: "Cultural Immersion",
      description: "Learn through direct interaction with local communities and traditions.",
      icon: Users
    },
    {
      title: "Natural Sciences",
      description: "Study wildlife, ecosystems, and conservation in their natural habitat.",
      icon: Brain
    },
    {
      title: "Project-Based Learning",
      description: "Engage in real-world projects that make a difference in communities.",
      icon: Lightbulb
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80"
            alt="Education in Africa"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">World-schooling in Africa</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Transform your family's education through immersive learning experiences across Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Education Beyond Boundaries</h2>
            <p className="text-gray-600 mb-4">
              Our world-schooling approach combines traditional academic subjects with real-world experiences, creating a unique and enriching educational journey for our children.
            </p>
            <p className="text-gray-600">
              Through hands-on learning, cultural immersion, and community engagement, we're redefining what education can be in the modern world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors duration-300">
              <BookOpen className="h-8 w-8 text-orange-500 mb-2" />
              <h3 className="font-bold mb-1">Curriculum</h3>
              <p className="text-sm text-gray-600">Aligned with international standards</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors duration-300">
              <GraduationCap className="h-8 w-8 text-orange-500 mb-2" />
              <h3 className="font-bold mb-1">Accreditation</h3>
              <p className="text-sm text-gray-600">Recognized educational approach</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors duration-300">
              <Globe2 className="h-8 w-8 text-orange-500 mb-2" />
              <h3 className="font-bold mb-1">Global Perspective</h3>
              <p className="text-sm text-gray-600">Learning from diverse cultures</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Learning Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how we combine academic excellence with real-world experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <program.icon className="h-12 w-12 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-orange-500 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Family's Education?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in creating a unique educational experience that will shape your children's future.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-white text-orange-500 px-8 py-4 rounded-full hover:bg-orange-50 transition-colors duration-300"
              >
                Start Your Journey
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}