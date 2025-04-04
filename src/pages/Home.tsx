import { Heart, GraduationCap, Globe2, BookOpen, HandHeart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80"
            alt="African Landscape"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Explore. <span className="text-orange-400">Empower.</span> Impact
              <br />
              <span className="text-orange-400">Across Africa.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed">
              Join our family of six on an extraordinary journey of travel, education, and impact across Africa.
            </p>
            <div className="flex flex-wrap gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#book-consultation"
                className="group bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 flex items-center gap-2"
              >
                Book a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#learn-more"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience Africa through education, travel, and meaningful impact
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <GraduationCap className="h-12 w-12" />,
              title: "World-schooling",
              description: "Experience education beyond borders through immersive, real-world learning."
            },
            {
              icon: <Globe2 className="h-12 w-12" />,
              title: "African Travel",
              description: "Discover safe, enriching, and culturally immersive experiences across Africa."
            },
            {
              icon: <HandHeart className="h-12 w-12" />,
              title: "Impact Projects",
              description: "Join us in making a difference through education, health, and gender advocacy."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-orange-500 mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Current Projects */}
      <div className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Projects & Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Making a difference through collaboration and community
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Troubled Heart",
                description: "Explore our latest book on resilience and transformation.",
                link: "https://livelovelegacy.life/troubled-heart"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Children's Heart Trust",
                description: "Supporting children's cardiac care in Namibia.",
                link: "https://namibiachildrenshearttrust.com/"
              },
              {
                icon: <HandHeart className="h-8 w-8" />,
                title: "Rotary Club Harare",
                description: "Partnering for community development initiatives.",
                link: "https://rotaryclubharare.org/"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}